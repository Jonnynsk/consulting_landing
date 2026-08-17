import { Shield, FileText, TrendingUp, BarChart3, PieChart } from 'lucide-react'

const Hero = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      text: "Гарантия конфиденциальности"
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      text: "Без шаблонов"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      text: "Результат в цифрах"
    }
  ]

  return (
    <section className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-b from-zinc-950 to-blue-950/30 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div>
          <h1 className="text-3xl min-[421px]:text-4xl lg:text-6xl font-bold leading-tight text-zinc-50 mb-6">
            <span className="text-blue-500">Верните рост прибыли</span> и снимите потолок: системный анализ и индивидуальное решение для вашего бизнеса
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-8">
            Мы не предлагаем общие советы. Мы находим узкие места, которые реально тормозят доход, и даём план с измеримым эффектом.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-zinc-50 px-8 py-3 rounded-md transition-colors"
            >
              Получить анализ бизнеса
            </a>
            <a
              href="#cases"
              className="border border-zinc-700 hover:border-zinc-600 text-zinc-50 px-8 py-3 rounded-md transition-colors"
            >
              Смотреть кейсы
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm text-zinc-400"
              >
                <span className="shrink-0 mt-0.5">{feature.icon}</span>
                <span className="leading-snug">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Dashboard Visualization */}
        <div className="relative h-[500px]">
          {/* Base Card */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-zinc-50 font-medium">Business Performance</h3>
              <BarChart3 className="text-blue-500 w-6 h-6" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Revenue Growth</span>
                  <span>+124%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-zinc-400 mb-1">
                  <span>Cost Reduction</span>
                  <span>-38%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Card 1 */}
          <div className="absolute top-16 right-0 lg:-right-8 w-56 sm:w-64 h-56 sm:h-64 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg p-4 transform rotate-2">
            <PieChart className="text-blue-500 w-8 h-8 mb-4" />
            <div className="text-2xl font-bold text-zinc-50 mb-2">+87%</div>
            <p className="text-sm text-zinc-400">Operational Efficiency</p>
          </div>

          {/* Overlay Card 2 */}
          <div className="absolute bottom-8 left-0 lg:-left-8 w-60 sm:w-72 h-48 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg p-4 transform -rotate-1">
            <TrendingUp className="text-blue-500 w-8 h-8 mb-4" />
            <div className="text-2xl font-bold text-zinc-50 mb-2">3.2x</div>
            <p className="text-sm text-zinc-400">ROI Improvement</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
