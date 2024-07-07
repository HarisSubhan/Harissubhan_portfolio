import React from "react";

export const Experience = () => {
  return (
    <>
      <div className="min-h-screen bg-dark-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1
            style={{ color: "#F1FF9D" }}
            className="text-4xl text-center font-bold mb-4"
          >
            Educations & Experience
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://creativemela.com/themeforest_html/pefo/Pefo_HTML_With%20Product/assets/images/educations/stylish-man.png" // Place your image in the public/images directory
                alt="Profile Picture"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-xl font-semibold">2019 - Present</h3>
                    <p className="text-gray-400">
                      UI/UX Designer & Developer at Luminous Labs
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Front-End WordPress Developer
                    </h3>
                    <p className="text-gray-400">Archimple.Com</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-xl font-semibold">2024 - Present</h3>
                    <p className="text-gray-400">
                      Webflow Developer & Co-Founder at Themeforest
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Themeforest Designer
                    </h3>
                    <p className="text-gray-400">Luminous Labs</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Leader Team Of UI/UX Design
                    </h3>
                    <p className="text-gray-400">Oyollo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
