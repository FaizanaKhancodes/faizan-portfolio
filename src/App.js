import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-6 border-t border-gray-700 mt-10 text-sm text-gray-400">
        © 2025 Mohd Faizan Khan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
