import React from "react";
import SavedQuote from "./SavedQuote";

const SavedQuotesList = ({ quotes, setQuotesList }) => {
  const quoteDelete = (quoteID) => {
    const changedquotes = quotes.filter((quote) => quoteID !== quote.id);
    setQuotesList(changedquotes);
  };

  return (
    <>
      {console.log(quotes)}
      {quotes.map((quote) => (
        <SavedQuote quote={quote} key={quote.id} quoteDelete={quoteDelete} />
      ))}
    </>
  );
};

export default SavedQuotesList;
