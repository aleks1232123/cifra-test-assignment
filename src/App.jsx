import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Table from "./components/Table/Table";

function App() {
  const getLocalList = () => {
    const localList = localStorage.getItem("list");
    if (localList) {
      return JSON.parse(localList);
    } else {
      return [];
    }
  };

  const [list, setList] = useState(getLocalList()); //state списка товаров в таблице
  const [modal, setModal] = useState(false); //state модалки (открыта/закрыта)

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addNewTableItem = ({ title, price, dateTime }) => {
    const id = list.length ? Math.max(...list.map((item) => item.id)) + 1 : 1;
    const newItem = {
      id,
      title: title,
      price: Number(price).toFixed(2),
      date: dateTime.replace("T", " "),
    };
    setList([...list, newItem]);
  };

  const clearTableList = () => {
    setList([]);
  };

  const deleteItem = (itemId) => {
    const newList = list.filter((el) => el.id !== itemId);
    setList(newList);
  }

  return (
    <div className="App">
      <Navbar clearTableList={clearTableList} />
      <Table list={list} deleteItem={deleteItem}/>
      <Button title="New Item" theme="newItemBtn" action={toggleModal} />
      <ModalWindow
        toggleModal={toggleModal}
        addNewTableItem={addNewTableItem}
        modal={modal}
      />
    </div>
  );
}

export default App;
