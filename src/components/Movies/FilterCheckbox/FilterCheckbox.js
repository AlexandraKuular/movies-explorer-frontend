function FilterCheckbox({ onChangeFilter, filterShortFilms }) {
  return (
    <div className='filter'>
      <label className='filter__label text'>
        <input
          type='checkbox'
          className='filter__input'
          onChange={onChangeFilter}
          checked={filterShortFilms}
        />
        <span className='filter__switch'></span>
      </label>
      <div className='filter__divider'></div>
    </div>
  );
}

export default FilterCheckbox;
