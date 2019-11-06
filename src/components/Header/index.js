import React from "react";
import Score from "./../Score";

const Header = props => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <h1>Clicky Game</h1>
          <h2>{props.userMessage}</h2>
          <Score props={{ ...props }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
