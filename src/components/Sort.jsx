
function Sort({handleSort, isChecked}) {
  return (
    <div className="input">
        <label htmlFor="sort" className="input__label">Sort A-Z</label>
        <input className="input__input" id="sort" type='checkbox' onChange={(e)=> handleSort(e.target.checked)} checked={isChecked}></input>
    </div>
  )
}

export default Sort