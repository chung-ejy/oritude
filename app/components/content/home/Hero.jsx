import React from "react";
import HeroImage from "../../../assets/hero.png";

const Hero = () => {
  return (
    <div className="d-flex align-items-center justify-content-center bg-white py-5">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-success mb-4">
              Clarity Today, Freedom Always
            </h1>
            <p className="lead text-muted mb-4">
              Oritude is a transparent, community-driven platform committed to empowering individuals through accessible financial education. Rooted in Calm, Clear, and Consistent values, we simplify complexity, foster trust, and enable confident decision-making while promoting shared empowerment.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success btn-lg rounded-pill">Join the Movement</button>
              <button className="btn btn-outline-success btn-lg rounded-pill">
                <a href="/about" className="text-decoration-none text-success">
                  Learn More
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={HeroImage} alt="Empowering Financial Education" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;