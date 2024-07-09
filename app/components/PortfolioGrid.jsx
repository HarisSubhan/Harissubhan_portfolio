// components/PortfolioGrid.js
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      title: "NFT Landing UI",
      subtitle: "App Case Study",
      image: "/images/nft-landing-ui.png", // Update with correct image path
    },
    {
      title: "App Dashboard Design",
      subtitle: "App Case Study",
      image: "/images/app-dashboard-design.png", // Update with correct image path
    },
    {
      title: "Business Landing Page",
      subtitle: "App Case Study",
      image: "/images/business-landing-page.png", // Update with correct image path
    },
    {
      title: "Explore Artwork",
      subtitle: "App Case Study",
      image: "/images/explore-artwork.png", // Update with correct image path
    },
    {
      title: "App Dashboard Design",
      subtitle: "App Case Study",
      image: "/images/app-dashboard-design.png", // Update with correct image path
    },
    {
      title: "Business Landing Page",
      subtitle: "App Case Study",
      image: "/images/business-landing-page.png", // Update with correct image path
    },
    {
      title: "Explore Artwork",
      subtitle: "App Case Study",
      image: "/images/explore-artwork.png", // Update with correct image path
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="relative group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
                layout="responsive"
                width={400}
                height={400}
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
    </div>
  );
};

export default PortfolioGrid;
