import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [show, setShow] = useState(false);
  const showConfirm = () => {
    setShow(!show);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <p className="color-card-deletion-menu__p">{show ? "Are you sure?" : ""}</p>
      <button onClick={showConfirm}>
        {!show ? "🗑️ delete" : "😱 Cancel "}
      </button>
      <button hidden={!show} onClick={onDelete}>
        💣 Yes! Delete!
      </button>
    </div>
  );
}
