import React from "react";
// import API from "../utils/API";

const SearchForm = props => (
    <form>
        <div className="form-group">
        <label htmlFor="search"> Search for articles:</label>
        <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Type here"
            id="search"
        />
        <button
        onClick={props.handleFormSubmit} className="btn btn-primary mt-3"
        >
        Search
        </button>
        </div>

    </form>
)

export default SearchForm;