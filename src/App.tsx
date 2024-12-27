import Header from "./components/Header.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import LandingPage from "./pages/LandingPage.js";
import Footer from "./components/Footer.js";
import Contact from "./pages/Contact.js";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GlobalProvider } from "./contexts/GlobalContext.js";
import ThankYouCard from "./components/ThankYouCard.js";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider>
        <GlobalProvider>
          <Routes>
            <Route path="/thanks" element={<ThankYouCard />} />
            <Route
              path="*"
              element={
                <main className="h-screen">
                  <Header />
                  <LandingPage />
                  <About />
                  <Projects />
                  <Contact />
                  <Footer />
                </main>
              }
            />
          </Routes>
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
