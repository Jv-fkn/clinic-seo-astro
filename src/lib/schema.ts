/**
 * JSON-LD builders (schema.org). Each page composes the nodes it needs and
 * passes them to <Seo />, which emits a single @graph script tag.
 * Validate output with https://search.google.com/test/rich-results
 */
import { site } from '../data/site';

type Node = Record<string, unknown>;
const abs = (path: string) => new URL(path, site.url).toString();
const ORG_ID = abs('/#organization');

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

/** Organization + MedicalOrganization + MedicalClinic (a LocalBusiness subtype) in one entity. */
export function organization(): Node {
  return {
    '@type': ['MedicalOrganization', 'MedicalClinic'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs('/favicon.svg'),
    image: abs(site.defaultOgImage),
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    medicalSpecialty: 'Neurologic',
    areaServed: { '@type': 'Country', name: 'Barbados' },
    sameAs: site.social.sameAs,
  };
}

export function website(): Node {
  return { '@type': 'WebSite', '@id': abs('/#website'), url: site.url, name: site.name, publisher: { '@id': ORG_ID } };
}

export function breadcrumbs(items: { name: string; href: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  };
}

export function service(s: { name: string; summary: string; slug: string }): Node {
  return {
    '@type': ['Service', 'MedicalProcedure'],
    name: s.name,
    description: s.summary,
    url: abs(`/services/${s.slug}`),
    procedureType: 'Diagnostic',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Barbados' },
  };
}

export function article(a: { title: string; description: string; slug: string; published: Date; updated?: Date; author: string }): Node {
  return {
    '@type': ['Article', 'MedicalWebPage'],
    headline: a.title,
    description: a.description,
    url: abs(`/articles/${a.slug}`),
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
    author: { '@type': 'Person', name: a.author },
    publisher: { '@id': ORG_ID },
    image: abs(site.defaultOgImage),
    inLanguage: 'en',
  };
}

export function faq(items: { q: string; a: string }[]): Node {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
