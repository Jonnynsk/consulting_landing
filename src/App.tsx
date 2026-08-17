import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Workflow from './components/Workflow'
import Cases from './components/Cases'
import Services from './components/Services'
import Trust from './components/Trust'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div id="top" className="bg-zinc-950">
      <Header />
      <Hero />
      <PainPoints />
      <Workflow />
      <Cases />
      <Services />
      <Trust />
      <ContactCTA />
    </div>
  )
}

export default App
