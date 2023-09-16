import Carausel from "./Carausel";
import MovieCard from "./MovieCard";

function index() {
  return (
    <>
      <div className="flex h-[400px] mb-9">
        <Carausel />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-16 gap-4 md:mx-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default index;