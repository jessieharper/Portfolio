import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const gsapContainer = useRef<HTMLDivElement | null>(null);
  const arrowTimeline = useRef<gsap.core.Tween | null>(null);
  const arrowPathRef = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      const windowWidth = window.innerWidth;
      const endX = windowWidth - 100;

      arrowTimeline.current = gsap.to(arrowPathRef.current, {
        duration: 0.5,
        attr: { d: `M8 8 H${endX}` },
        ease: "power1.inOut",
        paused: true,
      });
    },
    { scope: gsapContainer }
  );

  const openSesame = () => {
    arrowTimeline.current?.restart();
  };

  return (
    <section
      id="contact"
      className="container flex flex-col h-[20vh] items-start justify-center mt-8 relative"
    >
      <div ref={gsapContainer} className="px-8 flex items-center gap-4 w-full">
        <h2 className="text-5xl font-semibold my-auto text-nowrap leading-normal infline-flex w-min sm:w-auto">
          Contact Me
        </h2>
        <span
          id="arrow"
          onClick={openSesame}
          className="mt-4 cursor-pointer flex flex-auto w-full"
        >
          <svg
            viewBox={`0 0 ${window.innerWidth} 40`}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="16"
                markerHeight="16"
                refX="8"
                refY="8"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path
                  d="M0,0 L8,8 L0,16"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <path
              ref={arrowPathRef}
              id="arrowPath"
              d="M8 20 H10"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Contact;
