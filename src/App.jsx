import { useState, useEffect } from "react";
import {
  HashRouter as Router,  // Use HashRouter here
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Background from "./components/Background";

import Hero from "./components/Hero";
import Services from "./components/pages/services";
import About from "./components/pages/About";
import Research from "./components/pages/Research";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Publications from "./components/pages/Publications";
import Products from "./components/pages/products";
import "./App.css";

const AppContent = () => {
  let heroData = [
    { text1: "Accelerating Research", text2: "In Bioinformatics" },
    {
      text1: "Improving Healthcare Through",
      text2: "Systems Biology & Data Analytics",
    },
    { text1: "Data Driven", text2: "Modus Operandi" },
  ];
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevHeroCount) => (prevHeroCount + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const location = useLocation();

  return (
    <div className="app-content">
      {location.pathname === "/" && <Background heroCount={heroCount} />}
      
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
            />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <AppContent />
      </div>
    </Router>
  );
};

export default App;
