import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" type="checkbox" />
      <p className="filter-checkbox__caption">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
