import React from "react";
import "./MovieCard.scss";

export default function MovieCard() {
  return (
    <div className="moviejoy__movielist-card">
      <div className="moviejoy__movielist-card_image">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
          alt=""
        />
      </div>
      <div className="moviejoy__movielist-card_body">
        <div className="moviejoy__movielist-card_title">
          <h2> Harry Potter and the</h2>
        </div>
      </div>
    </div>
  );
}
