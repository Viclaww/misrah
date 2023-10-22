import Centerhero from "../Components/centerhero";
import people from "./../asset/right_sec.jpg";
import event from "./../asset/event (1).png";
import { Link } from "react-router-dom";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ClientReview from "../Components/Clientreview";
import Footer from "../Components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Eventhall = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".hall-img", {
        duration: 0.5,
        x: 100,
        delay: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hall-img",
          start: "top 70%",
          scrub: 1,
          end: "+=100",
        },
      });
      tl.from(
        ".hall-text",
        {
          duration: 1,
          stagger: 1,
          y: 10,
          opacity: 0,
          delay: 1,
          scrollTrigger: {
            trigger: ".hall-text",
            start: "top 80%",
            scrub: 1,
            // pin: true,
            end: "+=100",
          },
        },
        "-=1"
      );
      tl.from(".eventhall", {
        duration: 1,
        x: -100,
        delay: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".eventhall",
          start: "top 70%",
          scrub: 1,
          end: "+=100",
        },
      });
      tl.from(".comfyhal-text", {
        duration: 2,
        stagger: 1,
        y: 10,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".comfyhal-text",
          start: "top 90%",
          scrub: 1,
          // pin: true,
          end: "+=100",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="hero bg-eventhall">
        <Centerhero>
          <h2 className="CH-child hero-h2">Comfy Event Hall</h2>
          <button className="CH-child bg-[#D8976C] text-white  flex px-[16px] py-[15px] box-border justify-center items-center border-none">
            Book Now
          </button>
        </Centerhero>
      </div>
      <div className="second">
        <div className="box mt-[100px] flex-row-reverse">
          <img className="hall-img box-img" alt="Comfy Hall" src={event} />

          <div className="text mt-24 box-text">
            <h3 className="hall-text box-h3">
              Comfy Hall for your all kinds of Kingdom events
            </h3>
            <p className="hall-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link to="eventhall/booking" className="hall-text box-a">
              Book Now
            </Link>
          </div>
        </div>
        <div className="box flex-row mt-[100px]">
          <img className="eventhall box-img" alt="people" src={people} />

          <div className="text mt-6 box-text">
            <h3 className="comfyhal-text box-h3">Features</h3>
            <p className="comfyhal-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. <br />
            </p>
            <p className="comfyhal-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. <br />
            </p>
            <p className="comfyhal-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. <br />
            </p>
            <p className="comfyhal-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. <br />
            </p>
            <Link to="eventhall/booking" className="comfyhal-text box-a">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <ClientReview />
      <Footer />
    </>
  );
};

export default Eventhall;
