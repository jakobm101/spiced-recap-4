export default function AddForm({ handleAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data.get('role'));
    const role = data.get('role')
    
    handleAdd(role);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role"></label>
      <input type="text" id="role" name="role"/>
      <button type="submit">submit</button>
    </form>
  );
}
