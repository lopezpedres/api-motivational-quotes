import "./App.css";
import Quote from "./components/Quote";
import SavedQuotesList from "./components/SavedQuotesList";
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
    console.log(counter);
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
      <header>
        <Quote quote={quote} counterToogle={counterToggle} />
      </header>
      <SavedQuotesList quote={quote} />
    </div>
  );
}

export default App;
