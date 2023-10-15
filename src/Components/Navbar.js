import logo from "../asset/logo.jpg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";

const Navbar = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".navbar", {
        y: -300,
        duration: 2,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <nav>
      <div className="navbar w-full flex justify-evenly pt-1.5 pb-1.5 ">
        <Link to="/">
          <img alt="logo" src={logo}></img>
        </Link>
        <nav>
          <div className="links text-black no-underline flex gap-4 justify-evenly  pt-3.5">
            <Link to="/eventhall">Event Hall</Link>
            <Link to="/guestrooms">Rooms</Link>
            <Link to="/workspace">Work Space</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <button className="text-white w-28 h-12 border-0 bg-[#af734b] mt-1 rounded-2xl text-sm ">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
