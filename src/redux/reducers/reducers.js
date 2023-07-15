import { combineReducers } from "redux";
const initialState = {
  moviesData: null,
  seriesData: null,
};

function dataFetchingReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        moviesData: action.payload,
      };
    case "FETCH_SHOWS":
      return { ...state, seriesData: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataFetchingReducer,
});

export default rootReducer;
