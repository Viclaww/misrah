import client1 from "../asset/Ellipse 1.png";
import client2 from "../asset/Ellipse 2.png";
import client3 from "../asset/Ellipse 3.png";
import client4 from "../asset/Ellipse 4.png";
import client5 from "../asset/Ellipse 5.png";
import client6 from "../asset/Ellipse 6.png";
import gsap from "gsap/gsap-core";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ClientReview = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".client6", {
        duration: 1,
        scale: 0.5,
        delay: 0.1,
        opacity: 0.2,
        ease: "sine.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".client6",
          start: "top 70%",
          toggleActions: "play none none none",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      tl.from(
        ".client1",
        {
          duration: 2,
          x: 5,
          y: 10,
          scale: 0.5,
          opacity: 0,
          delay: 0.1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".message",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3"
      );
      tl.from(
        ".client2",
        {
          duration: 2,
          x: -50,
          y: 50,
          scale: 0.5,
          delay: 1,
          opacity: 0,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".message",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3"
      );
      tl.from(
        ".client3",
        {
          duration: 2,
          x: -50,
          y: -50,
          scale: 0.5,
          delay: 1,
          opacity: 0,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".message",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3"
      );
      tl.from(
        ".client4",
        {
          duration: 2,
          x: 5,
          y: -20,
          scale: 0.5,
          opacity: 0,
          delay: 1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".message",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3 "
      );
      tl.from(
        ".client5",
        {
          duration: 2,
          x: 10,
          y: -20,
          scale: 0.5,
          opacity: 0,
          delay: 1,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".message",
            start: "top 30%",
            scrub: 1,
            end: "bottom bottom ",
          },
        },
        "-=3 "
      );
      tl.from(".message", {
        duration: 2,
        x: -10,
        y: -20,
        transformOrigin: "top left",
        scale: 0.5,
        opacity: 0,
        delay: 1,
        ease: "sine.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".message",
          start: "top 90%",
          scrub: 1,
          end: "bottom bottom ",
        },
      });
      gsap.from(".text-child", {
        duration: 2,
        opacity: 0,
        delay: 0.5,
        stagger: 5,
        ease: "sine.out",
        force3D: true,
        scrollTrigger: {
          trigger: ".text-child",
          start: "top 70%",
          scrub: 1,
          end: "bottom bottom ",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className=" bg-[#D9D9D9] h-auto p-20 flex flex-col justify-center items-center text-slate-500">
      <h3 className="text-child text-center text-black h-20 text-2xl sm:text-lg">
        What our Clients are saying
      </h3>
      <p className="text-child w-[25.31rem] sm:w-[100%] text-xs pb-10 text-center mx-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>

      <div className=" text-black flex justify-center gap-96 sm:gap-10 items-center sm:flex-col relative w-[90vw] sm:w-[100vh] h-[80vh]">
        <div className="message bg-[#F9F5F2] px-[2.875rem] py-[3.3125rem] sm:py-[2.5rem] w-[530px] sm:w-[300px] sm:h-[200px] sm:-mt-[300px] h-[278px] ">
          <p className="text-child text-center sm:text-xs text-lg">
            “Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.”
            <p className="text-child text-sm sm:text-xs p-2">
              Apst. Paul Simon
            </p>
            <p className="text-child text-xs">Living Ministry Church</p>
          </p>
        </div>
        <div className="Client-images  relative">
          <img
            className="client1 image w-32 sm:w-16 sm:h-16 sm:hidden  h-32 top-[-10rem] right-28 absolute"
            alt="client"
            src={client1}
          ></img>
          <img
            className="client2 image sm:w-16 sm:h-16 sm:hidden   w-32 h-32 top-[-8rem] right-[-3rem] absolute"
            alt="client"
            src={client2}
          ></img>
          <img
            className="client3 image sm:w-16 sm:h-16 sm:hidden  w-32 h-32  top-[4rem] right-[-3rem] relative"
            alt="client"
            src={client3}
          ></img>
          <img
            className="client4 image sm:w-16 sm:h-16 sm:hidden  w-32 h-32 top-[7rem] right-28 absolute"
            alt="client"
            src={client4}
          ></img>
          <img
            className="client5 image sm:w-16 sm:h-16 sm:hidden w-32 h-32 top-[-2rem] right-[14rem] absolute"
            alt="client"
            src={client5}
          ></img>
          <img
            className="client6 w-32 h-32 sm:w-16 sm:h-16 sm:hidden  top-[-2rem] right-[5rem] absolute"
            alt="client"
            src={client6}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
