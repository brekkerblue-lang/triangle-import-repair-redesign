import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'
import { reviewTags, facebookStat } from '../data/testimonials.js'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="What Customers Say" title="Trusted by Bremerton drivers">
            {business.reviewCount} real reviews on Google Maps, averaging {business.rating.toFixed(1)} stars.
          </SectionHeading>
          <div className="flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-brick-600 text-brick-600" />
            ))}
            <span className="ml-2 font-display text-sm font-semibold text-ink">
              {business.rating.toFixed(1)} · {business.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="panel flex flex-col justify-between p-7">
            <div>
              <Icon name="quote" className="h-8 w-8 text-brick-200" />
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                &ldquo;{business.facebookBio}&rdquo;
              </p>
              <p className="mt-3 text-sm text-stone-500">
                Owned and operated by {business.ownerNames} &mdash; the shop&rsquo;s own words, on their Facebook
                page.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-stone-200 pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brick-600/10 text-brick-600">
                <Icon name="facebook" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  {facebookStat.recommendPercent}% recommend
                </p>
                <p className="font-mono text-xs text-stone-500">{facebookStat.reviewCount} Facebook reviews</p>
              </div>
            </div>
          </div>

          <div className="panel p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Most-mentioned topics on Google
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {reviewTags.map((tag) => (
                <li
                  key={tag.label}
                  className="flex items-center gap-2 rounded-full bg-brick-600/10 px-4 py-1.5 text-sm font-medium text-brick-700"
                >
                  {tag.label}
                  <span className="rounded-full bg-brick-600 px-1.5 py-0.5 font-mono text-[10px] text-white">
                    {tag.count}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-stone-600">
              These are the exact topics Google surfaces most often from Triangle Import Repair&rsquo;s real
              customer reviews &mdash; helpful team, trustworthy staff, and solid work lead the list.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
