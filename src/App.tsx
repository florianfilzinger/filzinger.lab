import { useEffect, useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import * as THREE from 'three';

const products = [
  {
    name: 'WeightCoach AI',
    text: 'Ein präziser Begleiter für Gewicht, Ernährung, GLP-1-Dokumentation und langfristige Verläufe.',
    status: 'Live product',
  },
  {
    name: 'Fußball Training AI',
    text: 'Ein Trainingssystem für Übungen, Planung, Entwicklung und bessere Entscheidungen auf dem Platz.',
    status: 'In build',
  },
  {
    name: 'Weitere Produkte folgen',
    text: 'Neue Produktlinien entstehen aus denselben Bausteinen: Automatisierung, KI und sauberer Produktlogik.',
    status: 'Pipeline',
  },
];

const principles = ['Ideas', 'AI', 'Automation', 'Products', 'Dark Factory'];

export function App() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.9, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 72]);

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
        <CubeSymbol progress={scrollYProgress} />
        <motion.div className="hero-content" style={{ opacity: heroOpacity, y: heroY }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            AI Product Studio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }}>
            filzinger.lab builds AI products.
          </motion.h1>
          <motion.p className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.16 }}>
            Ein unabhängiges Product Studio für präzise Software, leise Automatisierung und die AI-Systeme dahinter.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }}>
            <a className="primary-link" href="#products">Produkte ansehen</a>
            <a className="secondary-link" href="mailto:hello@filzinger.ai">Kontakt aufnehmen</a>
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
              </article>
            ))}
          </div>
        </Section>

        <section className="factory-section" id="factory">
          <div>
            <p className="eyebrow">Dark Factory</p>
            <h2>Das interne AI Operating System hinter allen Produkten.</h2>
          </div>
          <p>
            Dark Factory ist kein Produkt im Schaufenster. Es ist die interne Produktionsumgebung: Agenten, Workflows, Datenpipelines,
            Qualitätschecks und Automationen, die filzinger.lab schneller und präziser machen.
          </p>
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
          <h2>Für Produkte, Systeme und AI Operating Models.</h2>
          <a href="mailto:hello@filzinger.ai">hello@filzinger.ai</a>
        </section>
      </main>
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

function CubeSymbol({ progress }: { progress: MotionValue<number> }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05050a, 0.055);

    const camera = new THREE.PerspectiveCamera(36, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.1, 6.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x05050a, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const metal = new THREE.MeshPhysicalMaterial({
      color: 0x14131a,
      metalness: 0.76,
      roughness: 0.22,
      transmission: 0.18,
      transparent: true,
      opacity: 0.82,
      clearcoat: 0.72,
      clearcoatRoughness: 0.18,
    });
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1.82, 1.82, 1.82, 8, 8, 8), metal);
    group.add(cube);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 36, 36),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.78 }),
    );
    group.add(core);

    const coreGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.35, 36, 36),
      new THREE.MeshBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.11, blending: THREE.AdditiveBlending }),
    );
    group.add(coreGlow);

    const count = reducedMotion ? 0 : 260;
    const particleGeometry = new THREE.BoxGeometry(0.028, 0.028, 0.028);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.3 });
    const particles = new THREE.InstancedMesh(particleGeometry, particleMaterial, count);
    particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    group.add(particles);

    const origins: THREE.Vector3[] = [];
    const targets: THREE.Vector3[] = [];
    const dummy = new THREE.Object3D();

    for (let index = 0; index < count; index += 1) {
      const side = Math.floor(Math.random() * 6);
      const x = (Math.random() - 0.5) * 1.86;
      const y = (Math.random() - 0.5) * 1.86;
      const z = (Math.random() - 0.5) * 1.86;
      const origin = new THREE.Vector3(x, y, z);
      if (side === 0) origin.x = 0.96;
      if (side === 1) origin.x = -0.96;
      if (side === 2) origin.y = 0.96;
      if (side === 3) origin.y = -0.96;
      if (side === 4) origin.z = 0.96;
      if (side === 5) origin.z = -0.96;

      const radius = 1.8 + Math.random() * 1.45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const target = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );

      origins.push(origin);
      targets.push(target);
    }

    const ambient = new THREE.AmbientLight(0xffffff, 0.44);
    const key = new THREE.DirectionalLight(0xffffff, 3.1);
    key.position.set(3.5, 4.5, 5);
    const violet = new THREE.PointLight(0x8b5cf6, 9, 8);
    violet.position.set(-1.8, 0.8, 2.6);
    const rim = new THREE.PointLight(0xffffff, 3.2, 10);
    rim.position.set(3.5, -2.4, -1.5);
    scene.add(ambient, key, violet, rim);

    let scroll = 0;
    const unsubscribe = progress.on('change', (latest) => {
      scroll = latest;
    });

    const clock = new THREE.Clock();
    let frame = 0;
    let visible = true;
    let lastParticlePhase = -1;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && frame === 0) render();
    }, { threshold: 0.02 });
    observer.observe(mount);

    function render() {
      if (!visible || document.hidden) {
        frame = 0;
        return;
      }
      const elapsed = clock.getElapsedTime();
      const phase = reducedMotion ? 0 : Math.sin(Math.min(1, Math.max(0, (scroll - 0.16) / 0.62)) * Math.PI);
      const floatY = reducedMotion ? 0 : Math.sin(elapsed * 0.48) * 0.08;

      group.position.y = floatY - scroll * 0.38;
      group.rotation.x = elapsed * 0.045 + scroll * 0.38;
      group.rotation.y = elapsed * 0.065 + scroll * 0.58;
      group.rotation.z = Math.sin(elapsed * 0.15) * 0.035;

      metal.opacity = 0.82 - phase * 0.28;
      core.scale.setScalar(1 + phase * 0.18 + Math.sin(elapsed * 0.9) * 0.018);
      coreGlow.scale.setScalar(1 + phase * 0.36 + Math.sin(elapsed * 0.7) * 0.03);

      if (count && Math.abs(phase - lastParticlePhase) > 0.006) {
        particleMaterial.opacity = 0.04 + phase * 0.26;
        for (let index = 0; index < count; index += 1) {
          const origin = origins[index];
          const target = targets[index];
          dummy.position.lerpVectors(origin, target, phase);
          dummy.position.x += Math.sin(index) * phase * 0.045;
          dummy.position.y += Math.cos(index * 0.7) * phase * 0.045;
          const scale = 0.42 + phase * 0.76;
          dummy.scale.setScalar(scale);
          dummy.rotation.set(index, index * 0.4, elapsed * 0.04);
          dummy.updateMatrix();
          particles.setMatrixAt(index, dummy.matrix);
        }
        particles.instanceMatrix.needsUpdate = true;
        lastParticlePhase = phase;
      }

      renderer.render(scene, camera);
      frame = reducedMotion ? 0 : window.requestAnimationFrame(render);
    }

    function resize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }

    window.addEventListener('resize', resize);
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      unsubscribe();
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      metal.dispose();
      cube.geometry.dispose();
      core.geometry.dispose();
      coreGlow.geometry.dispose();
    };
  }, [progress]);

  return <div className="cube-stage" ref={mountRef} aria-hidden="true" />;
}
