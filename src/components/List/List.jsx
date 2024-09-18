import "./List.scss";
import Item from "../Item/Item";

export default function List({ ItemList }) {
  return (
    <ul className="toDoList">
      {ItemList.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
