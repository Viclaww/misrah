import Centerhero from "../Components/centerhero";
import { Link } from "react-router-dom";
import guestroom from "../asset/guestroom1.jpg";
const Guestroom = () => {
  return (
    <div className="guestroom">
      <div className="hero">
        <Centerhero>
          <h2>Guest Room</h2>
          <button>Book Now</button>
        </Centerhero>
      </div>
      <div className="second">
        <div className="box1">
          <img alt="guestroom" src={guestroom} />
          <div className="text">
            <h3>Experience Comfort and Convenient</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link>Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guestroom;
