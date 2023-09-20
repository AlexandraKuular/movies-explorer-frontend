import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function Movies() {
  const handleSubmit = () => {
    // TODO
  };
  const handleChange = () => {
    // TODO
  };

  return (
    <main className='movies'>
      <div className='wrapper'>
        <SearchForm onSubmit={handleSubmit} onChange={handleChange} />
        <FilterCheckbox />
        <MoviesCardList />
      </div>
    </main>
  );
}

export default Movies;
