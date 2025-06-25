import { initialColors } from "./lib/colors";
import ThemeMenu from "./Components/Theme/ThemeMenu";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import AddForm from "./Components/Form/AddForm";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("Colors", {
    defaultValue: initialColors,
  });
  const [themes, setThemes] = useLocalStorageState("Themes", {
    defaultValue: [{ id: "defaultID", name: "default", colors: colors }],
  });
  const [currentThemeId, setCurrentThemeId] = useLocalStorageState(
    "currentTheme",
    { defaultValue: "defaultID" }
  );

  const addColor = (role, hex, contrastText, id = uid()) => {
    const newColors = [
      { id: id, role: role, hex: hex, contrastText: contrastText },
      ...colors,
    ];
    updateThemes(newColors, currentThemeId);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    const newThemes = themes.map((theme) => {
      if (theme.id === currentThemeId) {
        theme.colors = newColors;
        console.log("insane");
      }

      return theme;
    });
    setThemes(newThemes);
    setColors(newColors);
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
    updateThemes(newColors, currentThemeId)
  };

  const addTheme = (_, themeName = "new Theme", themeColors = colors) => {
    setThemes([{ id: uid(), name: themeName, colors: themeColors }, ...themes]);
  };

  const changeTheme = (e) => {
    const currentId = e.target.value;
    const newTheme = themes.find((theme) => theme.id === currentId);
    setColors(newTheme.colors);
    setCurrentThemeId(newTheme.id);
  };

  const updateThemes = (newColors, themeId) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === themeId) {
        theme.colors = newColors
      }
      return theme;
    });

    setThemes(newThemes)
    setColors(newColors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ThemeMenu
        changeTheme={changeTheme}
        addTheme={addTheme}
        themes={themes}
        currentThemeId={currentThemeId}
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
