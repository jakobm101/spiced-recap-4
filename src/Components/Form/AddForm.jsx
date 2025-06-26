import Input from "./Input";
import "./Form.css";
import { uid } from "uid";

export default function AddForm({
  id,
  classes,
  colorObject,
  setThemes,
  themes,
  colors,
  currentThemeId,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let [role, hex, contrast] = ["role", "hex", "contrast"].map((it) =>
      data.get(it)
    );
    const colorObject = {
      role: role || "⭐️",
      hex: hex || "#ffffff",
      contrastText: contrast || "#000000",
      id: id || uid(),
    };
    handleAddToThemes(colorObject);
  };

  const handleAddToThemes = (colorObject) => {
    const idExists = colors.find((color) => color.id === colorObject.id);
    let newColors = [];
    if (idExists) {
      newColors = colors.map((color) =>
        color.id === colorObject.id ? colorObject : color
      );
    } else {
      newColors = [colorObject, ...colors];
    }
    const newThemes = themes.map((theme) => {
      if (theme.id === currentThemeId) theme.colors = newColors;
      return theme;
    });
    setThemes(newThemes);
  };

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <h2>Add new color to current theme</h2>
      <Input
        value={colorObject?.role || ""}
        name={"role"}
        placeholder={"Primary Border Colour"}
      />
      <Input
        value={colorObject?.hex || ""}
        name={"hex"}
        color={true}
        placeholder={"#123123"}
      />
      <Input
        value={colorObject?.contrastText || ""}
        name={"contrast"}
        color={true}
        placeholder={"#000000"}
      />
      <button type="submit">💾 Submit</button>
    </form>
  );
}
