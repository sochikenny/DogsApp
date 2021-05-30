import React from "react";
import "./style.css";

function SearchResults({results}) {
  return (
    <ul className="list-group search-results">
      {results.map(result => (
        <div key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </div>
      ))}
    </ul>
  );
}

export default SearchResults;
