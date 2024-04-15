import Header from "./components/Header";
import Cursor from "./components/Cursor";
import "./index.css";
import LandingPage from "./components/LandingPage";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean | undefined>(false);

  return (
    <main className="min-h-screen w-[100vw]">
      <ThemeProvider>
        <Header setIsHovered={setIsHovered} />
        <LandingPage setIsHovered={setIsHovered} />
        <Cursor isHovered={isHovered} />
      </ThemeProvider>
    </main>
  );
};

export default App;
