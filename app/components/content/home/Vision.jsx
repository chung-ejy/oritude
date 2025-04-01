import React from "react";
import VisionImage from "../../../assets/vision.png";

const Vision = () => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-primary py-5">
      <div className="container text-center">
        <div className="row align-items-center">
        <div className="col-md-6">
            <img src={VisionImage} alt="Empowering Financial Education" className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-white mb-4">
            Our Vision
            </h1>
            <p className="lead text-white mb-4">
            At Oritude, our vision is to normalize the investing process by making financial education transparent, accessible, and empowering for everyone.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vision;