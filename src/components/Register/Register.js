import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Input from '../Input/Input';

function Register() {
  return (
    <div className='auth'>
      <Link to='/' className='auth__logo'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>
      <h2 className='auth__title'>Добро пожаловать!</h2>
      <form className='auth__form'>
        <div className='auth__input-container'>
          <Input
            type='text'
            name='name'
            title='Имя'
            placeholder='Имя'
          />
          <Input
            type='email'
            name='email'
            title='E-mail'
            placeholder='Почта'
          />
          <Input
            type='password'
            name='password'
            title='Пароль'
            placeholder='Пароль'
          />
        </div>
        <span className='auth__message'>{''}</span>
        <button
          className={`auth__submit text`}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='auth__link-container'>
        <p className='text auth__text color_text'>Уже зарегестрированны?</p>
        <Link to='/signin' className='auth__link text'>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
