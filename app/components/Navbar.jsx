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
    <>
      <header className="text-white">
        <nav className="container flex justify-between p-5 items-center mx-auto">
          <div>
            <h1 className="text-2xl">Haris Subhan</h1>
          </div>
          <div
            className={`md:static absolute md:min-h-fit min-h-[70vh] top-0  ${
              isMenuOpen ? "left-0 bg-black" : "left-[-100%]"
            } md:w-auto w-full flex items-center px-5 transition-all duration-1000 ease-in-out`}
          >
            <ul className="flex md:flex-row text-xl flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 " href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500 " href="#">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  SERVICE
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  ABOUT
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  CONTACT
                </a>
              </li>
              <div className="flex items-center gap-4">
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
    </>
  );
};
