import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"

function Filters({handleName, searchName, handleHouse}) {
  return (
    <form>
      <FilterName handleName={handleName} searchName={searchName}/>
      <FilterHouse handleHouse={handleHouse}/>
    </form>
  )
}

export default Filters