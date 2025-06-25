import Input from "./Input";
import "./Form.css";

export default function AddForm({ handleAdd, id, classes, colorObject }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let [role, hex, contrast] = ["role", "hex", "contrast"].map((it) =>
      data.get(it)
    );
    handleAdd(role || "⭐️", hex || "#ffffff", contrast || "#000000", id);
  };

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <h2>Add new color to current theme</h2>
      <Input value={colorObject?.role || ""} name={"role"} placeholder={"Primary Border Colour"} />
      <Input value={colorObject?.hex || ""} name={"hex"} color={true} placeholder={"#123123"} />
      <Input value={colorObject?.contrast || ""} name={"contrast"} color={true} placeholder={"#000000"} />
      <button type="submit">💾 Submit</button>
    </form>
  );
}
