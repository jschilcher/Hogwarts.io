const Search = () => {
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search Characters</span>
            </label>
            <input 
            type="text"
            id="header-search"
            placeholder="Search Characters"
            name="s"
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search;