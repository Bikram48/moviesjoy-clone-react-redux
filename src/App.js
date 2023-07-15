import "./App.scss";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "./redux/api/apis";
import { fetchMoviesData, fetchShowsData } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchMoviesData(await fetchMovies()));
      dispatch(fetchShowsData(await fetchShows()));
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}

export default App;
