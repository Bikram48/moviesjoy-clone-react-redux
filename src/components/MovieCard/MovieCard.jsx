import React from "react";
import "./MovieCard.scss";
import { useSelector } from "react-redux";

export default function MovieCard() {
  const moviesData = useSelector((state) => {
    return state.dataFetchingReducer;
  });

  return (
    <>
      {moviesData.map((movie) => (
        <div id={movie.imdbID} className="moviejoy__movielist-card">
          <div className="moviejoy__movielist-card_image">
            <img src={movie.Poster} alt="" />
          </div>
          <div className="moviejoy__movielist-card_body">
            <div className="moviejoy__movielist-card_title">
              <h2>
                {movie.Title.length > 25
                  ? movie.Title.slice(0, 25) + " ..."
                  : movie.Title}
              </h2>
            </div>
            <div className="moviejoy__movielist-card_content">
              <p className="movie__year">{movie.Year}</p>
              <p className="type">{movie.Type}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
