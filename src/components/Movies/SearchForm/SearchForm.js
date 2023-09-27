function SearchForm({ searchText = '', onChange, onSubmit, children }) {
  return (
    <div className='search'>
      <form className='search__form' onSubmit={onSubmit}>
        <input
          type='text'
          className='search__form-input color_background'
          placeholder='Фильм'
          value={searchText}
          onChange={onChange}
          required
        />
        <button className='search__submit link' type='submit'></button>
      </form>
      {children}
    </div>
  );
}

export default SearchForm;
