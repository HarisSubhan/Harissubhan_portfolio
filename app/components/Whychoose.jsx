"use client";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import Accordion from "./Accordion";

export const Whychoose = () => {
  return (
    <>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row text-center justify-around items-center text-white gap-6 md:gap-0">
          <div className="why">
            <h1 className=" font-bold text-4xl md:text-3xl lg:text-5xl xl:text-7xl">
              Why Choose Me
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              style={{ background: "#F1FF9D" }}
              className="border text-black text-lg md:text-xl rounded-full px-4 md:px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
            >
              About Me
              <FaArrowDownLong />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center mt-10 px-4">
        <div className="flex w-3/4 content-center gap-3 justify-center items-center text-white mb-6 md:mb-0">
          <div>
            <h1 className="text-6xl md:text-9xl">2+</h1>
          </div>
          <div>
            <h1 className="text-lg md:text-1xl" style={{ color: "#F1FF9D" }}>
              Years <br /> Experience
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4">
          <div className=" w-full md:w-1/2 justify-center">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
};
