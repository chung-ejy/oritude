import React from "react";

const HorizontalBarWrapper = ({ children, bgColor = "bg-primary" }) => {
    return (
      <div className={`d-flex align-items-center justify-content-center ${bgColor} py-5`}>
        <div className="container text-center">
          <div className="row align-items-center">{children}</div>
        </div>
      </div>
    );
};  

export default HorizontalBarWrapper;