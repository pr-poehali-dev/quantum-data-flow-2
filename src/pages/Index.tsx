import { Lock, Sparkles, ShieldCheck, Users, Plus, Minus, Mail, Play, Utensils, MessageCircle, TrendingUp, Video, Apple, BarChart2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const trainers = [
  {
    name: "Алексей Громов",
    spec: "Силовые тренировки",
    exp: "12 лет",
    img: "https://api.dicebear.com/7.x/personas/svg?seed=aleksey&backgroundColor=1a1a2e",
    tags: ["Силовой", "Функциональный"],
  },
  {
    name: "Мария Соколова",
    spec: "Йога и растяжка",
    exp: "8 лет",
    img: "https://api.dicebear.com/7.x/personas/svg?seed=maria&backgroundColor=1a1a2e",
    tags: ["Йога", "Пилатес"],
  },
  {
    name: "Дмитрий Лебедев",
    spec: "Кардио и HIIT",
    exp: "10 лет",
    img: "https://api.dicebear.com/7.x/personas/svg?seed=dmitry&backgroundColor=1a1a2e",
    tags: ["HIIT", "Бег"],
  },
]

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Нужна ли физическая подготовка для начала?",
      answer:
        "Нет! Платформа подходит для любого уровня — от полных новичков до опытных спортсменов. При регистрации заполните анкету, и тренер подберёт программу именно под вас.",
    },
    {
      question: "Как проходят онлайн-тренировки?",
      answer:
        "Тренировки доступны в формате видеоуроков — смотрите в удобное время или занимайтесь в прямом эфире. Задавайте вопросы в чате, получайте обратную связь по технике.",
    },
    {
      question: "Что входит в программу питания?",
      answer:
        "Персональный план питания составляется с учётом ваших целей и предпочтений. Меню на неделю, список продуктов, рецепты и рекомендации по добавкам. Диетолог на связи.",
    },
    {
      question: "Как работает отслеживание прогресса?",
      answer:
        "В личном кабинете фиксируйте результаты тренировок, замеры и самочувствие. Система строит графики, тренер видит прогресс и корректирует программу при необходимости.",
    },
    {
      question: "Можно ли заниматься без оборудования?",
      answer:
        "Да! У нас есть программы как для спортзала, так и для тренировок дома без инвентаря. Тренер адаптирует план под ваши условия.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">

      {/* ─── HERO ─── */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(https://cdn.poehali.dev/files/10574540-768f-4d24-9377-570162281bd9.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        </div>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Dumbbell" size={20} />
            <span className="font-bold tracking-tight">Мой Спортзал</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Тренировки", href: "#features" },
              { label: "Тренеры", href: "#trainers" },
              { label: "Программы", href: "#journey" },
              { label: "Вопросы", href: "#faq" },
              { label: "Контакты", href: "#contact" },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/60 transition-colors text-sm">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="/promo"
              className="flex items-center gap-1.5 px-4 py-2 bg-red-500/20 ring-1 ring-red-500/50 backdrop-blur rounded-full hover:bg-red-500/30 transition-colors text-sm text-red-300 font-semibold">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              Акция −67%
            </a>
            <a href="#contact" className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/60 transition-colors text-sm">
              Войти
            </a>
            <Button className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-6 font-semibold">
              Начать бесплатно
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Онлайн-платформа для тренировок и общения с тренерами</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-balance leading-tight">
            Мой Спортзал —<br />
            <span className="text-[#E8FF47]">везде и всегда.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mb-12 leading-relaxed">
            Индивидуальные программы тренировок и питания, видеоуроки с тренерами, трекер прогресса и живое сообщество — всё в одном месте.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-8 py-4 text-lg font-semibold">
              Начать тренироваться
            </Button>
            <Button size="lg" variant="outline"
              className="bg-black/40 ring-1 ring-white/30 backdrop-blur border-0 text-white hover:bg-black/60 rounded-full px-8 py-4 text-lg">
              Смотреть программы
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4 text-[#E8FF47]" />
            <span className="text-sm font-medium">7 дней бесплатно — без привязки карты</span>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-16">
            {[
              { value: "15 000+", label: "участников" },
              { value: "120+", label: "тренеров" },
              { value: "500+", label: "программ" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#E8FF47]">{s.value}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FEATURES ─── */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-4">
              <span className="text-xs font-medium tracking-widest uppercase text-white/70">Возможности</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Всё для твоего результата</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Платформа, которая заменяет личного тренера, диетолога и спортзал одновременно</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: "Video",
                title: "Видеоуроки",
                desc: "Сотни тренировок от профессионалов на любой уровень. Смотрите в удобное время или занимайтесь в прямом эфире.",
                accent: true,
              },
              {
                icon: "Sparkles",
                title: "Индивидуальный план",
                desc: "Тренер составляет программу тренировок и питания лично под вас — с учётом целей, уровня и расписания.",
              },
              {
                icon: "TrendingUp",
                title: "Трекер прогресса",
                desc: "Фиксируйте результаты, замеры и достижения. Наглядные графики покажут как далеко вы продвинулись.",
              },
              {
                icon: "MessageCircle",
                title: "Форум сообщества",
                desc: "Общайтесь с другими участниками, делитесь успехами, находите партнёров по тренировкам.",
              },
              {
                icon: "Apple",
                title: "Программы питания",
                desc: "Персональное меню на неделю, список продуктов и рецепты. Диетолог отвечает на вопросы в любое время.",
              },
              {
                icon: "Users",
                title: "Консультации с тренером",
                desc: "Чат напрямую с вашим тренером. Разбор техники, корректировка плана и поддержка на каждом шагу.",
              },
            ].map((f) => (
              <div key={f.title}
                className={`rounded-2xl p-8 ring-1 backdrop-blur flex flex-col gap-4 ${f.accent ? "bg-[#E8FF47]/10 ring-[#E8FF47]/30" : "bg-white/5 ring-white/10 hover:bg-white/8 transition-colors"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.accent ? "bg-[#E8FF47]/20" : "bg-white/10"}`}>
                  <Icon name={f.icon} size={24} className={f.accent ? "text-[#E8FF47]" : ""} />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Top: История */}
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-6 w-fit">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/70">О нас</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  Как всё<br />началось
                </h2>
                <p className="text-white/70 leading-relaxed text-lg mb-5">
                  В 2020 году обычный московский спортзал закрылся на карантин. Тренер Антон Веселов остался один на один с 40 постоянными клиентами — все они хотели продолжать заниматься, но не знали как.
                </p>
                <p className="text-white/70 leading-relaxed text-lg mb-5">
                  Антон начал записывать тренировки на телефон и отправлять их в чат. Результаты удивили всех: люди не только не потеряли форму — многие добились лучших результатов, чем в зале, потому что наконец-то занялись системно.
                </p>
                <p className="text-white/70 leading-relaxed text-lg">
                  Так родилась идея: создать платформу, где каждый получает внимание личного тренера — без привязки к конкретному залу и расписанию.
                </p>
              </div>

              {/* Right — quote block */}
              <div className="p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center bg-[#E8FF47]/5">
                <Icon name="Quote" size={40} className="text-[#E8FF47]/40 mb-8" />
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 mb-8 italic">
                  «Я понял: проблема не в том, что у людей нет зала. Проблема в том, что у них нет системы.»
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 ring-2 ring-[#E8FF47]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-white/50" />
                  </div>
                  <div>
                    <div className="font-semibold">Антон Веселов</div>
                    <div className="text-white/50 text-sm">Основатель «Мой Спортзал», тренер с 14-летним опытом</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Почему Фокус */}
          <div className="rounded-3xl bg-[#E8FF47]/8 ring-1 ring-[#E8FF47]/20 backdrop-blur p-12 md:p-16 mb-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex px-3 py-1 bg-[#E8FF47]/10 ring-1 ring-[#E8FF47]/30 rounded-full mb-6">
                <span className="text-xs font-medium tracking-widest uppercase text-[#E8FF47]/80">Наш принцип</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Почему <span className="text-[#E8FF47]">Фокус</span>?
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Название появилось не случайно. Мы заметили, что большинство людей бросают тренировки не из-за лени — они просто распыляются: разные залы, случайные упражнения, советы из интернета без системы.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-10">
                <strong className="text-white">Фокус</strong> — это концентрация на одном: на твоём конкретном результате. Один тренер, одна программа, один понятный путь. Никаких лишних движений — только то, что работает именно для тебя.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "Target", title: "Одна цель", desc: "Тренер фокусируется на вашей задаче — не распыляется на шаблонные программы" },
                  { icon: "Route", title: "Чёткий путь", desc: "Понятный план на каждый день без лишних вопросов «что делать сегодня?»" },
                  { icon: "Flame", title: "Живой результат", desc: "Прогресс, который виден — в цифрах, замерах и самочувствии" },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#E8FF47]/10 ring-1 ring-[#E8FF47]/20 flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} size={22} className="text-[#E8FF47]" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Цифры */}
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "2020", label: "год основания" },
                { value: "15 000+", label: "активных участников" },
                { value: "120+", label: "тренеров на платформе" },
                { value: "94%", label: "достигают своей цели" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-[#E8FF47] mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── TRAINERS ─── */}
      <section id="trainers" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12 md:p-16">
            <div className="text-center mb-16">
              <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-4">
                <span className="text-xs font-medium tracking-widest uppercase text-white/70">Тренеры</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Профессионалы на вашей стороне</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">Более 120 сертифицированных тренеров готовы составить программу под ваши цели</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {trainers.map((t) => (
                <div key={t.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/10 ring-2 ring-white/20 mb-5 overflow-hidden flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white/40" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
                  <p className="text-white/60 text-sm mb-1">{t.spec}</p>
                  <p className="text-[#E8FF47] text-sm font-medium mb-4">Опыт {t.exp}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {t.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm"
                    className="bg-transparent ring-1 ring-white/20 border-0 text-white hover:bg-white/10 rounded-full w-full">
                    Написать тренеру
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-8 font-semibold">
                Смотреть всех тренеров
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <section id="journey" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12 md:p-16">
            <div className="text-center mb-16">
              <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-4">
                <span className="text-xs font-medium tracking-widest uppercase text-white/70">Как это работает</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ваш путь к результату</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">Четыре шага — и вы уже тренируетесь с профессионалами</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: "ClipboardList", title: "Регистрация", desc: "Заполните анкету: цели, уровень подготовки, доступное время и оборудование." },
                { step: "02", icon: "UserCheck", title: "Ваш тренер", desc: "Алгоритм подберёт подходящего тренера. Он изучит анкету и свяжется с вами." },
                { step: "03", icon: "Dumbbell", title: "Тренировки", desc: "Занимайтесь по персональному плану: видеоуроки, прямые эфиры, чат с тренером." },
                { step: "04", icon: "Trophy", title: "Результат", desc: "Фиксируйте прогресс, корректируйте план и достигайте поставленных целей." },
              ].map((phase) => (
                <div key={phase.step} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col">
                  <div className="text-[#E8FF47] text-4xl font-bold mb-6 opacity-60">{phase.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <Icon name={phase.icon} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-white/60 leading-relaxed flex-1">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full px-10 font-semibold text-lg">
                Начать прямо сейчас
              </Button>
              <p className="text-white/40 text-sm mt-4">7 дней бесплатно — карта не нужна</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-4">
              <span className="text-xs font-medium tracking-widest uppercase text-white/70">Вопросы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Часто спрашивают</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div key={index}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-lg pr-4">{faq.question}</span>
                  {openFaq === index
                    ? <Minus className="w-5 h-5 flex-shrink-0 text-[#E8FF47]" />
                    : <Plus className="w-5 h-5 flex-shrink-0 text-white/60" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-white/60 leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-12 lg:p-16">
                <div className="inline-flex px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/70">Контакты</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Остались вопросы?</h2>
                <p className="text-white/60 mb-10">Напишите нам — ответим в течение нескольких часов и поможем выбрать подходящую программу.</p>

                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-white/5 ring-1 ring-white/15 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-white/30 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/5 ring-1 ring-white/15 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-white/30 transition-all"
                  />
                  <textarea
                    rows={4}
                    placeholder="Ваш вопрос или цель (например: похудеть, набрать массу, улучшить выносливость...)"
                    className="w-full bg-white/5 ring-1 ring-white/15 rounded-2xl px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-white/30 transition-all resize-none"
                  />
                  <Button size="lg" className="bg-[#E8FF47] text-black hover:bg-[#d4eb30] rounded-full font-semibold mt-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div className="p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-8">Почему выбирают нас</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: "Clock", title: "Тренировки в любое время", desc: "Занимайтесь когда удобно — утром, в обед или поздно ночью." },
                    { icon: "MapPin", title: "Без спортзала", desc: "Тренируйтесь дома, в парке или в командировке — нужен только телефон." },
                    { icon: "Shield", title: "Гарантия результата", desc: "Если за 30 дней нет прогресса — вернём деньги без лишних вопросов." },
                    { icon: "HeartHandshake", title: "Живая поддержка", desc: "Реальный тренер на связи, не бот. Всегда поможет и подбодрит." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#E8FF47]/10 ring-1 ring-[#E8FF47]/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={20} className="text-[#E8FF47]" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{item.title}</div>
                        <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Dumbbell" size={20} />
                <span className="font-bold text-xl">Мой Спортзал</span>
              </div>
              <p className="text-white/50 leading-relaxed max-w-sm">
                Онлайн-платформа для тренировок и общения с тренерами. Достигайте целей — в любом месте, в любое время.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white/80">Платформа</h4>
              <div className="flex flex-col gap-3">
                {["Тренировки", "Питание", "Тренеры", "Сообщество", "Прогресс"].map((l) => (
                  <a key={l} href="#" className="text-white/50 hover:text-white transition-colors text-sm">{l}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-white/80">Компания</h4>
              <div className="flex flex-col gap-3">
                {["О нас", "Блог", "Карьера", "Поддержка", "Контакты"].map((l) => (
                  <a key={l} href="#" className="text-white/50 hover:text-white transition-colors text-sm">{l}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">© 2024 Мой Спортзал. Все права защищены.</p>
            <div className="flex gap-6">
              {["Конфиденциальность", "Оферта", "Cookies"].map((l) => (
                <a key={l} href="#" className="text-white/40 hover:text-white/70 transition-colors text-sm">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index