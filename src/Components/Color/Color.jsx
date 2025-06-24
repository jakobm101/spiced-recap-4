import { useState } from "react";
import AddForm from "../Form/AddForm";
import "./Color.css";
import { useEffect } from "react";

export default function Color({ color, onDelete, onChange, id }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const interval = setInterval(() => {
        setCopied(false);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [copied]);

  const hider = !showForm ? "hider" : "";

  const handleShowDeleteMenu = () => setShowDelete(!showDelete);
  const handleShowForm = () => setShowForm(!showForm);
  const handleClipboard = async (content) => {
    try {
      const success = await navigator.clipboard.writeText(content);
      // throw new Error("shit")
      console.log(success)
      setCopied(true);
    } catch (error) {
      console.error("Clippy is sorry", error);
    }
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
      <button onClick={() => handleClipboard(color.hex)}>📋 copy </button>
      <span hidden={!copied}>copied successfully</span>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <AddForm classes={hider} handleAdd={onChange} id={id} />
      <button onClick={handleShowForm}>⚙️ edit</button>
      <p className="color-card-deletion-menu__p">
        {showDelete ? "Are you sure?" : ""}
      </p>
      <button onClick={handleShowDeleteMenu}>
        {!showDelete ? "🗑️ delete" : "😱 Cancel "}
      </button>
      <button hidden={!showDelete} onClick={onDelete}>
        💣 Yes! Delete!
      </button>
    </div>
  );
}
