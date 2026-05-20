"""Регистрация и вход пользователей по email и паролю"""
import json
import os
import hashlib
import secrets
import psycopg2


CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def ok(data: dict, status: int = 200):
    return {"statusCode": status, "headers": CORS, "body": json.dumps(data, ensure_ascii=False)}


def err(msg: str, status: int = 400):
    return {"statusCode": status, "headers": CORS, "body": json.dumps({"error": msg}, ensure_ascii=False)}


def hash_password(password: str, salt: str) -> str:
    return hashlib.sha256((salt + password).encode()).hexdigest()


def handler(event: dict, context) -> dict:
    """Обрабатывает регистрацию (action=register) и вход (action=login)"""

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except Exception:
        return err("Неверный формат запроса")

    action = body.get("action")
    email = (body.get("email") or "").strip().lower()
    password = body.get("password") or ""
    name = (body.get("name") or "").strip()

    if not email or not password:
        return err("Укажи email и пароль")

    if len(password) < 6:
        return err("Пароль должен быть не менее 6 символов")

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    try:
        if action == "register":
            cur.execute("SELECT id FROM users WHERE email = %s", (email,))
            if cur.fetchone():
                return err("Этот email уже зарегистрирован")

            salt = secrets.token_hex(16)
            ph = hash_password(password, salt)
            password_hash = salt + ":" + ph

            cur.execute(
                "INSERT INTO users (email, password_hash, name) VALUES (%s, %s, %s) RETURNING id",
                (email, password_hash, name or None),
            )
            user_id = str(cur.fetchone()[0])
            conn.commit()

            session_token = secrets.token_urlsafe(32)
            return ok({"success": True, "user": {"id": user_id, "email": email, "name": name}, "token": session_token})

        elif action == "login":
            cur.execute("SELECT id, password_hash, name FROM users WHERE email = %s", (email,))
            row = cur.fetchone()
            if not row:
                return err("Неверный email или пароль")

            user_id, stored_hash, name = str(row[0]), row[1], row[2]
            salt, expected = stored_hash.split(":", 1)
            if hash_password(password, salt) != expected:
                return err("Неверный email или пароль")

            cur.execute("UPDATE users SET last_login = now() WHERE id = %s", (user_id,))
            conn.commit()

            session_token = secrets.token_urlsafe(32)
            return ok({"success": True, "user": {"id": user_id, "email": email, "name": name or ""}, "token": session_token})

        else:
            return err("Неизвестное действие")

    finally:
        cur.close()
        conn.close()