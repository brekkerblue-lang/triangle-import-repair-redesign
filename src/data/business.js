// Every fact in this file is real, sourced directly from Triangle Import
// Repair's Google Business Profile (Google Maps listing, confirmed
// 2026-07-22) and its Facebook page (facebook.com/Triangleimportrepair).
// This business has never had a website — see README for full sourcing
// notes and the standing brand-preservation rule this project follows.

export const business = {
  name: 'Triangle Import Repair',
  ownerNames: 'Ken & Ann Wilson',
  tagline: 'Expert import auto repair by honest people, since 1990.',
  // Verbatim from the shop's own Facebook bio line.
  facebookBio: 'Expert Auto Repair By Honest People, Since 1990',
  specialty: 'German, Swedish & Japanese Import Specialists',
  phone: '(360) 377-6226',
  phoneHref: 'tel:+13603776226',
  email: 'triangleimport@gmail.com',
  address: {
    line1: '1700 Seabeck Hwy NW',
    city: 'Bremerton',
    state: 'WA',
    zip: '98312',
  },
  addressFull: '1700 Seabeck Hwy NW, Bremerton, WA 98312',
  mapsDirectionsUrl:
    'https://www.google.com/maps/place/Triangle+Import+Repair/@47.5897209,-122.7136195,17z',
  mapEmbedSrc:
    'https://www.google.com/maps?q=Triangle+Import+Repair,+1700+Seabeck+Hwy+NW,+Bremerton,+WA+98312&output=embed',
  rating: 4.7,
  reviewCount: 107,
  // Confirmed directly on Google Maps — "Closed · Opens 8 AM Wed" with the
  // full weekly schedule expanded (checked 2026-07-22).
  hours: [
    { day: 'Monday', time: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 5:00 PM' },
    { day: 'Friday', time: '8:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
  yearFounded: 1990,
  yearsInBusiness: new Date().getFullYear() - 1990,
  logoSrc: '/images/logo-circle.png',
  signPhotoSrc: '/images/shop-sign.jpg',
  storefrontPhotoSrc: '/images/storefront-entrance.jpg',
  facebookUrl: 'https://www.facebook.com/Triangleimportrepair',
}
