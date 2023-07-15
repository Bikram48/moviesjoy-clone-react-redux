import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";
import { useDispatch } from "react-redux";
import { fetchDataRequest } from "../../actions/actions";

export default function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        "https://www.omdbapi.com?apiKey=5fea68ed&s=Harry&type=movie"
      );

      const response = await request.json();
      const data = response.Search;
      dispatch(fetchDataRequest(data));
    }

    fetchData();
  }, []);

  return (
    <div className="moviejoy__movielist">
      <MovieCard />
    </div>
  );
}
