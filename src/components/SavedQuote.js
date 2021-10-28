import React from "react";

const SavedQuote = (quote) => {
  return (
    <div className="card m-4">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quote.text}</p>
          <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default SavedQuote;
