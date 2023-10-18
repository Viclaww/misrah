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
    <>
      <div className=" navbar w-full flex justify-evenly pt-1.5 pb-1.5 sm:hidden ">
        <Link to="/">
          <img className="w-[45px] h-[60px] " alt="logo" src={logo}></img>
        </Link>
        <nav>
          <div className="links text-black no-underline flex gap-4 justify-evenly  pt-3.5">
            <Link className="navbar-links" to="/eventhall">
              Event Hall
            </Link>
            <Link className="navbar-links" to="/guestrooms">
              Rooms
            </Link>
            <Link className="navbar-links" to="/workspace">
              Work Space
            </Link>
            <Link className="navbar-links" to="/about">
              About
            </Link>
          </div>
        </nav>

        <button className="text-white w-28 h-12 border-0 bg-[#af734b] mt-1 rounded-2xl text-sm ">
          Book Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
