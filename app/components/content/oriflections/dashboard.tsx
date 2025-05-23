import React from "react";
import BacktestForm from "~/components/data/backtestForm";
import TradesTable from "../../data/tradesTable.jsx";
import PortfolioChart from "../../data/portfolioChart.jsx";
import PerformanceCard from "../../data/performanceCard.jsx"; // Import PerformanceCard

const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Configuration Form Section */}
        <div className="col-md-3">
          <BacktestForm />
        </div>

        {/* Data Visualization Section */}
        <div className="col-md-9">
          <div className="mb-4">
            <PortfolioChart />
          </div>

          {/* Performance Card & Trades Table Side-by-Side */}
          <div className="row">
            <div className="col-md-6">
              <PerformanceCard />
            </div>
            <div className="col-md-6">
              <TradesTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;