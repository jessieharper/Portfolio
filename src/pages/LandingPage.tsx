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
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      // ScrollTrigger.scrollerProxy(".full-height-container", {
      //   pinType: "fixed",
      // });
      ScrollTrigger.create({
        trigger: "#earth",
        start: "top top",
        endTrigger: "#projects",
        end: "top top",
        pin: true,
        pinSpacing: false,
        pinType: "transform",
      });

      mm.add("(min-width: 800px)", () => {
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
    <div ref={gsapContainer} className="full-height-container">
      <div id="earth" className="absolute top-[2rem] inset-0 -z-10 w-full">
        <Earth />
      </div>

      <div className="h-screen lg:h-0"></div>

      <section className="mt-0 px-0 lg:px-12 h-full container relative overflow-hidden">
        <div className="flex md:absolute">
          <div id="card1" className="card">
            <p className="text-xs leading-5 h-full">
              <span className="font-depixel text-3xl">Yo!</span> My name is
              Jessica, and I am a Sheffield-based Software Developer, amateur
              animator, and burgeoning crazy cat lady.
              <br />
              <br />
              This is my creative dumping ground. Take a look around - any
              feedback, praise, criticisms, ~
              <span className="uppercase font-bold">job offers</span>
              ~, or questions(?) are welcome.
            </p>
          </div>
        </div>

        <div className="h-full md:h-[60vh] flex w-full mt-72 md:mt-0">
          <div className="card md:ml-auto mt-auto">
            <h3 className="text-sm mb-8">Main Tech Stack: </h3>

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
              <h3 className="text-sm">Key Skills: </h3>
              <p className="text-xs leading-5 h-full flex flex-col gap-2">
                Languages: JavaScript, PHP, TypeScript
                <span>
                  Testing: Test Driven Development (TDD), Jest, Supertest, Pest
                </span>
                <span>Back-end: SQL, RESTful APIs, Express, MongoDB</span>
                <span>
                  Front-end: HTML, CSS, React, React Native Next.js, Tailwind,
                  Laravel, Filament, Three.js, WordPress, Woocommerce
                </span>
                <span>Hosting: Render, Netlify</span>
                <span>
                  Other: Paired programming, technical communication, SDL, Agile
                  and SCRUM methodologies
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" h-full md:h-screen w-full flex flex-col flex-auto mt-72 ">
          <div id="card3" className="card mb-auto mx-auto md:mx-0 flex">
            <p className="text-xs leading-5 h-full flex flex-col gap-2">
              <span className="font-depixel text-3xl">About me...</span>I am a
              former Videogame Translator, current Web Developer, and I have
              weirdly narrow ear canals. My favourite animals are whales, I've
              just signed up to do a triathlon because I'm going through a
              mid-life crisis, and I drive to work every day in a clapped-out
              Suzuki Carry van.
              <span>
                I am interested in interactive UX/UI design, 3D modeling, insert
                more stuff here.
              </span>
            </p>
          </div>
        </div>

        <div className=" h-full w-full flex flex-col flex-auto mt-48 mb-48">
          <div
            id="card4"
            className="card mt-auto mx-auto md:mx-0 md:ml-auto left-0"
          >
            <div className="h-full space-y-2">
              <h3 className="text-sm">Experience:</h3>
              <ul className="text-xs leading-5 h-full flex flex-col gap-2">
                <li>
                  Junior Software Developer, Northcoders | 11/2023 to 3/2024
                  JavaScript, TypeScript, PSQL, React, Node.js, MongoDB
                </li>
                <li>
                  Freelance Translator, INLINGO | 10/2022 to 08/2024 &
                  AllCorrect Games | 08/2021 to 08/2024
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
