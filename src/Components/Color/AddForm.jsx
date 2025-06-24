import Input from "../Form/Input";

export default function AddForm({ handleAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    handleAdd(data.get("role"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name={"role"} placeholder={"Primary Border Colour"} />
      <Input name={"hex"} color={true} placeholder={"#123123"} />
      <Input name={"contrast"} color={true} placeholder={"#123123"} />
      <button type="submit">submit</button>
    </form>
  );
}
