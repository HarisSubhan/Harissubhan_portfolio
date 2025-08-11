"use client";
import { FaCheck } from "react-icons/fa";
import { Image } from "next/image";

const portfolioItems = [
  {
  title: "Explore Islam, Parent Portal, Child Portal, and Admin Portal",
  subtitle: "Multi-role educational platform with tailored dashboards",
  image: "/images/parentdashboard.png",
  images: [
    "/images/childdashboard.png",
    "/images/admindashboard.png"
  ],
  client: "Internal Project",
  category: "Custom Development",
  timeframe: "April 01, 2025",
  description:
    "A full-stack web platform designed to provide an engaging Islamic learning experience for children, with role-based portals for parents, children, and administrators. The system includes content modules such as books, videos, quizzes, and assignments, with each role having a customized dashboard and permissions.",
  points: [
    "Developed using Vite, React, Tailwind CSS, Redux, and React Router for a fast and responsive frontend.",
    "Implemented secure role-based authentication for Parent, Child, and Admin accounts.",
    "Custom dashboards: Parents track progress, Children access learning materials, Admins manage content and users.",
    "Integrated multimedia learning modules including interactive quizzes, videos, and downloadable resources.",
    "Optimized for scalability and future expansion with modular architecture and API-driven backend."
  ],
  icon: <FaCheck size={20} />,
},

  {
    title: "Bright Ideas Agent Performance Dashboard",
    subtitle:
      "Comprehensive Insights for Monitoring and Improving Team Performance",
    image: "/images/Bi.png",
    images: ["/images/Bi.png"],
    client: "Bright Ideas",
    category: "Website Design",
    timeframe: "September 01, 2024",
    description:
      "The Bright Ideas Agent Performance Dashboard is a powerful tool designed to help managers and team leaders efficiently track, evaluate, and improve the performance of their customer service agents. With an intuitive interface and detailed reporting features, this dashboard provides an overview of agent activities, escalations, and evaluations, allowing leaders to make data-driven decisions that boost overall team productivity and service quality.",
    points: [
      "Agent Listing & Performance Overview",
      "Escalations Rating Chart",
      "Detailed Evaluation & Escalation Modules",
      "Notifications Feed",
      "Easy Navigation & Role Management",
    ],
    icon: <FaCheck size={20} />,
  },
  {
    title: "Sports Website",
    subtitle: "Get the latest League News on Sports324",
    image: "/images/sportsBlog.png",
    images: ["/images/sports324.png"],
    client: "Blog",
    category: "Wordpress Website",
    timeframe: "March 03, 2023",
    description:
      "Experience live cricket Streaming from anywhere! Discover the best legal streaming services for your region and watch every ball of the action.",
    points: [
      "Live Streaming",
      "Live Sports News",
      "National FootBall League",
      "Cricket",
    ],
    icon: <FaCheck size={20} />,
  },
  {
    title: "E-Commerce Website",
    subtitle: "E-Commerce with Taiwind css admin dashboard",
    image: "/images/1.png",
    images: ["/images/2.png", "/images/3.png"],
    client: "MD Towkib Tomir",
    category: "Custom Development",
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
    category: "Custom Development",
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
    category: "Custom Development",
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
  {
    title: "PC Mart UAE",
    subtitle: "Website",
    image: "/images/PCmart.png",
    images: ["/images/PCmartProduct.png", "/images/PcmartSeo.png"],
    client: "UAE",
    category: "SEO Projects",
    timeframe: "July 7, 2024",
    description:
      "PC Mart: One Stop of refurbished electronics in UAE. Shop Renewed laptops, desktops, gaming PCs, and accessories for the best deals on trusted brands at PCMart.",
    points: [
      "The main dashboard area displays various sections and widgets",
      "Total Users (appears three times, probably an error) 10,430 users in each card",
      "An Available Now banner promoting how to use the new version of the dashboard",
      "A utility-first CSS framework that enables rapid UI development with customizable and reusable classes.",
    ],
    icon: <FaCheck size={20} />,
  },
  {
  title: "Expo-Kasa WordPress Website",
  subtitle: "Modern, responsive business website with custom features",
  image: "/images/expokasa.png",
  images: [
    "/images/expokasa.png",
    "/images/expo.png",
  ],
  client: "Expo-Kasa",
  category: "Wordpress Website",
  timeframe: "August 15, 2025",
  description:
    "A custom WordPress website designed for Expo-Kasa to showcase services, projects, and contact information with a professional and user-friendly layout. Built with Elementor for flexible page building, integrated SEO tools, and optimized for mobile responsiveness.",
  points: [
    "Developed on WordPress with Elementor for easy content management.",
    "Custom theme styling to match Expo-Kasa branding.",
    "Integrated SEO optimization for better search engine visibility.",
    "Mobile-first design ensuring flawless experience on all devices.",
    "Contact form and inquiry system for lead generation."
  ],
  icon: <FaCheck size={20} />,
},
{
  title: "TAMR Solutions – Service Company Website",
  subtitle: "Professional business website with service showcase and lead generation",
  image: "/images/tamrsolution.png",
  images: [
    "/images/tamr.png",
    "/images/tamrsolutions.png",
  ],
  client: "TAMR Solutions",
  category: "Wordpress Website",
  timeframe: "February 10, 2025",
  description:
    "A sleek, responsive website for TAMR Solutions, a professional service provider. The site highlights the company’s offerings, showcases completed projects, and features an intuitive contact system to connect with potential clients. Built to be fast, SEO-friendly, and easy to update.",
  points: [
    "Developed on WordPress with a custom, mobile-friendly theme.",
    "Structured service pages with clear call-to-actions for inquiries.",
    "Integrated contact form with spam protection and email notifications.",
    "Optimized for performance and SEO to improve online visibility.",
    "Easy-to-manage backend for updating services and portfolio."
  ],
  icon: <FaCheck size={20} />,
}


];

export default portfolioItems;
