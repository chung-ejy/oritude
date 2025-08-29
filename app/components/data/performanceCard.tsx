import React, { useContext, useEffect } from "react";
import dataContext from "../../context/data/dataContext";

const PerformanceCard: React.FC = () => {
  const { loading, backtestResults } = useContext(dataContext);
  const performance = backtestResults?.metrics;
  useEffect(() => {
  if (backtestResults.metrics) {
      const performance = backtestResults?.metrics;
    }
  }, [backtestResults]);

  if (loading) {
    return <p>Loading performance data...</p>;
  }

  if (!performance) {
    return <p>No performance data available.</p>;
  }

  return (
    <div className="card shadow-sm p-3 mb-3 bg-light">
      <div className="card-header text-primary">
        <h5>📊 Performance Overview</h5>
        <small className="text-muted">
          {performance.date ? new Date(performance.date).toLocaleDateString() : "No Date Provided"}
        </small>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {Object.entries(performance).map(([key, value]) =>
            key !== "date" && (
              <li key={key} className="list-group-item">
                <strong>{key.replace(/_/g, " ").toUpperCase()}:</strong> {typeof value === "number" ? value.toFixed(3) : value}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PerformanceCard;