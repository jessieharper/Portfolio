import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalProvider } from "./contexts/GlobalContext.js";
import "./index.css";
import { Header } from "./components/index.js";
import LandingPage from "./pages/LandingPage.js";
import About from "./pages/About.js";

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Header />

        <main id="main" className="h-full flex flex-col gap-8 lg:px-12 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
          </Routes>{" "}
          {/* <Footer /> */}
        </main>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
