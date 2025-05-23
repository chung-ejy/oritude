import { 
    SET_LOADING, STOP_LOADING, SET_ERROR, CLEAR_ERROR, 
    GET_POSITION_TYPE, GET_TIMEFRAME, GET_INDICATOR, 
     GET_RISK_TYPE, GET_ALLOCATION_TYPE, 
    GET_GROUPING_TYPE,
    GET_SELECTION_TYPE, BACKTEST 
} from "./types";

import React, { useReducer } from "react";
import DataContext from "./dataContext";
import dataReducer from "./dataReducer";
import axios from "axios";

const DataState = (props) => {
    const initialState = {
        title: "oritude",
        user: {},
        positionType: [],
        timeframe: [],
        indicator: [],
        riskType: [],
        allocationType: [],
        selectionType: [],
        groupingType:[],
        backtestResults: {
            trades:[],
            portfolio:[],
            performance:null
        },
        isAuth: false,
        error: null,
        loading: false
    };

    const [state, dispatch] = useReducer(dataReducer, initialState);
    const base_url = "http://localhost:5000";

    const setError = (msg, type) => {
        dispatch({ type: SET_ERROR, payload: { msg, type } });
        setTimeout(() => {
            clearError();
        }, 5000);
    };

    const clearError = () => {
        dispatch({ type: CLEAR_ERROR });
    };

    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    };

    const stopLoading = () => {
        dispatch({ type: STOP_LOADING });
    };

    // Fetch Position Types
    const getPositionType = () => {
        setLoading();
        axios.get(`${base_url}/api/position_type`)
            .then((res) => {
                dispatch({ type: GET_POSITION_TYPE, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Fetch Timeframes
    const getTimeframe = () => {
        setLoading();
        axios.get(`${base_url}/api/timeframe`)
            .then((res) => {
                dispatch({ type: GET_TIMEFRAME, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Fetch Indicators
    const getIndicator = () => {
        setLoading();
        axios.get(`${base_url}/api/indicator`)
            .then((res) => {
                dispatch({ type: GET_INDICATOR, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Fetch Risk Types
    const getRiskType = () => {
        setLoading();
        axios.get(`${base_url}/api/risk_type`)
            .then((res) => {
                dispatch({ type: GET_RISK_TYPE, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Fetch Allocation Types
    const getAllocationType = () => {
        setLoading();
        axios.get(`${base_url}/api/allocation_type`)
            .then((res) => {
                dispatch({ type: GET_ALLOCATION_TYPE, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Fetch Selection Types
    const getSelectionType = () => {
        setLoading();
        axios.get(`${base_url}/api/selection_type`)
            .then((res) => {
                dispatch({ type: GET_SELECTION_TYPE, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    const getGroupingType = () => {
        setLoading();
        axios.get(`${base_url}/api/grouping_type`)
            .then((res) => {
                dispatch({ type: GET_GROUPING_TYPE, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    // Run Backtest
    const runBacktest = (data) => {
        setLoading();
        axios.post(`${base_url}/api/backtest`, data)
            .then((res) => {
                dispatch({ type: BACKTEST, payload: res.data });
            })
            .catch((err) => {
                stopLoading();
                setError(err.message, "danger");
            });
    };

    return (
        <DataContext.Provider value={{
            ...state,
            getPositionType,
            getTimeframe,
            getIndicator,
            getRiskType,
            getAllocationType,
            getSelectionType,
            getGroupingType,
            runBacktest,
            setError,
            clearError
        }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;