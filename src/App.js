import "./App.scss";
import { useEffect } from "react";
import Header, { HomeHeader } from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "./redux/api/apis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchMoviesData, fetchShowsData } from "./redux/actions/actions";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchMoviesData(await fetchMovies()));
      dispatch(fetchShowsData(await fetchShows()));
    }

    fetchData();
  }, [dispatch]);

  const Layout = ({ children }) => {
    return (
      <>
        <Header />
        {children}
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeHeader />
                <MovieList />
              </>
            }
          />

          <Route
            exact
            path="/movie/:id"
            element={
              <Layout>
                <MovieDetail />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
