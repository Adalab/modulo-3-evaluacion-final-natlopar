import PropTypes from 'prop-types';

function FilterName({ handleName, searchName }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() === '') {
      event.preventDefault();
    }
  };

  return (
    <div className="input">
      <label htmlFor="name" className="input__label">
        Search by character:{' '}
      </label>
      <input
        type="text"
        id="name"
        value={searchName}
        placeholder="Ex: Harry"
        onChange={(e) => handleName(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input__input"
        autoFocus
      />
    </div>
  );
}

FilterName.propTypes = {
  handleName: PropTypes.func,
  searchName: PropTypes.string,
};

export default FilterName;
