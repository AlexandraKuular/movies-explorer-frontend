import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';

function SavedMovies() {
  return (
    <main className='movies'>
      <div className='wrapper'>
        <SearchForm>
          <FilterCheckbox/>
        </SearchForm>
        <MoviesCardList/>
      </div>
    </main>
  );
}

export default SavedMovies;
