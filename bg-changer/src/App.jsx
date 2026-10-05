import React, { useState } from "react";
import ColorNavBar from "./ColorNavBar";

const App = () => {
  const [activeBgColor, setActiveBgColor] = useState("red");
  return (
    <div
      className={`h-screen w-screen duration-200`}
      style={{ backgroundColor: activeBgColor }}
    >
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <ColorNavBar setActiveBgColor={setActiveBgColor} />
      </div>
    </div>
  );
};
export default App;
