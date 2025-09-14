import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const gsapContainer = useRef<HTMLDivElement | null>(null);
  const arrowTimeline = useRef<gsap.core.Timeline | null>(null);
  const arrowPathRef = useRef<HTMLDivElement | null>(null);
  const arrowHeadRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const logoContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      arrowTimeline.current = gsap
        .timeline({ paused: true })
        .fromTo(
          arrowPathRef.current,
          { width: "0%" },
          { width: "100%", duration: 0.5, ease: "power1.inOut" }
        )
        .fromTo(
          arrowHeadRef.current,
          { left: "0%" },
          {
            left: "calc(100% - 20px)",
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
    if (!isClicked) arrowTimeline.current?.restart();
    setIsClicked(true);
  };

  return (
    <section
      id="contact"
      className="container flex h-[20vh] py-8 relative overflow-y-hidden z-40 bg-body"
    >
      <div
        ref={gsapContainer}
        className="lg:px-8 flex flex-col sm:flex-row items-center gap-4 w-full relative"
      >
        <div
          className={`flex items-center h-full w-full gap-4 ${
            isClicked ? "" : "cursor-pointer"
          }`}
          onClick={openSesame}
        >
          <h2
            ref={h2Ref}
            className="text-3xl md:text-5xl font-semibold my-auto text-nowrap leading-normal inline-flex w-full md:w-auto justify-center sm:justify-start"
          >
            Contact Me
          </h2>

          <div className="h-full w-full relative hidden md:flex items-center mr-4">
            <div
              ref={arrowPathRef}
              className="h-1 bg-primary relative z-10"
            ></div>
            <div
              ref={arrowHeadRef}
              className="absolute top-1/2 -translate-y-1/2"
            >
              <div
                style={{
                  maskImage: `url('/images/icons/arrowhead.svg')`,
                  WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
                }}
                className="block w-6 h-8 icon-mask bg-primary"
              />
            </div>
          </div>
        </div>

        <div
          ref={logoContainerRef}
          className="logoContainer flex justify-between sm:justify-center gap-10 md:gap-6 sm:ml-auto"
        >
          <a
            target="_blank"
            href="https://github.com/jessieharper"
            id="github"
            style={{
              maskImage: `url('/images/icons/github.svg')`,
              WebkitMaskImage: `url('/images/icons/github.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jessie-harper/"
            id="linkedin"
            style={{
              maskImage: `url('/images/icons/linkedin.svg')`,
              WebkitMaskImage: `url('/images/icons/linkedin.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          />
          <a
            href="mailto:jessieharper12@gmail.com"
            id="email"
            style={{
              maskImage: `url('/images/icons/envelope-solid-full.svg')`,
              WebkitMaskImage: `url('/images/icons/envelope-solid-full.svg')`,
            }}
            className="flex w-12 h-12 icon-mask bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
