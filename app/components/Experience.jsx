import React from "react";

export const Experience = () => {
  return (
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
              src="images/harissubhan1.png" // Correct path to the image in the public directory
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <ul className="space-y-4">
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2024 - Present</h3>
                  <p className="text-3xl font-semibold">MERN Stack Developer</p>
                  <h3 className=" text-gray-400">XYZ Company </h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2018 - 2020</h3>
                  <p className="text-3xl font-semibold">WordPress Developer</p>
                  <h3 className=" text-gray-400">XYZ Company </h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2018 - 2020</h3>
                  <p className="text-3xl font-semibold">React Developer</p>
                  <h3 className=" text-gray-400">XYZ Company </h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2018 - 2020</h3>
                  <p className="text-3xl font-semibold">Back-End Developer</p>
                  <h3 className=" text-gray-400">XYZ Company </h3>
                </div>
              </li>
              <li className="flex items-center space-y-4">
                <div className="mr-4 h-2 w-2 rounded-full bg-green-500"></div>
                <div>
                  <h3 className=" text-gray-400">2021 - 2023</h3>
                  <p className="text-3xl font-semibold">SEO Specialist</p>
                  <h3 className=" text-gray-400">99 Technologies</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
