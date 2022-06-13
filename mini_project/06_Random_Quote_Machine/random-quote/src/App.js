import "./App.scss";
import React from "react";
import { useState, useEffect } from "react";
import COLORS_ARRAY from "./component/ColorArray";

function App() {
    const quoteUrl =
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const iniQuote = "The best revenge is massive success.";
    const iniAuthor = "Frank Sinatra";
    const [quoteArr, setQuoteArr] = useState([]);
    const [quote, setQuote] = useState(iniQuote);
    const [author, setAuthor] = useState(iniAuthor);
    const tweetLink = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    const [accentColor, setAccentColor] = useState("#333");
    const fetchQuotes = async (url) => {
        try {
            const res = await fetch(url);
            const { quotes } = await res.json();
            setQuoteArr(quotes);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchQuotes(quoteUrl);
        console.log("Current : ", quoteArr);
        return () => {
            console.log("Prev : ", quoteArr);
        };
    }, [quoteArr]);
    const randomIdx = (Arr) => {
        return Math.floor(Math.random() * Arr.length);
    };
    const updateContent = () => {
        let idxQuote = randomIdx(quoteArr);
        setQuote(quoteArr[idxQuote].quote);
        setAuthor(quoteArr[idxQuote].author);
        let idxColor = randomIdx(COLORS_ARRAY);
        setAccentColor(COLORS_ARRAY[idxColor]);
    };
    return (
        <div
            id="wrapper"
            className="App"
            style={{ backgroundColor: accentColor }}
        >
            <div id="quote-box" className="App-header">
                <div className="quote-text" style={{ color: accentColor }}>
                    <i className="fa fa-quote-left"> </i>
                    <span id="text"> {quote}</span>
                </div>
                <div className="quote-author" style={{ color: accentColor }}>
                    - <span id="author">{author}</span>
                </div>
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        rel="noreferrer"
                        href={encodeURI(tweetLink)}
                        style={{ backgroundColor: accentColor }}
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <button
                        className="button"
                        id="new-quote"
                        onClick={() => updateContent()}
                        style={{ backgroundColor: accentColor }}
                    >
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );
}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cnt: 0,
//             hide: false,
//         };
//     }
//     add() {
//         this.setState({
//             cnt: this.state.cnt + 1,
//             hide: !this.state.hide,
//         });
//     }
//     render() {
//         return (
//             <div className="App">
//                 <button className="btn btn-primary" onClick={() => this.add()}>
//                     {this.state.cnt}
//                 </button>
//                 <br />
//                 <br />
//                 <br />
//                 {this.state.hide && <RawData />}
//             </div>
//         );
//     }
// }
export default App;
