import FormComponent from './components/FormComponent';
import './App.css';
import Transaction from './components/Transaction';
import { useState, useEffect, useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const design = {color:"red", textAlign:"center", fontsize:"1.5rem"};
  const iniData = [
    {id:1, title:"A",amount:-100},
    {id:2, title:"B",amount:2000},
    {id:3, title:"C",amount:-300},
  ];
  const [items, setItems] = useState(iniData);
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
// reducer state
const [showReport, setShowReport] = useState(false);
const reducer = (state,action)=>{
  switch(action.type){
    case "SHOW" :
      return setShowReport(true)
    case "HIDE" :
      return setShowReport(false)
    default :
      break;
  }
}
const [result, dispatch] = useReducer(reducer,showReport)
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
          <h1 style={design}>In - Out</h1>
          {/* {showReport && <ReportComponent />} */}
          
          <Router>
            <div>
              <ul className='Horizontal-menu'>
                <li>
                  <Link to='/'>Detail</Link>
                </li>
                <li>
                  <Link to='/insert'>Save</Link>
                </li>
              </ul>
              <Routes>              
                <Route path='/' element={<ReportComponent />} />                 
                <Route path='/insert' element={
                  <div>
                    <FormComponent onAddItem={onAddNewItem}/>
                    <Transaction items={items}/> 
                  </div>  
                } />              
              </Routes>
            </div>
          </Router>       
      </div>
      {/* <div align="center">
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"SHOW"})}>Show</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>Hide</button>
      </div> */}
    </DataContext.Provider>
  );
}

export default App;
