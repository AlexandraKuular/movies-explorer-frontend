import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderLoggedIn() {
  const menuRef = useRef();
  const location = useLocation();
  const path = location.pathname;

  const handleOpenMenu = () => {
    const menu = menuRef.current;
    menu.style.display = 'flex';
  };

  const handleCloseMenu = () => {
    const menu = menuRef.current;
    menu.style.display = '';
  };
  return(
    <nav className='header__navigate header__navigate-movies'>
      <ul className='header__movies text' ref={menuRef}>
        <button
          className='header__burger-close'
          onClick={handleCloseMenu}
        ></button>
        <li
          className={`header__movies-item ${
            path === '/' && 'header__movies-item_selected'
          }`}
        >
          <Link to='/' className='link' onClick={handleCloseMenu}>
            Главная
          </Link>
        </li>
        <li
          className={`header__movies-item ${
            path === '/movies' && 'header__movies-item_selected'
          }`}
        >
          <Link to='/movies' className='link' onClick={handleCloseMenu}>
            Фильмы
          </Link>
        </li>
        <li
          className={`header__movies-item ${
            path === '/saved-movies' && 'header__movies-item_selected'
          }`}
        >
          <Link to='/saved-movies' className='link' onClick={handleCloseMenu}>
            Сохранённые фильмы
          </Link>
        </li>
        <li className='header__movies-item'>
          <Link
            to='/profile'
            className='header__link-profile color_secondary link'
            onClick={handleCloseMenu}
          >
            Аккаунт
          </Link>
        </li>
      </ul>
      <div className='header__burger link' onClick={handleOpenMenu}>
        <div className='header__burger-line'></div>
        <div className='header__burger-line'></div>
        <div className='header__burger-line'></div>
      </div>
    </nav>
  )
}

export default HeaderLoggedIn;
