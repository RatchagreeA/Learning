import Item from "./Item"
import "./Transaction.css"
import DataContext from "../data/DataContext";

function Transaction(props){    
    const {items} = props;
    return (   
        <div>    
            <ul className="item-list">
                {items.map(ele=> <Item {...ele} key={ele.id}/>)}
            </ul>
            <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer>
        </div>
    );
}

export default Transaction;