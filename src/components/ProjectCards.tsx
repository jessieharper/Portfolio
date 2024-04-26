export const cards: {
  url: string;
  phoneUrl: string;
  title: string;
  content: string;
  id: number;
  link: string;
  techStack: string[];
}[] = [
  {
    url: "/projects/ncnews.png",
    phoneUrl: "/projects/ncnews-phone.png",
    title: "NC News",
    content:
      "Tech stack: PSQL, Express, Node.js, Supertest, JavaScript, React.js, Vanilla CSS.\\\nThe aim of this project was to build a RESTful API and use it to develop a social news aggregation, web content rating, and discussion website using the Northcoders News API I created in the backend project week. ",
    id: 1,
    link: "https://main--nc-news-hessie.netlify.app/",
    techStack: ["postgresql", "nodejs", "javascript", "react", "css3"],
  },
  {
    url: "/projects/codelingo.png",
    phoneUrl: "/projects/codelingo-phone.png",
    title: "CodeLingo",
    content:
      "Tech stack: NextJS, Tailwind, TypeScript, MongoDB.\\\nFor the final project I created on the Northcoders bootcamp, I collaborated with a team of peers to create an interactive app similar to Duolingo or Scratch to help young people learn JavaScript and Python. We had 8 days to learn a whole new tech stack and complete the project.",
    id: 2,
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
    techStack: [
      "nextjs-icon",
      "tailwindcss-icon",
      "typescript-icon",
      "mongodb",
    ],
  },
  {
    url: "/projects/portfolio.png",
    phoneUrl: "/projects/portfolio-phone.png",
    title: "Portfolio",
    content: "Tech stack: TypeScript, Node.js, React.js, Tailwind",
    id: 3,
    link: "",
    techStack: ["typescript-icon", "nodejs", "react", "tailwindcss-icon"],
  },
  {
    url: "",
    phoneUrl: "",
    title: "WIP",
    content: "",
    id: 4,
    link: "",
    techStack: ["angular", "chai", "jest"],
  },
];
