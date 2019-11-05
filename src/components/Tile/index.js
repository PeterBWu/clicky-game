import React from "react";

const Tile = props => {
  return (
    <div class="card">
      <img src={props.src} class="card-img-top" alt="..." />
    </div>
  );
};

export default Tile;
