import SectionHeading from './SectionHeading.jsx'
import { business } from '../data/business.js'

const photos = [
  {
    src: business.signPhotoSrc,
    alt: "Triangle Import Repair's hand-built triangle shop sign, Bremerton, WA",
    caption: 'Our sign on Seabeck Hwy — the same triangle badge since day one.',
  },
  {
    src: business.storefrontPhotoSrc,
    alt: 'Triangle Import Repair storefront entrance at 1700 Seabeck Hwy NW',
    caption: 'Stop by 1700 Seabeck Hwy NW — key drop available after hours.',
  },
]

export default function Gallery() {
  return (
    <section className="bg-stone-100 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Around The Shop" title="A real, local shop on Seabeck Hwy">
          The same building, the same sign, the same family &mdash; for over {business.yearsInBusiness} years.
        </SectionHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {photos.map((p) => (
            <figure key={p.src} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-card">
              <img src={p.src} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5 text-sm text-stone-600">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
