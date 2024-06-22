/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Logo } from "./components/Logo";
import PackList from "./components/PackList";
import Stat from "./components/Stat";
import Accordion from "./components/Accordion";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };




  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };

  return (
    <>
      <Logo />
      <Accordion/>
      {/* <Form onAddItems={handleAddItems} />
      <PackList items={items} onDelete={handleDeleteItem} onEdit = {handleToggle}  />
      <Stat items = {items} /> */}
    </>
  );
}

export default App;
