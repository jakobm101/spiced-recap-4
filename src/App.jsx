import { initialColors } from "./lib/colors";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import AddForm from "./Components/Form/AddForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState('initialColors', {defaultValue: initialColors});

  const addColor = (role, hex, contrastText, id = uid()) => {
    setColors([
      { id: id, role: role, hex: hex, contrastText: contrastText },
      ...colors,
    ]);
  };

  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const changeColor = (role, hex, contrastText, id) => {
    let newColors = [...colors];
    newColors.filter((color) => {
      if (color.id === id) {
        color.role = role;
        color.hex = hex;
        color.contrastText = contrastText;
      }
    });
    setColors(newColors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <AddForm handleAdd={addColor} />
      {!colors.length && <h2>Add some colors ⭐️</h2>}
      {colors.map((color) => {
        return (
          <Color
            onDelete={() => removeColor(color.id)}
            key={color.id}
            id={color.id}
            color={color}
            onChange={changeColor}
          />
        );
      })}
    </>
  );
}

export default App;
