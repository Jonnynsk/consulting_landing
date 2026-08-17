import { CaseStudy } from './types'
import { Briefcase, BarChart2, Users } from 'lucide-react'

const Cases = () => {
  const caseStudies: CaseStudy[] = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Оптимизация логистики",
      description: "Снижение операционных затрат на 35% через реорганизацию цепочки поставок",
      result: "+35% прибыльности"
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Цифровая трансформация",
      description: "Автоматизация ключевых процессов с увеличением производительности на 50%",
      result: "+50% эффективности"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Реорганизация команды",
      description: "Оптимизация структуры и процессов управления с повышением скорости принятия решений на 40%",
      result: "+40% скорости"
    }
  ]

  return (
    <section id="cases" className="py-20 bg-zinc-950 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-50 text-center mb-4">
          Наши кейсы
        </h2>
        <p className="text-xl text-zinc-400 text-center mb-12">
          Реальные результаты для наших клиентов
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800/50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full">
                  {caseStudy.icon}
                </div>
                <h3 className="text-2xl text-zinc-50">{caseStudy.title}</h3>
                <p className="text-zinc-400">{caseStudy.description}</p>
                <div className="mt-4 p-3 bg-zinc-800 rounded-md">
                  <span className="text-blue-600 font-medium">{caseStudy.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
