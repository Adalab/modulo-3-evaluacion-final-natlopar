
function Sort({handleSort, isChecked}) {
  return (
    <div className="sort">
        <label htmlFor="sort">Sort A-Z</label>
        <input id="sort" type='checkbox' onChange={(e)=> handleSort(e.target.checked)} checked={isChecked}></input>
    </div>
  )
}

export default Sort