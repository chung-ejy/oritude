import React from "react";
import HorizontalBarWrapper from "../../wrappers/HorizontalBarWrapper";
import JoinImage from "../../../assets/join.png"
const Join = () => {
  return (
    <HorizontalBarWrapper>
          {/* Large Icon on the Left */}
          <div className="col-md-6">
            <img src={JoinImage} alt="Empowering Financial Education" className="img-fluid rounded shadow w-75" />
          </div>
          {/* Center-Aligned Content on the Right */}
          <div className="col-md-6">
            <h1 className="fw-bold text-center text-white text-decoration-underline">Join Us</h1>
            <p className="lead text-center text-white">
              At Oritude, you're not just accessing tools—you’re joining a community committed to clarity, confidence, and calm. Together, we simplify investing, foster life-enriching habits, and empower thoughtful decision-making for markets and beyond.
            </p>
          </div>
    </HorizontalBarWrapper>
  );
};

export default Join;