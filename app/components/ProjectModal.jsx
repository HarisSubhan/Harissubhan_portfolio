"use client";

import React from "react";
import { MdClose } from "react-icons/md";
import portfolioItems from "./projectsdetails";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed cursor-pointer inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto">
      <div className="bg-black border border-yellow-200 text-white rounded-lg overflow-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 p-4 md:p-8 relative ">
        <button
          className="absolute top-2 right-2 border rounded-full p-1 bg-yellow-200 text-black hover:text-yellow-200 hover:bg-opacity-0"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>

        <div className="overflow-y-scroll  max-h-[90vh]">
          <img
            style={{ width: "750px", height: "400px" }}
            className="w-full h-auto rounded-md mb-4 object-cover"
            src={project.image}
            alt={project.title}
          />

          <div className="flex flex-col md:flex-row justify-around items-start md:items-center mt-4 space-y-4 md:space-y-0">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Clients:</p>
              <h2 className="text-md font-semibold">{project.client}</h2>
            </div>
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Category:</p>
              <h2 className="text-md font-semibold">{project.category}</h2>
            </div>
            <div>
              <p className="text-gray-400">Timeframe:</p>
              <h2 className="text-md font-semibold">{project.timeframe}</h2>
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-bold mt-10 mb-4">
            {project.title}
          </h1>

          <p className="mb-4 text-gray-300">{project.description}</p>
          <div className="mt-9">
            {project.points.map((point, index) => (
              <div key={index} className="flex gap-4  items-center mb-4">
                {project.icon}
                {point}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
            <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  // style={{ width: "45%", height: "45%" }}
                  className="md:w-5/12 rounded-md object-fit"
                  src={img}
                  alt={`${project.title}-${index}`}
                />
              ))}
            </div>
          </div>

          {/* <div className="flex justify-between p-2 items-center">
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300">
              Previous
            </button>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300">
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
