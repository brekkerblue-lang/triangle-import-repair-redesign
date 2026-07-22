import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const points = [
  {
    icon: 'award',
    title: `${business.yearsInBusiness}+ Years of Experience`,
    detail: `Family-owned and operated in Bremerton since ${business.yearFounded} — the same honest shop, the same address.`,
  },
  {
    icon: 'star',
    title: 'Real, Verified Reputation',
    detail: `${business.rating.toFixed(1)} stars across ${business.reviewCount} Google reviews, plus a 100% recommend rate on Facebook.`,
  },
  {
    icon: 'handshake',
    title: 'Honest, No-Pressure Diagnostics',
    detail: '"Honest mechanic" and "trustworthy staff" are two of the most repeated phrases in their own customer reviews.',
  },
  {
    icon: 'heart',
    title: 'Family Owned & Operated',
    detail: `Owned and run by ${business.ownerNames} — customers specifically call out the shop as family owned.`,
  },
  {
    icon: 'shield',
    title: 'A Real Dealership Alternative',
    detail: 'Reviewers describe Triangle Import Repair as their trusted alternative to dealership service pricing.',
  },
  {
    icon: 'wrench',
    title: 'Attention to Detail',
    detail: 'Customers consistently point to the shop\'s careful, thorough approach — solid work, done right.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-stone-900 py-20 text-white lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Why Bremerton Trusts Us" title="Honest work, since 1990" light>
          Everything below comes straight from what customers actually say about Triangle Import Repair &mdash; not
          marketing copy.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brick-500/20 text-brick-300">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
