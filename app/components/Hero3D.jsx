"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function Hero3D() {
  const mount = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const el = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 6;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.8, 1),
      new THREE.MeshBasicMaterial({ color: 0x6d5dfc, wireframe: true })
    );
    const shell = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.6, 0.02, 300, 8),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee })
    );
    scene.add(core, shell);

    const n = 1500;
    const pos = new Float32Array(n * 3).map(() => (Math.random() - 0.5) * 20);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.02, color: 0xffffff }));
    scene.add(stars);

    const mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      mouse.x = (e.clientX / innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / innerHeight - 0.5) * 2;
    };
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    addEventListener("mousemove", onMove);
    addEventListener("resize", onResize);

    let raf;
    const loop = () => {
      core.rotation.x += 0.003; core.rotation.y += 0.005;
      shell.rotation.y -= 0.002; shell.rotation.x += 0.001;
      stars.rotation.y += 0.0004;
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    gsap.fromTo(".hero-line", { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.2 });
    gsap.fromTo(core.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 2, ease: "elastic.out(1,0.6)" });

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#07070c] text-white">
      <div ref={mount} className="absolute inset-0" />
      <div ref={text} className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16 pointer-events-none">
        <p className="hero-line mb-4 text-sm uppercase tracking-[0.4em] text-cyan-300">Full-Stack Developer</p>
        <h1 className="font-display font-bold uppercase leading-[0.9] text-[16vw] md:text-[11vw]">
          <span className="block overflow-hidden"><span className="hero-line block">Haris</span></span>
          <span className="block overflow-hidden"><span className="hero-line block text-transparent" style={{ WebkitTextStroke: "2px #fff" }}>Subhan</span></span>
        </h1>
        <p className="hero-line mt-6 max-w-xl text-lg text-white/60">
          I build web platforms, mobile apps and custom software for clients worldwide.
        </p>
      </div>
    </section>
  );
}
