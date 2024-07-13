import React from "react";
import Hero from "./view/Hero";
import Header from "./components/Header";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import Banner from "./view/Banner";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Banner />
      <Contact />
    </main>
  );
};

export default App;
