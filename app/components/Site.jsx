"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin, FaArrowRight, FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import { projects, Card, Modal } from "./ProjectViews";

const EMAIL = "muhammadharissubhan@gmail.com";
const PHONE = "+92 302 010 2482";
const links = ["About", "Work", "Services", "Contact"];
const skills = ["React", "Next.js", "Node.js", "Express", "MySQL", "React Native", "WordPress", "WooCommerce", "Three.js", "TanStack"];

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}>
    {children}
  </motion.div>
);

export const Heading = ({ no, children }) => (
  <Reveal className="mb-14">
    <p className="mb-3 text-xs uppercase tracking-[0.4em] text-cyan-300">{no}</p>
    <h2 className="font-display font-bold text-[12vw] uppercase leading-[0.95] md:text-8xl">{children}</h2>
  </Reveal>
);

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.6 }}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference md:px-16">
        <a href="/#home" className="font-display font-bold text-2xl tracking-wider">HS.</a>
        <div className="flex items-center gap-4">
          <a href="/cv/harissubhan.pdf" className="hidden border border-white px-5 py-2 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black sm:block">Resume</a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="flex items-center gap-3 text-xs uppercase tracking-widest">Menu <FaBars /></button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm" />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              data-lenis-prevent className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col justify-between overflow-y-auto border-l border-[var(--line)] bg-[#0b0b13] p-8 md:p-12">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">Navigation</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-xl transition hover:rotate-90"><FaTimes /></button>
              </div>
              <nav className="my-10 flex flex-col">
                {links.map((l, i) => (
                  <motion.a key={l} href={`/#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                    className="group flex items-baseline gap-4 border-b border-[var(--line)] py-5 transition-all hover:pl-4">
                    <span className="text-xs text-[var(--muted)]">0{i + 1}</span>
                    <span className="font-display font-bold text-5xl uppercase transition group-hover:text-[var(--accent)]">{l}</span>
                  </motion.a>
                ))}
              </nav>
              <div className="space-y-4 text-sm text-[var(--muted)]">
                <a href={`mailto:${EMAIL}`} className="block break-all text-white hover:text-[var(--accent)]">{EMAIL}</a>
                <p>{PHONE}</p>
                <div className="flex gap-5 pt-2 text-2xl text-white">
                  <a href="https://github.com/HarisSubhan" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/muhammad-haris-subhan/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]"><FaLinkedin /></a>
                </div>
                <a href="/cv/harissubhan.pdf" className="mt-4 block border border-white py-3 text-center text-xs uppercase tracking-widest text-white transition hover:bg-white hover:text-black">Download Resume</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function Marquee() {
  const row = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-[var(--line)] py-6">
      <div className="marquee">
        {row.concat(row).map((s, i) => (
          <span key={i} className="font-display font-bold mx-8 text-4xl uppercase md:text-6xl stroke-text">{s}<span className="mx-8 text-[var(--accent)]">✦</span></span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const stats = [[3, "+", "Years experience"], [projects.length, "+", "Projects delivered"], [10, "+", "Technologies"]];
  return (
    <section id="about" className="px-6 py-32 md:px-16">
      <Heading no="01 — About">Building digital <span className="stroke-text">products</span></Heading>
      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="text-xl leading-relaxed text-[var(--muted)]">
            I'm Muhammad Haris Subhan, a full-stack developer based in Islamabad, Pakistan. I design and ship web platforms,
            mobile apps and WordPress/WooCommerce solutions for clients around the world, from dashboards and booking systems
            to point of sale and e-commerce.
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-6">
          {stats.map(([n, s, label], i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div className="border-t border-[var(--line)] pt-5">
                <div className="font-display font-bold text-5xl md:text-6xl"><CountUp end={n} duration={2.5} enableScrollSpy scrollSpyOnce />{s}</div>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--muted)]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredNames = ["Explore Islam", "Vayana", "RoadX", "Bright Ideas", "Sports Website", "E-Commerce"];

export function Projects() {
  const [open, setOpen] = useState(null);
  const list = featuredNames.map((n) => projects.find((p) => p.title.includes(n))).filter(Boolean);
  return (
    <section id="work" className="px-6 py-32 md:px-16">
      <Heading no="02 — Selected work">Featured <span className="stroke-text">projects</span></Heading>
      <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
        {list.map((p, i) => <Card key={p.title} p={p} i={i} onOpen={() => setOpen(p)} />)}
      </div>
      <div className="mt-24 flex justify-center">
        <Link href="/projects" className="group flex items-center gap-4 border border-white px-10 py-5 text-sm uppercase tracking-[0.3em] transition hover:bg-white hover:text-black">
          View all {projects.length} projects <FaArrowRight className="transition group-hover:translate-x-2" />
        </Link>
      </div>
      <Modal open={open} onClose={() => setOpen(null)} />
    </section>
  );
}

export function Services() {
  const s = [
    ["Web Platforms", "React, Next.js and Node.js applications with dashboards, portals and APIs."],
    ["Mobile Apps", "Cross-platform React Native apps connected to secure backends."],
    ["WordPress & WooCommerce", "Custom themes, plugins and online stores built for conversion."],
    ["Custom Software", "POS, invoicing, booking and admin systems tailored to your business."],
  ];
  return (
    <section id="services" className="px-6 py-32 md:px-16">
      <Heading no="03 — Services">What I <span className="stroke-text">do</span></Heading>
      {s.map(([t, d], i) => (
        <Reveal key={t} delay={0.05}>
          <div className="group flex flex-col justify-between gap-4 border-t border-[var(--line)] py-10 transition-all hover:px-6 hover:bg-white/[0.03] md:flex-row md:items-center">
            <span className="font-display font-bold text-xl text-[var(--muted)]">0{i + 1}</span>
            <h3 className="font-display font-bold flex-1 text-4xl uppercase md:ml-12 md:text-6xl">{t}</h3>
            <p className="max-w-sm text-[var(--muted)]">{d}</p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const send = (e) => {
    e.preventDefault();
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry from " + f.name)}&body=${encodeURIComponent(f.msg + "\n\n" + f.name + " (" + f.email + ")")}`;
  };
  const inp = "w-full border-b border-[var(--line)] bg-transparent py-4 outline-none transition focus:border-[var(--accent)]";
  return (
    <section id="contact" className="px-6 py-32 md:px-16">
      <Heading no="04 — Contact">Let's <span className="stroke-text">talk</span></Heading>
      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="text-xl text-[var(--muted)]">Have a project in mind? Tell me about it and I'll get back to you shortly.</p>
          <a href={`mailto:${EMAIL}`} className="mt-8 block text-2xl underline-offset-8 hover:underline">{EMAIL}</a>
          <p className="mt-3 text-[var(--muted)]">{PHONE}</p>
          <div className="mt-8 flex gap-5 text-2xl">
            <a href="https://github.com/HarisSubhan" target="_blank" rel="noreferrer" className="transition hover:text-[var(--accent)]"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/muhammad-haris-subhan/" target="_blank" rel="noreferrer" className="transition hover:text-[var(--accent)]"><FaLinkedin /></a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={send} className="space-y-6">
            <input required placeholder="Your name" className={inp} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" placeholder="Your email" className={inp} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
            <textarea required rows={4} placeholder="Tell me about your project" className={inp} value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
            <button className="font-display font-bold bg-white px-10 py-4 text-lg uppercase tracking-widest text-black transition hover:bg-[var(--accent)] hover:text-white">Send message</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-[var(--line)] px-6 py-8 text-xs uppercase tracking-widest text-[var(--muted)] md:flex-row md:px-16">
      <span>© {new Date().getFullYear()} Muhammad Haris Subhan</span>
      <span>Islamabad, Pakistan</span>
    </footer>
  );
}
