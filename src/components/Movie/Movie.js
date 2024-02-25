import "./Movie.css";

function Movie(props) {
  return (
    <div>
      <h1>{props.title || "No Title Provided"}</h1>
      <img src={props.img} alt="No IMG!" />
      <button>add to the favorite list</button>
    </div>
  );
}
export default Movie;
