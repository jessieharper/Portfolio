import Header from "./components/Header.js";
import About from "./components/About.js";
import Mask from "./components/Mask.js";
import Projects from "./components/Projects.js";
import LandingPage from "./components/LandingPage.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import useMousePosition from "./utils/useMousePosition.js";
import "./index.css";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { motion } from "framer-motion";

const App = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean | undefined>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 250 : 30;

  return (
    <main className="min-h-[100vh] w-[100vw]">
      <ThemeProvider>
        <motion.div
          className="mask hidden md:block"
          animate={{
            WebkitMaskPosition: `${x! - size / 2}px ${y! - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{
            ease: "tween",
            WebkitMaskPosition: {
              duration: 0,
            },
            WebkitMaskSize: {
              duration: 0,
            },
          }}
        >
          <Mask setIsHovered={setIsHovered} />
        </motion.div>
        <Header />
        <LandingPage />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default App;
