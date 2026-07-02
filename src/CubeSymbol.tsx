import { useEffect, useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import * as THREE from 'three';

export default function CubeSymbol({ progress }: { progress: MotionValue<number> }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const host = mount;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05050a, 0.048);

    const camera = new THREE.PerspectiveCamera(34, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0.08, 6.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x05050a, 0);
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const metal = new THREE.MeshPhysicalMaterial({
      color: 0x15141b,
      metalness: 0.82,
      roughness: 0.19,
      transmission: 0.12,
      transparent: true,
      opacity: 0.86,
      clearcoat: 0.86,
      clearcoatRoughness: 0.14,
    });
    const cube = new THREE.Mesh(new THREE.BoxGeometry(2.34, 2.34, 2.34, 8, 8, 8), metal);
    group.add(cube);

    const edgeLines = new THREE.LineSegments(
      new THREE.EdgesGeometry(cube.geometry),
      new THREE.LineBasicMaterial({ color: 0xd8ccff, transparent: true, opacity: 0.16 }),
    );
    group.add(edgeLines);

    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.68 });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.58, 36, 36), coreMaterial);
    group.add(core);

    const coreGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.095,
      blending: THREE.AdditiveBlending,
    });
    const coreGlow = new THREE.Mesh(new THREE.SphereGeometry(1.62, 36, 36), coreGlowMaterial);
    group.add(coreGlow);

    const count = reducedMotion ? 0 : 72;
    const particleGeometry = new THREE.BoxGeometry(0.024, 0.024, 0.024);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xbda8ff, transparent: true, opacity: 0.12 });
    const particles = new THREE.InstancedMesh(particleGeometry, particleMaterial, count);
    particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    group.add(particles);

    const origins: THREE.Vector3[] = [];
    const targets: THREE.Vector3[] = [];
    const dummy = new THREE.Object3D();

    for (let index = 0; index < count; index += 1) {
      const side = Math.floor(Math.random() * 6);
      const x = (Math.random() - 0.5) * 2.36;
      const y = (Math.random() - 0.5) * 2.36;
      const z = (Math.random() - 0.5) * 2.36;
      const origin = new THREE.Vector3(x, y, z);
      if (side === 0) origin.x = 1.2;
      if (side === 1) origin.x = -1.2;
      if (side === 2) origin.y = 1.2;
      if (side === 3) origin.y = -1.2;
      if (side === 4) origin.z = 1.2;
      if (side === 5) origin.z = -1.2;

      const radius = 1.55 + Math.random() * 0.72;
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

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(3.2, 4.8, 4.8);
    const violet = new THREE.PointLight(0x8b5cf6, 7.8, 8.5);
    violet.position.set(-1.55, 0.62, 2.4);
    const rim = new THREE.PointLight(0xffffff, 4.2, 10);
    rim.position.set(3.4, -2.1, -1.3);
    const floorGlow = new THREE.PointLight(0x6d28d9, 2.5, 8);
    floorGlow.position.set(0, -2.4, 2.2);
    scene.add(ambient, key, violet, rim, floorGlow);

    let scroll = 0;
    const unsubscribe = progress.on('change', (latest) => {
      scroll = latest;
    });

    const clock = new THREE.Clock();
    let frame = 0;
    let visible = true;
    let hasRendered = false;
    let lastParticlePhase = -1;
    let lastRender = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && frame === 0) render();
      },
      { threshold: 0.02 },
    );
    observer.observe(host);

    function render(now = 0) {
      if (!visible || document.hidden) {
        frame = 0;
        return;
      }
      if (!reducedMotion && now - lastRender < 33) {
        frame = window.requestAnimationFrame(render);
        return;
      }
      lastRender = now;
      const elapsed = clock.getElapsedTime();
      const intro = reducedMotion ? 1 : Math.min(1, elapsed / 1.15);
      const phase = reducedMotion ? 0 : Math.sin(Math.min(1, Math.max(0, (scroll - 0.22) / 0.56)) * Math.PI);
      const floatY = reducedMotion ? 0 : Math.sin(elapsed * 0.34) * 0.05;

      group.scale.setScalar(0.94 + intro * 0.06);
      group.position.y = 0.72 + floatY - scroll * 0.26;
      group.rotation.x = 0.12 + intro * elapsed * 0.026 + scroll * 0.22;
      group.rotation.y = -0.56 + intro * elapsed * 0.038 + scroll * 0.32;
      group.rotation.z = Math.sin(elapsed * 0.1) * 0.018;

      metal.opacity = 0.86 - phase * 0.14;
      edgeLines.visible = phase < 0.72;
      core.scale.setScalar(1 + phase * 0.08 + Math.sin(elapsed * 0.55) * 0.012);
      coreGlow.scale.setScalar(1 + phase * 0.2 + Math.sin(elapsed * 0.5) * 0.022);

      if (count && Math.abs(phase - lastParticlePhase) > 0.006) {
        particleMaterial.opacity = 0.02 + phase * 0.12;
        for (let index = 0; index < count; index += 1) {
          const origin = origins[index];
          const target = targets[index];
          dummy.position.lerpVectors(origin, target, phase);
          dummy.position.x += Math.sin(index) * phase * 0.025;
          dummy.position.y += Math.cos(index * 0.7) * phase * 0.025;
          const scale = 0.38 + phase * 0.42;
          dummy.scale.setScalar(scale);
          dummy.rotation.set(index, index * 0.4, elapsed * 0.04);
          dummy.updateMatrix();
          particles.setMatrixAt(index, dummy.matrix);
        }
        particles.instanceMatrix.needsUpdate = true;
        lastParticlePhase = phase;
      }

      renderer.render(scene, camera);
      if (!hasRendered) {
        hasRendered = true;
        window.requestAnimationFrame(() => host.classList.add('is-ready'));
      }
      frame = reducedMotion ? 0 : window.requestAnimationFrame(render);
    }

    function resize() {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    }

    window.addEventListener('resize', resize);
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      unsubscribe();
      host.classList.remove('is-ready');
      host.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      metal.dispose();
      cube.geometry.dispose();
      edgeLines.geometry.dispose();
      (edgeLines.material as THREE.Material).dispose();
      core.geometry.dispose();
      coreMaterial.dispose();
      coreGlow.geometry.dispose();
      coreGlowMaterial.dispose();
    };
  }, [progress]);

  return <div className="cube-stage" ref={mountRef} aria-hidden="true" />;
}
