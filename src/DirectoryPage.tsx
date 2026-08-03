import type { StudioSeoPage } from './studioSeoData';

export type DirectoryGroup = { title: string; pages: readonly StudioSeoPage[] };

export function DirectoryPage({ eyebrow, title, intro, groups, overview }: { eyebrow: string; title: string; intro: string; groups: DirectoryGroup[]; overview?: readonly string[] }) {
  return (
    <>
      <section className="hero directory-hero"><div className="hero-content"><p className="eyebrow eyebrow-chip">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{intro}</p></div></section>
      <main className="directory-main">
        {overview ? <section className="content-section"><div className="section-heading"><h2>Produktentwicklung im Überblick</h2></div><div className="vision-grid">{overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section> : null}
        {groups.map((group) => <section className="content-section" key={group.title}><div className="section-heading"><h2>{group.title}</h2></div><div className="directory-grid">{group.pages.map((page) => <a className="directory-card" href={page.path} key={page.path}><h3>{page.headline}</h3><p>{page.description}</p><span>Seite ansehen →</span></a>)}</div></section>)}
      </main>
    </>
  );
}
