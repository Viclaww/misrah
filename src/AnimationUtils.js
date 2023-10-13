import gsap from "gsap";
import { useEffect } from "react";

export default AnimationUtils () => {
    useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".centerhero", {
        y: 100,
        duration: 2,
        stagger: 1,
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

}
