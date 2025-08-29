import React, { useContext, useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import dataContext from "../../context/data/dataContext";

const PortfolioChart = () => {
  const { loading, backtestResults } = useContext(dataContext);
  const { portfolio } = backtestResults;

  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    if (portfolio && portfolio.length > 0) {
      const transformed = portfolio.map(entry => ({
        date: new Date(entry.date).toLocaleDateString(),
        return: entry.pnl,
        benchmark_return: entry.benchmark_pnl,
      }));
      setProcessedData(transformed);
    }
  }, [portfolio]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!portfolio || portfolio.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="mt-5" style={{ width: '100%', height: 600 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={processedData}>
          <XAxis dataKey="date" />
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