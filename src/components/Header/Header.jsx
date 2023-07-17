import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { RiSearchLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesData, fetchShowsData } from "../../redux/actions/actions";
import { fetchMovies, fetchShows } from "../../redux/api/apis";

export const HomeHeader = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const searchQuery = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    dispatch(fetchMoviesData(await fetchMovies(query)));
    dispatch(fetchShowsData(await fetchShows(query)));
    // setQuery("");
  };

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
        <form action="" onSubmit={searchQuery}>
          <div className="moviejoy__header-search_icon">
            <RiSearchLine />
          </div>
          <input
            type="text"
            placeholder="Enter Keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
