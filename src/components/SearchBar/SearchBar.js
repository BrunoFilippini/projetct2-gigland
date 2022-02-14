export function SearchBar(props) {
    return (
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        //onKeyUp={(event) => props.filterGigs(event.target.value)}
      />
    );
  }
  
