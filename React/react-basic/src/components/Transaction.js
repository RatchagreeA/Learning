import Item from "./Item"
import "./Transaction.css"

function Transaction(props){ 

    const {items} = props;
    return (   
        <div>    
            <ul className="item-list">
                {items.map(ele=> <Item {...ele} key={ele.id}/>)}
            </ul>
        </div>
    );
}

export default Transaction;