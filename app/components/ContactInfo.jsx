import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <h1 className="text-3xl font-bold mb-2">GET IN TOUCH</h1>
      <p className="text-gray-400 mb-8">Don't be afraid man just say hello!</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <FaPhoneAlt className="text-2xl text-yellow-300" />
          <div className="ml-4">
            <p className="font-bold">Phone</p>
            <p className="text-gray-400">+92 302 010 2482</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-2xl text-yellow-300" />
          <div className="ml-4">
            <p className="font-bold">Address</p>
            <p className="text-gray-400">Pakistan Islamabad</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-2xl text-yellow-300" />
          <div className="ml-4">
            <p className="font-bold">Email</p>
            <p className="text-gray-400">muhammadharissubhan@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
