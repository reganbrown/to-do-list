// import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Input from "./components/Input/Input";

function App() {
  const ItemsToDo = ["Buy stuff", "Return stuff"];
  return (
    <>
      <Header />
      <Input />
      <List ItemList={ItemsToDo} />
    </>
  );
}

export default App;
