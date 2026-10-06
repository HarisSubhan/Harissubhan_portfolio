"use client";

import React from "react";

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <span className="text-white">{skill.name}</span>
      <span className="text-white">{skill.percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
      <div
        className="bg-yellow-300 h-2 rounded-full"
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;
