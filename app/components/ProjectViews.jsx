"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import items from "./projectsdetails";

const fixCat = (c) => c.trim().replace(/wordpress/i, "WordPress").replace(/\b(\w)(\w*)/g, (m, a, b) => a.toUpperCase() + (b === b.toUpperCase() ? b : b.toLowerCase())).replace("Wordpress", "WordPress");
export const projects = items.map((p) => ({ ...p, category: fixCat(p.category) }));

export function Card({ p, onOpen, i }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };
  return (
    <motion.div layout initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05 }}>
      <div onClick={onOpen} onMouseMove={move} onMouseLeave={() => setT({ x: 0, y: 0 })} className="group cursor-pointer"
        style={{ transform: `perspective(900px) rotateX(${t.x}deg) rotateY(${t.y}deg)`, transition: "transform .2s ease-out" }}>
        <div className="aspect-[16/10] overflow-hidden border border-[var(--line)] bg-black">
          <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{p.category}</p>
            <h3 className="font-display font-bold mt-2 text-3xl uppercase md:text-4xl">{p.title}</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">{p.subtitle}</p>
          </div>
          <FaArrowRight className="mt-2 shrink-0 -rotate-45 transition group-hover:rotate-0" />
        </div>
      </div>
    </motion.div>
  );
}

export function Modal({ open, onClose }) {
  return (
    <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => onClose()}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-8">
            <motion.div data-lenis-prevent initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto overscroll-contain border border-[var(--line)] bg-[#0c0c14]">
              <button onClick={() => onClose()} aria-label="Close" className="sticky top-4 float-right z-10 mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:rotate-90"><FaTimes /></button>
              <div className="grid gap-10 p-6 md:grid-cols-5 md:p-12">
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{open.category}</p>
                  <h3 className="font-display font-bold mt-3 text-3xl uppercase leading-tight md:text-5xl">{open.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">{open.subtitle}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-[var(--line)] py-5 text-sm">
                    <div><dt className="text-xs uppercase tracking-widest text-[var(--muted)]">Client</dt><dd className="mt-1">{open.client}</dd></div>
                    <div><dt className="text-xs uppercase tracking-widest text-[var(--muted)]">Date</dt><dd className="mt-1">{open.timeframe}</dd></div>
                  </dl>
                  <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">{open.description}</p>
                  <ul className="mt-6 space-y-2">
                    {open.points.map((pt) => <li key={pt} className="border-l-2 border-[var(--accent)] pl-3 text-sm">{pt}</li>)}
                  </ul>
                </div>
                <div className="space-y-4 md:col-span-3">
                  {[open.image, ...(open.images || [])].filter((v, i, a) => a.indexOf(v) === i).map((src) => (
                    <img key={src} src={src} alt="" loading="lazy" className={`w-full border border-[var(--line)] ${src.includes("placeholder") ? "aspect-[16/9] object-cover" : ""}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
