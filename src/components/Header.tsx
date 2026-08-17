import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#workflow', label: 'Как работаем' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#trust', label: 'Почему мы' },
  { href: '#contact', label: 'Контакты' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "bg-zinc-950/90 border-b border-white/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        <a
          href="#top"
          className="text-zinc-50 font-semibold tracking-tight shrink-0"
          onClick={close}
        >
          Consulting <span className="text-blue-500">PRO</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex bg-blue-600 hover:bg-blue-700 text-zinc-50 text-sm px-5 py-2.5 rounded-md transition-colors"
          >
            Получить консультацию
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-zinc-50"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-lg text-zinc-300 hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex justify-center bg-blue-600 hover:bg-blue-700 text-zinc-50 px-5 py-3 rounded-md transition-colors"
            >
              Получить консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header
