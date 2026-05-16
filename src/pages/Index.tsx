import { Dumbbell, Lock, Sparkles, ShieldCheck, Utensils, Users, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Нужна ли физическая подготовка для начала?",
      answer:
        "Нет! Наша платформа подходит для любого уровня — от полных новичков до опытных спортсменов. При регистрации вы заполните анкету, и тренер подберёт программу именно под ваш уровень и цели.",
    },
    {
      question: "Как проходят онлайн-тренировки?",
      answer:
        "Тренировки доступны в формате видеоуроков — смотрите в удобное время или занимайтесь в прямом эфире вместе с тренером. Вы можете задавать вопросы в чате, получать обратную связь по технике и общаться с другими участниками.",
    },
    {
      question: "Что входит в программу питания?",
      answer:
        "Персональный план питания составляется с учётом ваших целей, предпочтений и образа жизни. Вы получаете меню на неделю, список продуктов, рецепты и рекомендации по добавкам. Диетолог доступен для вопросов в любое время.",
    },
    {
      question: "Как работает отслеживание прогресса?",
      answer:
        "В личном кабинете вы фиксируете результаты тренировок, замеры тела и самочувствие. Система строит графики динамики, а тренер видит ваш прогресс и корректирует программу при необходимости.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Dumbbell className="w-5 h-5" />
            <span className="font-medium text-balance">Мой Спортзал</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Тренировки", "Тренеры", "Программы", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Начать бесплатно</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Онлайн-тренировки с профессиональными тренерами</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Твой спортзал — везде.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Индивидуальные программы тренировок и питания, видеоуроки с тренерами, отслеживание прогресса и живое сообщество — всё в одном месте.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Начать тренироваться
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть программы
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">7 дней бесплатно — без привязки карты</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Video Workouts */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Play" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Видеоуроки</h3>
              <p className="text-white/80 leading-relaxed">Тренировки с профессиональными тренерами в удобное время.</p>
            </div>

            {/* Personal Programs */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Индивидуальный план</h3>
              <p className="text-white/80 leading-relaxed">Программы тренировок и питания под ваши цели и возможности.</p>
            </div>

            {/* Progress Tracking */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Трекер прогресса</h3>
              <p className="text-white/80 leading-relaxed">Следите за результатами — графики, замеры, достижения.</p>
            </div>

            {/* Community */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живое сообщество</h3>
              <p className="text-white/80 leading-relaxed">Форум, поддержка и мотивация от участников и тренеров.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Ваш путь к результату</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре простых шага — и вы уже тренируетесь с профессионалами.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Регистрация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Создайте аккаунт за 2 минуты и заполните анкету о своих целях, уровне подготовки и расписании.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Ваш тренер</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Мы подберём персонального тренера под ваши задачи. Познакомьтесь на первой бесплатной консультации.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Тренировки</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Занимайтесь по индивидуальной программе — дома или в зале, в прямом эфире или в записи.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Результат</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Фиксируйте прогресс, получайте обратную связь от тренера и делитесь достижениями с сообществом.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о платформе: тренировках, программах питания, прогрессе и общении с тренерами.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Запишитесь на консультацию</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Бесплатная консультация</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Ваша цель
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Расскажите о своей цели: похудеть, набрать массу, стать выносливее..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Записаться бесплатно
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите узнать, подойдёт ли платформа именно вам? Напишите нам — ответим в течение часа и подберём тренера под ваши задачи.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&h=150&fit=crop&crop=face"
                      alt="Алексей Фитнес-тренер"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Алексей Соколов</h4>
                      <p className="text-gray-600">Главный тренер платформы</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать тренеру
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Dumbbell className="w-6 h-6" />
                  <span className="text-xl font-semibold">Мой Спортзал</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Онлайн-платформа для тренировок с профессиональными тренерами. Индивидуальные программы, питание, прогресс и сообщество — всё для вашего результата.
                </p>
              </div>

              {/* Platform Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Платформа</h4>
                <ul className="space-y-3">
                  {["Тренировки", "Программы питания", "Тренеры", "Прогресс", "Сообщество"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Компания</h4>
                <ul className="space-y-3">
                  {["О нас", "Блог", "Пресса", "Партнёрам", "Контакты"].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/80 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Рассылка</h4>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  Советы по тренировкам и питанию — раз в неделю.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-3 py-2 bg-white/10 ring-1 ring-white/20 rounded-lg text-sm placeholder:text-white/50 focus:outline-none focus:ring-white/40"
                  />
                  <button className="px-3 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm">© 2024 Мой Спортзал. Все права защищены.</p>
              <div className="flex items-center gap-6">
                {["Политика конфиденциальности", "Условия использования"].map((link) => (
                  <a key={link} href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
