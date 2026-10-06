"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { BsList } from "react-icons/bs";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
        <motion.nav
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            max-w-7xl
            mx-auto
            flex
            items-center
            justify-between
            px-6
            py-4
            rounded-full
            border
            border-white/10
            backdrop-blur-xl
            bg-white/5
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          "
        >
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="cursor-pointer"
          >
            <h1 className="text-white text-2xl font-bold tracking-wide">
              Haris Subhan
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{
                  y: -3,
                }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="text-white font-medium transition-all duration-300"
                >
                  {item.name}
                </a>

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-lime-300
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              hidden md:flex
              items-center
              gap-2
              bg-lime-300
              text-black
              font-semibold
              px-6
              py-3
              rounded-full
              shadow-lg
            "
          >
            Let's Talk
            <MdArrowOutward size={20} />
          </motion.button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdClose size={32} />
            ) : (
              <BsList size={32} />
            )}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="
                fixed
                inset-0
                bg-black/70
                backdrop-blur-lg
                z-40
              "
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="
                fixed
                top-0
                left-0
                h-screen
                w-[80%]
                max-w-sm
                bg-[#111]
                border-r
                border-white/10
                z-50
                flex
                flex-col
                justify-center
                px-10
              "
            >
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        text-white
                        text-2xl
                        font-medium
                        hover:text-lime-300
                        transition-all
                      "
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-12
                  bg-lime-300
                  text-black
                  py-4
                  rounded-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-semibold
                "
              >
                Let's Talk
                <MdArrowOutward />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Background Glow */}
      <div
        className="
          fixed
          top-[-150px]
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-lime-300/10
          blur-[150px]
          rounded-full
          pointer-events-none
          z-0
        "
      />
    </>
  );
}