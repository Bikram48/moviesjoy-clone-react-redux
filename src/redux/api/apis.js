export async function fetchMovies(term) {
  const query = term || "James";
  const request = await fetch(
    `https://www.omdbapi.com?apiKey=5fea68ed&s=${query}&type=movie`
  );

  const response = await request.json();
  const data = response.Search;

  return data;
}

export async function fetchShows(term) {
  const query = term || "detective";
  const request = await fetch(
    `https://www.omdbapi.com/?apiKey=5fea68ed&s=${query}&type=series`
  );

  const response = await request.json();
  const data = response.Search;

  return data;
}

export async function fetchMovieorShowDetail(id) {
  const request = await fetch(
    `https://www.omdbapi.com/?apiKey=5fea68ed&i=${id}`
  );

  const response = await request.json();
  // const data = response.Search;

  return response;
}
