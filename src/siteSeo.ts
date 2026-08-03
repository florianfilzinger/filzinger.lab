import { seoPages } from './studioSeoData';

export const siteUrl = 'https://filzingerlab.de';
export const socialImage = `${siteUrl}/social-preview.png`;
const personId = 'https://filzinger-ai.de/#person';
const organizationId = `${siteUrl}/#organization`;
const brandId = `${siteUrl}/#brand`;
const websiteId = `${siteUrl}/#website`;
const personUrl = 'https://filzinger-ai.de/';

export type StructuredData = Record<string, unknown>;

export type RouteSeo = {
  path: string;
  title: string;
  description: string;
  jsonLd: StructuredData;
  indexable: boolean;
};

const homeRoute: RouteSeo = {
  path: '/',
  title: 'filzinger.lab | AI Product Studio für digitale Produkte',
  description: 'filzinger.lab entwickelt fokussierte digitale AI-Produkte – von Product Discovery und Prototyping bis zu MVP, SaaS und laufendem Betrieb.',
  indexable: true,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': personId, name: 'Florian Filzinger', url: personUrl,
        sameAs: ['https://www.linkedin.com/in/florian-filzinger'],
      },
      {
        '@type': 'Brand', '@id': brandId, name: 'filzinger.lab', url: `${siteUrl}/`, logo: `${siteUrl}/favicon.svg`,
      },
      {
        '@type': 'Organization', '@id': organizationId, name: 'filzinger.lab', url: `${siteUrl}/`,
        description: 'filzinger.lab ist ein AI Product Studio für fokussierte digitale Produkte.',
        logo: `${siteUrl}/favicon.svg`, founder: { '@id': personId }, brand: { '@id': brandId },
      },
      {
        '@type': 'WebSite', '@id': websiteId, name: 'filzinger.lab', url: `${siteUrl}/`,
        publisher: { '@id': organizationId }, creator: { '@id': personId }, inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage', '@id': `${siteUrl}/#webpage`, name: 'filzinger.lab | AI Product Studio', url: `${siteUrl}/`,
        isPartOf: { '@id': websiteId }, about: { '@id': organizationId }, publisher: { '@id': organizationId },
      },
      {
        '@type': 'SoftwareApplication', '@id': 'https://weightcoach-ai.de/#softwareapplication', name: 'WeightCoach AI',
        applicationCategory: 'HealthApplication', operatingSystem: 'Web, Android', url: 'https://weightcoach-ai.de/',
        creator: { '@id': organizationId }, publisher: { '@id': organizationId },
        brand: { '@type': 'Brand', '@id': 'https://weightcoach-ai.de/#brand', name: 'WeightCoach AI' },
      },
    ],
  },
};

function withEcosystemGraph(url: string, page: { headline: string; description: string }, data: Record<string, unknown>) {
  const graph = '@graph' in data
    ? (data['@graph'] as Record<string, unknown>[])
    : data['@type'] === 'WebPage'
      ? []
      : [{ ...data, '@context': undefined }];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': personId, name: 'Florian Filzinger', url: personUrl, sameAs: ['https://www.linkedin.com/in/florian-filzinger'] },
      { '@type': 'Brand', '@id': brandId, name: 'filzinger.lab', url: `${siteUrl}/`, logo: `${siteUrl}/favicon.svg` },
      { '@type': 'Organization', '@id': organizationId, name: 'filzinger.lab', url: `${siteUrl}/`, founder: { '@id': personId }, brand: { '@id': brandId } },
      { '@type': 'WebSite', '@id': websiteId, name: 'filzinger.lab', url: `${siteUrl}/`, publisher: { '@id': organizationId }, creator: { '@id': personId }, inLanguage: 'de-DE' },
      { '@type': 'WebPage', '@id': `${url}#webpage`, name: page.headline, description: page.description, url, isPartOf: { '@id': websiteId }, publisher: { '@id': organizationId } },
      ...graph,
    ],
  };
}

function breadcrumbData(path: string, name: string) {
  const url = `${siteUrl}${path}`;
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}

const studioRoutes: RouteSeo[] = seoPages.map((page) => {
  const url = `${siteUrl}${page.path}`;
  const routeData: Record<string, unknown> = page.schemaType === 'Service'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.headline,
        description: page.description,
        url,
        provider: { '@id': organizationId },
        areaServed: { '@type': 'Country', name: 'Deutschland' },
      }
    : page.schemaType === 'SoftwareApplication'
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'WeightCoach AI',
          description: page.description,
          url,
          applicationCategory: 'HealthApplication',
          operatingSystem: 'Web',
          creator: { '@id': organizationId },
          publisher: { '@id': organizationId },
          brand: { '@type': 'Brand', '@id': 'https://weightcoach-ai.de/#brand', name: 'WeightCoach AI' },
          sameAs: 'https://weightcoach-ai.de',
        }
      : page.schemaType === 'Article'
        ? {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: page.headline,
                description: page.description,
                url,
                mainEntityOfPage: { '@id': `${url}#webpage` },
                author: { '@id': personId },
                publisher: { '@id': organizationId },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${siteUrl}/` },
                  { '@type': 'ListItem', position: 2, name: page.headline, item: url },
                ],
              },
              ...('faqs' in page && page.faqs
                ? [{
                    '@type': 'FAQPage',
                    mainEntity: page.faqs.map((faq) => ({
                      '@type': 'Question',
                      name: faq.question,
                      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                    })),
                  }]
                : []),
            ],
          }
        : {
        '@context': 'https://schema.org',
        '@type': page.schemaType,
        name: page.headline,
        description: page.description,
        url,
        isPartOf: { '@id': websiteId },
      };

  const routeGraph = page.schemaType === 'WebPage'
    ? {
        '@context': 'https://schema.org',
        '@graph': [breadcrumbData(page.path, page.headline)],
      }
    : '@graph' in routeData
      ? routeData
      : {
        '@context': 'https://schema.org',
        '@graph': [routeData, breadcrumbData(page.path, page.headline)],
      };
  const jsonLd = withEcosystemGraph(url, page, routeGraph);

  return { path: page.path, title: page.title, description: page.description, indexable: true, jsonLd };
});

const legalRoutes: RouteSeo[] = [
  {
    path: '/impressum',
    title: 'Impressum | filzinger.lab',
    description: 'Angaben zum Verantwortlichen für filzinger.lab.',
  },
  {
    path: '/datenschutz',
    title: 'Datenschutzerklärung | filzinger.lab',
    description: 'Informationen zur Verarbeitung personenbezogener Daten auf filzinger.lab.',
  },
  {
    path: '/nutzungsbedingungen',
    title: 'Nutzungsbedingungen | filzinger.lab',
    description: 'Hinweise zur Nutzung von filzinger.lab.',
  },
].map((route) => ({
  ...route,
  indexable: true,
  jsonLd: withEcosystemGraph(
    `${siteUrl}${route.path}`,
    { headline: route.title.replace(' | filzinger.lab', ''), description: route.description },
    { '@context': 'https://schema.org', '@type': 'WebPage' },
  ),
}));

const directoryRoutes: RouteSeo[] = [
  { path: '/case-studies', title: 'Case Studies | filzinger.lab', description: 'Übersicht der bestehenden Case Studies aus der realen Produktentwicklung von filzinger.lab.' },
  { path: '/wissen', title: 'Wissen zu AI-Produktentwicklung | filzinger.lab', description: 'Thematisch geordnete Wissensartikel zu Product Discovery, AI-MVPs, Architektur, Produktdesign, Tests und Betrieb.' },
].map((route) => ({
  ...route,
  indexable: true,
  jsonLd: withEcosystemGraph(`${siteUrl}${route.path}`, { headline: route.title.replace(' | filzinger.lab', ''), description: route.description }, {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: route.title.replace(' | filzinger.lab', ''), description: route.description, url: `${siteUrl}${route.path}`, isPartOf: { '@id': websiteId } },
      breadcrumbData(route.path, route.title.replace(' | filzinger.lab', '')),
    ],
  }),
}));

export const indexableRoutes: readonly RouteSeo[] = [homeRoute, ...studioRoutes, ...directoryRoutes, ...legalRoutes];

export const notFoundSeo: RouteSeo = {
  path: '/404',
  title: 'Seite nicht gefunden | filzinger.lab',
  description: 'Die angeforderte Seite wurde nicht gefunden.',
  indexable: false,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Seite nicht gefunden',
    url: `${siteUrl}/404`,
  },
};

export function normalizePath(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/';
}

export function getRouteSeo(pathname: string) {
  const path = normalizePath(pathname);
  return indexableRoutes.find((route) => route.path === path) ?? null;
}
