import { Link } from "react-router-dom";

const Centerhome = () => {
  return (
    <div className="centerhome fade-up">
      <p> Welcome To</p>
      <h1>Misrah Arena</h1>
      <div className="line">e</div>
      <div className="links">
        <Link to="/guestrooms">Guest Rooms</Link>
        <Link to="/eventhall">Event Hall</Link>
        <Link to="/workspace">Work Space</Link>
      </div>
    </div>
  );
};

export default Centerhome;
