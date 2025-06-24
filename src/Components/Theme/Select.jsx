import { uid } from "uid";

export default function Select({ themes }) {
  return (
    <>
      <select name="themes" id="themes-select">
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
