"use client";

import React from "react";
import SkillBar from "./SkillBar";
import { FaArrowRight } from "react-icons/fa";

const skills = [
  { name: "React", percentage: 86 },
  { name: "Next Js", percentage: 80 },
  { name: "Node", percentage: 73 },
  { name: "Javascript", percentage: 70 },
];

const ProfessionalSkills = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:mt-10 p-8 rounded-lg shadow-lg ">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          <span style={{ color: "#F1FF9D" }}>My Professional Background</span>{" "}
          Skills And Accomplishments
        </h2>
        <p className="text-gray-400 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </p>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
        <img
          src="images/download.png  " // replace with your image path
          alt="Professional Background"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProfessionalSkills;
