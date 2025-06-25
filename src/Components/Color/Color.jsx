import { useState } from "react";
import AddForm from "../Form/AddForm";
import "./Color.css";
import { useEffect } from "react";

export default function Color({ color, onDelete, onChange, id }) {
  const [showDelete, setShowDelete] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [copiedToClipboard, setCopied] = useState(false);
  const [contrastQuotient, setContrastQuotient] = useState("");

  useEffect( () => {
    setContrastQuotient(callContrastAPI(color.hex, color.contrastText))
  },[]);

  useEffect(() => {
    if (copiedToClipboard) {
      const interval = setInterval(() => {
        setCopied(false);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [copiedToClipboard]);

  const handleShowDeleteMenu = () => setShowDelete(!showDelete);
  const handleShowForm = () => setShowForm(!showForm);
  const handleClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
    } catch (error) {
      console.error("Clippy is sorry", error);
    }
  };

  const callContrastAPI = async (color1, color2) => {
    try {
      await fetch("https://www.aremycolorsaccessible.com/api/are-they", {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({ colors: [color1, color2] }),
      })
        .then((response) => response.json())
        .then((json) => {
          setContrastQuotient(json.overall)
        });
    } catch (error) {
      console.error(error);
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
      <p>
        {contrastQuotient &&
          `The contrast quotient is ${typeof contrastQuotient === 'string' ? contrastQuotient : 'loading'}`}
      </p>
      <button onClick={() => handleClipboard(color.hex)}>📋 copy </button>
      <span hidden={!copiedToClipboard}>copied successfully</span>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <AddForm
        classes={!showForm ? "hider" : ""}
        handleAdd={onChange}
        id={id}
      />
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
