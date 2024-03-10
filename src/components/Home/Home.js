import "./Home.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
function Home() {
  const [show, setShow] = useState(false);
  const [myComment, setMyComment] = useState("I'm Comment");
  //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const addComment = (event) => {
    event.preventDefault();
    let newComment = event.target.comment.value;
    console.log("new", newComment);
    setMyComment(newComment);
    console.log("LOVE", myComment);
    handleClose();
    // console.log(myComment);
  };
  //
  const [movieArr, setMovieArr] = useState([]);
  const sendReq = async () => {
    const serverURL = `${process.env.REACT_APP_SERVER_URL}/trending`;
    const res = await fetch(serverURL);
    const data = await res.json();
    console.log("response", data);
    setMovieArr(data);
  };

  useEffect(() => {
    sendReq();
  }, []);
  return (
    <>
      <MovieList myComment={myComment} sh={handleShow} movieArr={movieArr} />
      {/* ------------------ */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addComment}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Movie Comment</Form.Label>
              <Form.Control
                required
                type="text"
                name="comment"
                placeholder="Movie Comment"
              />
              {/* ---- */}
            </Form.Group>

            <Button type="submit">Add</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Home;
