"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import portfolioItems from "./projectsdetails";

const categories = [
  "All Projects",
  "Custom Development",
  "Wordpress Website",
  "SEO Projects",
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [activeProject, setActiveProject] = useState(null);

  const filtered =
    selectedCategory === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === selectedCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1, 5);

  return (
    <section className="relative py-32 text-white">

      {/* glow */}
      <div className="absolute w-[600px] h-[600px] bg-lime-300/10 blur-[180px] rounded-full left-1/2 -translate-x-1/2" />

      {/* FILTER */}
      <div className="flex justify-center gap-3 flex-wrap mb-16">
        {categories.map((c) => (
          <motion.button
            key={c}
            onClick={() => setSelectedCategory(c)}
            whileTap={{ scale: 0.95 }}
            className={`
              px-5 py-2 rounded-full text-sm border transition
              ${
                selectedCategory === c
                  ? "bg-lime-300 text-black"
                  : "bg-white/5 border-white/10 text-gray-400"
              }
            `}
          >
            {c}
          </motion.button>
        ))}
      </div>

      {/* FEATURED PROJECT (HERO STYLE CARD) */}
      {featured && (
        <motion.div
          onClick={() => setActiveProject(featured)}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            relative cursor-pointer
            max-w-5xl mx-auto mb-16
            rounded-3xl overflow-hidden
            bg-white/5 border border-white/10
            backdrop-blur-xl
          "
        >
          <img
            src={featured.image}
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
          />

          <div className="absolute bottom-0 p-8 bg-gradient-to-t from-black/90 w-full">
            <h2 className="text-3xl font-bold text-lime-300">
              {featured.title}
            </h2>
            <p className="text-gray-300 mt-2">
              {featured.subtitle}
            </p>

            <div className="flex items-center gap-2 mt-4 text-lime-300">
              View Case Study <FaArrowRight />
            </div>
          </div>
        </motion.div>
      )}

      {/* SECONDARY PROJECTS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rest.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveProject(p)}
            whileHover={{
              scale: 1.03,
              y: -6,
            }}
            className="
              relative cursor-pointer
              rounded-2xl overflow-hidden
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >
            <img
              src={p.image}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lime-300 font-semibold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {p.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            isOpen={true}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}