import logo from "../asset/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img alt="logo" src={logo}></img>
      </Link>
      <nav>
        <div className="links">
          <Link to="/eventhall">Event Hall</Link>
          <Link to="/guestrooms">Rooms</Link>
          <Link to="/workspace">Work Space</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <button>Book Now</button>
    </div>
  );
};

export default Navbar;
