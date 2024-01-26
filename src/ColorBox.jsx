import React from "react";
import "./ColorBox.css";
const ColorBox = ({ clr }) => {
  const buttonStyle = {
    backgroundColor: clr,
  };
  if (!clr.length > 0) {
    clr = "No Color Selected";
  }
  return (
    <button className="buttonClass" style={buttonStyle}>
      {clr}
    </button>
  );
};

export default ColorBox;
