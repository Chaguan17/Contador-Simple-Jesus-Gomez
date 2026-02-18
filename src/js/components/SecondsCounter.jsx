import React from "react";

const SecondsCounter = (props) => {
  const secondsString = props.seconds.toString().padStart(5, "0");

  return (
    <div className="counter-container">
      <div className="digit clock">
        🕗
      </div>

      {secondsString.split("").map((num, index) => (
        <div key={index} className="digit">
          {num}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;