import Item from "./Item"
import { v4 as uuidv4 } from 'uuid';

function TestComp(){
    const data = [
        {title:"A",cash:100},
        {title:"B",cash:200},
        {title:"C",cash:300},
        {title:555,cash:"AAAA"},
        {cash:"AAAA"},
        {title:555}
    ];
    return (       
    <ul>
        {data.map(ele=> <Item {...ele} key={uuidv4()}/>)}
    </ul>
    );
}

export default TestComp;