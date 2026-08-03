import type { StudioSeoPage as StudioSeoPageData } from './studioSeoData';

const contactEmail = 'filzinger.lab@gmail.com';

export function StudioSeoPage({ page }: { page: StudioSeoPageData }) {
  const ctaHref = page.ctaHref ?? `mailto:${contactEmail}?subject=${encodeURIComponent(page.subject)}`;
  const ctaLabel = page.ctaLabel ?? 'Produktidee besprechen';

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow eyebrow-chip">{page.eyebrow}</p>
          <h1>{page.headline}</h1>
          <p className="hero-copy">{page.intro}</p>
          <div className="hero-actions">
            <a className="primary-link" href={ctaHref}>{ctaLabel}</a>
            <a className="secondary-link" href="#inhalte">Mehr erfahren</a>
          </div>
        </div>
      </section>
      <main id="inhalte">
        {page.sections.map((section) => (
          <section className="content-section" key={section.title}>
            <div className="section-heading"><h2>{section.title}</h2></div>
            <div className="vision-grid">
              {section.paragraphs.map((paragraph) => (
                <p dangerouslySetInnerHTML={{ __html: paragraph }} key={paragraph} />
              ))}
            </div>
          </section>
        ))}
        <section className="contact-section">
          <p className="eyebrow">Product Studio</p>
          <h2>{page.ctaTitle}</h2>
          <p>{page.ctaText}</p>
          <a href={ctaHref}>{ctaLabel}</a>
        </section>
      </main>
    </>
  );
}
