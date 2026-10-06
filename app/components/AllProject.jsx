import React from "react";
import PortfolioGrid from "./PortfolioGrid";

export const AllProject = () => {
  return (
    <div className="container mx-auto text-white mt-9 p-2">
      <p style={{ color: "#F1FF9D" }} className="text-center md:text-left">
        Best Of Our Works
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-5xl text-center md:text-left">
            Latest Project
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="border border-gray-500 text-gray-500 text-sm md:text-lg rounded-full px-4 md:px-6 py-2 hover:bg-yellow-200 hover:text-black">
            ALL Projects
          </button>
          <button className="border border-gray-500 text-gray-500 text-sm md:text-lg rounded-full px-4 md:px-6 py-2 hover:bg-yellow-200 hover:text-black">
            Custom Projects
          </button>
          <button className="border border-gray-500 text-gray-500 text-sm md:text-lg rounded-full px-4 md:px-6 py-2 hover:bg-yellow-200 hover:text-black">
            Wordpress Website
          </button>
          <button className="border border-gray-500 text-gray-500 text-sm md:text-lg rounded-full px-4 md:px-6 py-2 hover:bg-yellow-200 hover:text-black">
            SEO Projects
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center my-8">
          Portfolio
        </h1>
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default AllProject;
