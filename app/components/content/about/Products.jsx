import React from "react";

const Products = () => {
  return (
    <section className="products-section py-5 bg-white">
      <div className="container">
        <p className="text-center text-muted mb-5">
          At Oritude, we transform the often-complex world of investing into a space of clarity, confidence, and growth. Our platform is designed to empower individuals by combining transparent financial research with intuitive tools for exploration and learning.
        </p>
        
        {/* Products Row */}
        <div className="row justify-content-center">
          {/* Product Card - OriVault */}
          <div className="col-md-4">
            <div className="card text-center border-primary mb-4">
              <div className="card-body">
                <i className="fas fa-database fa-4x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-primary">The OriVault</h5>
                <p className="card-text text-muted">
                  A collaborative repository of community-reviewed financial research. It organizes complex data into accessible insights, fostering shared learning and growth.
                </p>
              </div>
            </div>
          </div>
          {/* Product Card - Oriflections */}
          <div className="col-md-4">
            <div className="card text-center border-primary mb-4">
              <div className="card-body">
                <i className="fas fa-chart-line fa-4x text-primary mb-3"></i>
                <h5 className="card-title fw-bold text-primary">Oriflections</h5>
                <p className="card-text text-muted">
                  An interactive platform that turns financial data into meaningful insights, helping users explore trends, test ideas, and approach investments with clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Conclusion */}
        <p className="text-center text-muted mt-5">
          By providing these tools, Oritude bridges the gap between financial knowledge and accessibility. Our resources are not just about investments—they’re about cultivating life skills, encouraging resilience, and empowering thoughtful decision-making.
        </p>
      </div>
    </section>
  );
};

export default Products;