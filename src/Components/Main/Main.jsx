import Color from "../Color/Color";

export default function Main({ themes, colors, currentThemeId, setThemes }) {
  const updateThemes = (newColors, themeId) => {
    const newThemes = themes.map((theme) => {
      if (theme.id === themeId) theme.colors = newColors;
      return theme;
    });
    setThemes(newThemes);
  };

  const changeColor = (colorObject) => {
    let newColors = [...colors];
    newColors.filter((color) => {
      if (color.id === colorObject.id) {
        color.role = colorObject.role;
        color.hex = colorObject.hex;
        color.contrastText = colorObject.contrastText;
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
            changeColor={changeColor}
            themes={themes}
            colors={colors}
            currentThemeId={currentThemeId}
            setThemes={setThemes}
          />
        );
      })}
    </main>
  );
}
