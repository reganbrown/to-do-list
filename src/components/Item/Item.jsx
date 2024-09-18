import "./Item.scss";

export default function Item({ item }) {
  function clickHandler(event) {
    if (event.target.className === "done") {
      event.target.className = "new";
    } else {
      event.target.className = "done";
    }
  }
  return (
    <li
      className="new"
      onClick={(event) => {
        clickHandler(event);
      }}
    >
      {item}
    </li>
  );
}
