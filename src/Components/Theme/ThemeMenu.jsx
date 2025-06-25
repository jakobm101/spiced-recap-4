import Select from "./Select";

export default function ThemeMenu({
  addTheme,
  themes,
  changeTheme,
  currentThemeId,
  deleteTheme,
}) {
  const handleAdd = (e) => {
    console.log("adding");
    addTheme(e);
  };

  return (
    <>
      <Select
        themes={themes}
        changeTheme={changeTheme}
        currentThemeId={currentThemeId}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={deleteTheme} disabled={currentThemeId === 'defaultID'}>Delete</button>
    </>
  );
}
