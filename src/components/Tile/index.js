import React from "react";

const Tile = props => {
  return (
    <div className="card" onClick={() => props.handleClick(props.card.id)}>
      <img src={props.card.src} className="card-img-top" alt="..." />
    </div>
  );
};

export default Tile;
