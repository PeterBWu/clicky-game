import React from "react";
import Score from "./../Score";

const Header = props => {
  return (
    <header>
        <div className="container">
          <div className="row justify-content-between">
            <div className='col-6'>
          <h1>Clicky Game</h1>

            </div>
            <div className='col-6'>

          <Score props={{ ...props }} />
            </div>

          </div>
        </div>
    </header>
  );
};

export default Header;
