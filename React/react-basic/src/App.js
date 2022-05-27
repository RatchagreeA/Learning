import FormComponent from './components/FormComponent';
import './App.css';
import Transaction from './components/Transaction';
import { useState, useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';


function App() {
  const design = {color:"red", textAlign:"center", fontsize:"1.5rem"};
  const iniData = [
    {id:1, title:"A",amount:-100},
    {id:2, title:"B",amount:200},
    {id:3, title:"C",amount:-300},
  ];
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
        return [newItem,...prevItem]
    });
  }
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(val=>val>0).reduce( (prev,curr)=> prev+=curr ,0);
    const expense = (amounts.filter(val=>val<0).reduce( (prev,curr)=> prev+=curr ,0))*-1;
    console.log('in ',income);
    console.log('out ',expense);
    setReportIncome(income);
    setReportExpense(expense);
}, [items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
          <h1 style={design}>In - Out</h1>
          <ReportComponent />
          <FormComponent onAddItem={onAddNewItem}/>
          <Transaction items={items}/>          
      </div>
    </DataContext.Provider>
    
  );
}

export default App;
