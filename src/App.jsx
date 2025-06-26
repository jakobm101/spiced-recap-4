import useLocalStorageState from "use-local-storage-state";

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

  return (
    <section>
      <aside>
        <a href="https://spiced-recap-4.vercel.app/" target="blank">
          <h1>Theme Creator</h1>
        </a>
        <ThemeMenu
          themes={themes}
          colors={colors}
          currentThemeId={currentThemeId}
          setThemes={setThemes}
          setCurrentThemeId={setCurrentThemeId}
        />
        <AddForm
          themes={themes}
          colors={colors}
          currentThemeId={currentThemeId}
          setThemes={setThemes}
        />
      </aside>

      <Main
        themes={themes}
        colors={colors}
        currentThemeId={currentThemeId}
        setThemes={setThemes}
      />
    </section>
  );
}

export default App;
