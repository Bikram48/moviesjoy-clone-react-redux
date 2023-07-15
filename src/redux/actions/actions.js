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
