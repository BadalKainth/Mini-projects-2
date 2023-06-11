import React from "react";
import "./SocialIcons.css";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function SocialIcons() {
  return (
    <div className="social-icons">
      <img src={whatsapp} alt="Whatsapp" className="icons" />
      <img src={facebook} alt="Facebook" className="icons" />
      <img src={twitter} alt="Twitter" className="icons" />
    </div>
  );
}

export default SocialIcons;
