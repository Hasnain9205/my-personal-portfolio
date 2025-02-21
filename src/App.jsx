import React, { useEffect } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="mx-20 mt-4">
        <Navbar />
        <div className="container">
          <Home />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
