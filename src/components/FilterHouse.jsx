import PropTypes from 'prop-types';

function FilterHouse({ handleHouse, searchHouse }) {
  return (
    <div className="input">
      <label htmlFor="houseFilter" className="input__label">
        Search by house:{' '}
      </label>
      <select
        name="houseFilter"
        id="houseFilter"
        className="input__input"
        value={searchHouse}
        onChange={(e) => handleHouse(e.target.value)}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
}

FilterHouse.propTypes = {
  handleHouse: PropTypes.func,
  searchHouse: PropTypes.string,
};

export default FilterHouse;
