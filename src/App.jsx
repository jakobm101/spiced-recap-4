import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

import ThemeMenu from "./Components/Theme/ThemeMenu";
import AddForm from "./Components/Form/AddForm";
import Color from "./Components/Color/Color";

import { initialColors } from "./lib/colors";
import "./App.css";

function App() {
  const [themes, setThemes] = useLocalStorageState("Themes", {
    defaultValue: [{ id: "defaultID", name: "Default", colors: initialColors }],
  });
  const [currentThemeId, setCurrentThemeId] = useLocalStorageState(
    "currentTheme",
    { defaultValue: "defaultID" }
  );

  const currentTheme = themes.find((theme) => theme.id === currentThemeId);
  const colors = currentTheme.colors;

  const addColor = (role, hex, contrastText, id = uid()) => {
    const newColors = [
      { id: id, role: role, hex: hex, contrastText: contrastText },
      ...colors,
    ];
    updateThemes(newColors, currentThemeId);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    updateThemes(newColors, currentThemeId);
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
    updateThemes(newColors, currentThemeId);
  };

  const addTheme = (_, name, id = uid(), themeColors = colors) => {
    setThemes(() => [
      { id: id, name: name || id, colors: themeColors },
      ...themes,
    ]);
    setCurrentThemeId(id);
  };

  const changeTheme = (e) => {
    const currentId = e.target.value;
    const newTheme = themes.find((theme) => theme.id === currentId);
    setCurrentThemeId(newTheme.id);
  };

  const renameTheme = (name) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === currentThemeId) theme.name = name;
      return theme;
    });
    setThemes(newThemes);
  };

  const updateThemes = (newColors, themeId) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === themeId) {
        theme.colors = newColors;
      }
      return theme;
    });
    setThemes(newThemes);
  };

  const deleteTheme = () => {
    const onFirstTheme = currentThemeId === themes[0].id;
    const nextTheme = onFirstTheme ? themes[1] : themes[0];
    const newThemes = themes.filter((theme) => theme.id !== currentThemeId);
    setThemes(() => newThemes);
    setCurrentThemeId(nextTheme.id);
  };

  return (
    <section>
      <aside>
        <h1>Theme Creator</h1>
        <ThemeMenu
          changeTheme={changeTheme}
          addTheme={addTheme}
          renameTheme={renameTheme}
          deleteTheme={deleteTheme}
          themes={themes}
          currentThemeId={currentThemeId}
        />
        <AddForm handleAdd={addColor} />
      </aside>

      <main>
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
      </main>
    </section>
  );
}

export default App;
