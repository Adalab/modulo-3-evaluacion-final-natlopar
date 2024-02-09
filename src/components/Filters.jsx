import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"
import PropTypes from 'prop-types';
import '../styles/layout/filters.scss';
import FilterGender from "./FilterGender";
import Sort from "./Sort";


function Filters({handleSort, isChecked, handleName, searchName, handleHouse, reset, searchHouse, handleGender, searchGender}) {

const handleClick =()=>{
  reset();
}

  return (
    <section className="form">
    <form className="form__inputs">
      <FilterName handleName={handleName} searchName={searchName}/>
      <FilterHouse handleHouse={handleHouse} searchHouse={searchHouse}/>
      <FilterGender handleGender={handleGender} searchGender={searchGender}/>
      <Sort handleSort= {handleSort} isChecked={isChecked}/>
   
    </form>
    
    <button className="form__btn" onClick={handleClick}>Reset</button>
    </section>
  )
}


Filters.propTypes = {
  handleName: PropTypes.func,
  searchName: PropTypes.string,
  handleHouse: PropTypes.func,
  searchHouse: PropTypes.string, 
  reset: PropTypes.func,
  handleGender: PropTypes.func,
  searchGender: PropTypes.string, 
  handleSort: PropTypes.func,
}


export default Filters