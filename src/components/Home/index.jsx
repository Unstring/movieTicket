import Carausel from "./Carausel";
import MovieCard from "./MovieCard";

function index() {
  return (
    <>
      <div className="flex h-[400px] mb-9">
        <Carausel />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8 gap-6 md:mx-5">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
}

export default index;