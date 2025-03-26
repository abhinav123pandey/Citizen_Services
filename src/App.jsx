// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Schemes from "./pages/Schemes";
import Scholarships from "./pages/Scholarships";
import Hackathons from "./pages/Hackathons";
import Hiring from "./pages/Hiring";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/hiring" element={<Hiring />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
