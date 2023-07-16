import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function MovieCard({ data }) {
  return (
    <>
      <Link to={`/movie/${data.imdbID}`}>
        <div key={data.imdbID} className="moviejoy__movielist-card">
          <div className="moviejoy__movielist-card_image">
            <img src={data.Poster} alt="" />
          </div>
          <div className="moviejoy__movielist-card_body">
            <div className="moviejoy__movielist-card_title">
              <h2>
                {data.Title.length > 25
                  ? data.Title.slice(0, 25) + " ..."
                  : data.Title}
              </h2>
            </div>
            <div className="moviejoy__movielist-card_content">
              <p className="movie__year">{data.Year}</p>
              <p className="type">{data.Type}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
