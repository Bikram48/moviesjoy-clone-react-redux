import { combineReducers } from "redux";

function dataFetchingReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataFetchingReducer,
});

export default rootReducer;
