import { fetchCountriesData, fetchDailyData, fetchData } from "../../api";
import * as CONSTANTS from "../constants";

// export const asyncApiCall = (values) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetchData();
//       console.log(`response is${response}`);
//       dispatch(fetchDataAction(response));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

//https://stackoverflow.com/questions/35361893/why-does-redux-promise-return-unresolved-promise-if-more-than-type-and-payload-o/35362148#35362148

export const fetchDataAction = (country) => {
  return {
    type: CONSTANTS.DATA_FETCHING,
    payload: fetchData(country),
  };
};

export const fetchCountriesDataAction = () => {
  return {
    type: CONSTANTS.GET_COUNTRIES,
    payload: fetchCountriesData(),
  };
};

export const fetchDailyDataAction = () => {
  return {
    type: CONSTANTS.GET_DAILY_DATA,
    payload: fetchDailyData(),
  };
};

export const changeCountryAction = (country) => {
  return {
    type: CONSTANTS.COUNTRY_CHANGE,
    country,
  };
};
