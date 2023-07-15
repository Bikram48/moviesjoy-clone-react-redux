import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

export default function MovieList() {
  return (
    <div className="moviejoy__movielist-wrapper">
      <div className="moviejoy__movielist">
        <h2 className="moviejoy__movielist-heading">Movies</h2>

        <div className="moviejoy__movielist-cards">
          <MovieCard />
        </div>
      </div>
      <div className="moviejoy__showlist">
        <h2 className="moviejoy__showlist-heading">Shows</h2>

        <div className="moviejoy__showlist-cards">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
