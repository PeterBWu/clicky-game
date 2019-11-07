import React from "react";
import Tile from "./../Tile";

const GameArea = props => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h6 className="text-center">{props.userMessage}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <div className="card-group">
                {props.cards.slice(0, 4).map(card => (
                  <Tile
                    card={card}
                    key={card.id}
                    handleClick={props.handleClick}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card-group">
                {props.cards.slice(4, 8).map(card => (
                  <Tile
                    card={card}
                    key={card.id}
                    handleClick={props.handleClick}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card-group">
                {props.cards.slice(8, 12).map(card => (
                  <Tile
                    card={card}
                    key={card.id}
                    handleClick={props.handleClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameArea;
