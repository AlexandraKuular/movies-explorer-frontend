import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList() {
  const loading = false;
  return (
    <div className='cards'>
      {loading ? (<Preloader />) : (
        <>
        {/* <p className='cards__message text_subtitle'>{''}</p> */}
        <div className='cards__list'>
            <MoviesCard nameRu='' />
            <MoviesCard nameRu='' />
            <MoviesCard nameRu='' />
        </div>

          <button className='cards__button text link'>
            Ещё
          </button>
      </>)}
    </div>
  );
}

export default MoviesCardList;
