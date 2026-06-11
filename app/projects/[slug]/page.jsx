"use client";

import React from "react";
import { useParams } from "next/navigation";
import portfolioItems from "@/components/projectsdetails";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = portfolioItems.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="text-white p-10">
        Project not found
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src={project.image}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold text-lime-300">
            {project.title}
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* PROBLEM */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {project.problem ||
              "Client needed a scalable, modern, and optimized digital solution to improve business presence and user experience."}
          </p>
        </div>

        {/* SOLUTION */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-3">
            Solution
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {project.solution ||
              "Built a full-stack modern application with optimized UI, API integration, and responsive design."}
          </p>
        </div>

        {/* FEATURES */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-3">
            Key Features
          </h2>

          <ul className="space-y-2 text-gray-300">
            {project.points?.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>

        {/* TECH STACK */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-3">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-6">
            Screenshots
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl border border-white/10"
              />
            ))}
          </div>
        </div>

        {/* RESULT */}
        <div>
          <h2 className="text-2xl text-lime-300 mb-3">
            Result
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {project.result ||
              "Improved performance, better UX, and scalable architecture ready for production use."}
          </p>
        </div>
      </div>
    </section>
  );
}