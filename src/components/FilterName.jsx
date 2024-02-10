import PropTypes from 'prop-types';

function FilterName({ handleName, searchName }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() === '') {
      event.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="name">Search by character: </label>
      <input
        type="text"
        id="name"
        value={searchName}
        placeholder="Character"
        onChange={(e) => handleName(e.target.value)}
        onKeyDown={handleKeyDown}
        className='input'
      />
    </div>
  );
}

FilterName.propTypes = {
  handleName: PropTypes.func,
  searchName: PropTypes.string,
};

export default FilterName;
