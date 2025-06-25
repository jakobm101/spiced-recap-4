import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

import ThemeMenu from "./Components/Theme/ThemeMenu";
import AddForm from "./Components/Form/AddForm";
import Main from "./Components/Main/Main";

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

  const changeTheme = (e) => {
    const currentId = e.target.value;
    const newTheme = themes.find((theme) => theme.id === currentId);
    setCurrentThemeId(newTheme.id);
  };

  const updateThemes = (newColors, themeId) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === themeId) theme.colors = newColors;
      return theme;
    });
    setThemes(newThemes);
  };

  return (
    <section>
      <aside>
        <h1>Theme Creator</h1>
        <ThemeMenu
          themes={themes}
          colors={colors}
          currentThemeId={currentThemeId}
          changeTheme={changeTheme}
          setThemes={setThemes}
          setCurrentThemeId={setCurrentThemeId}
        />
        <AddForm handleAdd={addColor} />
      </aside>

      <Main
        colors={colors}
        currentThemeId={currentThemeId}
        updateThemes={updateThemes}
      />
    </section>
  );
}

export default App;
