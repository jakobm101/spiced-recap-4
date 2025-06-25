import Select from "./Select";

export default function ThemeMenu({
  addTheme,
  themes,
  changeTheme,
  currentThemeId,
  deleteTheme,
}) {
  return (
    <>
      <Select
        themes={themes}
        changeTheme={changeTheme}
        currentThemeId={currentThemeId}
      />
      <button onClick={addTheme}>Add</button>
      <button onClick={deleteTheme}>Delete</button>
    </>
  );
}
