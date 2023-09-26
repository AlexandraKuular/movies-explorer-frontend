import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import { onLogin } from '../../services/actions/user';
import Input from '../Input/Input';
// import { isPassword, isEmail } from '../../utils/validation';

function Login() {

  return (
    <section className='auth'>
      <Link to='/' className='auth__logo'>
        <img src={logo} alt='Логотип' className='header__logo' />
      </Link>
      <h2 className='auth__title'>Рады видеть!</h2>
      <form className='auth__form'>
        <div className='auth__input-container'>
          <Input
            type='email'
            name='email'
            title='E-mail'
            placeholder='E-mail'
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
          className={`auth__submit auth__submit-login text`}
          disabled={''}
        >
          Войти
        </button>
        <div className='auth__link-container'>
          <p className='text auth__text-login color_text'>Ещё не зарегистрированы?</p>
          <Link to='/signup' className='auth__link text'>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
