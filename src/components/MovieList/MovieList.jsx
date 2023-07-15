import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";
import { useSelector } from "react-redux";

export default function MovieList() {
  const moviesData = useSelector((state) => {
    return state.dataFetchingReducer.moviesData.movies;
  });

  const seriesData = useSelector((state) => {
    return state.dataFetchingReducer.showData.series;
  });

  let renderMovies = moviesData.map((movie) => <MovieCard data={movie} />);
  let renderShows = seriesData.map((show) => <MovieCard data={show} />);
  return (
    <div className="moviejoy__movielist-wrapper">
      <div className="moviejoy__movielist">
        <h2 className="moviejoy__movielist-heading">Movies</h2>

        <div className="moviejoy__movielist-cards">{renderMovies}</div>
      </div>
      <div className="moviejoy__showlist">
        <h2 className="moviejoy__showlist-heading">Shows</h2>

        <div className="moviejoy__showlist-cards">{renderShows}</div>
      </div>
    </div>
  );
}
