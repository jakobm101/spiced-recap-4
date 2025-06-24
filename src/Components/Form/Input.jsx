import { useState } from "react";

export default function Input({
  name,
  placeholder,
  color = null,
  type = "text",
}) {
  const [newValue, setNewValue] = useState("");
  const [oldColor, setOldColor] = useState("#123123");

  const isColor = (someColor) => /^#[0-9A-Fa-f]{6}$/.test(someColor);

  const handleChange = (e) => {
    const currentValue = e.target.value;
    isColor(currentValue) && setOldColor(currentValue);
    color && (!currentValue || currentValue[0] !== "#")
      ? setNewValue("#")
      : setNewValue(currentValue);
  };

  return (
    <div className="input-unit">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={newValue}
        onInput={handleChange}
        placeholder={placeholder}
      />
      {color && (
        <input
          type="color"
          id={name + "Pick"}
          name={name + "Pick"}
          onInput={handleChange}
          value={oldColor ?? oldColor}
        />
      )}
    </div>
  );
}
