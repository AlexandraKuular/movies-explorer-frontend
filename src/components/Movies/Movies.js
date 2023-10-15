import { useCallback, useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import {
  MOVIES_CHANGE_FILTER,
  searchMovies,
  MOVIES_SEARCH_TEXT,
  // ADD_SHOWED_MOVIES,
  MOVIES_NOT_FOUND,
} from '../../providers/actions/mainMovies';
import { useStore } from '../../providers/StoreProvider';

function Movies() {
  const [state, dispatch] = useStore();
  const { searchText, filterShortFilms } = state.mainMovie;

  useEffect(() => {
    localStorage.setItem('moviesLocalState', JSON.stringify(state.mainMovie));
  }, [state.mainMovie]);

  function onChangeFilter(e) {
    dispatch({ type: MOVIES_CHANGE_FILTER, checked: e.target.checked });
  }

  function handleChange(e) {
    dispatch({ type: MOVIES_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies(dispatch);
  }

  const isNotFound = useCallback(() => {
    dispatch({ type: MOVIES_NOT_FOUND });
  }, [dispatch]);

  // const handleClickMoreMovies = useCallback(
  //   (count) => {
  //     dispatch({ type: ADD_SHOWED_MOVIES, count });
  //   },
  //   [dispatch]
  // );

  return (
    <main className='movies'>
      <div className='wrapper'>
        <SearchForm
          searchText={searchText}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        >
          <FilterCheckbox
            filterShortFilms={filterShortFilms}
            onChangeFilter={onChangeFilter}
          />
        </SearchForm>
        <MoviesCardList
          {...state.mainMovie}
          // handleClickMoreMovies={handleClickMoreMovies}
          isNotFound={isNotFound}
        />
      </div>
    </main>
  );
}

export default Movies;
