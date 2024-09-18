import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Input from "./components/Input/Input";

function App() {
  let [ItemsToDo, setItemsToDo] = useState(["Buy stuff", "Return stuff"]);

  function updateList(item) {
    const newItemsToDo = [...ItemsToDo, item];
    setItemsToDo(newItemsToDo);
  }

  return (
    <>
      <Header />
      <Input push={updateList} />
      <List ItemList={ItemsToDo} />
    </>
  );
}

export default App;
