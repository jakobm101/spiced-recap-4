import { uid } from "uid";

export default function Select({ themes , changeTheme }) {
  return (
    <>
      <select name="themes" id="themes-select" onChange={changeTheme}>
        {themes.map((theme) => {
          console.log(theme);
          
          return (
            <option key={uid()} value={theme.id}>
              {theme.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
