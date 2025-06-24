import { uid } from "uid";

export default function AddForm({ handleAdd }) {
  const inputs = [
    { name: "role", placeholder: "Primary Text Color" },
    { name: "hex", placeholder: "#123456", color: true },
    { name: "contrastText", placeholder: "#123456", color: true },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map(({name, placeholder, color}) => {
        return (
          <div key={uid()}>
            <label htmlFor={name}>{name}</label>
            <input placeholder={placeholder} type="text" name={name} id={name} />
            {color && (
              <input type="color" name={name + "Picker"} id={name + "Picker"} />
            )}
          </div>
        );
      })}
      <button type="submit">submit</button>
    </form>
  );
}
