import './SearchForm.css';
//import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className="search-form">
      <form className="seacrh-form__form">
        <div className="seacrh-form__form-container">
          <input
            className="search-form__form-input"
            type="text"
            placeholder="Фильм"
            required
          />
        </div>
        <button type="submit" className="search-form__submit">
        </button>
      </form>
      <FilterCheckbox />
    </div>
  )
}

export default SearchForm;
