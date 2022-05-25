import Item from "./Item"

import "./Transaction.css"
function Transaction(props){    
    const {items} = props;
    return (       
    <ul className="item-list">
        {items.map(ele=> <Item {...ele} key={ele.id}/>)}
    </ul>
    );
}

export default Transaction;