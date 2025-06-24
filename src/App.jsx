import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";

function App() {
  console.log(initialColors);
  const [colors, setColors] = useState(initialColors);
  return (
    <>
      <h1>Theme Creator</h1>

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
