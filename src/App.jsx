import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import BackgroundBlobs from "./components/BackgroundBlobs";
import CustomCursor from "./components/CustomCursor";

// App is the root component. It wraps everything in ThemeProvider so
// that ANY component below it can call useTheme() and read/change the
// active theme, without threading props down through every level
// ("prop drilling"). This is the classic use case for React Context.
function App() {
  // Loading screen is tied to `document.fonts.ready` (real readiness —
  // web fonts are what actually cause the visible layout jump/flash),
  // with a small floor so the splash never feels like a flicker even
  // if fonts were already cached.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const floor = new Promise((resolve) => setTimeout(resolve, 500));
    const fonts = document.fonts?.ready || Promise.resolve();
    Promise.all([floor, fonts]).then(() => setLoading(false));
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen visible={loading} />
      <BackgroundBlobs />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
