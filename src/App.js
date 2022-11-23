import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Table from './components/Table/Table';

function App() {

  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addNewTableItem = () => {
    const obj = {id: 1, title: 'Headphones', price: 15.20, date: Date.now()};
    setList([...list, obj]);
    setModal(!modal);
    console.log(list);
  }

  return (
    <div className="App">
      <Header />
      <Table list={list}/>
      <Button title='New Item' theme='newItemBtn' action={toggleModal}/>
      <ModalWindow toggleModal={toggleModal} addNewTableItem={addNewTableItem} modal={modal}/>
    </div>
  );
}

export default App;
