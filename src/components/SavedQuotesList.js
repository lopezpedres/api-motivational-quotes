import React from "react";
import SavedQuote from "./SavedQuote";

let quotes = [];
//Create the useState for the quotes

const SavedQuotesList = ({ quote }) => {
  return (
    <>
      {quotes.map((quote) => (
        <SavedQuote quote={quote} />
      ))}
    </>
  );
};

export default SavedQuotesList;
