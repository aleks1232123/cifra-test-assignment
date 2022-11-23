import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Table from './components/Table/Table';

function App() {

  const [list, setList] = useState([]);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const addNewTableItem = ({titleInputRef, priceInputRef, dateTimeInputRef}) => {
    const obj = {id: 1, title: titleInputRef.current.value, price: priceInputRef.current.value, date: dateTimeInputRef.current.value};
    console.log(titleInputRef.current.value, priceInputRef.current.value, dateTimeInputRef.current.value);
    setList([...list, obj]);
    setModal(!modal);
  }

  return (
    <div className="App">
      <Navbar />
      <Table list={list}/>
      <Button title='New Item' theme='newItemBtn' action={toggleModal}/>
      <ModalWindow toggleModal={toggleModal} addNewTableItem={addNewTableItem} modal={modal}/>
    </div>
  );
}

export default App;
