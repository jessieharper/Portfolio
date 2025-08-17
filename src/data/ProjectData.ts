export interface Project {
  title: string;
  date: string;
  category: string;
  stack: string;
  image: string[];
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
    image: [
      "/images/projects/sudowiz/sudowiz1.png",
      "/images/projects/sudowiz/sudowiz2.png",
    ],
    link: "",
    content: {
      goal: "Build a cross-platform Sudoku and puzzle app to strengthen mobile development skills and explore React Native while creating an engaging, user-friendly gaming experience.",
      features:
        "Customizable difficulty levels, ability to choose different clue patterns, daily challenge mode, player progress tracking, and social features for sharing results with friends. Planned future features include expanding to alternate Sudoku styles (e.g. Bomb Sudoku, Latin-Doku) to offer greater variety and replayability.",
      outcome: "Currently in development (WIP).",
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
    stack: "PHP, Laravel, Livewire, Blade, Tailwind, MySQL, PEST",
    image: [],
    link: "",
    content: {
      goal: "Design and implement a habit tracking feature as part of the My Life Plan weight management service by Morelife, integrating seamlessly into their existing online weight loss platform.",
      features:
        "Track weekly habits related to nutrition, exercise, and wellbeing; provide users with progress visualizations; deliver reminders and accountability tools to support sustained lifestyle changes.",
      outcome: "Currently in testing (WIP).",
    },
  },
  {
    title: "Fashion Toolbox",
    date: 'Jul "25',
    category: "Genius Division",
    stack: "WP, JS, Tailwind, Three.js",
    image: [],
    link: "https://www.fashiontoolbox.co.uk/",
    content: {
      goal: "Create a modern, engaging website for a small digital fashion company (Fashion Toolbox) to showcase their portfolio and serve as a hub for attracting new clients.",
      features:
        "Interactive 3D models to display digital products, integrated video content for storytelling.",
      outcome:
        "Delivered a fully customized site that highlights Fashion Toolbox’s innovative work and brand identity. Client feedback: 'The team completely got my vision from day one. They listened, asked the right questions, and turned ideas into a site that reflects everything Fashion Toolbox stands for. They went above and beyond at every stage, nothing was too much trouble, and the end result is absolutely spot on. I'm really proud of what we've built together.' – Laura Fish, Fashion Toolbox",
    },
  },
  {
    title: "Curve Digital",
    date: 'May "25',
    category: "Genius Division",
    stack: "WP, Laravel, Tailwind, Alpine,js, JS",
    image: [],
    link: "https://www.curvedigital.co.uk/",
    content: {
      goal: "Create a website for a small digital fashion company to showcase their work and act as a hub to attract new clients.",
      features:
        "Fully customised site with integrated video content for storytelling.",
      outcome:
        '"Working with the team at Genius Division has been a fantastic experience once again. They brought our vision for the new curvedigital.co.uk site to life with precision and creativity. From understanding our goals to delivering technical solutions — especially around showcasing high-quality video in a fast, seamless way — they went above and beyond at every stage. They consistently delivered ideas and solutions that exceeded our expectations. We absolutely love our new site!" - Ian Moss, Curve Digital',
    },
  },
  {
    title: "Cannon Hall Farm",
    date: 'Aug "24',
    category: "Genius Division",
    stack: "WP, Woocommerce, AJAX, JS, Tailwind",
    image: [],
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
    image: [],
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
    content: {
      goal: "Design and develop a website aimed at helping children learn Python and JavaScript through interactive quizzes and gamified experiences.",
      features:
        "Built-in IDE-style coding sandbox for real-time practice, drag-and-drop quiz games, and a friendly, accessible interface inspired by Duolingo and Scratch.",
      outcome:
        "Collaborated with a team of fellow Northcoders to deliver an engaging educational platform within a tight deadline. Over the course of 8 days, we learned and applied a brand-new tech stack (TypeScript, Next.js, Tailwind, MongoDB) while building the app from scratch. The project showcased both our teamwork and ability to quickly adopt new technologies to meet ambitious goals.",
    },
  },
];

export { projects };
