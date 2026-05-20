import { useState, useEffect } from "react"

const AUTH_URL = "https://functions.poehali.dev/3abcc4c9-dc69-4375-90c9-3c1228e4f3a8"
const STORAGE_KEY = "fokus_user"

export interface User {
  id: string
  email: string
  name: string
  token: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      return s ? JSON.parse(s) : null
    } catch {
      return null
    }
  })

  const save = (u: User) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
    setUser(u)
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  const register = async (email: string, password: string, name: string) => {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "register", email, password, name }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || "Ошибка регистрации")
    save({ ...data.user, token: data.token })
    return data
  }

  const login = async (email: string, password: string) => {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "login", email, password }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || "Ошибка входа")
    save({ ...data.user, token: data.token })
    return data
  }

  return { user, login, register, logout }
}
