import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Earth from "../components/Earth";
import TechStackLogos from "../components/TechStackLogos";
import MyCV from "../assets/Jessica Harper CV.pdf";
import Projects from "./Projects";
import Button from "../components/Button";
import Contact from "./Contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = (): JSX.Element => {
  const gsapContainer = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      const el = itemRef.current;
      if (!el) return;

      const speed = parseFloat(el.dataset.speed || "0.8");

      gsap.to(el, {
        y: () => -(ScrollTrigger.maxScroll(window) * speed),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: "#earth",
        start: "top top",
        endTrigger: "#projects",
        end: "top top",
        pin: true,
        pinSpacing: false,
        pinType: "transform",
      });

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: "#card1",
          start: "top 5%",
          endTrigger: "#card2",
          end: "top 5%",
          pin: true,
          pinSpacing: false,
          pinType: "transform",
        });
        ScrollTrigger.create({
          trigger: "#card2",
          start: "top 5%",
          endTrigger: "#card3",
          end: "top 5%",
          pin: true,
          pinSpacing: false,
          pinType: "transform",
        });
        ScrollTrigger.create({
          trigger: "#card3",
          start: "top 5%",
          endTrigger: "#projects",
          end: "bottom 80%",
          pin: true,
          pinSpacing: false,
          pinType: "transform",
        });
        ScrollTrigger.create({
          trigger: "#card4",
          start: "top 5%",
          endTrigger: "#projects",
          end: "bottom 80%",
          pin: true,
          pinSpacing: false,
          pinType: "transform",
        });
      });

      window.addEventListener("load", () => ScrollTrigger.refresh());
    },
    { scope: gsapContainer }
  );

  return (
    <div
      ref={gsapContainer}
      className="full-height-container w-full flex flex-col"
    >
      <div id="earth" className="absolute top-[2rem] inset-0  w-full">
        <Earth />
      </div>
      <div
        ref={itemRef}
        data-speed="0.2"
        className=" absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs -z-10"
      >
        Keep scrollin'
        <div
          style={{
            maskImage: `url('/images/icons/arrowhead.svg')`,
            WebkitMaskImage: `url('/images/icons/arrowhead.svg')`,
          }}
          className="block w-6 h-8 icon-mask bg-primary rotate-90 mx-auto"
        />
      </div>

      <div className="h-screen lg:h-0"></div>

      <section className="mt-0 px-0 lg:px-12 h-full container relative overflow-hidden">
        <div className="flex justify-center md:absolute">
          <div id="card1" className="card">
            <div className="text-xs leading-5 h-full flex flex-col gap-2">
              <p>
                <span className="font-depixel text-3xl text-accent">Yo!</span>{" "}
                My name is Jess, and I am a Software Developer, amateur
                animator, and burgeoning crazy cat lady based in Sheffield (see
                model of Earth for reference).
              </p>
              <span className="mt-2">
                I currently work with TypeScript and the MERN stack.
              </span>
            </div>
          </div>
        </div>

        <div className="h-full md:h-[60vh] flex w-full mt-72 md:mt-0">
          <div className="card mx-auto md:mr-0 md:ml-auto mt-auto ">
            <h3 className="text-lg mb-8">Main Tech Stack: </h3>

            <div className="gap-8 flex flex-col">
              <TechStackLogos />

              <Button
                href="/MyCV.pdf"
                download={MyCV}
                title="Download CV"
                id="pixelBtn"
                colours={[
                  "#EC4899",
                  "#EB6A6A",
                  "#EB7D51",
                  "#EB9630",
                  "#EBB305",
                ]}
                range={5}
                delay={100}
              />
            </div>
          </div>
        </div>

        <div className=" h-full md:h-screen w-full flex flex-col flex-auto mt-72">
          <div id="card2" className="card mx-auto md:mx-0 md:ml-auto">
            <div className="h-full space-y-2">
              <h3 className="text-lg ">What I do: </h3>
              <div className="text-xs leading-5 h-full flex flex-col gap-2">
                <div>
                  <span className="text-accent">Languages:</span> JavaScript,
                  TypeScript, PHP
                </div>
                <div>
                  <span className="text-accent">Testing:</span> Test Driven
                  Development (TDD), Jest, Supertest, Pest
                </div>
                <div>
                  <span className="text-accent">Back-end:</span> SQL, RESTful
                  APIs, Express, MongoDB
                </div>
                <div>
                  <span className="text-accent"> Front-end:</span> HTML, CSS,
                  React, React Native Next.js, Tailwind, Laravel, Filament,
                  Three.js, WordPress, Woocommerce
                </div>
                <div>
                  <span className="text-accent">Hosting:</span> Render, Netlify
                </div>
                <div>
                  <span className="text-accent">Other:</span> Paired
                  programming, technical communication, Agile and SCRUM
                  methodologies
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-full md:h-screen w-full flex flex-col flex-auto mt-72 ">
          <div id="card3" className="card mb-auto mx-auto md:mx-0 flex">
            <div className="text-xs leading-5 h-full flex flex-col gap-2">
              <h3 className="font-depixel text-lg uppercase">About me:</h3>I am
              a former Videogame Translator, current Software Developer, and
              aspiring Game Dev. My favourite animals are whales, and I drive to
              work every day in a clapped-out Suzuki Carry van.
              <span>
                I have been attempting to teach myself Blender (hence model of
                Earth), and I'm currently experimenting with Pico 8.
              </span>
            </div>
          </div>
        </div>

        <div className=" h-full w-full flex flex-col flex-auto mt-48 mb-48">
          <div
            id="card4"
            className="card mt-auto mx-auto md:mx-0 md:ml-auto left-0"
          >
            <div className="h-full space-y-2">
              <h3 className="text-lg">Where I've worked:</h3>
              <ul className="text-xs leading-5 h-full flex flex-col gap-2">
                <li className="flex flex-col">
                  <span className="text-accent">
                    Software Developer, Verticode | 10/2025 to Present:
                  </span>
                  React, TypeScript, Tailwind, Express, Node.js, Express,
                  MongoDB
                </li>
                <li className="flex flex-col">
                  <span className="text-accent">
                    Junior Web Developer, Genius Division | 06/2024 to 10/2025:
                  </span>
                  PHP, Laravel, Livewire, Blade, MySQL, WordPress, Tailwind
                </li>
                <li className="flex flex-col">
                  <span className="text-accent">
                    Junior Software Developer, Northcoders | 11/2023 to 3/2024:
                  </span>
                  JavaScript, TypeScript, PSQL, React, Node.js, MongoDB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Projects />
      <Contact />
    </div>
  );
};

export default LandingPage;
