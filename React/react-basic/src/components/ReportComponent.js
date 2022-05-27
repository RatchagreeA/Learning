import { useContext } from "react";
import DataContext from "../data/DataContext";



const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext);
    return (   
        <div>    
           
            <p>In :{income} </p>
            <p>Out : {expense}</p>
           
        </div>
    );
}

export default ReportComponent