import React, { useState } from "react";
import mainImage from "./assets/main.png";
import "./App.css";
import SocialIcons from "./components/SocialIcons";
import List from "./components/List";

function App() {
  const [cards, setcards] = useState([]);

  return (
    <main className="main-screen">
      <div className="intro">
        <img src={mainImage} alt="main-image" className="main-image" />
        <textarea
          className="text-area"
          cols="120"
          rows="25"
          placeholder="It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a ......"
        />
      </div>
      <SocialIcons />
      {/* <section className="container">
        <List cards={cards} />
      </section> */}

      <div className="cards">
        <div className="card1">
          <p>Total Question's</p>
          <p>200,000</p>
        </div>
        <div className="card2">
          <p>Total Answer's</p>
          <p>105,000</p>
        </div>
        <div className="card3">
          <p>Participated</p>
          <p>10,000</p>
        </div>
        <div className="card4">
          <p>Total Passed</p>
          <p>6,000</p>
        </div>
      </div>

      <div className="info-container">
        <div className="info-btns">
          <button className="active">YOUR INFO</button>
          <button>BOOKMARKS</button>
          <button>SETTINGS</button>
        </div>
        <div className="info-area">
          <h2>Your information</h2>
          <div>
            <div className="information">
              <h4>Name </h4>
              <p>:</p>
              <p>Badal Kainth</p>
            </div>
            <div className="information">
              <h4>Email </h4>
              <p>:</p>
              <p>badalkainth@tech.com</p>
            </div>
            <div className="information">
              <h4>Phone </h4>
              <p>:</p>
              <p>+91 9999001234</p>
            </div>
            <div className="information">
              <h4>Marks </h4>
              <p>:</p>
              <p>500.00</p>
            </div>
          </div>
          <button>Next ➡️</button>
        </div>
      </div>
    </main>
  );
}
export default App;
