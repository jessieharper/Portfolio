import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalProvider } from "./contexts/GlobalContext.js";
import "./index.css";
import { Header } from "./components/index.js";
import LandingPage from "./pages/LandingPage.js";
import HyperspaceStars from "./components/HyperspaceStars.js";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <HyperspaceStars />
        <Header />

        <main id="main" className="h-full gap-8 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>{" "}
          {/* <Footer /> */}
        </main>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
