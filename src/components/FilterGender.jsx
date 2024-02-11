import PropTypes from 'prop-types';

function FilterGender({handleGender, searchGender}) {
  return (
    <div className='input'>
        <label htmlFor="gender" className='input__label'>Search by gender:</label>
        <select name="gender" id="gender" className="input__input" onChange={(e) => handleGender(e.target.value)} value={searchGender}>
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