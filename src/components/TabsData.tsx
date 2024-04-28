import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faLanguage,
  faPalette,
  faVials,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

type TabsData = [
  {
    title: string;
    content: Element;
  }
];

export const TabsData = [
  {
    title: "About",
    content: (
      <>
        I am a Junior Software Developer with a drive to learn new skills, and a
        particular interest in UI and user experiences. I am a hardworking,
        conscientious, and creative problem-solver.
        <br />
        <br />
        Growing up in the Internet era, I sparked a fascination with technology
        at an early age, and I created my first, albeit amateurish, website at
        12. Like many young people, I didn't have a clue what I wanted to do as
        my career, but I decided to pursue language studies at university, which
        is what brought me to sunny Sheffield in 2012.
        <br />
        <br />I started working as a freelance translator and game tester in
        2021, translating video game content, and I started thinking more about
        the posibility of becoming a dev. My interest in tech intensified last
        year, leading me to start teaching myself Python and exploring coding
        bootcamps. Facing redundancy in October 2023, I seized the opportunity,
        promptly enrolling in the Northcoders Software Engineering Bootcamp,
        aligning with my passion for tech and initiating a career transition.
        <br />
        <br />
        Take a look at my projects below, and feel free to get in touch!
      </>
    ),
  },
  {
    title: "Experience",
    content: (
      <>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 underline">
            Junior Software Developer
          </h3>

          <h4 className="mb-4">Northcoders | 11/2023 to 3/2024</h4>
          <p className="mb-4">
            Learnt the fundamentals of software engineering with a heavy focus
            on TDD and paired programming | Learnt back-end and front-end
            processes | Worked independently to create a back-end and front-end
            project | Collaborated with colleagues on a final group project
          </p>
          <h3 className="text-lg font-semibold mb-2 underline">
            Freelance Translator
          </h3>
          <h4 className="mb-4">
            INLINGO | 10/2022 to present & AllCorrect Games | 08/2021 to present
          </h4>
          <p className="mb-4">
            Translate, edit, and proofread video game content from RU-EN using
            CAT tools such as MemoQ | Test games on different platforms and
            report linguistic, graphical, and gameplay bugs to the client using
            bug tracking systems such as Mantis | Conduct thorough research on a
            vast variety of topics to produce high-quality, dynamic translations
          </p>
          <h3 className="text-lg font-semibold mb-2 underline">
            Subtitle QC Operator
          </h3>
          <h4 className="mb-4">ZOO Digital | 11/2020 to 10/2023</h4>
          <p className="mb-4">
            Carried out technical quality control tests using subtitling
            software to effectively and efficiently complete projects | Worked
            on projects with high-profile clients such as Disney, Paramount,
            HBO, and Netflix | Organised and managed a team recognition channel,
            regularly making creative certificates for my colleagues to foster a
            positive team attitude
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Skills",
    content: (
      <>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faLanguage} size="lg" className=" mr-4" />
              <h3 className="text-lg underline font-semibold mr-4">
                Languages:
              </h3>
            </div>
            <p className="ml-10">
              JavaScript, using Node.js and browsers as environment, Python,
              TypeScript
            </p>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faVials} size="lg" className="mt-4 mr-4" />
              <h3 className="text-lg underline font-semibold mt-4 mr-4 ">
                Testing:
              </h3>
            </div>
            <p className="ml-10">
              Test Driven Development (TDD), Jest, Supertest
            </p>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faDatabase}
                size="lg"
                className="mt-4 mr-4"
              />
              <h3 className="text-lg underline font-semibold mt-4 mr-4 ">
                Back-end:
              </h3>
            </div>
            <p className="ml-10">
              SQL, PSQL, RESTful APIs, Express, MongoDB, seeding, migrations
            </p>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faPalette}
                size="lg"
                className="mt-4 mr-4"
              />
              <h3 className="text-lg underline font-semibold  mt-4 mr-2 ">
                Front-end:
              </h3>
            </div>
            <p className="ml-10">
              HTML, CSS, React, Next.js, Tailwind, Lighthouse and other
              accessibility tools
            </p>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faChrome}
                size="lg"
                className="mt-4 mr-4"
              />
              <h3 className="text-lg underline font-semibold mt-4 mr-4 ">
                Hosting:
              </h3>
            </div>
            <p className="ml-10">Render, Netlify</p>
            <div className="flex flex-row">
              <FontAwesomeIcon
                icon={faEllipsis}
                size="lg"
                className="mt-4 mr-4"
              />
              <h3 className="text-lg underline font-semibold mt-4 mr-4">
                Other:
              </h3>
            </div>
            <p className="ml-10">
              Paired programming, technical communication, SDL, Agile and SCRUM
              methodologies
            </p>
          </div>
        </div>
      </>
    ),
  },
];
