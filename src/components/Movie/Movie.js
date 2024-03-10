import "./Movie.css";
import axios from "axios";
import ModalMovie from "../ModalMovie/ModalMovie";
import { useState } from "react";
//
function Movie(props) {
  //
  const addToFav = async () => {
    props.sh();
    console.log(props);
    const serverURL = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
    const obj = {
      title: props.title,
      releaseDate: "",
      posterPath: props.posterPath,
      overview: "",
      comments: props.myComment,
    };
    await axios.post(serverURL, obj);
    console.log(obj);
  };
  //
  const deleteMovie = async (id) => {
    const serverURL = `${process.env.REACT_APP_SERVER_URL}/deleteMovie/${id}`;
    const res = await axios.delete(serverURL);
    // console.log(res.data);
  };
  //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const [selectedItem, setSelectedItem] = useState([]);
  //
  const updatingForm = (info) => {
    handleShow();
    setSelectedItem(info);
    console.log(selectedItem);
  };
  //
  return (
    <>
      <div>
        <h1>{props.title || "No Title Provided"}</h1>
        <img src={props.img} alt="No IMG!" />
        {props.parent === "all" ? (
          <button
            onClick={() => {
              addToFav();
            }}
          >
            add to the favorite list
          </button>
        ) : (
          <div className="updateDelete">
            <button
              onClick={() => {
                updatingForm(props);
              }}
            >
              update
            </button>
            <button onClick={() => deleteMovie(props.id)}>delete</button>
          </div>
        )}
      </div>
      <ModalMovie show={show} handleClose={handleClose} info={selectedItem} />
    </>
  );
}
export default Movie;
