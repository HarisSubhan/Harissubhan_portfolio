"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="p-6 md:p-8  rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-400 mb-2">Select Subject?</label>
        <div className="flex flex-wrap space-x-4">
          <label className="flex items-center space-x-2 mb-2">
            <input type="radio" name="subject" className="form-radio" />
            <span className="text-gray-400">Front End Developer</span>
          </label>
          <label className="flex items-center space-x-2 mb-2">
            <input type="radio" name="subject" className="form-radio" />
            <span className="text-gray-400">Web design</span>
          </label>
          <label className="flex items-center space-x-2 mb-2">
            <input type="radio" name="subject" className="form-radio" />
            <span className="text-gray-400">React Developer</span>
          </label>
          <label className="flex items-center space-x-2 mb-2">
            <input type="radio" name="subject" className="form-radio" />
            <span className="text-gray-400">SEO</span>
          </label>
        </div>
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Write your message..."
          className="w-full p-4 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          rows="5"
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 flex items-center transition duration-200"
        >
          Send Message
          <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
