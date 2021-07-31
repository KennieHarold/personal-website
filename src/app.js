import React from "react";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import UnsupportedMedia from "./components/UnsupportedMedia";

const App = () => {
  return (
    <div id="container">
      <Navigation />
      <Home />
      <About />
      <Timeline />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <UnsupportedMedia />
    </div>
  );
};

export default App;
