"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { BsList } from "react-icons/bs";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white  fixed w-full top-0 z-10">
      <nav
        style={{ background: "#232327" }}
        className="container py-4  rounded-full mx-auto flex justify-between items-center p-5"
      >
        <div>
          <h1 className="text-2xl">Haris Subhan</h1>
        </div>
        <div
          className={`md:static absolute md:min-h-fit min-h-[70vh] top-0 ${
            isMenuOpen ? "left-0 bg-black" : "left-[-100%]"
          } md:w-auto w-full flex items-center  px-5 transition-all duration-1000 ease-in-out`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-xl">
            <li>
              <a
                className="hover:text-gray-500"
                href="#home"
                onClick={onToggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500"
                href="#porject"
                onClick={onToggleMenu}
              >
                PROJECT
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500"
                href="#about"
                onClick={onToggleMenu}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500"
                href="#contact"
                onClick={onToggleMenu}
              >
                CONTACT
              </a>
            </li>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                style={{ background: "#F1FF9D" }}
                className="border text-black text-xl rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
              >
                Let's Talk
                <MdArrowOutward />
              </button>
            </div>
          </ul>
        </div>
        <div className="md:hidden absolute right-5 top-5">
          <BsList
            onClick={onToggleMenu}
            size={30}
            color="#FFFFFF"
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};
