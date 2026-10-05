import React from "react";

const ColorNavBar = ({ setActiveBgColor }) => {
  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "grey",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];
  return (
    <div className="fixed flex flex-wrap justify-center items-center bottom-12 gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
      {colors.map((color) => (
        <button
          className={`cursor-pointer px-4 py-1 rounded-full text-white shadow-lg`}
          onClick={() => setActiveBgColor(color)}
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorNavBar;
