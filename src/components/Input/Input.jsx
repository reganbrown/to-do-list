import "./Input.scss";

export default function Input({ push }) {
  function submitHandler(event) {
    event.preventDefault();
    push(event.target.todo.value);
    event.target.todo.value = "";
  }
  return (
    <>
      <form className="toDoForm" onSubmit={submitHandler}>
        <input
          type="text"
          className="addToDo"
          name="todo"
          placeholder="to do..."
          required
        ></input>
        <button className="button">add</button>
      </form>
    </>
  );
}
