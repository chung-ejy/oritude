import React from "react";
import HorizontalBarWrapper from "../../wrappers/HorizontalBarWrapper";
import AboutVisionImage from "../../../assets/about_vision.png"
const Vision = () => {
  return (
        <HorizontalBarWrapper bgColor="bg-secondary">
            {/* Large Icon on the Left */}
            <div className="col-md-6">
            <img src={AboutVisionImage} alt="Empowering Financial Education" className="img-fluid rounded shadow w-75" />
            </div>
            <div className="col-md-6">
                <h1 className="fw-bold text-center text-white text-decoration-underline">Our Vision</h1>
                <p className="lead text-center text-white">
                At Oritude, our vision is to normalize the investing process by making financial education transparent, accessible, and empowering for everyone.
                </p>
                <p className="lead text-center text-white">
                We believe that investing isn't just about financial health—it’s about developing skills and habits that can enrich other areas of life. Whether it’s learning to approach challenges with calm and clarity, cultivating consistent decision-making practices, or fostering a mindset of growth and resilience, the principles behind healthy investing transcend markets.
                </p>
            </div>
    </HorizontalBarWrapper>
  );
};

export default Vision;