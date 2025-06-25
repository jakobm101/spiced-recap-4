import { useState } from "react";
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
    <form>
      <h2>Theme</h2>
      <Select
        themes={themes}
        changeTheme={changeTheme}
        currentThemeId={currentThemeId}
      />
      <button onClick={handleAdd}>Add New Theme</button>
      <input
        type="text"
        name="nameInput"
        id="nameInput"
        placeholder="New Theme Name"
        value={name}
        onChange={handleNameInput}
      />
      <button onClick={handleRename}>Rename Current Theme</button>
      <button onClick={deleteTheme} disabled={currentThemeId === "defaultID"}>
        Delete
      </button>
    </form>
  );
}
