import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='portfolio__title text color_text'>Портфолио</p>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item line'>
          <a
            className='portfolio__link link'
            href='https://github.com/AlexandraKuular/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            <p className='text_medium'>Статичный сайт</p>
            <img className='portfolio__icon' src={arrow} alt='Иконка' />
          </a>
        </li>
        <li className='portfolio__list-item line'>
          <a
            className='portfolio__link link'
            href='https://alexandrakuular.github.io/russian-travel-Alex_Kuular/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='text_medium'>Адаптивный сайт</p>
            <img className='portfolio__icon' src={arrow} alt='Иконка' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link link'
            href='https://alexandrakuular.github.io/mesto_AlexKuular/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='text_medium'>Одностраничное приложение</p>
            <img className='portfolio__icon' src={arrow} alt='Иконка' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
