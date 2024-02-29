import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="myLinks">
      <div className="container">
        <Link to="/home">Home</Link>
        <Link to="/fav">Favorite List</Link>
      </div>
    </div>
  );
}

export default Navbar;
