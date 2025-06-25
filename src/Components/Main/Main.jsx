import Color from "../Color/Color";

export default function Main({
  colors,
  changeColor,
  currentThemeId,
  updateThemes,
}) {
  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    updateThemes(newColors, currentThemeId);
  };

  return (
    <main>
      {!colors.length && <h2>Add some colors ⭐️</h2>}
      {colors.map((color) => {
        return (
          <Color
            onDelete={() => removeColor(color.id)}
            key={color.id}
            id={color.id}
            color={color}
            onChange={changeColor}
          />
        );
      })}
    </main>
  );
}
