import { Suspense, lazy, useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const CubeSymbol = lazy(() => import('./CubeSymbol'));

const products = [
  {
    name: 'WeightCoach AI',
    text: 'Dokumentiert Gewicht, Mahlzeiten und Routinen an einem Ort, damit Fortschritt und Muster leichter sichtbar werden.',
    status: 'Live product',
    focus: 'Alltagstracking',
    proof: 'Gewicht, Ernährung, Verlauf',
  },
  {
    name: 'Fußball Training AI',
    text: 'Hilft dabei, Trainingseinheiten zu planen, Übungen zu strukturieren und Entwicklung über Zeit nachvollziehbar zu machen.',
    status: 'In build',
    focus: 'Trainingsplanung',
    proof: 'Übungen, Einheiten, Entwicklung',
  },
  {
    name: 'Weitere Produkte folgen',
    text: 'Neue Anwendungen entstehen dort, wo wiederkehrende Arbeit klarer, schneller oder besser geführt werden kann.',
    status: 'Pipeline',
    focus: 'Nützliche Werkzeuge',
    proof: 'Automatisierung, Daten, einfache Oberflächen',
  },
];

const principles = ['Ideas', 'AI', 'Automation', 'Products', 'Dark Factory'];

const factoryLayers = [
  {
    name: 'Verstehen',
    detail: 'Aus wiederkehrenden Aufgaben und echten Problemen entstehen klare Produktideen.',
  },
  {
    name: 'Bauen',
    detail: 'Software, KI und Automatisierung werden zu einfachen Werkzeugen für den Alltag verbunden.',
  },
  {
    name: 'Verbessern',
    detail: 'Produkte werden laufend geprüft, vereinfacht und an echte Nutzung angepasst.',
  },
];

const contactEmail = 'filzinger.lab@gmail.com';

export function App() {
  const heroRef = useRef<HTMLElement>(null);
  const pathname = window.location.pathname;
  const legalPage = getLegalPage(pathname);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.64, 1], [1, 0.96, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="/" aria-label="filzinger.lab Start">
          <img className="brand-cube" src="/favicon.svg" alt="" aria-hidden="true" />
          filzinger.lab
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="/#vision">Vision</a>
          <a href="/#products">Produkte</a>
          <a href="/#factory">Dark Factory</a>
          <a href="/#contact">Kontakt</a>
        </nav>
      </header>

      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <>
          <section className="hero" id="hero" ref={heroRef}>
            <Suspense fallback={<CubeSymbolFallback />}>
              <CubeSymbol progress={scrollYProgress as MotionValue<number>} />
            </Suspense>
            <motion.div className="hero-content" style={{ opacity: heroOpacity, y: heroY }}>
              <motion.p className="eyebrow" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                AI Product Studio
              </motion.p>
              <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }}>
                AI products, built with intent.
              </motion.h1>
              <motion.p className="hero-copy" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.16 }}>
                filzinger.lab entwickelt AI-Produkte, Automatisierungen und digitale Systeme, die wiederkehrende Arbeit einfacher und besser nutzbar machen.
              </motion.p>
              <motion.div className="hero-actions" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }}>
                <a className="primary-link" href="#products">Produkte ansehen</a>
                <a className="secondary-link" href={`mailto:${contactEmail}`}>Kontakt aufnehmen</a>
              </motion.div>
            </motion.div>
            <div className="scroll-cue" aria-hidden="true">Scroll</div>
          </section>

          <main>
            <Section id="vision" label="Vision" title="Ein Studio für Produkte, die aus Systemen entstehen.">
              <div className="vision-grid">
                <p>
                  filzinger.lab ist keine klassische Agentur und keine SaaS-Fassade. Es ist ein Produktstudio, das Ideen in robuste AI-Workflows,
                  Interfaces und wiederverwendbare Bausteine übersetzt.
                </p>
                <p>
                  Jedes Produkt soll eigenständig funktionieren. Dahinter liegt dieselbe Logik: Daten verstehen, Abläufe automatisieren,
                  Entscheidungen beschleunigen und dabei die Oberfläche radikal ruhig halten.
                </p>
              </div>
              <div className="principles">
                {principles.map((principle) => (
                  <span key={principle}>{principle}</span>
                ))}
              </div>
            </Section>

            <Section id="products" label="Produkte" title="Kleine Produktlinien. Hohe Präzision.">
              <div className="product-grid">
                {products.map((product) => (
                  <article className="product-card" key={product.name}>
                    <span>{product.status}</span>
                    <h3>{product.name}</h3>
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
                  </article>
                ))}
              </div>
            </Section>

            <section className="factory-section" id="factory">
              <div className="factory-intro">
                <div>
                  <p className="eyebrow">Dark Factory</p>
                  <h2>Die Arbeitsweise hinter den Produkten.</h2>
                </div>
                <p>
                  Dark Factory ist der interne Name für die Art, wie filzinger.lab Produkte baut: Aufgaben verstehen, passende Automatisierung entwickeln
                  und daraus einfache digitale Werkzeuge machen.
                </p>
              </div>
              <div className="factory-layers" aria-label="Dark Factory Ebenen">
                {factoryLayers.map((layer) => (
                  <article key={layer.name}>
                    <strong>{layer.name}</strong>
                    <p>{layer.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <Section id="about" label="About" title="Gebaut für konzentrierte Produktarbeit.">
              <div className="about-copy">
                <p>
                  Der Fokus liegt auf wenigen, eigenständigen Produkten statt auf Präsentationsflächen. Design, Engineering und AI-Automation
                  werden als ein System behandelt.
                </p>
                <p>
                  Das gemeinsame Symbol ist der Würfel: ein kompaktes Objekt, das Idee, Kern, Maschine und Transformation verbindet.
                </p>
              </div>
            </Section>

            <section className="contact-section" id="contact">
              <p className="eyebrow">Kontakt</p>
              <h2>Für AI-Produkte, Automatisierung und digitale Systeme.</h2>
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
          <a href="/#contact">Kontakt</a>
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

function CubeSymbolFallback() {
  return (
    <div className="cube-stage cube-stage--fallback" aria-hidden="true">
      <div className="cube-fallback-core" />
    </div>
  );
}
