import { uid } from "uid";

export default function Select({ themes , changeTheme , currentThemeId }) {
  return (
    <>
      <select name="themes" id="themes-select" onChange={changeTheme}>
        {themes.map((theme) => {
          return (
            <option key={uid()} value={theme.id} selected={theme.id === currentThemeId}>
              {theme.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
