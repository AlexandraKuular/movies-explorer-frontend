function MoviesCard(movie) {

  return (
    <article className='card'>
      <a
        href={'href'}
        target='_blank'
        rel='noopener noreferrer'
        className='card__trailer-link'
      >
        <img className='card__image' alt={movie.nameRu} />
        <button
          className={`card__btn color_secondary link`}
        >Сохранить</button>
      </a>
      <div className='card__header'>
        <div><h3 className='card__title text_subtitle'>Название фильма</h3></div>
        <div><p className='card__duration text color_text'>{'1ч 57м'}</p></div>
      </div>
    </article>
  );
}

export default MoviesCard;
