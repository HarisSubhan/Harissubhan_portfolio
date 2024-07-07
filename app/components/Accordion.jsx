import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-500 mt-4  text-2xl rounded-3xl rounded-lg mb-2">
      <div
        className=" p-4 text-left flex justify-between items-center focus:outline-none"
        onClick={onToggle}
      >
        <span style={{ color: "#F1FF9D" }} className="font-medium text-white">
          {title}
        </span>
        <span className="text-white text-2xl">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className="text-sm" style={{ color: "#686C71" }}>
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Mern Stack Developer",
      content:
        "Proin vestibulum purus quis pulvinar aliquet. In dignissim felis eget ultricies accumsan. Morbi lectus lectus, ultricies et iaculis nec, efficitur. ac justo. Praesent dui mi, hendrerit et feugiat nec, commodo in dolor.",
    },
    {
      title: "Mern Stack Developer",
      content: "This is the content of the second accordion item.",
    },
    {
      title: "Search Engine Optimize SEO",
      content: "This is the content of the third accordion item.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto">
      {items.map((item, index) => (
        <AccordionItem
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

export default Accordion;
