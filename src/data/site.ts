/**
 * Single source of truth for business data.
 * Used by the metadata framework, JSON-LD schema, header and footer,
 * so name, address and phone (NAP) stay consistent across the whole site.
 */
export const site = {
  name: 'Lumen Neurodiagnostics',
  legalName: 'Lumen Neurodiagnostics Ltd.',
  url: 'https://lumen-neuro.example.com',
  description:
    'Outpatient EEG and neurodiagnostic testing with clear, physician-ready reports and an open education library for patients and clinicians.',
  locale: 'en_US',
  phone: '+1-555-010-2040',
  email: 'care@lumen-neuro.example.com',
  address: {
    street: '18 Harbour Road, Suite 4',
    city: 'Port Maris',
    region: 'St. Clare',
    postalCode: 'PM 11002',
    country: 'BB',
  },
  geo: { lat: 13.0975, lng: -59.6167 },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  social: {
    twitter: '@lumenneuro',
    sameAs: ['https://www.linkedin.com/company/example', 'https://www.facebook.com/example'],
  },
  defaultOgImage: '/og-default.png',
} as const;

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/articles', label: 'Learn about EEG' },
  { href: '/contact', label: 'Book or refer' },
] as const;
