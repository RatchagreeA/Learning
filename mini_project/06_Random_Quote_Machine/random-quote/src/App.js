import "./App.css";
import React from "react";
import { useState, useEffect, useReducer } from "react";

const API =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
    const [quotes, setQuotes] = useState("");
    const [index, setIndex] = useState(0);

    return (
        <div id="wrapper">
            <div id="quote-box">
                <div class="quote-text">
                    <i class="fa fa-quote-left"> </i>
                    <span id="text"></span>
                </div>
                <div class="quote-author">
                    - <span id="author"></span>
                </div>
                <div class="buttons">
                    <a
                        class="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_top"
                    >
                        {/* <i class="fa fa-twitter"></i> */}
                    </a>
                    <a
                        class="button"
                        id="tumblr-quote"
                        title="Post this quote on facebook!"
                        target="_blank"
                    >
                        <i class="fa fa-facebook"></i>
                    </a>
                    <button class="button" id="new-quote">
                        New quote
                    </button>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    );
}
// class App extends React.Component {
//     render() {
//         return <div>AAA</div>;
//     }
// }
export default App;
