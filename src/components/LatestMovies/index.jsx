import React from "react";
import MovieCard from "../Home/MovieCard";

import { useSelector, useDispatch } from "react-redux";
import {putData} from "../../Redux/LatestMovies"
import axios from "axios";

function index() {
  const allLatestMovies = useSelector((state) => state.latestMovies.value);
  const dispatch = useDispatch();

  if (allLatestMovies.length === 0) {
    axios
      .get(
        "http://3.17.216.66:4000/latest"
      )
      .then((response) => {
        dispatch(putData(response.data));
      })
      .catch();
  }

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        {allLatestMovies.length == 0 ? (
          <div>bhai khali h</div>
        ) : (
          <>
            {allLatestMovies.map((v) => (
              <MovieCard key={v.id} movieData={v} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default index;
