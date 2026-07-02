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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.64, 1], [1, 0.96, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="#hero" aria-label="filzinger.lab Start">
          <span className="brand-cube" />
          filzinger.lab
        </a>
        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#vision">Vision</a>
          <a href="#products">Produkte</a>
          <a href="#factory">Dark Factory</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

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

      <footer className="site-footer">
        <span>filzinger.lab</span>
        <nav aria-label="Footer">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="#contact">Kontakt</a>
          <a href="https://www.linkedin.com/company/filzinger-lab/" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </footer>
    </div>
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
