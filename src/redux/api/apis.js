export async function fetchMovies() {
  const request = await fetch(
    "https://www.omdbapi.com?apiKey=5fea68ed&s=Harry&type=movie"
  );

  const response = await request.json();
  const data = response.Search;

  return data;
}

export async function fetchShows() {
  const request = await fetch(
    "https://www.omdbapi.com/?apiKey=5fea68ed&s=friends&type=series"
  );

  const response = await request.json();
  const data = response.Search;

  return data;
}