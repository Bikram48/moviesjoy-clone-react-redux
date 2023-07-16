import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { RiSearchLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HomeHeader = () => {
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
          <input type="text" placeholder="Enter Keywords..." />
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
