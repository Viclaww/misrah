import React, { useEffect } from "react";
import Centerhero from "../Components/centerhero";
import people from "./../asset/right_sec.jpg";
import { Link } from "react-router-dom";
import director from "../asset/director.jpg";
import features from "../asset/right_sec (1).jpg";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/all";
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
            trigger: ".box1",
            start: "top 30%",
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
      <div className="hero">
        <Centerhero>
          <h2 className="CH-child">Co-Working Spaces</h2>
          <p className="CH-child">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </Centerhero>
      </div>

      <div className="second">
        <div className="box1">
          <img
            className="Impact-Image"
            alt=" people using workspace"
            src={people}
          />

          <div className="text">
            <h3 className="impact-text">A Work Space for impact</h3>
            <p className="impact-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link className="impact-text">Learn more</Link>
          </div>
        </div>
        <div className="box2">
          <img className="features-image" alt="features" src={features} />

          <div className="text">
            <h3 className="features-text">Features</h3>
            <p className="features-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <ul>
              <li className="features-text">
                A comfy workspace to birth your ideas
              </li>
              <li className="features-text">
                Unlimited Access to internet data
              </li>
              <li className="features-text">Uninterrupted Power Supply</li>
              <li className="features-text">Lorem ipsum</li>
            </ul>
            <Link className="features-text">Book your Space Now</Link>
          </div>
        </div>
      </div>
      <div className="directorsdesk">
        <h3>From The Desk of Our Executive Director</h3>
        <img alt="director" src={director}></img>
      </div>
    </div>
  );
}

export default Workspace;
