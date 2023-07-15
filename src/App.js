import "./App.scss";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/api/movieApi";
import { fetchDataRequest } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchDataRequest(await fetchMovies()));
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
