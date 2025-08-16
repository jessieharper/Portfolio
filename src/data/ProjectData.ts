export interface Project {
  title: string;
  date: string;
  category: string;
  stack: string;
  image: string;
  link: string;
  content: {
    goal: string;
    features: string;
    outcome: string;
  };
}

const projects: Project[] = [
  {
    title: "Sudowiz",
    date: "WIP",
    category: "Personal Project",
    stack: "JavaScript, React, React Native, Tailwind, JEST",
    image: "",
    link: "",
    content: {
      goal: "Build a mobile Sudoku puzzle app where you can play Sudoku and other number-based puzzle games.",
      features: "Puzzles.",
      outcome: "TBD...",
    },
  },
  // {
  //   title: "MyLOS (WIP)",
  //   stack: "Laravel, Filament, PHP, Tailwind, MySQL",
  //   image: "",
  //   link: "",
  //   content:
  //     "MyLOS (My Life Organisation System) is a personal project I’m building to explore Filament and solidify my Laravel skills. The goal is to create a centralised admin panel for managing projects, tasks, and personal budgets, with flexible organisation tools including lists, kanban boards, and budget trackers. This project has been an opportunity to deepen my understanding of Laravel’s ecosystem while developing a practical, scalable tool that I plan to evolve over time.",
  // },
  {
    title: "Morelife",
    date: "WIP",
    category: "Genius Division",
    stack: "Laravel, Livewire, Tailwind, Nova, MySQL, PEST",
    image: "morelife.svg",
    link: "",
    content: {
      goal: "Create a habit tracking feature as part of the My Life Plan weight management service that is provided by Morelife. The client requested that the feature be integrated into their pre-existing online weight loss platform.",
      features: "Habit tracker.",
      outcome: "TBD...",
    },
  },
  {
    title: "Fashion Toolbox",
    date: 'Jul "25',
    category: "Genius Division",
    stack: "WP, JS, Tailwind, Three.js",
    image: "",
    link: "https://www.fashiontoolbox.co.uk/",
    content: {
      goal: "Create a website for a small digital fashion company to showcase their work and act as a hub to attract new clients.",
      features: "3D models, video, forms.",
      outcome:
        "'The team completely got my vision from day one. They listened, asked the right questions, and turned ideas into a site that reflects everything Fashion Toolbox stands for. They went above and beyond at every stage, nothing was too much trouble, and the end result is absolutely spot on. I'm really proud of what we've built together.' - Laura Fish, Fashion Toolbox",
    },
  },
  {
    title: "Curve Digital",
    date: 'May "25',
    category: "Genius Division",
    stack: "WP, Laravel, Tailwind, Alpine,js, JS",
    image: "curve.svg",
    link: "https://www.curvedigital.co.uk/",
    content: {
      goal: "Create a website for a small digital fashion company to showcase their work and act as a hub to attract new clients.",
      features: "3D models, video, forms.",
      outcome:
        "'Working with the team at Genius Division has been a fantastic experience once again. They brought our vision for the new curvedigital.co.uk site to life with precision and creativity. From understanding our goals to delivering technical solutions—especially around showcasing high-quality video in a fast, seamless way—they went above and beyond at every stage. They consistently delivered ideas and solutions that exceeded our expectations. We absolutely love our new site!' - Ian Moss, Curve Digital",
    },
  },
  {
    title: "Cannon Hall Farm",
    date: 'Aug "24',
    category: "Genius Division",
    stack: "WP, Woocommerce, AJAX, JS, Tailwind",
    image: "",
    link: "https://shop.cannonhallfarm.co.uk/",
    content: {
      goal: "Create a website for a small digital fashion company to showcase their work and act as a hub to attract new clients.",
      features: "3D models, video, forms.",
      outcome: "Lorem",
    },
  },
  {
    title: "Codelingo",
    date: 'Jan "24',
    category: "Northcoders",
    stack: "TypeScript, Next.js, Tailwind, MongoDB",
    image: "codelingo.png",
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
    content: {
      goal: "Create a website for a small digital fashion company to showcase their work and act as a hub to attract new clients.",
      features: "3D models, video, forms.",
      outcome: "Lorem",
    },
  },
];

export { projects };
