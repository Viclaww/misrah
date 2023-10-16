import React, { useEffect } from "react";
import Centerhero from "../Components/centerhero";
import people from "./../asset/right_sec.jpg";
import { Link } from "react-router-dom";
import features from "../asset/right_sec (1).jpg";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/all";
import ClientReview from "../Components/Clientreview";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Workspace() {
  ScrollTrigger.normalizeScroll(true);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from(".Impact-Image", {
        duration: 1,
        x: 100,
        y: -100,
        delay: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".box1",
          end: "+=500",
          scrub: 1,
        },
      });
      tl.from(
        ".impact-text",
        {
          duration: 1,
          stagger: 1,
          y: 10,
          opacity: 0,
          delay: 1,
          scrollTrigger: {
            trigger: ".impact-text",
            start: "top 90%",
            scrub: 1,
            // pin: true,
            end: "+=100",
          },
        },
        "-=1"
      );
      tl.from(".features-image", {
        duration: 1,
        x: -100,
        delay: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".box2",
          end: "+=500",
          scrub: 1,
        },
      });
      tl.from(".features-text", {
        duration: 2,
        stagger: 1,
        y: 10,
        opacity: 0,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".box2",
          start: "top 90%",
          scrub: 1,
          // pin: true,
          end: "bottom 90%",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="workspace">
      <div className="hero bg-workspace">
        <Centerhero>
          <h2 className="CH-child hero-h2">Co-Working Spaces</h2>
          <p className="CH-child hero-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </Centerhero>
      </div>

      <div className="second">
        <div className="box flex-row-reverse">
          <img
            className="Impact-Image box-img"
            alt=" people using workspace"
            src={people}
          />

          <div className="text box-text">
            <h3 className="impact-text box-h3">A Work Space for impact</h3>
            <p className="impact-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link to="booking" className="impact-text box-a">
              Learn more
            </Link>
          </div>
        </div>
        <div className="box box2 flex-row mt-[100px]">
          <img
            className="features-image box-img"
            alt="features"
            src={features}
          />

          <div className="text box-text">
            <h3 className="features-text box-h3">Features</h3>
            <p className="features-text box-p ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <ul className=" list-image-tick mb-0">
              <li className="features-text">
                A comfy workspace to birth your ideas
              </li>
              <li className="features-text">
                Unlimited Access to internet data
              </li>
              <li className="features-text">Uninterrupted Power Supply</li>
              <li className="features-text">Lorem ipsum</li>
            </ul>
            <Link to="booking" className="features-text box-a">
              Book your Space Now
            </Link>
          </div>
        </div>
      </div>
      <ClientReview />
    </div>
  );
}

export default Workspace;
