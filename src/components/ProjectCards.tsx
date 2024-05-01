export const cards: {
  url: string;
  phoneUrl: string;
  title: string;
  content: string;
  id: number;
  link: string;
}[] = [
  {
    url: "/project_screenshots/ncnews.png",
    phoneUrl: "/project_screenshots/ncnews-phone.png",
    title: "NC News",
    content:
      "Tech stack: PSQL, Express, Node.js, Supertest, JavaScript, React.js, Vanilla CSS.\\\nThis is the first ever full-stack project I created! The aim of this project was to build a RESTful API and use it to develop a social news aggregation, web content rating, and discussion website. This is still a work in progress, and there are certain features that I intend to introduce, for example: user profiles; full-text search functionality for users; sign-up with password salting and hashing in the backend.",
    id: 1,
    link: "https://main--nc-news-hessie.netlify.app/",
  },
  {
    url: "/project_screenshots/codelingo.png",
    phoneUrl: "/project_screenshots/codelingo-phone.png",
    title: "CodeLingo",
    content: `Tech stack: NextJS, Tailwind, TypeScript, MongoDB.\\\nFor the final project I created on the Northcoders bootcamp, I collaborated with a team of fellow Northcoders to create an interactive app similar to Duolingo or Scratch to help young people learn JavaScript and Python. We had 8 days to learn a whole new tech stack and complete the project.`,
    id: 2,
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
  },
  {
    url: "/project_screenshots/portfolio.png",
    phoneUrl: "/project_screenshots/portfolio-phone.png",
    title: "Portfolio",
    content:
      "Tech stack: TypeScript, Node.js, React.js, Tailwind, Figma\\\nFor my portfolio, I experimented with framer motion and three.js to create most of the interactive and animated features. I plan to expand on some of my ideas and make my portfolio even more interactive by adding some easter eggs into the mask componenent and making the project screenshots scrollable.",
    id: 3,
    link: "",
  },
  {
    url: "",
    phoneUrl: "",
    title: "WIP",
    content:
      "Tech stack: Angular, Chai & Mocha, React Native\\\nI am currently working on a sudoku puzzle generator and solver. I have been using Jest to test my algorithm, and I plan on using React Native and Chai & Mocha to test the front end. I also plan on learning Angular and using it making a Kanban Board app (so I can keep track of all my projects!).",
    id: 4,
    link: "",
  },
];
