import { Link } from "react-router-dom";
import Slider from "../asset/Slider.png";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);
const WorkspaceBooking = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
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
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".workspace",
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
            trigger: ".workspace",
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".booking-text",
        {
          duration: 2,
          y: 50,
          delay: 1,
          opacity: 0,
          stagger: 2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".booking-text",
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".basic",
        {
          y: 100,
          delay: 1,
          opacity: 0,
          stagger: 2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".basic",
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
      tl.from(
        ".executive",
        {
          y: 100,
          delay: 1,
          opacity: 0,
          stagger: 2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".executive",
            start: "top 90%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=1"
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="px-32 w-full  text-center  py-28 flex flex-col justify-center items-center">
        <h3 className="head-text text-center text-4xl sm:text-lg pb-10">
          Best Work Space To Birth Your Ideas
        </h3>
        <p className="head-text text-center text-sm sm:text-xs opacity-60 mb-10 w-[500px] sm:w-[150%] my-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <img
          className="workspace w-[856px] h-[455px] sm:w-[550%] sm:hidden pb-10"
          alt="Rooms"
          src={Slider}
        />
      </div>
      <div className="bg-[#AF734B] mb-20 gap-2 sm:py-10 sm:gap-5 flex sm:flex-col justify-around items-center w-[1160px] sm:w-[100vw] sm:h-auto h-[450px] mx-auto my-0">
        <div className="w-[370px] h-auto sm:text-center  ">
          <h3 className="text-3xl mb-4 sm:text-xl booking-text">
            Affordable Price For Everyone
          </h3>
          <p className="text-sm text-xs booking-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum
          </p>
        </div>
        <div className="basic rounded-xl bg-[#D8976C] px-10 py-12 w-[250px] h-auto gap-5 flex flex-col justify-center items-center box-border">
          <h5 className="text-3xl">Basic</h5>
          <h6 className="text-lg">N300 Daily</h6>
          <ul className="text-sm list-image-white">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <Link className="bg-[#d9d9d9] p-[10px] text-sm rounded-lg">
            Book Now
          </Link>
        </div>
        <div className="executive rounded-xl bg-[#D9D9D9] mx-3 px-10 py-12 w-[250px] h-auto gap-5 flex flex-col justify-center items-center box-border">
          <h5 className="text-3xl">Executive</h5>
          <h6 className="text-lg">N500 Daily</h6>
          <ul className="text-sm list-image-tick">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <Link className="bg-[#af734b] p-[10px] text-sm rounded-lg">
            Book Now
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkspaceBooking;
