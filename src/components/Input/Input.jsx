import "./Input.scss";

export default function Input({ push }) {
  function submitHandler(event) {
    event.preventDefault();
    push(event.target.todo.value);
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <input
          type="text"
          className="addToDo"
          name="todo"
          placeholder="to do..."
        ></input>
        <button className="button">add</button>
      </form>
    </>
  );
}
