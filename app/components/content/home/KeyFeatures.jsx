import React from "react";

const KeyFeatures = () => {
  return (
    <section className="py-5 bg-secondary text-white">
      <div className="container">
        <h2 className="display-5 fw-bold text-light text-center mb-4">Key Features</h2>
        <div className="row g-4">
          {/* Card: Interactive Tools */}
          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body">
                <i className="fas fa-tools display-1 text-primary mb-3"></i> {/* Icon added */}
                <h5 className="card-title text-dark">Interactive Tools</h5>
                <p className="card-text text-muted">
                  Empowering users with intuitive tools to explore, analyze, and gain actionable insights from financial data.
                </p>
              </div>
            </div>
          </div>
          {/* Card: Community */}
          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body">
                <i className="fas fa-users display-1 text-primary mb-3"></i> {/* Icon added */}
                <h5 className="card-title text-dark">Community</h5>
                <p className="card-text text-muted">
                  A vibrant, collaborative space where ideas are shared, feedback is valued, and growth is collective.
                </p>
              </div>
            </div>
          </div>
          {/* Card: In-depth Research */}
          <div className="col-md-4">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body">
                <i className="fas fa-search display-1 text-primary mb-3"></i> {/* Icon added */}
                <h5 className="card-title text-dark">In-depth Research</h5>
                <p className="card-text text-muted">
                  Delivering transparent and well-curated financial research to foster informed decision-making and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;