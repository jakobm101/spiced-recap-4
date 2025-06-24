export default function AddForm({ handleAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
    </form>
  );
}
