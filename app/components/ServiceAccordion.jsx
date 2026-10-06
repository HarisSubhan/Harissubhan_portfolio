import React from "react";
import { useState } from "react";

import ServiceAccordionItem from "./ServiceAccordionItem";

const ServiceAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "UI/UX Design Services",
      content:
        "Proin vestibulum purus quis pulvinar aliquet. In dignissim felis eget ultricies accumsan. Morbi lectus lectus, ultricies et iaculis nec, efficitur ac justo. Praesent dui mi, hendrerit et feugiat nec, commodo in dolor.",
    },
    {
      title: "Website Design React",
      content:
        "Proin vestibulum purus quis pulvinar aliquet. In dignissim felis eget ultricies accumsan. Morbi lectus lectus, ultricies et iaculis nec, efficitur ac justo. Praesent dui mi, hendrerit et feugiat nec, commodo in dolor.",
    },
    {
      title: "SEO & Content Writing",
      content:
        "Proin vestibulum purus quis pulvinar aliquet. In dignissim felis eget ultricies accumsan. Morbi lectus lectus, ultricies et iaculis nec, efficitur ac justo. Praesent dui mi, hendrerit et feugiat nec, commodo in dolor.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <ServiceAccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ServiceAccordion;
