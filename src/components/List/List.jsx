import "./List.scss";
import Item from "../Item/Item";
const ItemsToDo = ["Buy stuff", "Return stuff"];

export default function List({ item }) {
  return (
    <ul className="toDoList">
      {ItemsToDo.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
