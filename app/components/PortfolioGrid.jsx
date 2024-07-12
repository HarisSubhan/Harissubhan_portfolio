"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

import portfolioItems from "./projectsdetails";

const PortfolioGrid = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() => openModal(item)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                layout="responsive"
                width={400}
                height={10}
                unoptimized
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
