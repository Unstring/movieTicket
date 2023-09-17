import { useEffect, useState } from "react";
import Carausel from "./Carausel";
import MovieCard from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import {putData as putLatestMovieData} from "../../Redux/LatestMovies"
import {putData as putUpcomingMovieData} from "../../Redux/UpcomingMovies"
import axios from "axios";
function index() {
  const dispatch = useDispatch();
  const allUpcomingMovies = useSelector((state) => state.upcomingMovies.value);
  const allLatestMovies = useSelector((state) => state.latestMovies.value);
  const [allMovies, setAllMovies] = useState([...allLatestMovies,...allUpcomingMovies])

  useEffect(
    ()=>{
      setAllMovies([...allLatestMovies,...allUpcomingMovies])
    },[allUpcomingMovies,allLatestMovies]
  )
  
  if (allUpcomingMovies.length === 0) {
    console.log("all upcoming khali h");
    axios
    .get(
      "http://3.17.216.66:4000/upcomingMovies"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(putUpcomingMovieData(response.data));
      })
      .catch();
    }
    
    if (allLatestMovies.length === 0) {
    console.log("all latest khali h");
    axios
      .get(
        "http://3.17.216.66:4000/latest"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(putLatestMovieData(response.data));
      })
      .catch();
  }
  
  return (
    <>
      <div className="flex h-[400px] mb-9">
        <Carausel allMovies={allMovies} />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        {allMovies.length == 0 ? (
          <div>bhai khali h</div>
        ) : (
          <>
            {allMovies.map((v) => (
              <MovieCard key={v.id} movieData={v} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default index;