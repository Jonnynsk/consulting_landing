import { TrendingDown, TrendingUp } from 'lucide-react'

const PainPoints = () => {
  const points = [
    {
      icon: <TrendingDown className="w-8 h-8 text-rose-700" />,
      title: "Ваш бизнес теряет прибыль",
      description: "Падают продажи, уходят клиенты, доход не растёт"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Вы хотите масштабироваться",
      description: "Выйти на новый рынок, запустить продукт, но боитесь ошибиться"
    }
  ]

  return (
    <section className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {points.map((point, index) => (
          <div key={index} className="bg-zinc-900 border border-zinc-800/50 p-8 rounded-lg">
            <div className="space-y-4">
              {point.icon}
              <h3 className="text-2xl text-zinc-50">{point.title}</h3>
              <p className="text-zinc-400">{point.description}</p>
            </div>
            <button className="mt-6 border border-zinc-800 text-zinc-50 px-6 py-2 rounded-md hover:bg-zinc-800 transition-colors">
              Подобрать решение
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PainPoints
