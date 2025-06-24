import { initialColors } from "./lib/colors";
import { uid } from "uid";
import AddForm from "./Components/Color/AddForm";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (
    id = uid(),
    role = "test",
    hex = "#345132",
    contrastText = "#ffffff"
  ) => {
    setColors([
      { id: id, role: role, hex: hex, contrastText: contrastText },
      ...colors,
    ]);
    console.log(colors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <AddForm handleAdd={addColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
