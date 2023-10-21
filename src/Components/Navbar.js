import logo from "../asset/logo.jpg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import React, { useLayoutEffect, useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink className="navbar-links" to="/eventhall">
        Event Hall
      </NavLink>
      <NavLink className="navbar-links" to="/guestrooms">
        Rooms
      </NavLink>
      <NavLink className="navbar-links" to="/workspace">
        Work Space
      </NavLink>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".navbar", {
        y: -300,
        duration: 2,
      });
      gsap.from(".sm-navbar", {
        height: 0,
        duration: 2,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className=" navbar sm:block sm:absolute sm:z-10 w-full flex sm:flex-row  md:items-center md:flex-row  md:items-center justify-evenly sm:justify-between md:justify-between pt-1.5 pb-1.5  ">
        <NavLink to="/">
          <img
            className="w-[45px] h-[60px] sm:m-3 "
            alt="logo"
            src={logo}
          ></img>
        </NavLink>
        <nav>
          <div className="links sm:hidden md:hidden  text-black no-underline flex gap-4 justify-evenly  pt-3.5">
            <NavLinks />
          </div>
        </nav>
        <button className="text-white sm:hidden md:hidden  w-28 h-12 border-0 bg-[#af734b] mt-1 rounded-2xl text-sm ">
          Book Now
        </button>
        <button
          className="lg:hidden md:text-black text-white flex absolute top-10 right-10"
          onClick={toggleNavbar}
        >
          {isOpen ? <X /> : <Menu />}{" "}
        </button>
        {isOpen && (
          <div className="sm-navbar flex basis-full overflow-hidden bg-[#D9D9D9] absolute w-full z-10 items-center  flex-col">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
