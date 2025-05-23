import { 
  SET_LOADING, STOP_LOADING, SET_ERROR, CLEAR_ERROR, 
  GET_POSITION_TYPE, GET_TIMEFRAME, GET_INDICATOR, 
     GET_RISK_TYPE, GET_ALLOCATION_TYPE, 
     GET_GROUPING_TYPE,
  GET_SELECTION_TYPE, BACKTEST 
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: { msg: "rekt", type: "big sadge" }
      };
      
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
      
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
      
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };

    case GET_POSITION_TYPE:
      return {
        ...state,
        positionType: action.payload.data,
        loading: false
      };

    case GET_TIMEFRAME:
      return {
        ...state,
        timeframe: action.payload.data,
        loading: false
      };

    case GET_INDICATOR:
      return {
        ...state,
        indicator: action.payload.data,
        loading: false
      };

    case GET_RISK_TYPE:
      return {
        ...state,
        riskType: action.payload.data,
        loading: false
      };

    case GET_ALLOCATION_TYPE:
      return {
        ...state,
        allocationType: action.payload.data,
        loading: false
      };

    case GET_SELECTION_TYPE:
      return {
        ...state,
        selectionType: action.payload.data,
        loading: false
      };

    case GET_GROUPING_TYPE:
      return {
        ...state,
        groupingType: action.payload.data,
        loading: false
      };

    case BACKTEST:
      return {
        ...state,
        backtestResults: action.payload.data,
        loading: false
      };

    default:
      return state;
  }
};