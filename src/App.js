import "./App.css";
import Home from "./components/Home/Home";
import FavList from "./components/FavList/FavList";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/fav" element={<FavList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
