import { seoPages } from './studioSeoData';

export const siteUrl = 'https://filzingerlab.de';
export const socialImage = `${siteUrl}/social-preview.png`;
const personId = 'https://filzinger-ai.de/#person';
const organizationId = `${siteUrl}/#organization`;
const brandId = `${siteUrl}/#brand`;
const websiteId = `${siteUrl}/#website`;

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
  title: 'filzinger.lab | AI Product Studio for focused digital products',
  description: 'filzinger.lab is an AI Product Studio building focused digital products, starting with WeightCoach AI for weight, nutrition and routine tracking.',
  indexable: true,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': personId, name: 'Florian Filzinger', url: `${siteUrl}/`,
        sameAs: ['https://www.linkedin.com/in/florian-filzinger'],
      },
      {
        '@type': 'Brand', '@id': brandId, name: 'filzinger.lab', url: `${siteUrl}/`, logo: `${siteUrl}/favicon.svg`,
      },
      {
        '@type': 'Organization', '@id': organizationId, name: 'filzinger.lab', url: `${siteUrl}/`,
        description: 'filzinger.lab is an AI Product Studio building focused digital products, starting with WeightCoach AI.',
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
    : [{ ...data, '@context': undefined }];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': personId, name: 'Florian Filzinger', url: `${siteUrl}/`, sameAs: ['https://www.linkedin.com/in/florian-filzinger'] },
      { '@type': 'Brand', '@id': brandId, name: 'filzinger.lab', url: `${siteUrl}/`, logo: `${siteUrl}/favicon.svg` },
      { '@type': 'Organization', '@id': organizationId, name: 'filzinger.lab', url: `${siteUrl}/`, founder: { '@id': personId }, brand: { '@id': brandId } },
      { '@type': 'WebSite', '@id': websiteId, name: 'filzinger.lab', url: `${siteUrl}/`, publisher: { '@id': organizationId }, creator: { '@id': personId }, inLanguage: 'de-DE' },
      { '@type': 'WebPage', '@id': `${url}#webpage`, name: page.headline, description: page.description, url, isPartOf: { '@id': websiteId }, publisher: { '@id': organizationId } },
      ...graph,
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

  const jsonLd = withEcosystemGraph(url, page, routeData);

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
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title.replace(' | filzinger.lab', ''),
    description: route.description,
    url: `${siteUrl}${route.path}`,
    isPartOf: { '@id': websiteId },
    publisher: { '@id': organizationId },
  },
}));

export const indexableRoutes: readonly RouteSeo[] = [homeRoute, ...studioRoutes, ...legalRoutes];

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
