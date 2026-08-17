import { Mail, Phone, MapPin, Search, LineChart } from 'lucide-react'
import { useState } from 'react'

const offers = [
  {
    icon: Search,
    title: 'Бесплатный экспресс‑аудит',
    text: 'за 1 встречу найдём 3 главные точки роста и потерь',
  },
  {
    icon: LineChart,
    title: 'Разбор вашего кейса',
    text: 'пришлём план действий и оценку эффекта в цифрах',
  },
]

const ContactCTA = () => {
  const [industry, setIndustry] = useState('')
  const [businessSize, setBusinessSize] = useState('')
  const [mainGoal, setMainGoal] = useState('')

  return (
    <section id="contact" className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-zinc-50">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-zinc-400">
              Мы готовы помочь вашему бизнесу достичь новых высот. Оставьте заявку, и наш специалист свяжется с вами.
            </p>

            <div className="space-y-4">
              {offers.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-snug">
                    <span className="font-medium text-zinc-50">{title}:</span>{' '}
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-zinc-50 font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:info@consulting.com" 
                    className="text-zinc-400 hover:text-blue-600 transition-colors"
                  >
                    info@consulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-zinc-50 font-medium mb-1">Телефон</h4>
                  <a 
                    href="tel:+78001234567" 
                    className="text-zinc-400 hover:text-blue-600 transition-colors"
                  >
                    +7 (800) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-zinc-50 font-medium mb-1">Адрес</h4>
                  <p className="text-zinc-400">
                    Москва, ул. Тверская, 12
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 border border-zinc-800/50 p-4 sm:p-6 md:p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Ваше имя"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Ваш email"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="industry" 
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Отрасль
                </label>
                <input
                  type="text"
                  id="industry"
                  className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Ваша отрасль"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="businessSize" 
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Размер бизнеса
                </label>
                <input
                  type="text"
                  id="businessSize"
                  className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Количество сотрудников/оборот"
                  value={businessSize}
                  onChange={(e) => setBusinessSize(e.target.value)}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="mainGoal" 
                  className="block text-sm font-medium text-zinc-400 mb-2"
                >
                  Главная цель
                </label>
                <select
                  id="mainGoal"
                  className="w-full bg-zinc-950 border border-zinc-800/50 rounded-lg px-4 py-3 text-zinc-50 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  value={mainGoal}
                  onChange={(e) => setMainGoal(e.target.value)}
                  required
                >
                  <option value="growth">Рост выручки</option>
                  <option value="loss-reduction">Сокращение убытков</option>
                  <option value="scaling">Масштабирование</option>
                  <option value="product-launch">Запуск продукта</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-zinc-50 font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
