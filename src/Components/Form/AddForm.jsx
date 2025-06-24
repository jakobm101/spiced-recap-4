import Input from "./Input";
import './Form.css'

export default function AddForm({ handleAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let [role, hex, contrast] = ["role", "hex", "contrast"].map((it) =>
      data.get(it)
    );
    handleAdd(role || "⭐️", hex || "#ffffff", contrast || "#000000");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name={"role"} placeholder={"Primary Border Colour"} />
      <Input name={"hex"} color={true} placeholder={"#123123"} />
      <Input name={"contrast"} color={true} placeholder={"#000000"} />
      <button type="submit">submit</button>
    </form>
  );
}
