import Centerhero from "../Components/centerhero";
import { Link } from "react-router-dom";
import guestroom from "../asset/guestroom1.jpg";
import bestroom from "../asset/Rectangle 6 (1).png";
import singleroom from "../asset/Singleroom.png";
import doubleroom from "../asset/Doubleroom.png";
import ClientReview from "../Components/Clientreview";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const Guestroom = () => {
  ScrollTrigger.normalizeScroll(true);
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".second-img", {
        duration: 1,
        x: 20,
        delay: 0.1,
        opacity: 0.2,
        ease: "sine.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".box1",
          start: "top center",
          toggleActions: "play none none none",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      tl.from(
        ".Expe-text",
        {
          duration: 2,
          y: 30,
          opacity: 0,
          delay: 0.1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".box1",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3"
      );
      tl.from(
        ".head-text",
        {
          duration: 1,
          y: 50,
          delay: 0.1,
          opacity: 0,
          stagger: 2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".head-text",
            start: "top 50%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".bestroom",
        {
          duration: 2,
          y: 50,
          scale: 0.5,
          delay: 1,
          opacity: 0,
          stagger: 2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".bestroom",
            start: "top 50%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".singleroom",
        {
          duration: 2,
          x: 30,
          opacity: 0,
          delay: 1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".singleroom",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3 "
      );
      tl.from(
        ".doubleroom",
        {
          duration: 2,
          x: -30,
          opacity: 0,
          delay: 0.6,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".singleroom",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3 "
      );
      gsap.from(
        ".room-message",
        {
          duration: 1,
          opacity: 0,
          delay: 0.5,
          stagger: 1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".room-message",
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="guestroom">
      <div className="hero">
        <Centerhero>
          <h2 className="CH-child">Guest Room</h2>
          <button className="CH-child">Book Now</button>
        </Centerhero>
      </div>
      <div className="bg-[#D9D9D9] flex justify-center gap-14 items-center h-[100vh] p-10">
        <div className="box1">
          <img
            className="second-img w-[562px] h-[526px]"
            alt="guestroom"
            src={guestroom}
          />
          <div className="text pt-32 Expe-text ">
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
      <div className="px-32 w-full  text-center  py-28 flex flex-col justify-center items-center">
        <h3 className="head-text text-4xl pb-10">Our Best Rooms</h3>
        <p className="head-text text-sm opacity-60 mb-10 w-[500px] my-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <img
          className="bestroom w-[856px] h-[455px] pb-10"
          alt="Rooms"
          src={bestroom}
        ></img>
        <div className="text-left flex flex-row justify-center items-center gap-14  w-[] ">
          <div className="singleroom shadow-lg p-3 ">
            <Link>
              <img
                className="w-[290px] h-[278px] "
                alt="singleroom"
                src={singleroom}
              />
              <h5 className="room-message py-1 text-lg text-[rgb(216,151,108)]">
                Single Bed Room
              </h5>
              <p className="room-message text-sm w-[220px] font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </Link>
          </div>

          <div className="doubleroom shadow-lg p-3 ">
            <Link>
              <img
                className="w-[290px] h-[278px] "
                alt="doubleroom"
                src={doubleroom}
              ></img>
              <h5 className="room-message py-1 text-lg  text-[#d8976c]">
                Double Single Bed Room
              </h5>
              <p className="room-message text-sm w-[220px] font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <ClientReview />
    </div>
  );
};

export default Guestroom;
