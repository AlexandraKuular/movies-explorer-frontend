import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';
import { useState, useEffect, useCallback } from 'react';
import { useStore } from '../../../providers/StoreProvider';
import {
  THREE_COUNT_MOVIES_FOR_MORE_BUTTON,
  TWO_COUNT_MOVIES_FOR_MORE_BUTTON,
  // SCREEN_WIDTH_480,
  // SCREEN_WIDTH_768,
  INITIAL_COUNT_MOVIES_FOR_MOBILE,
  INITIAL_COUNT_MOVIES_FOR_MIDDLE,
  INITIAL_COUNT_MOVIES_FOR_DESKTOP,
  MAX_DURATION_SHORT_MOVIES,
  SCREEN_WIDTH_685,
  SCREEN_WIDTH_1107,
} from '../../../utils/constants/constants';
// import { cardListPT } from '../../../utils/propTypes';

function MoviesCardList({
  movies,
  // handleClickMoreMovies,
  notFound,
  // showedMovies,
  filterShortFilms,
  isNotFound,
}) {
  const [state] = useStore();
  const { loading } = state;

  const [countShowMore, setCountShowMore] = useState(
    THREE_COUNT_MOVIES_FOR_MORE_BUTTON
  );
  const [maxShowMovies, setMaxShowMovies] = useState(
    INITIAL_COUNT_MOVIES_FOR_DESKTOP
  );
  const [moviesList, setMoviesList] = useState(movies);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = useCallback(() => {
    setWidth(window.innerWidth);
    if (width < SCREEN_WIDTH_685) {
      setCountShowMore(TWO_COUNT_MOVIES_FOR_MORE_BUTTON);
      setMaxShowMovies(INITIAL_COUNT_MOVIES_FOR_MOBILE);
    } else if (width < SCREEN_WIDTH_1107) {
      setCountShowMore(TWO_COUNT_MOVIES_FOR_MORE_BUTTON);
      setMaxShowMovies(INITIAL_COUNT_MOVIES_FOR_MIDDLE);
    } else {
      setCountShowMore(THREE_COUNT_MOVIES_FOR_MORE_BUTTON);
      setMaxShowMovies(INITIAL_COUNT_MOVIES_FOR_DESKTOP);
    }
  }, [width]);

  const filteredMovies = useCallback(() => {
    return movies.filter(
      (movie) => movie.duration <= MAX_DURATION_SHORT_MOVIES
    );
  }, [movies]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      setMoviesList(filteredMovies());
    }
  }, [filterShortFilms, filteredMovies, movies]);

  useEffect(() => {
    setTimeout(() => {
      // if (!maxShowMovies) {
        updateWidth();
      // }
      window.addEventListener('resize', updateWidth);
    }, 500);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  useEffect(() => {
    if (movies.length && filterShortFilms) {
      if (filteredMovies().length === 0) {
        isNotFound();
      }
    } else {
      setMoviesList(movies);
    }
  }, [
    filterShortFilms,
    filteredMovies,
    isNotFound,
    movies,
    movies.length,
    moviesList.length,
    setMoviesList,
  ]);

  function handleClick() {
    // handleClickMoreMovies(countShowMore);
    setMaxShowMovies((maxMovies) => maxMovies + countShowMore);
  }

  return (
    <div className='cards'>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <p className='cards__message text_subtitle'>{notFound}</p>
          <div className='cards__list'>
            {moviesList.slice(0, maxShowMovies).map((movie) => (
              <MoviesCard movie={movie} key={movie.id || movie._id} />
            ))}
          </div>
          {maxShowMovies < moviesList.length && (
            <button className='cards__button text link' onClick={handleClick}>
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

// MoviesCardList.propTypes = cardListPT;

export default MoviesCardList;
