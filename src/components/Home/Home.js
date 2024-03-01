import "./Home.css";
import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
function Home() {
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
      <MovieList movieArr={movieArr} />
    </>
  );
}
export default Home;
