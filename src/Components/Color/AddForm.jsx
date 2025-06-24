import { uid } from "uid";

export default function AddForm({ handleAdd }) {
  const inputs = ["role", "hex", "contrastText"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("role"));
    // const role = data.get("role");
    let [role, hex, contrastText] = inputs.map((item) => data.get(item));
    hex[0] !== "#" && (hex = "#" + hex);
    handleAdd(role, hex, contrastText);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((item) => {
        return (
          <div key={uid()}>
            <label htmlFor={item} />
            <input placeholder={item} type="text" id={item} name={item} />
          </div>
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
}
