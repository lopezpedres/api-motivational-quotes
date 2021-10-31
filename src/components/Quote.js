import React, { useEffect } from "react";

const Quote = ({
  quotes,
  quote,
  counterToogle,
  setQuotesList,
  setError,
  setSuccess,
}) => {
  const addHandler = () => {
    if (quotes.length === 0) {
      addQuote();
    }
    if (quotes.filter((q) => q.text === quote.text).length > 0) {
      setError("Quote already added");
    } else {
      addQuote();
    }
  };

  // clear error effect
  useEffect(() => {
    setTimeout(() => setError(null), 1000);
  }, [quote]);

  const addQuote = () => {
    console.log("This is the to add Quote", quote);
    const newquote = {
      ...quote,
      id: new Date(),
      text: quote.text,
      author: quote.author,
    };
    setQuotesList([newquote, ...quotes]);
    setSuccess("Quote added!");
    setTimeout(() => setSuccess(null), 3000);
  };

  return (
    <div style={{ fontFamily: "Zen Kaku Gothic Antique" }}>
      <h1>{quote.text ? quote.text : "Loading..."}</h1>
      <span> {quote.author ? "—" + quote.author : `Unknown`}</span> <br />
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
