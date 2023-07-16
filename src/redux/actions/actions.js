export const fetchMoviesData = (payload) => {
  return {
    type: "FETCH_MOVIES",
    payload: payload,
  };
};

export const fetchShowsData = (payload) => {
  return {
    type: "FETCH_SHOWS",
    payload: payload,
  };
};

export const fetchDetail = (payload) => {
  return {
    type: "FETCH_DETAIL",
    payload: payload,
  };
};
