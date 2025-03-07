import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalProvider } from "./contexts/GlobalContext.js";
import "./index.css";
import { Header, Footer } from "./components/index.js";
import { LandingPage, About, Projects, Contact } from "./pages/index.js";

const App = (): JSX.Element => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <ThemeProvider>
      <GlobalProvider>
        <main
          className={`h-full lg:h-screen flex flex-col ${
            isAboutPage ? "about" : ""
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>{" "}
          <Footer />
        </main>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
