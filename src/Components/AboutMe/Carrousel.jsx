import React, { useState, useEffect } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import "./Techstack.css";

const Carrousel = () => {
  const components = [<Frontend />, <Backend />, <Tools />];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % components.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {components.map((component, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
        >
          {component}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
