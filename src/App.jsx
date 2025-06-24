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
    setColors(colors.filter((color) => color.id !== id));
  };

  const changeColor = (id, hex = '#000000') => {
    console.log(id);
    
    let newColors = [...colors];
    newColors.filter((color) => color.id === id && (color.hex = hex));
    setColors(newColors);
    
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <button onClick={() => changeColor(colors[0].id, '#00dd33')}> change color [0] </button>
      <AddForm handleAdd={addColor} />
      {!colors.length && <h2>Add some colors ⭐️</h2>}
      {colors.map((color) => {
        return (
          <Color
            onDelete={() => removeColor(color.id)}
            key={color.id}
            color={color}
            onChange={() => changeColor(color.id)}
          />
        );
      })}
    </>
  );
}

export default App;
