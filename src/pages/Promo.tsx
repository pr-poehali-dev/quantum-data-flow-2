import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import AuthModal from "@/components/AuthModal"
import { useAuth } from "@/hooks/useAuth"

const DEADLINE = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now())
    return {
      h: Math.floor(diff / 3_600_000),
      m: Math.floor((diff % 3_600_000) / 60_000),
      s: Math.floor((diff % 60_000) / 1_000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

const plans = [
  {
    id: "basic",
    name: "Старт",
    priceOld: 2990,
    priceNew: 990,
    period: "мес",
    accent: false,
    features: [
      "Доступ к 200+ видеоурокам",
      "Базовая программа тренировок",
      "Трекер прогресса",
      "Форум сообщества",
    ],
    cta: "Выбрать «Старт»",
  },
  {
    id: "pro",
    name: "Про",
    priceOld: 5990,
    priceNew: 1990,
    period: "мес",
    accent: true,
    badge: "ХИТ ПРОДАЖ",
    features: [
      "Всё из тарифа «Старт»",
      "Персональная программа от тренера",
      "Программа питания",
      "Чат с тренером 7 дней/нед",
      "Разбор техники (видео)",
      "Консультация диетолога",
    ],
    cta: "Забрать «Про» со скидкой",
  },
  {
    id: "vip",
    name: "VIP",
    priceOld: 12990,
    priceNew: 4990,
    period: "мес",
    accent: false,
    features: [
      "Всё из тарифа «Про»",
      "Личный куратор 24/7",
      "Видеозвонок с тренером 2×/нед",
      "Индивидуальный план питания с рецептами",
      "Приоритетная поддержка",
      "Доступ к закрытым мастер-классам",
    ],
    cta: "Стать VIP",
  },
]

export default function Promo() {
  const { h, m, s } = useCountdown(DEADLINE)
  const pad = (n: number) => String(n).padStart(2, "0")
  const { user } = useAuth()
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState<"login" | "register">("register")

  const openRegister = () => { setAuthTab("register"); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white overflow-x-hidden">
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} defaultTab={authTab} />

      {/* ── HEADER ── */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <a href="/" className="flex items-center gap-2">
          <Icon name="Dumbbell" size={22} className="text-[#E8FF47]" />
          <span className="font-bold text-lg tracking-tight">Мой Спортзал</span>
        </a>
        <div className="flex items-center gap-3">
          {user ? (
            <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-white/10 ring-1 ring-white/20 rounded-full text-sm hover:bg-white/15 transition-colors">
              <Icon name="UserCheck" size={15} className="text-[#E8FF47]" />
              {user.name || user.email.split("@")[0]}
            </button>
          ) : (
            <button onClick={() => { setAuthTab("login"); setAuthOpen(true) }} className="text-white/50 hover:text-white transition-colors text-sm">
              Войти
            </button>
          )}
          <a href="/" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1">
            <Icon name="ArrowLeft" size={16} />
            На главную
          </a>
        </div>
      </header>

      {/* ── HERO АКЦИЯ ── */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* brutal grid bg */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,#E8FF47 0,#E8FF47 1px,transparent 0,transparent 80px),repeating-linear-gradient(90deg,#E8FF47 0,#E8FF47 1px,transparent 0,transparent 80px)" }} />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-500/20 ring-2 ring-red-500/60 rounded-full mb-8 animate-pulse">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-400 font-bold text-sm tracking-widest uppercase">Акция — только 3 дня</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-4 uppercase">
            СКИДКА<br />
            <span className="text-[#E8FF47] relative inline-block">
              67%
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E8FF47] rounded-full" />
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-white/60 mt-8 mb-4 tracking-wide">
            на всё. на каждый тариф. сейчас.
          </p>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-12">
            Один раз в году мы открываем доступ к платформе по ценам, которые никогда не повторятся. Потом будет дороже.
          </p>

          {/* COUNTDOWN */}
          <div className="inline-flex items-center gap-1 md:gap-3 bg-black/60 ring-2 ring-white/20 backdrop-blur rounded-3xl px-8 py-6 mb-12">
            {[{ v: pad(h), l: "часов" }, { v: pad(m), l: "минут" }, { v: pad(s), l: "секунд" }].map((t, i) => (
              <>
                {i > 0 && <span key={`sep-${i}`} className="text-white/30 text-4xl font-thin mb-4 self-start mt-1">:</span>}
                <div key={t.l} className="flex flex-col items-center min-w-[64px]">
                  <span className="text-4xl md:text-6xl font-black text-[#E8FF47] tabular-nums leading-none">{t.v}</span>
                  <span className="text-white/40 text-xs mt-2 tracking-widest uppercase">{t.l}</span>
                </div>
              </>
            ))}
          </div>

          <div className="flex justify-center">
            <Button size="lg" onClick={openRegister}
              className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-10 py-6 text-xl font-black uppercase tracking-wide shadow-[0_0_60px_rgba(232,255,71,0.4)]">
              Забрать скидку прямо сейчас
            </Button>
          </div>
          <p className="text-white/30 text-sm mt-4">Без карты. Первые 7 дней бесплатно.</p>
        </div>
      </section>

      {/* ── BRUTAL DIVIDER ── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E8FF47]/40 to-transparent" />

      {/* ── ЧТО ВХОДИТ ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            За что ты платишь
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "Video", title: "500+ видеоуроков", desc: "Тренировки на любой уровень — от новичка до атлета. Без воды, только суть." },
              { icon: "UserCheck", title: "Личный тренер", desc: "Живой человек. Пишет тебе первым, если пропустил тренировку." },
              { icon: "Apple", title: "Питание под тебя", desc: "Не «ешь меньше». А конкретное меню под твои цели и образ жизни." },
              { icon: "BarChart2", title: "Трекер результатов", desc: "Цифры не врут. Видишь динамику каждую неделю — это мотивирует." },
              { icon: "MessageCircle", title: "Живое сообщество", desc: "5 000+ человек, которые тренируются прямо сейчас. Форум, поддержка, челленджи." },
              { icon: "Flame", title: "Прямые эфиры", desc: "Каждую неделю — тренировки и разборы в прямом эфире с топовыми тренерами." },
            ].map((item) => (
              <div key={item.title}
                className="flex items-start gap-5 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/8 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#E8FF47]/10 ring-1 ring-[#E8FF47]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8FF47]/20 transition-colors">
                  <Icon name={item.icon} size={22} className="text-[#E8FF47]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ТАРИФЫ ── */}
      <section className="py-20 px-6" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-4">
              <span className="text-xs font-medium tracking-widest uppercase text-white/70">Тарифы по акции</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Выбери свой уровень
            </h2>
            <p className="text-white/50 text-lg">Старые цены зачёркнуты — новые только сейчас</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div key={plan.id}
                className={`relative rounded-3xl flex flex-col overflow-hidden ${plan.accent
                  ? "bg-[#E8FF47] text-black ring-4 ring-[#E8FF47] shadow-[0_0_80px_rgba(232,255,71,0.3)] scale-[1.03]"
                  : "bg-white/5 ring-1 ring-white/15 text-white"}`}>
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-black text-[#E8FF47] text-xs font-black tracking-widest uppercase text-center py-2">
                    {plan.badge}
                  </div>
                )}

                <div className={`p-8 flex flex-col flex-1 ${plan.badge ? "pt-12" : ""}`}>
                  {/* Name */}
                  <h3 className={`text-2xl font-black uppercase tracking-wide mb-6 ${plan.accent ? "text-black" : "text-white"}`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-8">
                    <div className={`text-sm line-through mb-1 ${plan.accent ? "text-black/50" : "text-white/35"}`}>
                      {plan.priceOld.toLocaleString("ru")} ₽ / {plan.period}
                    </div>
                    <div className="flex items-end gap-2">
                      <span className={`text-6xl font-black leading-none ${plan.accent ? "text-black" : "text-[#E8FF47]"}`}>
                        {plan.priceNew.toLocaleString("ru")}
                      </span>
                      <span className={`text-xl pb-2 ${plan.accent ? "text-black/70" : "text-white/60"}`}>₽/{plan.period}</span>
                    </div>
                    <div className={`inline-flex mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${plan.accent ? "bg-black text-[#E8FF47]" : "bg-[#E8FF47]/15 text-[#E8FF47]"}`}>
                      Скидка 67%
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.accent ? "bg-black/20" : "bg-[#E8FF47]/15"}`}>
                          <Icon name="Check" size={12} className={plan.accent ? "text-black" : "text-[#E8FF47]"} />
                        </div>
                        <span className={plan.accent ? "text-black/80" : "text-white/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button onClick={openRegister}
                    className={`w-full rounded-full font-black uppercase tracking-wide py-5 text-sm ${plan.accent
                      ? "bg-black text-[#E8FF47] hover:bg-black/80"
                      : "bg-[#E8FF47] text-black hover:bg-[#d4eb30]"}`}>
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/30 text-sm mt-8">
            * Акционные цены действуют до конца таймера. После — стандартные тарифы.
          </p>
        </div>
      </section>

      {/* ── ГАРАНТИЯ ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white/5 ring-1 ring-white/15 p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-[#E8FF47]/10 ring-2 ring-[#E8FF47]/30 flex items-center justify-center mx-auto mb-6">
            <Icon name="Shield" size={32} className="text-[#E8FF47]" />
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Гарантия 30 дней</h3>
          <p className="text-white/60 leading-relaxed text-lg mb-8">
            Если за 30 дней ты не заметишь прогресса — вернём деньги полностью. Без вопросов, без штрафов, без нервов. Мы так уверены в результате.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={openRegister}
              className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-10 font-black uppercase tracking-wide shadow-[0_0_40px_rgba(232,255,71,0.3)]">
              Начать без риска
            </Button>
            <Button size="lg" variant="outline"
              className="bg-transparent ring-1 ring-white/20 border-0 text-white hover:bg-white/10 rounded-full px-8">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <div className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-white/30 text-sm">
          © 2024 Мой Спортзал · <a href="/" className="hover:text-white/60 transition-colors">На главную</a>
        </p>
      </div>
    </div>
  )
}