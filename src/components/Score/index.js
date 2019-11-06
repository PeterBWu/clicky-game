import React from "react";

const Score = props => {
  const val = props.props;
  return (
    <div>
      <p>Current Score:{val.currentScore}</p>
      <p>Top Score:{val.topScore}</p>
    </div>
  );
};

export default Score;
