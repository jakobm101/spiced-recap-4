import { uid } from "uid";

export default function Select({ themes, changeTheme, currentThemeId, value }) {
  return (
    <>
      <select
        name="themes"
        id="themes-select"
        onChange={changeTheme}
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
