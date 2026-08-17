import { Settings, BarChart2, Zap, Target } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Оптимизация процессов",
      description: "Системный анализ и реорганизация бизнес-процессов для повышения эффективности",
      features: [
        "Анализ текущих операций",
        "Выявление узких мест",
        "Разработка оптимизированных процессов",
        "Контроль внедрения"
      ]
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Финансовый анализ",
      description: "Глубокий анализ финансовых потоков и выявление резервов роста",
      features: [
        "Анализ доходов/расходов",
        "Оптимизация налоговой нагрузки",
        "Финансовое моделирование",
        "Прогнозирование денежных потоков"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Операционная эффективность",
      description: "Повышение производительности и снижение операционных затрат",
      features: [
        "Анализ KPI",
        "Бенчмаркинг",
        "Автоматизация рутинных операций",
        "Внедрение систем контроля"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Стратегическое развитие",
      description: "Разработка и реализация стратегии масштабирования бизнеса",
      features: [
        "Анализ рынка",
        "Разработка стратегии",
        "План реализации",
        "Контроль выполнения"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">
          Наши услуги
        </h2>
        <p className="text-xl text-zinc-400 text-center mb-12">
          Комплексные решения для вашего бизнеса
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800/50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl text-zinc-50">{service.title}</h3>
                </div>
                <p className="text-zinc-400">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400">
                      <span className="text-blue-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 border border-zinc-800 text-zinc-50 px-6 py-2 rounded-md hover:bg-zinc-800 transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
