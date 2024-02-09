import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"

function Filters({handleName, searchName, handleHouse, reset, searchHouse}) {

const handleClick =()=>{
  reset();
}

  return (
    <section className="form">
    <form className="form__inputs">
      <FilterName handleName={handleName} searchName={searchName}/>
      <FilterHouse handleHouse={handleHouse} searchHouse={searchHouse}/>
    </form>
    <button className="form__btn" onClick={handleClick}>Reset</button>
    </section>
  )
}

export default Filters