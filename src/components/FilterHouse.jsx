function FilterHouse({handleHouse, searchHouse}) {


  return (
    <div>
    <label htmlFor="houseFilter" className="">Search by house: </label>
    <select name="houseFilter" id="" value={searchHouse} onChange={(e) => handleHouse(e.target.value)}>
        <option value='Gryffindor'>Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
    </select>
    </div>
  )
}

export default FilterHouse