import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream bg-triangles">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
        <div>
          <span className="badge-triangle">
            <Icon name="triangle" className="h-3.5 w-3.5" />
            Est. {business.yearFounded} · Family Owned
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Expert import auto repair by <span className="text-brick-600">honest people.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
            Ken &amp; Ann Wilson and their team have kept Bremerton&rsquo;s German, Swedish and Japanese imports
            running right since {business.yearFounded} &mdash; straight answers, fair prices, and work you can trust
            the first time.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Schedule a Repair
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href={business.phoneHref} className="btn-outline">
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-stone-200 pt-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-brick-600 text-brick-600" />
                ))}
              </div>
              <span className="font-display text-sm font-semibold text-ink">
                {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
              </span>
            </div>
            <div className="h-6 w-px bg-stone-300" />
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              {business.yearsInBusiness}+ years in Bremerton
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="sign-plate">
            <img
              src={business.signPhotoSrc}
              alt="Triangle Import Repair's real hand-built shop sign in Bremerton, WA"
              className="aspect-[4/3] w-full rounded object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden sm:block">
            <span className="badge-triangle-dark">
              <Icon name="shield" className="h-3.5 w-3.5" />
              Dealership-Alternative Repair
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
