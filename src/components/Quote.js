import React from "react";

const Quote = ({ quote, counterToogle }) => {
  return (
    <div>
      <p>{quote.text}</p>
      <span> {quote.author}</span> <br />
      <button
        className="btn btn-light mt-2"
        type="button"
        onClick={() => counterToogle()}
      >
        New Quote
      </button>
    </div>
  );
};

export default Quote;
