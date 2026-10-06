"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

const items = [
  {
    title: "Performance Focused",
    desc: "I build fast, optimized and scalable applications.",
  },
  {
    title: "Clean Architecture",
    desc: "Modular, maintainable code structure with best practices.",
  },
  {
    title: "Full Stack Delivery",
    desc: "From UI to backend APIs, everything production ready.",
  },
];

export const Whychoose = () => {
  return (
    <section className="relative py-40 text-white overflow-hidden">

      {/* ===== BACKGROUND LAYERS (PREMIUM DEPTH) ===== */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-300/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="tracking-[0.4em] text-gray-400 text-sm">
            WHY WORK WITH ME
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            I don’t just build websites —
            <br />
            I build{" "}
            <span className="text-lime-300">
              digital experiences
            </span>
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-10
              bg-gradient-to-r from-lime-300 to-yellow-200
              text-black
              px-8 py-3
              rounded-full
              flex items-center gap-2
              mx-auto
              font-semibold
              shadow-lg
              shadow-lime-300/20
            "
          >
            About Me <FaArrowDownLong />
          </motion.button>
        </motion.div>

        {/* ===== CARDS (PREMIUM INTERACTION LAYER) ===== */}
        <div className="grid md:grid-cols-3 gap-10 mt-28">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.08,
                y: -10,
              }}
              className="
                relative
                p-8 rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                cursor-pointer
                overflow-hidden
              "
            >

              {/* glow line */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-lime-300/10 to-transparent" />

              <h2 className="text-2xl font-semibold text-lime-300 relative z-10">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-4 relative z-10 leading-relaxed">
                {item.desc}
              </p>

              {/* bottom glow line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-lime-300 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* ===== FLOATING EXPERIENCE BADGE ===== */}
        {/* TECH STACK STRIP */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="mt-32 text-center"
>
  <p className="text-gray-400 tracking-[0.3em] text-sm">
    CURRENTLY WORKING WITH
  </p>

  <h2 className="text-3xl md:text-5xl font-bold mt-6 text-white">
    Modern <span className="text-lime-300">Production Stack</span>
  </h2>

  <div className="flex flex-wrap justify-center gap-3 mt-10">
    {[
      "React.js",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "React Native",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
      "REST APIs",
      "JWT Auth",
      "WordPress Plugins",
      "Git & GitHub",
      "Vercel / Netlify",
    ].map((tech, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.03 }}
        whileHover={{ scale: 1.1 }}
        className="
          px-4 py-2
          rounded-full
          bg-white/5
          border border-white/10
          text-gray-300
          text-sm
          backdrop-blur-xl
        "
      >
        {tech}
      </motion.span>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
};