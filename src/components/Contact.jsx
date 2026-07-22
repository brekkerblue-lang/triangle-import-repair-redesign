import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Get In Touch" title="Visit or contact the shop">
          Questions about a repair, or ready to schedule? Reach out any way that&rsquo;s easiest.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="panel grid gap-5 p-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-brick-600" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Address</p>
                  <p className="mt-1 text-sm text-stone-600">{business.addressFull}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brick-600" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Phone</p>
                  <a href={business.phoneHref} className="mt-1 block text-sm text-stone-600 hover:text-brick-600">
                    {business.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brick-600" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Email</p>
                  <a href={`mailto:${business.email}`} className="mt-1 block break-all text-sm text-stone-600 hover:text-brick-600">
                    {business.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brick-600" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Hours</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-stone-600">
                    {business.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className={h.time === 'Closed' ? 'text-stone-400' : ''}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-card">
              <iframe
                title="Map to Triangle Import Repair"
                src={business.mapEmbedSrc}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="panel p-7">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brick-600/10 text-brick-600">
                  <Icon name="check" className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">Message sent</h3>
                <p className="mt-2 max-w-xs text-sm text-stone-600">
                  Thanks for reaching out &mdash; the team at Triangle Import Repair will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm focus:border-brick-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm focus:border-brick-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm focus:border-brick-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" className="text-sm font-medium text-ink">
                    Vehicle Make &amp; Model
                  </label>
                  <input
                    id="vehicle"
                    type="text"
                    placeholder="e.g. Volvo XC70, BMW 328i"
                    className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm focus:border-brick-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-ink">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-md border border-stone-300 px-3.5 py-2.5 text-sm focus:border-brick-600 focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
