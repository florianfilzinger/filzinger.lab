import { useEffect, useRef, useState } from 'react';
import type { MotionValue } from 'framer-motion';
import * as THREE from 'three';

export default function CubeSymbol({ progress }: { progress: MotionValue<number> }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglUnavailable, setWebglUnavailable] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || webglUnavailable) return;
    const host = mount;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let disposed = false;

    try {
      const testCanvas = document.createElement('canvas');
      const canUseWebgl = Boolean(testCanvas.getContext('webgl2') ?? testCanvas.getContext('webgl'));
      if (!canUseWebgl) {
        setWebglUnavailable(true);
        return undefined;
      }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05050a, 0.048);

    const getHostSize = () => ({
      width: Math.max(1, host.clientWidth),
      height: Math.max(1, host.clientHeight),
    });
    const initialSize = getHostSize();
    const camera = new THREE.PerspectiveCamera(34, initialSize.width / initialSize.height, 0.1, 100);
    camera.position.set(0, 0.08, 6.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(initialSize.width, initialSize.height);
    renderer.setClearColor(0x05050a, 0);
    host.appendChild(renderer.domElement);

    function handleContextLost(event: Event) {
      event.preventDefault();
      if (!disposed) setWebglUnavailable(true);
    }

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);

    const group = new THREE.Group();
    scene.add(group);

    const metal = new THREE.MeshPhysicalMaterial({
      color: 0x0b0b11,
      metalness: 0.92,
      roughness: 0.28,
      transmission: 0,
      transparent: true,
      opacity: 0.94,
      clearcoat: 0.96,
      clearcoatRoughness: 0.18,
    });
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.18 });
    const shell = new THREE.Group();
    const shellMeshes: THREE.Mesh[] = [];
    const shellEdges: THREE.LineSegments[] = [];
    group.add(shell);

    const outer = 2.46;
    const beam = 0.42;
    const face = outer / 2;
    const edgeOffset = face - beam / 2;

    function addRail(size: [number, number, number], position: [number, number, number]) {
      const geometry = new THREE.BoxGeometry(...size);
      const mesh = new THREE.Mesh(geometry, metal);
      mesh.position.set(...position);
      shell.add(mesh);
      shellMeshes.push(mesh);

      const lines = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial);
      lines.position.copy(mesh.position);
      shell.add(lines);
      shellEdges.push(lines);
    }

    for (const y of [-edgeOffset, edgeOffset]) {
      for (const z of [-edgeOffset, edgeOffset]) addRail([outer, beam, beam], [0, y, z]);
    }

    for (const x of [-edgeOffset, edgeOffset]) {
      for (const z of [-edgeOffset, edgeOffset]) addRail([beam, outer, beam], [x, 0, z]);
    }

    for (const x of [-edgeOffset, edgeOffset]) {
      for (const y of [-edgeOffset, edgeOffset]) addRail([beam, beam, outer], [x, y, 0]);
    }

    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xc4b5fd, transparent: true, opacity: 0.78 });
    const core = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.66, 0.66), coreMaterial);
    group.add(core);

    const coreGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const coreGlow = new THREE.Mesh(new THREE.BoxGeometry(1.72, 1.72, 1.72), coreGlowMaterial);
    group.add(coreGlow);

    const reactorHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0x9f5cff,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const reactorHalo = new THREE.Mesh(new THREE.PlaneGeometry(2.56, 2.56), reactorHaloMaterial);
    group.add(reactorHalo);

    const count = reducedMotion ? 0 : 128;
    const particleGeometry = new THREE.BoxGeometry(0.032, 0.032, 0.032);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xbda8ff, transparent: true, opacity: 0.16 });
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

      const radius = 1.7 + Math.random() * 1.05;
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

    const ambient = new THREE.AmbientLight(0xffffff, 0.38);
    const key = new THREE.DirectionalLight(0xffffff, 3.1);
    key.position.set(3.2, 4.8, 4.8);
    const violet = new THREE.PointLight(0x8b5cf6, 12.5, 9.5);
    violet.position.set(-1.25, 0.36, 2.2);
    const rim = new THREE.PointLight(0xffffff, 4.2, 10);
    rim.position.set(3.4, -2.1, -1.3);
    const floorGlow = new THREE.PointLight(0x6d28d9, 5.2, 9);
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
      if (disposed) return;
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
      group.position.y = 0.24 + floatY - scroll * 0.26;
      group.rotation.x = 0.12 + intro * elapsed * 0.026 + scroll * 0.22;
      group.rotation.y = -0.56 + intro * elapsed * 0.038 + scroll * 0.32;
      group.rotation.z = Math.sin(elapsed * 0.1) * 0.018;

      metal.opacity = 0.94 - phase * 0.1;
      edgeMaterial.opacity = 0.16 + phase * 0.1;
      shellEdges.forEach((lines) => {
        lines.visible = phase < 0.78;
      });
      core.scale.setScalar(1 + phase * 0.12 + Math.sin(elapsed * 0.55) * 0.014);
      coreGlow.scale.setScalar(1.04 + phase * 0.42 + Math.sin(elapsed * 0.5) * 0.035);
      reactorHalo.lookAt(camera.position);
      reactorHalo.scale.setScalar(1.06 + phase * 0.5 + Math.sin(elapsed * 0.48) * 0.03);
      reactorHaloMaterial.opacity = 0.13 + phase * 0.16;

      if (count && Math.abs(phase - lastParticlePhase) > 0.006) {
        particleMaterial.opacity = 0.035 + phase * 0.18;
        for (let index = 0; index < count; index += 1) {
          const origin = origins[index];
          const target = targets[index];
          dummy.position.lerpVectors(origin, target, phase);
          dummy.position.x += Math.sin(index) * phase * 0.025;
          dummy.position.y += Math.cos(index * 0.7) * phase * 0.025 - phase * phase * (0.38 + (index % 7) * 0.035);
          const scale = 0.34 + phase * 0.54;
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
      const nextSize = getHostSize();
      camera.aspect = nextSize.width / nextSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(nextSize.width, nextSize.height);
    }

    window.addEventListener('resize', resize);
    render();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      unsubscribe();
      host.classList.remove('is-ready');
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      metal.dispose();
      edgeMaterial.dispose();
      shellMeshes.forEach((mesh) => mesh.geometry.dispose());
      shellEdges.forEach((lines) => lines.geometry.dispose());
      core.geometry.dispose();
      coreMaterial.dispose();
      coreGlow.geometry.dispose();
      coreGlowMaterial.dispose();
      reactorHalo.geometry.dispose();
      reactorHaloMaterial.dispose();
    };
    } catch (error) {
      console.warn('CubeSymbol failed to initialize WebGL scene.', error);
      setWebglUnavailable(true);
      return undefined;
    }
  }, [progress, webglUnavailable]);

  if (webglUnavailable) {
    return (
      <div className="cube-stage cube-stage--fallback" aria-hidden="true">
        <div className="cube-fallback-core" />
      </div>
    );
  }

  return <div className="cube-stage" ref={mountRef} aria-hidden="true" />;
}
