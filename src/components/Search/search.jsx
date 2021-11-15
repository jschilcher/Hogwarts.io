import React from "react";

const Search = ({searchQuery,setSearchQuery}) => {
    return (
        // <form action="/" method="get">
        //     <label htmlFor="header-search">
        //         <span className="visually-hidden"></span>
        //     </label>
            <input 
            key="random1"
            value={searchQuery}
            type="text"
            placeholder="Search Characters"
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        //     <button type="submit">Search</button>
        // </form>
    )
}

export default Search;