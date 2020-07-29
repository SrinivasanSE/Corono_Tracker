import * as CONSTANTS from "../constants";

const defaultState = {
  data: {},
  dailyData: [],
  countries: [],
  country: "",
  dataFetching: true,
  countriesFetching: true,
};

export const reducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case `${CONSTANTS.GET_COUNTRIES}_PENDING`:
      return {
        ...state,
        countriesFetching: true,
      };
    case `${CONSTANTS.DATA_FETCHING}_PENDING`:
      return {
        ...state,
        dataFetching: true,
      };
    case `${CONSTANTS.DATA_FETCHING}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        dataFetching: false,
      };
    case `${CONSTANTS.GET_DAILY_DATA}_FULFILLED`:
      return {
        ...state,
        dailyData: action.payload,
      };
    case `${CONSTANTS.GET_COUNTRIES}_FULFILLED`:
      return {
        ...state,
        countries: action.payload,
        countriesFetching: false,
      };
    case `${CONSTANTS.COUNTRY_CHANGE}`:
      return {
        ...state,
        country: action.country,
      };
    default: {
      return state;
    }
  }
};
//
