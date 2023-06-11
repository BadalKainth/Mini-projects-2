import React from "react";
import "./Navbar.css";
import image from "../assets/burger.png";

function Navbar() {
  return (
    <main className="Nav-bar">
      <h1 className="header">DAPPR</h1>
      <br />
      <div className="Nav-links">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Information</a>
        <a href="">More</a>
        <input className="search-bar" type="text" placeholder="Search 🔍" />
      </div>
      <img className="burger" src={image} alt="Burger-img" />
    </main>
  );
}

export default Navbar;
