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
        "I'm a passionate and results-oriented MERN Stack developer with a strong ability to design, develop, and deploy web applications",
    },
    {
      title: "Front-End Developer",
      content:
        "Developed and maintained the front-end of various client websites using React and other modern web technologies. Improved website performance and accessibility, resulting in a 20% increase in user engagement.",
    },
    {
      title: "Back-End Developer",
      content:
        "Developed and maintained server-side logic and database structures for client applications. Optimized database queries, reducing response times and improving performance by 25%.",
    },
    {
      title: "Senior SEO Specialist",
      content:
        "Led SEO strategies for multiple high-profile clients, resulting in significant traffic and ranking improvements.",
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
