function FilterHouse({handleHouse}) {


  return (
    <div>
    <label htmlFor="houseFilter">Search by house: </label>
    <select name="houseFilter" id="" onChange={(e) => handleHouse(e.target.value)}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
    </select>
    </div>
  )
}

export default FilterHouse