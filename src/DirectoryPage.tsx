import type { StudioSeoPage } from './studioSeoData';

export type DirectoryGroup = { title: string; pages: readonly StudioSeoPage[] };

export function DirectoryPage({ eyebrow, title, intro, groups }: { eyebrow: string; title: string; intro: string; groups: DirectoryGroup[] }) {
  return (
    <>
      <section className="hero directory-hero"><div className="hero-content"><p className="eyebrow eyebrow-chip">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{intro}</p></div></section>
      <main className="directory-main">
        {groups.map((group) => <section className="content-section" key={group.title}><div className="section-heading"><h2>{group.title}</h2></div><div className="directory-grid">{group.pages.map((page) => <a className="directory-card" href={page.path} key={page.path}><h3>{page.headline}</h3><p>{page.description}</p><span>Seite ansehen →</span></a>)}</div></section>)}
      </main>
    </>
  );
}
