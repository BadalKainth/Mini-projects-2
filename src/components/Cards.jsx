import React from "react";

const Cards = ({ card }) => {
  const { id, heading, value } = card;

  return (
    <article key={id} className="card">
      <div className="info">
        <h4>{heading}</h4>
        <p>{value}</p>
      </div>
    </article>
  );
};

export default Cards;
