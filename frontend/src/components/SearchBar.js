function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="🔍 Search expenses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;