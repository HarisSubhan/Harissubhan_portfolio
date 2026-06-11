"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";

export default function ProjectModal({ isOpen, onClose, project }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/10">

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <MdClose size={22} />
              </button>

              {/* Image */}
              <img
                src={project.image}
                className="h-80 w-full object-cover"
              />

              {/* Content */}
              <div className="p-8">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-gray-400 mt-3">{project.description}</p>

                <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
                  <div>
                    <p className="text-gray-500">Client</p>
                    <p>{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Category</p>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Timeframe</p>
                    <p>{project.timeframe}</p>
                  </div>
                </div>

                <div className="mt-8 space-y-3 text-gray-300">
                  {project.points.map((p, i) => (
                    <div key={i}>• {p}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}