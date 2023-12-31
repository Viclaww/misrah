import gsap from "gsap";
import { useEffect } from "react";

const Centerhero = (props) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".centerhero", {
        y: 100,
        duration: 1,
        stagger: 1,
        opacity: 0,
      });
      gsap.from(".CH-child", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: "sine.out",
        force3D: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return <div className="centerhero">{props.children}</div>;
};

export default Centerhero;
