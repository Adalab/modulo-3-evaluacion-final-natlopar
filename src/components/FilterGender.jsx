import PropTypes from 'prop-types';

function FilterGender({handleGender, searchGender}) {
  return (
    <div>
        <label htmlFor="gender">Search by gender:</label>
        <select name="gender" id="gender" onChange={(e) => handleGender(e.target.value)} value={searchGender}>
            <option value="All">All</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
    </div>
  )
}


FilterGender.propTypes = {
    searchGender: PropTypes.string, 
    handleGender: PropTypes.func
  }
export default FilterGender