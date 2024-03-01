import "./MovieList.css";
import Movie from "../Movie/Movie";
function MovieList(props) {
  return (
    <div className="box">
      {props.movieArr.map((element) => {
        return (
          <Movie
            title={element.title}
            img={`https://image.tmdb.org/t/p/w500/${element.posterPath}`}
            posterPath={element.posterPath}
            parent="all"
          />
        );
      })}
    </div>
  );
}
export default MovieList;
