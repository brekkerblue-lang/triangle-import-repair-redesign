import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { services } from '../data/services.js'

const icons = ['gauge', 'wrench', 'triangle', 'handshake', 'shield', 'heart']

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="What We Do" title="Import specialists, honest generalists">
          From German and Swedish imports to Japanese makes and everyday maintenance &mdash; the same careful,
          straight-talk service on every vehicle that comes through the door.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.name} className="panel p-6 transition-transform hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brick-600/10 text-brick-600">
                <Icon name={icons[i % icons.length]} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
