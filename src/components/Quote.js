import React from "react";

const Quote = ({ quotes, quote, counterToogle, setQuotesList, setError }) => {
  const addHandler = () => {
    if (quotes.length === 0) {
      addQuote();
    }
    for (const q of quotes) {
      if (q.text === quote.text) {
        setError("You already added that quote ");
        setTimeout(() => setError(null), 3000);
        return;
      } else addQuote();
    }
  };

  const addQuote = () => {
    console.log("This is the to add Quote", quote);
    const newquote = {
      ...quote,
      id: new Date(),
      text: quote.text,
      author: quote.author,
    };
    setQuotesList([newquote, ...quotes]);
  };

  return (
    <div style={{ fontFamily: "Zen Kaku Gothic Antique" }}>
      <h1>{quote.text}</h1>
      <span> {quote.author ? `— ` + quote.author : `Unknown`}</span> <br />
      <button
        className="btn btn-warning m-2"
        type="button"
        onClick={() => counterToogle()}
      >
        New Quote
      </button>
      <br />
      {/* Create onClick to call the useState to add the quotes 
      to the quoteS list*/}
      <button
        onClick={() => addHandler()}
        className="btn btn-small btn-outline-warning"
      >
        {" "}
        save
      </button>
    </div>
  );
};

export default Quote;
