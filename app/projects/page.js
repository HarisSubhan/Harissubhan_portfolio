"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Nav, Footer } from "../components/Site";
import { projects, Card, Modal } from "../components/ProjectViews";

export default function AllProjects() {
  const cats = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);
  const list = projects.filter((p) =>
    (cat === "All" || p.category === cat) &&
    (p.title + p.subtitle + p.client + p.description).toLowerCase().includes(q.toLowerCase())
  );
  const count = (c) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);

  return (
    <main className="grain min-h-screen">
      <Nav />
      <section className="px-6 pb-24 pt-36 md:px-16">
        <Link href="/" className="mb-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--muted)] transition hover:text-white">
          <FaArrowLeft /> Back to home
        </Link>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 text-xs uppercase tracking-[0.4em] text-cyan-300">Archive</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-[14vw] uppercase leading-[0.95] md:text-9xl">
          All <span className="stroke-text">work</span> <sup className="align-top text-2xl text-[var(--accent)] md:text-4xl">{projects.length}</sup>
        </motion.h1>

        <div className="mt-14 flex flex-col gap-6 border-y border-[var(--line)] py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition ${cat === c ? "border-white bg-white text-black" : "border-[var(--line)] text-[var(--muted)] hover:border-white hover:text-white"}`}>
                {c} <span className="opacity-60">{count(c)}</span>
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 border-b border-[var(--line)] pb-2 focus-within:border-[var(--accent)] lg:w-72">
            <FaSearch className="text-[var(--muted)]" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects" className="w-full bg-transparent text-sm outline-none" />
          </label>
        </div>

        <motion.div layout className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => <Card key={p.title} p={p} i={i} onOpen={() => setOpen(p)} />)}
          </AnimatePresence>
        </motion.div>
        {!list.length && <p className="mt-20 text-center text-[var(--muted)]">No projects match your search.</p>}
      </section>
      <Modal open={open} onClose={() => setOpen(null)} />
      <Footer />
    </main>
  );
}
