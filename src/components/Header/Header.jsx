import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { RiSearchLine } from "react-icons/ri";
import { fetchMovies, fetchShows } from "../../redux/api/apis";
import { fetchMoviesData, fetchShowsData } from "../../redux/actions/actions";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const HomeHeader = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(fetchMoviesData(await fetchMovies(term)));
      dispatch(fetchShowsData(await fetchShows(term)));
    }

    fetchData();
  }, [dispatch, term]);
  return (
    <div className="moviejoy__header">
      <div className="moviejoy__top-header">
        <div className="moviejoy__header-logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="moviejoy__header-icon">
          <FaUser />
        </div>
      </div>
      <h2>Find Movies, TV shows and more</h2>
      <div className="moviejoy__header-search">
        <form action="">
          <div className="moviejoy__header-search_icon">
            <RiSearchLine />
          </div>
          <input
            type="text"
            placeholder="Enter Keywords..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <div className="moviejoy__header">
      <div className="moviejoy__top-header">
        <div className="moviejoy__header-logo">
          <Link to="/">
            {" "}
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="moviejoy__header-icon">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
