import "./App.scss";
import Header, { HomeHeader } from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
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
