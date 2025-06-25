import Color from "../Color/Color";

export default function Main({ themes, colors, currentThemeId, setThemes }) {
  const updateThemes = (newColors, themeId) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === themeId) theme.colors = newColors;
      return theme;
    });
    setThemes(newThemes);
  };

  const changeColor = (role, hex, contrastText, id) => {
    let newColors = [...colors];
    newColors.filter((color) => {
      if (color.id === id) {
        color.role = role;
        color.hex = hex;
        color.contrastText = contrastText;
      }
    });
    updateThemes(newColors, currentThemeId);
  };

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
