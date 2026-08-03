import { studioSeoPages } from './studioSeoData';

export const siteUrl = 'https://filzinger.lab';
export const socialImage = `${siteUrl}/social-preview.png`;

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
    '@type': 'Organization',
    name: 'filzinger.lab',
    url: `${siteUrl}/`,
    description: 'filzinger.lab is an AI Product Studio building focused digital products, starting with WeightCoach AI.',
    logo: `${siteUrl}/favicon.svg`,
    sameAs: ['https://weightcoach-ai.de'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'WeightCoach AI',
          applicationCategory: 'HealthApplication',
          url: 'https://weightcoach-ai.de',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Fußball Training AI',
          applicationCategory: 'SportsApplication',
        },
      },
    ],
  },
};

const studioRoutes: RouteSeo[] = studioSeoPages.map((page) => {
  const url = `${siteUrl}${page.path}`;
  const jsonLd = page.schemaType === 'Service'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: page.headline,
        description: page.description,
        url,
        provider: { '@type': 'Organization', name: 'filzinger.lab', url: `${siteUrl}/` },
        areaServed: { '@type': 'Country', name: 'Deutschland' },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: page.headline,
        description: page.description,
        url,
        isPartOf: { '@type': 'WebSite', name: 'filzinger.lab', url: `${siteUrl}/` },
      };

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
    isPartOf: { '@type': 'WebSite', name: 'filzinger.lab', url: `${siteUrl}/` },
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
