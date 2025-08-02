import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const gsapContainer = useRef<HTMLDivElement | null>(null);
  const arrowTimeline = useRef<gsap.core.Timeline | null>(null);
  const arrowPathRef = useRef<HTMLDivElement | null>(null);
  const arrowHeadRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const endWidth = window.innerWidth / 2.2;

      arrowTimeline.current = gsap
        .timeline({ paused: true })
        .to(arrowPathRef.current, {
          width: endWidth,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(
          arrowHeadRef.current,
          {
            x: endWidth,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "<"
        )
        .fromTo("#github", { y: "500%" }, { y: "0%", duration: 0.2 }, "-=0.1")
        .fromTo("#linkedin", { y: "500%" }, { y: "0%", duration: 0.2 }, "<0.1")
        .fromTo("#email", { y: "500%" }, { y: "0%", duration: 0.2 }, "<0.1");
    },
    { scope: gsapContainer }
  );

  const openSesame = () => {
    arrowTimeline.current?.restart();
  };

  return (
    <section
      id="contact"
      className="container flex h-[20vh] my-8 relative overflow-y-hidden"
    >
      <div
        ref={gsapContainer}
        className="px-8 flex items-center gap-4 w-full relative"
      >
        <h2 className="text-5xl font-semibold my-auto text-nowrap leading-normal inline-flex w-min sm:w-auto">
          Contact Me
        </h2>

        <div ref={arrowPathRef} className="h-1 w-0 bg-primary relative">
          <div
            ref={arrowHeadRef}
            onClick={openSesame}
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <div
              style={{
                maskImage: `url('/images/icons/arrowhead.svg')`,
                WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
              }}
              className="block w-6 h-8 icon-mask bg-primary"
            ></div>
          </div>
        </div>
        <div className="flex gap-4 ml-auto">
          <div
            id="github"
            style={{
              maskImage: `url('/images/icons/github.svg')`,
              WebkitMaskImage: `url('/images/icons/github.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          ></div>
          <div
            id="linkedin"
            style={{
              maskImage: `url('/images/icons/linkedin.svg')`,
              WebkitMaskImage: `url('/images/icons/linkedin.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          ></div>
          <div
            id="email"
            style={{
              maskImage: `url('/images/icons/envelope-solid-full.svg')`,
              WebkitMaskImage: `url('/images/icons/envelope-solid-full.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
