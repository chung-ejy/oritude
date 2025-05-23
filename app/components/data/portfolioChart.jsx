import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataContext from "../../context/data/dataContext";

const PortfolioChart = () => {
  const { loading, backtestResults } = useContext(dataContext);
  const {portfolio} = backtestResults
  // Check if data is loading or portfolio is empty
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!portfolio || portfolio.length === 0) {
    return <p>No data available</p>;
  }

  // Preprocess the data
  const processedData = portfolio.map(entry => ({
    date: new Date(entry.date).toLocaleDateString(), // Formatting date
    return: entry.pnl,
    benchmark_return: entry.benchmark_pnl,
  }));

  return (
    <div className="mt-5" style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={processedData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="date" />
          
          {/* First Y-axis for returns */}
          <YAxis domain={[1, 'auto']} />
          
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="return" stroke="red" dot={false} />
          <Line type="monotone" dataKey="benchmark_return" stroke="blue" dot={false} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;
