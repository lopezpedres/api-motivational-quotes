import "./App.css";
import Quote from "./components/Quote";
import SavedQuotesList from "./components/SavedQuotesList";
import React, { useState, useEffect } from "react";

const initialValues = {
  text: "",
  author: "",
};
let InitialCounter = 0;

const quotesList = [];

function App() {
  const [quote, setQuote] = useState(initialValues);
  const [counter, setCounter] = useState(InitialCounter);
  const [quotes, setQuotesList] = useState(quotesList);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const counterToggle = () => {
    const newCounter = InitialCounter++;
    setCounter(newCounter);
  };

  useEffect(() => {
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
          setSuccess={setSuccess}
        />
        {error && <div className="alert alert-danger"> {error}</div>}
        {success && <div className="alert alert-success mt-2"> {success}</div>}
      </header>
      <SavedQuotesList quotes={quotes} setQuotesList={setQuotesList} />
    </div>
  );
}

export default App;
