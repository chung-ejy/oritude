import React from "react";
import HorizontalBarWrapper from "../../wrappers/HorizontalBarWrapper";
import ValueImage from "../../../assets/values.png"
const Values = () => {
  return (
    <HorizontalBarWrapper bgColor="bg-white">
          {/* Center-Aligned Content on the Right */}
          <div className="col-md-6">
            <h1 className="fw-bold text-center text-primary text-decoration-underline">Our Values</h1>
            <p className="lead text-center text-primary">
              <strong>Clear:</strong> We simplify complexity, breaking down barriers to understanding with tools and resources that bring focus and clarity to every decision.
            </p>
            <p className="lead text-center text-primary">
              <strong>Confident:</strong> We empower individuals to make thoughtful, informed choices with conviction—fostering a sense of control and self-assurance in navigating uncertainty.
            </p>
            <p className="lead text-center text-primary">
              <strong>Calm:</strong> We champion a steady, consistent approach to challenges, creating space for patience and thoughtful reflection in both investing and life.
            </p>
          </div>
            <div className="col-md-6">
            <img src={ValueImage} alt="Empowering Financial Education" className="img-fluid rounded shadow w-75" />
            </div>
    </HorizontalBarWrapper>
  );
};

export default Values;