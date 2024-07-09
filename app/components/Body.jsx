import { Span } from "next/dist/trace";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Body = () => {
  return (
    <>
      <div className="container p-5 flex flex-col lg:flex-row mx-auto">
        <div className="lg:w-3/4 w-full content-center  lg:mb-0 lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div>
              <h1 className="text-3xl text-white">Check Out My </h1>
            </div>
            <div>
              <img
                className="w-24 lg:w-auto"
                src="https://creativemela.com/themeforest_html/pefo/Pefo_HTML_With%20Product/assets/images/hero/long-arrow.svg"
                alt=""
              />
            </div>

            <div className="flex gap-2 mt-4 lg:mt-0">
              <a
                href="https://www.linkedin.com/in/muhammad-haris-subhan-6532b7215/"
                style={{ background: "#233346", color: "#CCDBEB" }}
                className="border text-white text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/HarisSubhan"
                style={{ background: "#3F3238", color: "#E2297B" }}
                className="border text-white text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/haris_subhan_/"
                style={{ background: "#333431", color: "#F1FF9D" }}
                className="border text-white text-lg rounded-full px-4 py-2 flex items-center gap-2 hover:bg-yellow-200"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-5xl font-mono lg:text-7xl text-white">
              <span style={{ color: "#F1FF9D" }}>Hey!I am Haris Subhan</span>{" "}
              Building Modern Web Applications
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <button
              style={{ background: "" }}
              className="border text-white text-lg rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200 hover:text-black"
            >
              Hy! I'm Haris
              <MdArrowOutward />
            </button>
            <button
              style={{ background: "#F1FF9D" }}
              className="text-black text-lg rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
            >
              Download CV
              <MdArrowOutward />
            </button>
          </div>
        </div>
        <div className="lg:w-2/4 w-full  flex justify-center items-center">
          <img
            className="w-full max-w-xs lg:max-w-full"
            src="images/harissubhan1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
