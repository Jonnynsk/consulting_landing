import { Shield, Target, Briefcase, Eye } from 'lucide-react'

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Строгое NDA",
    description: "Полная конфиденциальность. Мы подписываем соглашение о неразглашении до начала диагностики, защищая ваши коммерческие данные."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Оцифрованный результат",
    description: "Никакой абстракции. Каждая найденная точка потерь переводится в конкретные цифры упущенной выручки."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Уровень Enterprise",
    description: "Опыт работы с компаниями со сложной структурой филиалов, запутанной логистикой и многоуровневыми продажами."
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-600" />,
    title: "Объективная независимость",
    description: "Мы не интегрированы в вашу корпоративную политику. Мы видим факты и цифры такими, какие они есть, исключая человеческий фактор."
  }
]

const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-50 text-center mb-12">
          Почему нам доверяют системный анализ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-zinc-50 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
