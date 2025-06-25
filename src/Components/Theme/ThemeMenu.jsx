import { useState } from "react";
import "./ThemeMenu.css";
import Select from "./Select";

export default function ThemeMenu({
  themes,
  currentThemeId,
  addTheme,
  renameTheme,
  changeTheme,
  setThemes,
  setCurrentThemeId,
}) {
  const [name, setName] = useState("");

  const handleAdd = (e) => addTheme(e, name);
  const handleNameInput = (e) => setName(e.target.value);
  const handleRename = () => renameTheme(name);
    
  const deleteTheme = () => {
    const onFirstTheme = currentThemeId === themes[0].id;
    const nextTheme = onFirstTheme ? themes[1] : themes[0];
    const newThemes = themes.filter((theme) => theme.id !== currentThemeId);
    setThemes(() => newThemes);
    setCurrentThemeId(nextTheme.id);
  };


  return (
    <form id="theme-menu">
      <h2>Theme</h2>
      <Select
        themes={themes}
        changeTheme={changeTheme}
        currentThemeId={currentThemeId}
      />
      <input
        type="text"
        name="nameInput"
        id="nameInput"
        placeholder="New Theme Name"
        value={name}
        onChange={handleNameInput}
      />
      <button
        disabled={currentThemeId === "defaultID"}
        className="btn"
        onClick={handleRename}
      >
        Rename Current Theme
      </button>
      <button className="btn" onClick={handleAdd}>
        Add New Theme
      </button>
      <button
        id="theme-menu__delete"
        onClick={deleteTheme}
        disabled={currentThemeId === "defaultID"}
      >
        🗑️ Delete
      </button>
    </form>
  );
}
