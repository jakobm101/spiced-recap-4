import { useState } from "react";
import "./ThemeMenu.css";
import Select from "./Select";

export default function ThemeMenu({
  themes,
  currentThemeId,
  addTheme,
  renameTheme,
  changeTheme,
  deleteTheme,
}) {
  const [name, setName] = useState("");

  const handleAdd = (e) => addTheme(e, name);
  const handleNameInput = (e) => setName(e.target.value);
  const handleRename = () => renameTheme(name);

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
      <button className='btn' onClick={handleRename}>Rename Current Theme</button>
      <button className='btn' onClick={handleAdd}>Add New Theme</button>
      <button
        id="theme-menu__delete"
        onClick={deleteTheme}
        disabled={currentThemeId === "defaultID"}
      >
        Delete
      </button>
    </form>
  );
}
