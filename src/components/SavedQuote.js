import React from "react";

const SavedQuote = ({ quote, quoteDelete }) => {
  return (
    <div className="card m-4">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quote.text}</p>
          <footer className="blockquote-footer">{quote.author}</footer>
        </blockquote>
      </div>
      {/* Create an Onclick to*/}
      <button
        onClick={() => quoteDelete(quote.id)}
        className="btn btn-small btn-warning"
      >
        Delete
      </button>
    </div>
  );
};

export default SavedQuote;
