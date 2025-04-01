import React from "react";
import Overview from "../components/content/about/Overview.jsx";
import Vision from "../components/content/about/Vision.jsx";
import Values from "../components/content/about/Values.jsx";
import Join from "../components/content/about/Join.jsx";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="display-4 fw-bold text-primary mb-4 py-4">About Us</h1>
      <Overview />
      <Vision />
      <Values />
      <Join />
    </div>
  );
};

export default About;