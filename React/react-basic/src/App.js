import FormComponent from './components/FormComponent';
import './App.css';
import Transaction from './components/Transaction';
import { useState } from 'react';


function App() {
  const design = {color:"red", textAlign:"center", fontsize:"1.5rem"};
  const iniData = [
    {id:1, title:"A",amount:100},
    {id:2, title:"B",amount:200},
    {id:3, title:"C",amount:300},
  ];
  const [item, setItems] = useState(iniData);
  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
        return [newItem,...prevItem]
    });
  }
  return (
    <div className="container">
        <h1 style={design}>In - Out</h1>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items={item}/>
    </div>
  );
}

export default App;
