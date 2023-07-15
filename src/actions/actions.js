export const fetchDataRequest = (payload) => {
  return {
    type: "FETCH_DATA_REQUEST",
    payload: payload,
  };
};
