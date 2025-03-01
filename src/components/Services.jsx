import React from "react";
import "./services.css"; // Assuming you have a CSS file for styling
import { FaCode, FaDatabase, FaPaintBrush, FaCogs} from "react-icons/fa";

const services = [
    {
        icon: <FaCode />, 
        title: "Frontend Development",
        description: "Building responsive and high-performance web interfaces with modern JavaScript frameworks."
      },
      {
        icon: <FaPaintBrush />, 
        title: "UI/UX Design",
        description: "Crafting intuitive and visually appealing user experiences with a keen eye for design."
      },
      {
        icon: <FaDatabase />, 
        title: "Database Management",
        description: "Designing and managing structured databases for seamless data handling and security."
      },
      {
        icon: <FaCogs />, 
        title: "API Integration",
        description: "Connecting applications with third-party services for enhanced functionality and automation."
      }

];

const Services = () => {
  return (
    <section className="services">
      <h3 className="h">Skills & Services</h3>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
