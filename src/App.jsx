import { initialColors } from "./lib/colors";
import ThemeMenu from "./Components/Theme/ThemeMenu";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import AddForm from "./Components/Form/AddForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("initialColors", {
    defaultValue: initialColors,
  });
  const [themes, setThemes] = useLocalStorageState("initialThemes", {
    defaultValue: [{ id: "defaultID", name: "default", colors: colors }],
  });
  

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

  const addTheme = (_, themeName = "new Theme", themeColors = colors) => {
    setThemes([{ id: uid(), name: themeName, colors: themeColors }, ...themes]);
    console.log(themes);
  };

  const changeTheme = (e) => {
    console.log("current col", colors);

    const currentId = e.target.value;
    const newTheme = themes.find(theme => theme.id === currentId)
    console.log("new theme", newTheme.colors);
    setColors(newTheme.colors)
    
    
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeMenu
        changeTheme={changeTheme}
        addTheme={addTheme}
        themes={themes}
      />
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
