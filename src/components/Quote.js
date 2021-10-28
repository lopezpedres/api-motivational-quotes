import React from "react";

const Quote = ({ quote, counterToogle }) => {
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
      <button className="btn btn-small btn-outline-warning"> save</button>
    </div>
  );
};

export default Quote;
