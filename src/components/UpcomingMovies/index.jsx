import React from "react";
import MovieCard from "../Home/MovieCard";

import upcomingMovies from "../../Redux/UpcomingMovies";
import { useSelector, useDispatch } from "react-redux";
import {putData} from "../../Redux/UpcomingMovies"
import axios from "axios";

function index() {
  const allUpcomingMovies = useSelector((state) => state.upcomingMovies.value);
  const dispatch = useDispatch();

  axios
    .get(
      "http://3.17.216.66:4000/upcomingMovies"
    )
    .then((response) => {
      dispatch(putData(response.data));
    })
    .catch();

  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        {allUpcomingMovies.length == 0 ? (
          <div>bhai khali h</div>
        ) : (
          <>
            {allUpcomingMovies.map((v) => (
              <MovieCard key={v.id} movieData={v} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default index;
