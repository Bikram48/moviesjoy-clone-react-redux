import React from "react";
import "./MovieDetail.scss";
import { FaPlay } from "react-icons/fa";

export default function MovieDetail() {
  return (
    <div className="moviejoy__detail-page">
      <div className="moviejoy__detail-page_cover">
        <div className="moviejoy__detail-page_image"></div>
      </div>
      <div className="moviejoy__detail-page_content">
        <div className="moviejoy__detail-page_btn">
          <a href="">
            <FaPlay />
            Watch now
          </a>
        </div>
        <h2 className="heading__name">Guardians of the Galaxy Volume 3</h2>
        <p className="description">
          Peter Quill, still reeling from the loss of Gamora, must rally his
          team around him to defend the universe along with protecting one of
          their own. A mission that, if not completed successfully, could quite
          possibly lead to the end of the Guardians as we know them.
        </p>
        <p className="released__date">
          <span className="released__date-title">Released:</span> 2023-05003
        </p>
      </div>
    </div>
  );
}
