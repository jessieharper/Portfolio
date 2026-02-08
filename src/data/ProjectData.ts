export interface Project {
  title: string;
  date: string;
  stack: string;
  image: string[];
  link: string;
  content: string;
}

const projects: Project[] = [
  {
    title: "Alien Abduction",
    date: "WIP",
    stack: "Lua, Pico-8",
    image: [
      "/images/projects/alien_abduction/alien_abduction.png",
      "/images/projects/alien_abduction/alien_abduction1.png",
    ],
    link: "",
    content:
      "I’m currently building a mini game in Pico-8 where you play as a tiny alien on a mission to abduct cows. The catch? The cows must be collected in the correct order or you’ll lose points, and your rather impatient alien boss is timing the entire operation, so speed matters. Chaos, pressure, and cow logistics. Ehr. Mah. Gerd. I plan to make more mini games in Pico-8, so watch this space I guess.",
  },
  {
    title: "Portfolio",
    date: 'Jan "26',
    stack: "React, TypeScript, Blender, Tailwind, Three.js, GSAP",
    image: [],
    link: "",
    content: "",
  },
  {
    title: "MyLOS",
    date: "WIP",
    stack: "Laravel, Filament, PHP, Tailwind, MySQL",
    image: [],
    link: "",
    content:
      "MyLOS (My Life Organisation System) is a personal project I’m building to explore Filament and solidify my Laravel skills. The goal is to create a centralised admin panel for managing projects, tasks, and personal budgets, with flexible organisation tools including lists, kanban boards, and budget trackers. This project has been an opportunity to deepen my understanding of Laravel’s ecosystem while developing a practical, scalable tool that I plan to evolve over time.",
  },
  {
    title: "Sudowiz",
    date: "WIP",
    stack: "JavaScript, React, React Native, Tailwind, JEST",
    image: [
      "/images/projects/sudowiz/sudowiz1.png",
      "/images/projects/sudowiz/sudowiz2.png",
    ],
    link: "",
    content:
      "Build a cross-platform Sudoku and puzzle app to strengthen mobile development skills and explore React Native while creating an engaging, user-friendly gaming experience. Customizable difficulty levels, ability to choose different clue patterns, daily challenge mode, player progress tracking, and social features for sharing results with friends. Planned future features include expanding to alternate Sudoku styles (e.g. Bomb Sudoku, Latin-Doku) to offer greater variety and replayability.",
  },

  {
    title: "Codelingo",
    date: 'Jan "24',
    stack: "TypeScript, Next.js, Tailwind, MongoDB",
    image: [],
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
    content:
      "Design and develop a website aimed at helping children learn Python and JavaScript through interactive quizzes and gamified experiences. Built-in IDE-style coding sandbox for real-time practice, drag-and-drop quiz games, and a friendly, accessible interface inspired by Duolingo and Scratch. Collaborated with a team of fellow Northcoders to deliver an engaging educational platform within a tight deadline. Over the course of 8 days, we learned and applied a brand-new tech stack (TypeScript, Next.js, Tailwind, MongoDB) while building the app from scratch. The project showcased both our teamwork and ability to quickly adopt new technologies to meet ambitious goals.",
  },
];

export { projects };
