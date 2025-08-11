"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import portfolioItems from "./projectsdetails";

const PortfolioGrid = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-wrap gap-2 justify-center mb-6 mt-4">
        {[
          "All Projects",
          "Custom Development",
          "Wordpress Website",
          "SEO Projects",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border border-gray-500 text-sm md:text-lg rounded-full px-4 md:px-6 py-2 transition-colors ${
              selectedCategory === category
                ? "bg-yellow-200 text-black" // Highlight active category
                : "text-gray-500 hover:bg-yellow-200 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 rounded-b-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                {item.subtitle}
              </p>
              <div className="mt-2">
                <button className="flex items-center text-yellow-200">
                  <span className="mr-2">Read More</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default PortfolioGrid;
