import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote";
import React, { useState, useEffect } from "react";

const initialValues = {
  text: "",
  author: "",
};
let InitialCounter = 0;
function App() {
  const [quote, setQuote] = useState(initialValues);
  const [counter, setCounter] = useState(InitialCounter);

  const counterToggle = () => {
    const newCounter = InitialCounter++;
    setCounter(newCounter);
  };

  const getApi = async () => {
    const url = "https://type.fit/api/quotes";
    const data = await fetch(url);
    const res = await data.json();
    console.log(typeof res);
    const { text, author } = res[counter];
    const changedQuote = {
      ...quote,
      text,
      author,
    };
    setQuote(changedQuote);
  };
  useEffect(() => {
    getApi();
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Quote quote={quote} counterToogle={counterToggle} />
      </header>
    </div>
  );
}

export default App;
