import "./Movie.css";
import axios from "axios";
//
function Movie(props) {
  //
  const addToFav = async () => {
    console.log(props);

    const serverURL = `http://localhost:3000/addMovie`;
    const obj = {
      title: props.title,
      releaseDate: "",
      posterPath: props.posterPath,
      overview: "",
      comments: "",
    };
    await axios.post(serverURL, obj);
    console.log(obj);
  };
  //
  const deleteMovie = async (id) => {
    const serverURL = `http://localhost:3000/deleteMovie/${id}`;
    const res = await axios.delete(serverURL);
    // console.log(res.data);
  };
  //
  return (
    <div>
      <h1>{props.title || "No Title Provided"}</h1>
      <img src={props.img} alt="No IMG!" />
      {props.parent === "all" ? (
        <button onClick={() => addToFav()}>add to the favorite list</button>
      ) : (
        <div className="updateDelete">
          <button>update</button>
          <button onClick={() => deleteMovie(props.id)}>delete</button>
        </div>
      )}
    </div>
  );
}
export default Movie;
