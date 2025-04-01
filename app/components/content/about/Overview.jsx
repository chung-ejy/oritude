import React from "react";
import OverviewImage from "../../../assets/overview.png";
import HorizontalBarWrapper from "../../wrappers/HorizontalBarWrapper";
const Overview = () => {
  return (
    <HorizontalBarWrapper>
          {/* Left-Aligned Content */}
          <div className="col-md-6">
            <h1 className="fw-bold text-center text-white text-decoration-underline">Who We Are</h1>
            <p className="lead text-center text-white">
              At Oritude, we believe that clarity today leads to freedom always. We’re a transparent, community-driven platform dedicated to empowering individuals through accessible financial research and education.
            </p>
            <p className="lead text-center text-white">
              Rooted in the values of being Calm, Clear, and Consistent, we strive to provide tools and resources that simplify complex concepts, foster trust, and enable confident decision-making. With Oritude, you’re not just accessing tools—you’re joining a community that values learning, transparency, and shared empowerment.
            </p>
          </div>
          {/* Large Icon on the Right */}
          <div className="col-md-6">
          <img src={OverviewImage} alt="Empowering Financial Education" className="img-fluid rounded shadow w-75" />
          </div>
    </HorizontalBarWrapper>
  );
};

export default Overview;