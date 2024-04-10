import Header from "./components/Header";
import Cursor from "./components/Cursor";
import "./index.css";
import LandingPage from "./components/LandingPage";
import { useState } from "react";

const App = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean | undefined>(false);
  return (
    <main className="h-[100vh] w-[100vw] overflow-hidden">
      <Header setIsHovered={setIsHovered} />
      <LandingPage setIsHovered={setIsHovered} />
      <Cursor isHovered={isHovered} />
    </main>
  );
};

export default App;
