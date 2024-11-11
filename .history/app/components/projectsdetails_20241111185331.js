"use client";
import { FaCheck } from "react-icons/fa";

const portfolioItems = [
  {
    title: "E-Commerce Website",
    subtitle: "E-Commerce with Taiwind css admin dashboard",
    image: "/images/1.png",
    images: ["/images/Bi.png"],
    client: "MD Towkib Tomir",
    category: "Web Development",
    timeframe: "June 03, 2024",
    description:
      "Developed a feature-rich e-commerce platform complete with a robust admin panel for managing products, orders, and user accounts.Technologies used In MongoDB, Express.js, React, Node.js, Redux, Material UI",
    points: [
      "User registration, login, and authentication",
      "Product listing with advanced search and filter capabilities",
      "Shopping cart, checkout process, and payment gateway integration",
      "Designed and implemented the database schema using MongoDB and Mongoose.",
    ],
    icon: <FaCheck size={20} />,
  },
  {
    title: "E-Commerce Website",
    subtitle: "E-Commerce with Taiwind css admin dashboard",
    image: "/images/1.png",
    images: ["/images/2.png", "/images/3.png"],
    client: "MD Towkib Tomir",
    category: "Web Development",
    timeframe: "June 03, 2024",
    description:
      "Developed a feature-rich e-commerce platform complete with a robust admin panel for managing products, orders, and user accounts.Technologies used In MongoDB, Express.js, React, Node.js, Redux, Material UI",
    points: [
      "User registration, login, and authentication",
      "Product listing with advanced search and filter capabilities",
      "Shopping cart, checkout process, and payment gateway integration",
      "Designed and implemented the database schema using MongoDB and Mongoose.",
    ],
    icon: <FaCheck size={20} />,
  },
  {
    title: "Prfessional Photographer",
    subtitle: "Capturing moments Creating memories",
    image: "/images/4.png",
    client: "Jenny Wilsona",
    category: "React Development",
    timeframe: "March 03, 2024",
    description:
      "A good photography website is a showcase for photos. Take inspiration from real-world photo galleries to design your digital photo gallery.",
    points: [
      "Picture Zoom In or Zoom Out",
      "Upload a picture",
      "Grid the picture",
    ],
    images: ["/images/5.png", "/images/6.png"],
    icon: <FaCheck size={20} />,
  },
  {
    title: "Admin Panel",
    subtitle: "User Admin Panel",
    image: "/images/7.png",
    images: ["/images/7.png", "/images/8.png"],
    client: "Benjamin Smith",
    category: "Back-End Development",
    timeframe: "July 7, 2024",
    description:
      "A popular React framework known for its server-side rendering capabilities and static site generation, which would be beneficial for an admin dashboard to ensure fast load times and SEO benefits.",
    points: [
      "The main dashboard area displays various sections and widgets",
      "Total Users (appears three times, probably an error) 10,430 users in each card",
      "An Available Now banner promoting how to use the new version of the dashboard",
      "A utility-first CSS framework that enables rapid UI development with customizable and reusable classes.",
    ],
    icon: <FaCheck size={20} />,
  },
];

export default portfolioItems;
