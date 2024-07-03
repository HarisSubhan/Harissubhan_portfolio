import React from "react";

export const Body = () => {
  return (
    <>
      <div className="container mx-auto items-center flex p-5 gap-4">
        <h1 className="text-2xl text-white">Check Out My </h1>
        <img
          width="100px"
          src="https://creativemela.com/themeforest_html/pefo/Pefo_HTML_With%20Product/assets/images/hero/long-arrow.svg"
          alt=""
        />
        <button
          style={{ background: "#233346", color: "#CCDBEB" }}
          className="border text-white text-xl  text-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
        >
          Linkedin
        </button>
        <button
          style={{ background: "#3F3238", color: "#E2297B" }}
          className="border text-white text-xl  text-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
        >
          Git Hub
        </button>
        <button
          style={{ background: "#333431", color: "#F1FF9D" }}
          className="border text-white text-xl  text-black rounded-full px-6 py-2 flex items-center gap-2 hover:bg-yellow-200"
        >
          Instagram
        </button>
      </div>

      <div className="container mx-auto items-center flex p-5 gap-4 text-white">
        <h1>Hey ! I'm Haris Subhan</h1>
        <h1>I develop Full Stack Web Application , Using MERN Stack</h1>
      </div>
    </>
  );
};
