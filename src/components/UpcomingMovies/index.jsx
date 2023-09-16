import React from 'react'
import MovieCard from "../Home/MovieCard";

function index() {
  return (
    <>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  )
}

export default index