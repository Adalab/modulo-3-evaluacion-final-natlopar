function FilterName({ handleName, searchName }) {
  return (
    <div>
      <label htmlFor="name">Search by character: </label>
      <input
        type="text"
        id="name"
        value={searchName}
        placeholder="Harry Potter"
        onChange={(e) => handleName(e.target.value)}
      />
    </div>
  );
}

export default FilterName;
