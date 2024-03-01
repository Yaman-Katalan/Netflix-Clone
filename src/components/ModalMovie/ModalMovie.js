// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ModalMovie(props) {
  //
  const updateMovieTitle = async (event) => {
    event.preventDefault();
    const obj = {
      title: event.target.name.value,
      releaseDate: "",
      posterPath: props.info.posterPath,
      overview: "",
      comments: "",
    };
    console.log(obj);
    console.log(props.info.id);
    const serverURL = `${process.env.REACT_APP_SERVER_URL}/editMovie/${props.info.id}`;
    const res = await axios.put(serverURL, obj);
    props.handleClose();
  };
  //
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Update Movie {props.info.title || "(Anonymous?)"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateMovieTitle}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                placeholder="Movie name"
                defaultValue={props.info.title}
              />
            </Form.Group>

            <Button type="submit">update</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
