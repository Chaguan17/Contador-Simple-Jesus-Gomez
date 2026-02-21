import React from "react";

function SecondsCounter({ digit6, digit5, digit4, digit3, digit2, digit1 }) {
  return (
    <div className="counter-container">

      <div className="digit clock">
        🕗
      </div>

      <div className="digit">{digit6 % 10}</div>
      <div className="digit">{digit5 % 10}</div>
      <div className="digit">{digit4 % 10}</div>
      <div className="digit">{digit3 % 10}</div>
      <div className="digit">{digit2 % 10}</div>
      <div className="digit">{digit1 % 10}</div>

    </div>
  );
}

export default SecondsCounter;