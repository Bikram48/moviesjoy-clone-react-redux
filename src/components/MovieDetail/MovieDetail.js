import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { fetchMovieorShowDetail } from "../../redux/api/apis";
import { fetchDetail } from "../../redux/actions/actions";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      dispatch(fetchDetail(await fetchMovieorShowDetail(id)));
    }

    fetchData();
  }, [dispatch, id]);

  const detail = useSelector((state) => {
    return state.dataFetchingReducer.detail;
  });

  return (
    <>
      {detail && (
        <div className="moviejoy__detail-page">
          <div className="moviejoy__detail-page_cover">
            <div
              style={{ backgroundImage: `url(${detail.Poster})` }}
              className="moviejoy__detail-page_image"
            ></div>
          </div>
          <div className="moviejoy__detail-page_content">
            <div className="moviejoy__detail-page_poster">
              <img src={detail.Poster} alt="" />
            </div>
            <div>
              <div className="moviejoy__detail-page_btn">
                <a href="/#">
                  <FaPlay />
                  Watch now
                </a>
              </div>
              <h2 className="heading__name">{detail.Title}</h2>
              <p className="description">{detail.Plot}</p>
              <div className="moviejoy__detail-page_row">
                <div className="moviejoy__detail-page_col">
                  <p className="released__date similar">
                    <span className="released__date-title">Released:</span>{" "}
                    {detail.Released}
                  </p>
                  <p className="released__date similar">
                    <span className="released__date-title">Genre:</span>{" "}
                    {detail.Genre}
                  </p>
                  <p className="released__date similar">
                    <span className="released__date-title">Casts:</span>{" "}
                    {detail.Actors}
                  </p>
                </div>
                <div className="moviejoy__detail-page_col">
                  <p className="released__date similar">
                    <span className="released__date-title">Duration:</span>{" "}
                    {detail.Runtime}
                  </p>
                  <p className="released__date similar">
                    <span className="released__date-title">Country:</span>{" "}
                    {detail.Country}
                  </p>
                  <p className="released__date similar">
                    <span className="released__date-title">Production:</span>{" "}
                    {detail.Production}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
