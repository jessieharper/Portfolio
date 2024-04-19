import Header from "./components/Header.js";
import "./index.css";
import Mask from "./components/Mask.js";
import LandingPage from "./components/LandingPage.js";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition.js";

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
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <Mask setIsHovered={setIsHovered} />
        </motion.div>
        <Header />
        <LandingPage />
      </ThemeProvider>
    </main>
  );
};

export default App;
