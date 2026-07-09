import { useEffect, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const products = [
  {
    name: 'WeightCoach AI',
    text: 'Hilft beim Dokumentieren von Gewicht, Mahlzeiten und Routinen, damit Fortschritt im Alltag besser nachvollziehbar wird.',
    status: 'Live product',
    statusTone: 'live',
    focus: 'Gewichtsverlauf',
    proof: 'Tracking, Ernährung, Routinen',
    href: 'https://weightcoach-ai.de',
    image: '/stitch/weightcoach-ai.png',
  },
  {
    name: 'Fußball Training AI',
    text: 'Strukturiert Trainingseinheiten, Übungen und Entwicklung, damit Trainingsplanung weniger verstreut und besser auswertbar wird.',
    status: 'In build',
    statusTone: 'build',
    focus: 'Trainingsplanung',
    proof: 'Übungen, Einheiten, Entwicklung',
    image: '/stitch/dark-factory-os.png',
  },
  {
    name: 'Weitere Produkte folgen',
    text: 'Neue Produkte entstehen dort, wo wiederkehrende Arbeit mit klarer Software einfacher, überprüfbarer und nützlicher wird.',
    status: 'Pipeline',
    statusTone: 'pipeline',
    focus: 'Produktentwicklung',
    proof: 'Workflows, Daten, Interfaces',
    image: '/stitch/cube-logo-reference.png',
  },
];

const principles = ['AI Products', 'Automation', 'Data', 'Interfaces', 'Operations'];

const factoryLayers = [
  {
    name: 'Verstehen',
    detail: 'Wiederkehrende Aufgaben werden so lange verdichtet, bis ein konkretes Produktproblem sichtbar ist.',
  },
  {
    name: 'Bauen',
    detail: 'AI, Automatisierung und Oberfläche werden zu einem Werkzeug verbunden, das im Alltag benutzt werden kann.',
  },
  {
    name: 'Verbessern',
    detail: 'Live-Produkte werden anhand echter Nutzung geprüft, vereinfacht und gezielt weiterentwickelt.',
  },
];

const contactEmail = 'filzinger.lab@gmail.com';
const siteUrl = 'https://filzinger.lab';
const homeMeta = {
  title: 'filzinger.lab | AI Product Studio for focused digital products',
  description: 'filzinger.lab is an AI Product Studio building focused digital products, starting with WeightCoach AI for weight, nutrition and routine tracking.',
  path: '/',
};

export function App() {
  const pathname = window.location.pathname;
  const legalPage = getLegalPage(pathname);
  const shouldReduceMotion = useReducedMotion();
  usePageMeta(legalPage);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="/" aria-label="filzinger.lab Start">
          <CubeMark />
          <span className="wordmark"><span>filzinger</span><span>.lab</span></span>
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="/#vision">Vision</a>
          <a href="/#products">Produkte</a>
          <a href="/#factory">Dark Factory</a>
          <a href={`mailto:${contactEmail}`}>Kontakt</a>
        </nav>
      </header>

      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <>
          <section className="hero" id="hero">
            <div className="hero-orb" aria-hidden="true" />
            <motion.div className="hero-content" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="eyebrow eyebrow-chip">AI Product Studio</p>
              <h1>
                <span className="hero-title-line">Vom</span>{' '}
                <span className="hero-title-line">Experiment</span>{' '}
                <span className="hero-title-line hero-title-accent">zum Produkt.</span>
              </h1>
              <p className="hero-copy">
                filzinger.lab ist ein AI Product Studio. Es entwickelt schlanke digitale Produkte, die wiederkehrende Aufgaben strukturieren,
                Daten nutzbar machen und klare Entscheidungen unterstützen.
              </p>
              <div className="hero-actions">
                <a className="primary-link" href="#products">Produkte ansehen</a>
                <a className="secondary-link" href={`mailto:${contactEmail}`}>Kontakt aufnehmen</a>
              </div>
            </motion.div>
            <div className="hero-visual" aria-hidden="true">
              <CubeMark />
            </div>
          </section>

          <main>
            <Section id="vision" label="Studio" title="Ein AI Product Studio für konkrete Arbeits- und Alltagssysteme.">
              <div className="vision-grid">
                <p>
                  filzinger.lab baut eigene AI-Produkte statt Projektpräsentationen. Der Fokus liegt auf kleinen, belastbaren Anwendungen,
                  die ein klares Problem lösen und über Zeit besser werden.
                </p>
                <p>
                  Das erste Produkt ist WeightCoach AI: ein digitaler Begleiter für Gewichtsverlauf, Mahlzeiten und Routinen. Weitere Produkte
                  folgen dort, wo Software wiederkehrende Arbeit spürbar ordnen kann.
                </p>
              </div>
              <div className="principles">
                {principles.map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
            </Section>

            <Section id="products" label="Produkte" title="Eigene AI-Produkte mit klarem Nutzen.">
              <div className="product-grid">
                {products.map((product, index) => (
                  <motion.article
                    className="product-card"
                    key={product.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="product-media">
                      <img src={product.image} alt="" loading="lazy" />
                      <span className={`status-badge status-badge--${product.statusTone}`}>{product.status}</span>
                    </div>
                    <div className="product-tags" aria-label={`${product.name} Kategorien`}>
                      <span>{product.focus}</span>
                      <span>{product.proof}</span>
                    </div>
                    <h3>
                      {'href' in product ? (
                        <a href={product.href} target="_blank" rel="noreferrer">{product.name}</a>
                      ) : (
                        product.name
                      )}
                    </h3>
                    <p>{product.text}</p>
                    <dl>
                      <div>
                        <dt>Focus</dt>
                        <dd>{product.focus}</dd>
                      </div>
                      <div>
                        <dt>System</dt>
                        <dd>{product.proof}</dd>
                      </div>
                    </dl>
                  </motion.article>
                ))}
              </div>
            </Section>

            <section className="factory-section" id="factory">
              <div className="factory-intro">
                <div>
                  <p className="eyebrow">Dark Factory</p>
                  <h2>Die Arbeitsweise hinter dem Studio.</h2>
                </div>
                <p>
                  Dark Factory beschreibt die interne Produktarbeit von filzinger.lab: Aufgaben verstehen, Datenflüsse ordnen,
                  Automatisierung sinnvoll einsetzen und daraus nutzbare Software bauen.
                </p>
              </div>
              <div className="factory-layers" aria-label="Dark Factory Ebenen">
                {factoryLayers.map((layer, index) => (
                  <motion.article
                    key={layer.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.26 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{layer.name}</strong>
                    <p>{layer.detail}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <Section id="about" label="About" title="Gebaut für ruhige, belastbare Produktarbeit.">
              <div className="about-copy">
                <p>
                  Der Fokus liegt auf wenigen eigenen Produkten. Strategie, Design, Engineering und AI-Automation werden gemeinsam gedacht,
                  damit aus einer Idee ein nutzbares System wird.
                </p>
                <p>
                  WeightCoach AI zeigt diesen Ansatz im ersten Live-Produkt. Es verbindet einfache Dokumentation mit strukturierter Auswertung,
                  ohne Nutzerinnen und Nutzer mit unnötiger Komplexität zu belasten.
                </p>
              </div>
            </Section>

            <section className="founder-section" aria-labelledby="founder-title">
              <article className="founder-card">
                <div className="founder-media">
                  <img src="/stitch/founder-florian-filzinger.png" alt="Florian Filzinger" loading="lazy" />
                  <div className="founder-identity">
                    <h2 id="founder-title">Florian<br />Filzinger</h2>
                    <p>Gründer &amp; Lead Engineer</p>
                  </div>
                </div>
                <div className="founder-body">
                  <p>
                    "Unser Fokus liegt auf der Entwicklung von Software, die komplexe Probleme löst. Wir schließen die Lücke zwischen
                    AI-Forschung und Produktionsrealität, indem wir technisch fundierte und architektonisch robuste Produkte bauen."
                  </p>
                  <div className="founder-tags" aria-label="Schwerpunkte">
                    <span>AI Engineering</span>
                    <span>Systemarchitektur</span>
                    <span>Produktentwicklung</span>
                    <span>Automatisierung</span>
                  </div>
                </div>
              </article>
            </section>

            <section className="updates-section" aria-labelledby="updates-title">
              <h2 id="updates-title">Laboratory Updates</h2>
              <p>Technische Einblicke in neue Produkte, Experimente und Alpha-Releases.</p>
              <form className="updates-form" onSubmit={(event) => event.preventDefault()}>
                <label className="sr-only" htmlFor="updates-email">E-Mail-Adresse</label>
                <input id="updates-email" type="email" placeholder="hello@filzingerlab.de" autoComplete="email" />
                <button className="primary-link" type="submit">Lab beitreten</button>
              </form>
            </section>

            <section className="contact-section" id="contact">
              <p className="eyebrow">Kontakt</p>
              <h2>Für Produktideen, AI-Systeme und fokussierte Automatisierung.</h2>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </section>
          </main>
        </>
      )}

      <footer className="site-footer">
        <span>© 2026 filzinger.lab</span>
        <nav aria-label="Footer">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/nutzungsbedingungen">Nutzungsbedingungen</a>
          <a href={`mailto:${contactEmail}`}>Kontakt</a>
          <a href="https://www.linkedin.com/in/florian-filzinger" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </footer>
    </div>
  );
}

type LegalPageKey = 'impressum' | 'datenschutz' | 'nutzungsbedingungen';

const legalContent: Record<LegalPageKey, { label: string; title: ReactNode; intro: string; sections: Array<{ title: string; body: ReactNode }> }> = {
  impressum: {
    label: 'Rechtliche Angaben',
    title: 'Impressum',
    intro: 'Angaben zum Verantwortlichen für filzinger.lab.',
    sections: [
      {
        title: 'Verantwortlich',
        body: (
          <>
            <p>Florian Filzinger</p>
            <p>Judenberg 12</p>
            <p>89420 Höchstädt</p>
          </>
        ),
      },
      {
        title: 'Kontakt',
        body: (
          <>
            <p>
              E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p>Telefon: 015172495440</p>
          </>
        ),
      },
      {
        title: 'Hosting',
        body: <p>Diese Website wird über Cloudflare Pages bereitgestellt.</p>,
      },
      {
        title: 'Hinweis zum Angebot',
        body: <p>filzinger.lab ist eine Website für ein unabhängiges AI Product Studio. Die Seite stellt keine medizinische, rechtliche oder finanzielle Beratung bereit.</p>,
      },
    ],
  },
  datenschutz: {
    label: 'Datenschutz',
    title: 'Datenschutzerklärung',
    intro: 'Informationen zur Verarbeitung personenbezogener Daten auf filzinger.lab.',
    sections: [
      {
        title: 'Verantwortlicher und Kontakt',
        body: (
          <>
            <p>Verantwortlich für die Datenverarbeitung ist Florian Filzinger.</p>
            <p>
              Kontakt: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <p>filzinger.lab kann sich im Rahmen der Weiterentwicklung ändern. Diese Datenschutzinformationen werden bei wesentlichen Änderungen aktualisiert.</p>
          </>
        ),
      },
      {
        title: 'Art und Zweck der Verarbeitung',
        body: (
          <>
            <p>Beim Aufruf der Website können technisch notwendige Daten wie IP-Adresse, Zeitpunkt des Zugriffs, Browserinformationen und angeforderte Ressourcen verarbeitet werden, um die Website auszuliefern und zu sichern.</p>
            <p>Wenn Besucherinnen und Besucher per E-Mail Kontakt aufnehmen, werden die übermittelten Angaben verarbeitet, um die Anfrage zu beantworten. Dazu gehören insbesondere E-Mail-Adresse, Inhalt der Nachricht und technische Versandinformationen.</p>
          </>
        ),
      },
      {
        title: 'Hosting und technische Bereitstellung',
        body: <p>Die Website wird über Cloudflare Pages bereitgestellt. Cloudflare kann technische Zugriffsdaten und Sicherheitsprotokolle verarbeiten. Je nach technischer Bereitstellung kann eine Verarbeitung außerhalb Deutschlands oder der Europäischen Union nicht ausgeschlossen werden.</p>,
      },
      {
        title: 'Cookies, Tracking und lokale Speicherung',
        body: <p>filzinger.lab verwendet derzeit kein Werbe-, Analyse- oder Tracking-Cookie. Es findet derzeit kein Tracking zu Werbe- oder Marketingzwecken statt.</p>,
      },
      {
        title: 'Rechtsgrundlagen und Speicherdauer',
        body: (
          <>
            <p>Die Verarbeitung erfolgt, soweit anwendbar, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur technischen Sicherheit, Stabilität und Kommunikation sowie Art. 6 Abs. 1 lit. a DSGVO, sofern eine Einwilligung erforderlich ist.</p>
            <p>Technische Betriebsdaten, Sicherheitsprotokolle und E-Mail-Kommunikation werden nur so lange verarbeitet, wie dies für Betrieb, Sicherheit, Bearbeitung der Anfrage oder gesetzliche Pflichten erforderlich ist.</p>
          </>
        ),
      },
      {
        title: 'Rechte der betroffenen Personen',
        body: (
          <>
            <p>Betroffene Personen haben nach der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.</p>
            <p>
              Zur Ausübung dieser Rechte genügt eine E-Mail an <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Betroffene Personen haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </>
        ),
      },
    ],
  },
  nutzungsbedingungen: {
    label: 'Nutzung',
    title: 'Nutzungs­bedingungen',
    intro: 'Hinweise zur Nutzung von filzinger.lab.',
    sections: [
      {
        title: 'Zweck der Website',
        body: <p>filzinger.lab informiert über ein unabhängiges AI Product Studio, Produktlinien, Arbeitsweise und Kontaktmöglichkeiten.</p>,
      },
      {
        title: 'Keine fachliche Beratung',
        body: <p>Die Inhalte dieser Website dienen der allgemeinen Information. Sie stellen keine medizinische, rechtliche, finanzielle oder sonstige fachliche Beratung dar.</p>,
      },
      {
        title: 'AI- und Produktinformationen',
        body: <p>Beschreibungen von Produkten, Automatisierungen und digitalen Systemen können sich im Rahmen der Weiterentwicklung ändern. Es besteht kein Anspruch auf bestimmte Funktionen, Verfügbarkeit oder dauerhafte Bereitstellung einzelner Angebote.</p>,
      },
      {
        title: 'Verfügbarkeit',
        body: <p>filzinger.lab wird als Online-Angebot bereitgestellt. Es besteht kein Anspruch auf permanente Verfügbarkeit oder unterbrechungsfreien Betrieb.</p>,
      },
      {
        title: 'Haftung',
        body: <p>Die Haftung wird nur im gesetzlich zulässigen Umfang beschränkt. Für externe Links sind die jeweiligen Betreiber verantwortlich.</p>,
      },
      {
        title: 'Datenschutz und Anbieterangaben',
        body: (
          <p>
            Informationen zur Verarbeitung personenbezogener Daten stehen in der <a href="/datenschutz">Datenschutzerklärung</a>. Anbieterangaben befinden sich im <a href="/impressum">Impressum</a>.
          </p>
        ),
      },
    ],
  },
};

const legalMeta: Record<LegalPageKey, { title: string; path: string }> = {
  impressum: { title: 'Impressum', path: '/impressum' },
  datenschutz: { title: 'Datenschutzerklärung', path: '/datenschutz' },
  nutzungsbedingungen: { title: 'Nutzungsbedingungen', path: '/nutzungsbedingungen' },
};

function usePageMeta(page: LegalPageKey | null) {
  useEffect(() => {
    const meta = page
      ? {
          title: `${legalMeta[page].title} | filzinger.lab`,
          description: legalContent[page].intro,
          path: legalMeta[page].path,
        }
      : homeMeta;
    const url = `${siteUrl}${meta.path}`;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('link[rel="canonical"]', url, 'href');
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);
  }, [page]);
}

function setMetaContent(selector: string, value: string, attribute = 'content') {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

function getLegalPage(pathname: string): LegalPageKey | null {
  const cleanPath = pathname.replace(/\/$/, '');
  if (cleanPath === '/impressum') return 'impressum';
  if (cleanPath === '/datenschutz') return 'datenschutz';
  if (cleanPath === '/nutzungsbedingungen') return 'nutzungsbedingungen';
  return null;
}

function LegalPage({ page }: { page: LegalPageKey }) {
  const content = legalContent[page];

  return (
    <main className="legal-main">
      <section className="legal-page">
        <a className="legal-back" href="/">filzinger.lab</a>
        <header className="legal-hero">
          <p className="eyebrow">{content.label}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </header>
        <div className="legal-sections">
          {content.sections.map((section) => (
            <section className="legal-card" key={section.title}>
              <h2>{section.title}</h2>
              <div>{section.body}</div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

function CubeMark() {
  return (
    <svg className="brand-cube" viewBox="0 0 64 64" aria-hidden="true">
      <path className="brand-cube-shell" d="M32 7 54 20v24L32 57 10 44V20L32 7Z" />
      <path className="brand-cube-top" d="M32 7 54 20 32 32 10 20 32 7Z" />
      <path className="brand-cube-left" d="M10 20 32 32v25L10 44V20Z" />
      <path className="brand-cube-right" d="M54 20 32 32v25l22-13V20Z" />
      <path className="brand-cube-lines" d="M32 7v25M10 20l22 12 22-12M32 32v25" />
      <circle className="brand-cube-core" cx="32" cy="32" r="8.4" />
      <circle className="brand-cube-glow" cx="32" cy="32" r="15.5" />
    </svg>
  );
}

function Section({ children, id, label, title }: { children: ReactNode; id: string; label: string; title: string }) {
  return (
    <motion.section
      className="content-section"
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
