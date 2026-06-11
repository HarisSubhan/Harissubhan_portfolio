"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-lime-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300">
                👋 Welcome To My Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-lime-300 to-yellow-300 bg-clip-text text-transparent">
                Haris Subhan
              </span>
            </motion.h1>

            <div className="mt-6 text-2xl lg:text-4xl text-gray-300">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "React Developer",
                  1500,
                  "Node.js Developer",
                  1500,
                  "React Native Developer",
                  1500,
                ]}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-gray-400 text-lg max-w-xl"
            >
              I build scalable web applications, mobile apps, dashboards,
              WordPress plugins, and enterprise software using React, Next.js,
              Node.js, MongoDB, MySQL, and React Native.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button className="bg-lime-300 text-black px-8 py-4 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
                Hire Me
                <MdArrowOutward />
              </button>

              <a
                href="/cv/harissubhan.pdf"
                download
                className="border border-white/20 px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition"
              >
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 flex-wrap">
              <div>
                <h2 className="text-4xl font-bold text-lime-300">20+</h2>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-lime-300">3+</h2>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-lime-300">10+</h2>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[500px] h-[500px] bg-lime-300/10 blur-[120px] rounded-full" />

            <img
              src="/images/harissubhan1.png"
              alt="Haris Subhan"
              className="
                relative
                z-10
                w-[350px]
                lg:w-[500px]
                rounded-full
                border
                border-white/10
                shadow-2xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}