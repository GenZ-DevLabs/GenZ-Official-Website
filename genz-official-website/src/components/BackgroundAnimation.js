import React from "react";
import "./Home.css";

const BackgroundAnimation = () => {
  const numberOfColorBoxes = 400;

  return (
    <div className="bgAnimation">
      <div className="backgroundAmim"></div>
      {Array.from({ length: numberOfColorBoxes }).map((_, index) => (
        <div key={index} className="colorBox"></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
