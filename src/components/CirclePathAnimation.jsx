import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CirclePathAnimation = () => {
  const circleRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const path = pathRef.current;

    gsap.to(circle, {
      duration: 10, // Adjust duration as needed
      ease: "none",
      repeat: -1, // Repeat the animation indefinitely
      motionPath: {
        path: path,
        align: path,
        autoRotate: true,
      },
    });

    // Ensure smooth scrolling for the animation
    ScrollTrigger.create({
      trigger: circle,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      invalidateOnRefresh: true,
    });
  }, []);

  return (
    <div className="relative h-screen">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Define your motion path */}
        <path
          ref={pathRef}
          d="M10 90 Q 30 15, 50 90 T 90 90"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        {/* Circle element to animate */}
        <circle
          ref={circleRef}
          cx="0"
          cy="0"
          r="2"
          fill="red"
          transform="translate(0 0)"
        />
      </svg>
    </div>
  );
};

export default CirclePathAnimation;
