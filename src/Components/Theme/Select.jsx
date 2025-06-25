import { uid } from "uid";

export default function Select({ themes , changeTheme }) {
  return (
    <>
      <select name="themes" id="themes-select" onChange={changeTheme}>
        {themes.map((theme) => {
          return (
            <option key={uid()} value={theme.name}>
              {theme.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
