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
      "I’m currently building a mini game in Pico-8 where you play as a tiny alien on a mission to abduct cows. The catch? The cows must be collected in the correct order or you’ll lose points, and your impatient alien boss is timing the entire operation, so speed matters. Chaos, pressure, and cow logistics. Ehr. Mah. Gerd. I plan to make more mini games in Pico-8, so watch this space I guess.",
  },
  {
    title: "Portfolio",
    date: 'Jan "26',
    stack: "React, TypeScript, Blender, Tailwind, Three.js, GSAP",
    image: [],
    link: "",
    content:
      "The website that you are currently on. This never-ending project has taken over a year of weekend tweaks, refactors, redesigns, and I-can't-be-bothered-to-do-this-anymore-and-I-want-to-do-something-else-s to push live 👍. Was it worth it? Sure, I learnt a lot along the way, especially about GSAP scroll triggers and Blender. Now that it's 'done', I can only envision 2 possible further courses of action: 1. Complete redesign, fuck it 2. Lean into the theme even further. More pixels. MORE.",
  },
  // {
  //   title: "MyLOS",
  //   date: "WIP",
  //   stack: "Laravel, Filament, PHP, Tailwind, MySQL",
  //   image: [],
  //   link: "",
  //   content:
  //     "MyLOS (My Life Organisation System) is a personal project I’m building to explore Filament and solidify my Laravel skills. The goal is to create a centralised admin panel for managing projects, tasks, and personal budgets, with flexible organisation tools including lists, kanban boards, and budget trackers. This project has been an opportunity to deepen my understanding of Laravel’s ecosystem while developing a practical, scalable tool that I plan to evolve over time.",
  // },
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
      "Are you a SudoWiz? What is a SudoWiz? And other questions. Find out on SudoWiz, the React Native Sudoku and puzzle app I'm building to strengthen my mobile development skills (if I ever release it that is lololol psyche). In an ideal world, this will include customizable difficulty levels, the ability to choose different clue patterns, a daily challenge mode, player progress tracking, and social features for sharing results with friends. Planned future features include expanding to alternate Sudoku styles (e.g. Bomb Sudoku, Latin-Doku) to offer greater variety and replayability. So watch this space I guess.",
  },

  {
    title: "Codelingo",
    date: 'Jan "24',
    stack: "TypeScript, Next.js, Tailwind, MongoDB",
    image: [],
    link: "https://codelingo-by-tpwogitlou.netlify.app/",
    content:
      "My first ever group coding project (be nice). At the end of my coding bootcamp, I teamed up with a group of other Northcoders to form TPWOGITLOU (The People Who Occassionally Go Into the Leeds Office United) to design and develop a Scratch-like website aimed at helping children learn Python and JavaScript. We only had 8 days to learn and apply a brand-new tech stack while plannig and building the app from complete scratch. Obviously it's not perfect, but I had a lot of fun making it and I'm impressed at what we managed to accomplish as total noobs in just over a week. I also think this might be when my pixel art obsession began, just FYI.",
  },
];

export { projects };
