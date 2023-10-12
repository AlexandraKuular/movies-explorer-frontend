import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import HeaderLoggedIn from './HeaderLoggedIn/HeaderLoggedIn';
import HeaderUnauthorized from './HeaderUnauthorized/HeaderUnauthorized';
import React from 'react';
import { useStore } from '../../../providers/StoreProvider';

function Header() {
  const [state] = useStore();
  const { loggedIn } = state;

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='Лого' className='header__logo' />
      </Link>
      {loggedIn ? (<HeaderLoggedIn />) : (<HeaderUnauthorized />)}
    </header>
  );
}

export default Header;
