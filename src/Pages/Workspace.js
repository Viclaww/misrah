import Centerhero from "../Components/centerhero";
import people from "./../asset/right_sec.jpg";
import { Link } from "react-router-dom";
import director from "../asset/director.jpg";
import features from "../asset/right_sec (1).jpg";
const Workspace = () => {
  return (
    <div className="workspace">
      <div className="hero">
        <Centerhero>
          <h2>Co-Working Spaces</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </Centerhero>
      </div>

      <div className="second">
        <div className="box1">
          <img alt="people using workspace" src={people} />
          <div className="text">
            <h3>A Work Space for impact</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link>Learn more</Link>
          </div>
        </div>
        <div className="box2">
          <img alt="features" src={features} />
          <div className="text">
            <h3>Features</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <ul>
              <li>A comfy workspace to birth your ideas</li>
              <li>Unlimited Access to internet data</li>
              <li>Uninterrupted Power Supply</li>
              <li>Lorem ipsum</li>
            </ul>
            <Link>Book your Space Now</Link>
          </div>
        </div>
      </div>
      <div className="directorsdesk">
        <h3>From The Desk of Our Executive Director</h3>
        <img alt="director" src={director}></img>
      </div>
    </div>
  );
};

export default Workspace;
