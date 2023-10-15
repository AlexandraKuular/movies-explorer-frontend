import { searchFormPT } from '../../../utils/propTypes';

function SearchForm({ searchText, handleChange, handleSubmit, children }) {
  return (
    <div className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='search__form-input color_background'
          placeholder='Фильм'
          value={searchText}
          onChange={handleChange}
          required
        />
        <button className='search__submit link' type='submit'></button>
      </form>
      {children}
    </div>
  );
}

SearchForm.propTypes = searchFormPT;

export default SearchForm;
