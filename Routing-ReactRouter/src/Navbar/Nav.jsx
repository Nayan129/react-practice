import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import { Link } from "react-router";
const Nav = () => {
  return (
    <div className="flex items-center justify-center gap-8 text-3xl cursor-pointer">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
