import "./App.css";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
    const API =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const [quotes, setQuotes] = useState("");
    const [index, setIndex] = useState(0);

    return (
        <div id="wrapper">
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i>
                    <span id="text"></span>
                </div>
                <div className="quote-author">
                    - <span id="author"></span>
                </div>
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_top"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{
                                color: "blue",
                                fontSize: "30px",
                                backgroundColor: "red",
                            }}
                        />
                    </a>

                    <button className="button" id="new-quote">
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );
}
// class App extends React.Component {
//     render() {
//         return <div>AAA</div>;
//     }
// }
export default App;
