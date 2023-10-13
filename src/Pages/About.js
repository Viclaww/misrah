import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, {
      y: 20,
      x: 100,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  });

  return (
    <div className="About">
      <div className="box" ref={boxRef}>
        Hello
      </div>
    </div>
  );
};

export default About;
