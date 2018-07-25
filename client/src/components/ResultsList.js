import React from "react";

const ResultsList = props => (
    <ul className="list-group search-results">
        {props.results.map(result => (
            <li className="list-group-item" 
            key={result._id}>
            <a className="article-headline" href={result.web_url}>
                {result.headline.main}
            </a>
            <br/>
            <button onClick={()=>props.save(result._id)} >Save</button>

            </li>
        ))}
    </ul>
);

export default ResultsList;