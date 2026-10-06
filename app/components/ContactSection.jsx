"use client";

import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="container mx-auto my-20 px-4 md:px-0">
      <h1
        style={{ color: "#F1FF9D" }}
        className="text-6xl  text-center font-bold mb-4"
      >
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
