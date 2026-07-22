import { useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-cream/95 backdrop-blur">
      <div className="border-b border-stone-200 bg-ink">
        <div className="container-page flex items-center justify-between py-2 text-xs text-stone-200">
          <p className="font-mono uppercase tracking-widest">
            Est. {business.yearFounded} · {business.specialty}
          </p>
          <a href={business.phoneHref} className="hidden items-center gap-1.5 font-medium text-cream sm:flex">
            <Icon name="phone" className="h-3.5 w-3.5" />
            {business.phone}
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={business.logoSrc}
            alt="Triangle Import Repair logo"
            className="h-12 w-12 rounded-full border-2 border-brick-600 object-cover"
          />
          <span className="font-display text-lg font-bold leading-tight text-ink">
            Triangle Import
            <span className="block text-sm font-semibold text-brick-600">Repair</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-brick-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="btn-outline">
            <Icon name="phone" className="h-4 w-4" />
            Call Now
          </a>
          <a href="#contact" className="btn-primary">
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-stone-300 p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-cream lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={business.phoneHref} className="btn-primary mt-2 justify-center">
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
