import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({handleChange, value, handleFormSubmit, breeds}) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input
          value={value}
          onChange={handleChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;