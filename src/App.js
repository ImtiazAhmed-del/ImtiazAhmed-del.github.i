import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ScrollUp from "./components/ScrollUp";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const openScrollUp = () => {
      if (window.scrollY >= 500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
    window.addEventListener("scroll", openScrollUp);
    return () => {
      window.removeEventListener("scroll", openScrollUp);
    };
  });
  return (
    <div>
      {showScrollUp && <ScrollUp />}
      <Nav />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
