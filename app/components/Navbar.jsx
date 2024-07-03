import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-5">
      <div className="container mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Haris Subhan</h1>
        <ul className="flex gap-8 items-center">
          <li className="list-none">
            <a href="#" className="hover:text-yellow-300 text-xl">
              Home
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-yellow-300 text-xl">
              Portfolio
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-yellow-300 text-xl">
              Services
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-yellow-300 text-xl">
              About
            </a>
          </li>
          <li className="list-none">
            <a href="#" className="hover:text-yellow-300 text-xl">
              Contact
            </a>
          </li>
          <button
            style={{ background: "#F1FF9D" }}
            className="border text-xl border-transparent text-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
          >
            Let's Talk
            <MdArrowOutward />
          </button>
        </ul>
      </div>
    </nav>
  );
};
