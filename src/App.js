import "./App.css";
import Quote from "./components/Quote";
import SavedQuotesList from "./components/SavedQuotesList";
import React, { useState, useEffect } from "react";

const initialValues = {
  text: "",
  author: "",
};
let InitialCounter = 0;

const quotesList = [
  { id: 1, text: "Text 1", author: "Author 1" },
  { id: 2, text: "Text 2", author: "Author 2" },
];

function App() {
  const [quote, setQuote] = useState(initialValues);
  const [counter, setCounter] = useState(InitialCounter);
  const [quotes, setQuotesList] = useState(quotesList);
  const [error, setError] = useState(null);

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
        <Quote
          quotes={quotes}
          quote={quote}
          counterToogle={counterToggle}
          setQuotesList={setQuotesList}
          setError={setError}
        />
        {error && <div className="alert alert-danger"> {error}</div>}
      </header>
      <SavedQuotesList quotes={quotes} setQuotesList={setQuotesList} />
    </div>
  );
}

export default App;
