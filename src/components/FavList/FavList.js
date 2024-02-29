import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
//
function FavList() {
  //
  const [favoList, setFavoList] = useState([]);
  const getFavMovies = async () => {
    const serverURL = `http://localhost:3000/getMovies`;
    const res = await axios.get(serverURL);
    setFavoList(res.data);
    // console.log(favoList);
  };
  //
  useEffect(() => {
    getFavMovies();
  }, [favoList]);
  //
  return (
    <>
      <div className="box">
        {favoList.map((ele) => {
          return (
            <Movie
              title={ele.title}
              img={`https://image.tmdb.org/t/p/w500/${ele.posterpath}`}
              id={ele.id}
              parent="fav"
            />
          );
        })}
      </div>
    </>
  );
}

export default FavList;
