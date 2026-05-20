import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { useAuth } from "@/hooks/useAuth"

interface Props {
  open: boolean
  onClose: () => void
  defaultTab?: "login" | "register"
}

export default function AuthModal({ open, onClose, defaultTab = "login" }: Props) {
  const { login, register, user, logout } = useAuth()
  const [tab, setTab] = useState<"login" | "register">(defaultTab)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPass, setShowPass] = useState(false)

  if (!open) return null

  const reset = () => {
    setEmail("")
    setPassword("")
    setName("")
    setError("")
    setLoading(false)
  }

  const switchTab = (t: "login" | "register") => {
    setTab(t)
    setError("")
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      if (tab === "register") {
        await register(email, password, name)
      } else {
        await login(email, password)
      }
      reset()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка")
    } finally {
      setLoading(false)
    }
  }

  if (user) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
        <div className="relative z-10 w-full max-w-sm bg-[#0F1318] ring-1 ring-white/15 rounded-3xl p-8 text-white">
          <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Icon name="X" size={16} />
          </button>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#E8FF47]/15 ring-2 ring-[#E8FF47]/30 flex items-center justify-center">
              <Icon name="UserCheck" size={28} className="text-[#E8FF47]" />
            </div>
            <div>
              <p className="text-white/50 text-sm mb-1">Ты вошёл как</p>
              <p className="font-bold text-lg">{user.name || user.email}</p>
              <p className="text-white/40 text-sm">{user.email}</p>
            </div>
            <Button
              onClick={() => { logout(); onClose() }}
              variant="outline"
              className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full mt-2">
              Выйти
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md bg-[#0F1318] ring-1 ring-white/15 rounded-3xl overflow-hidden text-white">

        {/* Header */}
        <div className="relative p-8 pb-0">
          <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Icon name="X" size={16} />
          </button>
          <div className="flex items-center gap-2 mb-6">
            <Icon name="Dumbbell" size={20} className="text-[#E8FF47]" />
            <span className="font-bold tracking-tight">Мой Спортзал</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-white/5 ring-1 ring-white/10 rounded-2xl mb-8">
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${tab === t ? "bg-[#E8FF47] text-black" : "text-white/50 hover:text-white"}`}>
                {t === "login" ? "Войти" : "Регистрация"}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="px-8 pb-8 flex flex-col gap-4">
          {tab === "register" && (
            <div>
              <label className="text-xs text-white/50 mb-1.5 block uppercase tracking-wide">Имя</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как тебя зовут?"
                className="w-full bg-white/5 ring-1 ring-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none focus:ring-[#E8FF47]/50 focus:ring-2 transition-all text-sm" />
            </div>
          )}

          <div>
            <label className="text-xs text-white/50 mb-1.5 block uppercase tracking-wide">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/5 ring-1 ring-white/15 rounded-xl px-4 py-3 text-white placeholder-white/25 outline-none focus:ring-[#E8FF47]/50 focus:ring-2 transition-all text-sm" />
          </div>

          <div>
            <label className="text-xs text-white/50 mb-1.5 block uppercase tracking-wide">Пароль</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Минимум 6 символов"
                className="w-full bg-white/5 ring-1 ring-white/15 rounded-xl px-4 py-3 pr-11 text-white placeholder-white/25 outline-none focus:ring-[#E8FF47]/50 focus:ring-2 transition-all text-sm" />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                <Icon name={showPass ? "EyeOff" : "Eye"} size={18} />
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-red-500/15 ring-1 ring-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
              <Icon name="AlertCircle" size={16} className="flex-shrink-0" />
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full py-5 font-black uppercase tracking-wide text-sm mt-2 shadow-[0_0_30px_rgba(232,255,71,0.25)]">
            {loading
              ? <Icon name="Loader2" size={18} className="animate-spin" />
              : tab === "login" ? "Войти" : "Создать аккаунт"}
          </Button>

          <p className="text-center text-white/30 text-xs">
            {tab === "login" ? "Нет аккаунта? " : "Уже есть аккаунт? "}
            <button type="button" onClick={() => switchTab(tab === "login" ? "register" : "login")}
              className="text-[#E8FF47] hover:underline">
              {tab === "login" ? "Зарегистрируйся" : "Войди"}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}