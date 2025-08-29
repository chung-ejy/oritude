import React, { useContext, useEffect } from 'react';
import DataContext from '../../context/data/dataContext';

const TradesTable = () => {
  const { loading, backtestResults } = useContext(DataContext);
  const {trades} = backtestResults
  useEffect(() => {
    const { trades } = backtestResults; 
  }, [backtestResults]);
  const convertToCSV = (data) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  // Function to download CSV
  const downloadCSV = () => {
    const csvData = convertToCSV(trades);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'trades.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="container">
      {loading || trades.length < 1 ? (
        ''
      ) : (
        <div className="table-responsive" >
          {/* <table className="table table-fixed">
          </table> */}
          <div style={{ maxHeight: '400px',maxWidth: '1280px', overflowY: 'auto',overflowX: 'auto' }}>
            <table className="table table-fixed">
            <thead>
              <tr>
                {Object.keys(trades[0]).map((key) => (
                  <th key={key} style={{ minWidth: '100px' }}>{key}</th>
                ))}
              </tr>
            </thead>
              <tbody>
                {trades.map((item, index) => (
                  <tr key={index}>
                    {Object.keys(trades[0]).map((key) => (
                      <td key={key} style={{ minWidth: '100px' }}>{item[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary mb-3" onClick={downloadCSV}>Download as CSV</button>
        </div>
      )}
    </div>
  );
};

export default TradesTable;
