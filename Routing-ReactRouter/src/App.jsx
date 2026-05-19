import React from "react";
import { Route, Routes } from "react-router";
import Nav from "./Navbar/Nav.jsx";
import Home from "./Navbar/Home.jsx";
import About from "./Navbar/About.jsx";
import Contact from "./Navbar/Contact.jsx";
import Service from "./Navbar/Service.jsx";
const App = () => {
  return (
    <div className="bg-neutral-700 h-screen text-white font-bold text-xl p-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
