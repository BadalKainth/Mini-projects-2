import React from "react";
import Card from "./Cards";

const List = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};

export default List;
