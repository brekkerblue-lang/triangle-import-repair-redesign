import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="sign-plate">
          <img
            src={business.storefrontPhotoSrc}
            alt="Triangle Import Repair's front entrance at 1700 Seabeck Hwy NW, Bremerton, WA"
            className="w-full rounded object-cover"
          />
        </div>

        <div>
          <SectionHeading eyebrow="Our Story" title="Run by Ken & Ann Wilson, since 1990">
            {null}
          </SectionHeading>

          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Triangle Import Repair has been a fixture on Seabeck Highway for over {business.yearsInBusiness} years
            &mdash; the same family-owned shop, in the same spot, doing the same thing: fixing cars honestly. Ken and
            Ann Wilson own and operate the shop themselves, and it shows in how customers talk about the place.
            &ldquo;Family owned&rdquo; and &ldquo;honest mechanic&rdquo; aren&rsquo;t marketing lines here &mdash;
            they&rsquo;re the exact words their own customers use in Google reviews.
          </p>

          <p className="mt-4 text-base leading-relaxed text-stone-600">
            The shop built its name on German and Swedish import specialty work, later adding Japanese makes as
            well &mdash; the kind of specialized knowledge that keeps Bremerton drivers from having to drive to a
            dealership for repairs a trusted local shop can do just as well, for less.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-brick-600">{business.yearFounded}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-stone-500">Founded</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-brick-600">{business.rating.toFixed(1)}★</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                {business.reviewCount} Reviews
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-brick-600">3</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                Import Specialties
              </p>
            </div>
          </div>

          <a href={business.facebookUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brick-600 hover:text-brick-700">
            <Icon name="facebook" className="h-4 w-4" />
            Find us on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
