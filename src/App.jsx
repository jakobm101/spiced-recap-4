import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = () => {
    setColors([
      { id: 1234, role: "test", hex: "#435632", contrastText: "#ffffff" },
      ...colors,
    ]);
    console.log(colors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <button onClick={addColor}>add color</button>

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
