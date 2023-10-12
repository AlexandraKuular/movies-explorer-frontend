import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import { useCallback, useEffect } from 'react';
import {
  SAVED_MOVIES_CHANGE_FILTER,
  SAVED_MOVIES_SEARCH_TEXT,
  ADD_SHOWED_SAVED_MOVIES,
  SAVED_MOVIES_NOT_FOUND,
  RESET_STATE_SAVED_MOVIES,
  SEARCH_SAVED_MOVIES,
} from '../../providers/actions/savedMovies';
import { useStore } from '../../providers/StoreProvider';

function SavedMovies() {
  const [state, dispatch] = useStore();
  const movieCardListProps = state.savedMovie;

  useEffect(() => {
    dispatch({ type: RESET_STATE_SAVED_MOVIES });
  }, [dispatch]);

  function onChangeFilter(e) {
    dispatch({ type: SAVED_MOVIES_CHANGE_FILTER, checked: e.target.checked });
  }

  function handleChange(e) {
    dispatch({ type: SAVED_MOVIES_SEARCH_TEXT, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: SEARCH_SAVED_MOVIES });
  }

  const isNotFound = useCallback(() => {
    dispatch({ type: SAVED_MOVIES_NOT_FOUND });
  }, [dispatch]);

  const handleClickMoreMovies = useCallback(
    (count) => {
      dispatch({ type: ADD_SHOWED_SAVED_MOVIES, count });
    },
    [dispatch]
  );

  return (
    <main className='movies'>
      <div className='wrapper'>
        <SearchForm searchText={movieCardListProps.searchText} handleChange={handleChange} handleSubmit={handleSubmit} >
          <FilterCheckbox filterShortFilms={movieCardListProps.filterShortFilms} onChangeFilter={onChangeFilter} />
        </SearchForm>
        <MoviesCardList  {...movieCardListProps} handleClickMoreMovies={handleClickMoreMovies} isNotFound={isNotFound} />
      </div>
    </main>
  );
}

export default SavedMovies;
