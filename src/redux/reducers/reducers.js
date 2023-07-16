import { combineReducers } from "redux";
const initialState = {
  moviesData: null,
  seriesData: null,
  detail: null,
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
    case "FETCH_DETAIL":
      return { ...state, detail: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataFetchingReducer,
});

export default rootReducer;
