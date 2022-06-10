import "./App.scss";
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const quoteUrl =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const [quoteArr, setQuoteArr] = useState([]);
    const [quote, setQuote] = useState("A");
    const [author, setAuthor] = useState("B");

    const fetchQuotes = async (url) => {
        const res = await fetch(url);
        const { quotes } = await res.json();
        setQuoteArr(quotes);
    };
    useEffect(() => {
        fetchQuotes(quoteUrl);
        console.log("hello");
    }, [quoteUrl]);
    const randomIdx = () => {
        return Math.floor(Math.random() * quoteArr.length);
    };
    const updateContent = () => {
        let idx = randomIdx();
        setQuote(quoteArr[idx].quote);
        setAuthor(quoteArr[idx].author);
    };
    return (
        <div id="wrapper" className="App">
            <div id="quote-box" className="App-header">
                <div className="quote-text">
                    <i className="fa fa-quote-left"> </i>
                    <span id="text">{quote}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{author}</span>
                </div>
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/intent/tweet"
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <button
                        className="btn btn-danger"
                        id="new-quote"
                        onClick={() => updateContent()}
                    >
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
