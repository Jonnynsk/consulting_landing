import { Search, LayoutDashboard, TrendingUp, CheckCircle } from 'lucide-react'

const Workflow = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Анализ текущей ситуации",
      description: "Глубокий анализ всех бизнес-процессов и выявление узких мест"
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />,
      title: "Создание стратегии",
      description: "Разработка индивидуальной стратегии развития бизнеса"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Реализация плана",
      description: "Поэтапное внедрение изменений с контролем результатов"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Достижение целей",
      description: "Получение измеримых результатов и дальнейшая поддержка"
    }
  ]

  return (
    <section id="workflow" className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">
          Как мы работаем
        </h2>
        <p className="text-xl text-zinc-400 text-center mb-12">
          Прозрачный процесс, который приводит к измеримым результатам
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800/50 p-8 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-2xl text-zinc-50">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow
