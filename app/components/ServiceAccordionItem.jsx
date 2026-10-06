"use client";

const ServiceAccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-500 mt-4 text-2xl rounded-3xl mb-2 w-full">
      <div
        className="p-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
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

export default ServiceAccordionItem;
