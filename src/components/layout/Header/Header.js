import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import HeaderLoggedIn from './HeaderLoggedIn/HeaderLoggedIn';
import HeaderUnauthorized from './HeaderUnauthorized/HeaderUnauthorized';

function Header() {
  const loggedIn = true;

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Лого' />
      </Link>
      {loggedIn ? (<HeaderLoggedIn />) : (<HeaderUnauthorized />)}
    </header>
  );
}

export default Header;
