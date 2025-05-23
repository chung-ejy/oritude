import React, { useState, useEffect, useContext } from "react";
import dataContext from "../../context/data/dataContext.js";

const BacktestForm: React.FC = () => {
  const context = useContext(dataContext);
  if (!context) throw new Error("BacktestForm must be used within an AppProvider");

  const { 
    title, getPositionType, getTimeframe, getIndicator, 
    getRiskType, getAllocationType, getGroupingType, 
    getSelectionType, runBacktest, positionType, timeframe, 
    riskType, allocationType, selectionType, groupingType, indicator 
  } = context;

  const [formData, setFormData] = useState({
    rolling_window: 10,
    grouping_type: "distance",
    ranking_metric: "ema_corr",
    risk_type: "coefficient_of_variation",
    stoploss: 0.5,
    position_type: "long",
    selection_type: "top",
    max_price: 100,
    min_price: 0,
    timeframe: "week",
    allocation_type: "risk",
    selection_percentage: 1,
    num_of_groups: 10,
    leverage:1
  });

  useEffect(() => {
    getGroupingType();
    getPositionType();
    getTimeframe();
    getIndicator();
    getRiskType();
    getAllocationType();
    getSelectionType();
  }, [title]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let castedValue: any = value;

    // Convert numeric values properly
    if (["rolling_window", "max_price", "min_price", "selection_percentage", "num_of_groups"].includes(name)) {
      castedValue = parseInt(value, 10); // Convert to integer
    } else if (name === "stoploss") {
      castedValue = parseFloat(value); // Convert to float
    }

    setFormData({ ...formData, [name]: castedValue });

    // Ensure indicator selection updates ranking_metric
    if (name === "ranking_metric") {
      setFormData({ ...formData, ranking_metric: castedValue });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Configuration Form</h2>
      <form onSubmit={(e) => { e.preventDefault(); runBacktest(formData); }} className="p-3 border rounded bg-light">
        
        {/* Position Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Position Type</label>
          <select className="form-select" name="position_type" value={formData.position_type} onChange={handleChange}>
            {positionType.map((pt) => (
              <option key={pt} value={pt}>{pt}</option>
            ))}
          </select>
        </div>

        {/* Indicator Dropdown - Updates Ranking Metric */}
        <div className="mb-3">
          <label className="form-label">Indicator (Updates Ranking Metric)</label>
          <select className="form-select" name="ranking_metric" value={formData.ranking_metric} onChange={handleChange}>
            {indicator.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        {/* Grouping Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Grouping Type</label>
          <select className="form-select" name="grouping_type" value={formData.grouping_type} onChange={handleChange}>
            {groupingType.map((gt) => (
              <option key={gt} value={gt}>{gt}</option>
            ))}
          </select>
        </div>

        {/* Timeframe Dropdown */}
        <div className="mb-3">
          <label className="form-label">Timeframe</label>
          <select className="form-select" name="timeframe" value={formData.timeframe} onChange={handleChange}>
            {timeframe.map((tf) => (
              <option key={tf} value={tf}>{tf}</option>
            ))}
          </select>
        </div>

        {/* Risk Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Risk Type</label>
          <select className="form-select" name="risk_type" value={formData.risk_type} onChange={handleChange}>
            {riskType.map((rt) => (
              <option key={rt} value={rt}>{rt}</option>
            ))}
          </select>
        </div>

        {/* Allocation Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Allocation Type</label>
          <select className="form-select" name="allocation_type" value={formData.allocation_type} onChange={handleChange}>
            {allocationType.map((at) => (
              <option key={at} value={at}>{at}</option>
            ))}
          </select>
        </div>

        {/* Selection Type Dropdown */}
        <div className="mb-3">
          <label className="form-label">Selection Type</label>
          <select className="form-select" name="selection_type" value={formData.selection_type} onChange={handleChange}>
            {selectionType.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>
        
        {/* Rolling Window */}
        <div className="mb-3">
          <label className="form-label">Rolling Window: {formData.rolling_window}</label>
          <input type="range" className="form-range" name="rolling_window" min="5" max="100" step="5" value={formData.rolling_window} onChange={handleChange} />
        </div>

        {/* Stoploss */}
        <div className="mb-3">
          <label className="form-label">Stoploss: {formData.stoploss}</label>
          <input type="range" className="form-range" name="stoploss" min="0.05" max="1" step="0.05" value={formData.stoploss} onChange={handleChange} />
        </div>

        {/* Max Price */}
        <div className="mb-3">
          <label className="form-label">Max Price: {formData.max_price}</label>
          <input type="range" className="form-range" name="max_price" min="100" max="1000" step="100" value={formData.max_price} onChange={handleChange} />
        </div>

        {/* Min Price */}
        <div className="mb-3">
          <label className="form-label">Min Price: {formData.min_price}</label>
          <input type="range" className="form-range" name="min_price" min="0" max="500" step="100" value={formData.min_price} onChange={handleChange} />
        </div>

        {/* Number of Groups */}
        <div className="mb-3">
          <label className="form-label">Number of Groups: {formData.num_of_groups}</label>
          <input type="range" className="form-range" name="num_of_groups" min="1" max="20" step="1" value={formData.num_of_groups} onChange={handleChange} />
        </div>

                {/* Number of Groups */}
        <div className="mb-3">
          <label className="form-label">Leverage: {formData.leverage}</label>
          <input type="range" className="form-range" name="leverage" min="1" max="10" step="1" value={formData.leverage} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Run Backtest</button>
      </form>
    </div>
  );
};

export default BacktestForm;