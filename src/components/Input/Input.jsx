import "./Input.scss";

export default function Input() {
  function submitHandler(event) {
    event.preventDefault();
    event.target;
  }
  return (
    <>
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <input type="text" className="addToDo" placeholder="to do..."></input>
        <button class="button">add</button>
      </form>
    </>
  );
}
