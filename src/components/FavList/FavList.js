import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";

//
function FavList() {
  //
  const [favoList, setFavoList] = useState([]);
  const getFavMovies = async () => {
    const serverURL = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
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
              comment={ele.comments}
              img={`https://image.tmdb.org/t/p/w500/${ele.posterpath}`}
              posterPath={ele.posterpath}
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
