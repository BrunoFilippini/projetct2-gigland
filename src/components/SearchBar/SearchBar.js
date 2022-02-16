export function SearchBar(props) {
  return (
    <input
      type="text"
      area="searchParams"
      className="input search-bar"
      placeholder="Find talent"
      onKeyUp={(event) => {
        props.filterAPI(event.target.value);
      }}
    />
  );
}
