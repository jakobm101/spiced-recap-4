import { uid } from "uid";

export default function Select({ themes, changeTheme, currentThemeId}) {
  const handleSelection = (e) => {
    console.log("handling", e);

    changeTheme(e);
  };
  return (
    <>
      <select
        name="themes"
        id="themes-select"
        onChange={handleSelection}
        value={currentThemeId}
      >
        {themes.map((theme) => {
          return (
            // <option key={uid()} value={theme.id} selected={theme.id === currentThemeId}>
            <option key={uid()} value={theme.id}>
              {theme.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
