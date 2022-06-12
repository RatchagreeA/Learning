import React from "react";

class RawData extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentDidMount() {
        console.log("DidMount");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update");
        console.log("prevProps : ", prevProps);
        console.log("prevState : ", prevState);
        console.log("snapshot : ", snapshot);
    }
    componentWillUnmount() {
        console.log("Unmount");
    }
    render() {
        console.log("render");
        return <h1>Test text</h1>;
    }
}
export default RawData;
