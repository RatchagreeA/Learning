import Item from "./Item"

function TestComp(){
    const data = [
        {title:"A",cash:"100"},
        {title:"B",cash:"200"},
        {title:"C",cash:"300"}
    ];
    return (       
    <ul>
        {data.map(ele=> <Item {...ele} />)}
    </ul>
    );
}

export default TestComp;