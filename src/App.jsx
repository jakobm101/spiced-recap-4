import { initialColors } from "./lib/colors";
import { uid } from "uid";
import AddForm from "./Components/Form/AddForm";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (role, hex, contrastText, id = uid()) => {
    setColors([
      { id: id, role: role, hex: hex, contrastText: contrastText },
      ...colors,
    ]);
  };
  
  const removeColor = (id) => {
    console.log('removing',{id});
    setColors(colors.filter((color) => color.id !== id))
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <AddForm handleAdd={addColor} />
      {colors.map((color) => {
        return <Color onDelete={() => removeColor(color.id)} key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
