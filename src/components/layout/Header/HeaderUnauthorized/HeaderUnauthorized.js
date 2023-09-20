import { Link } from 'react-router-dom';

function HeaderUnauthorized() {
  return(
    <nav className='header__navigate'>
      <ul className='header__auth text'>
        <li className='header__auth-item link'>
          <Link to='/sign-up' className='header__link'>
            Регистрация
          </Link>
        </li>
        <li className='header__auth-item link'>
          <Link to='/sign-in' className='header__link color_primary'>
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderUnauthorized;
