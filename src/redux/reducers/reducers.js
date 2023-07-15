import { combineReducers } from "redux";

function dataFetchingReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    case "FETCH_SHOWS":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataFetchingReducer,
});

export default rootReducer;
