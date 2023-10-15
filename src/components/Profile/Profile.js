import { useEffect, useState } from 'react';
import { logOut, updateUser } from '../../providers/actions/user';
import { isName, isEmail } from '../../utils/validation';
import { useStore } from '../../providers/StoreProvider';
import { TOOL_TIP } from '../../providers/actions/toolTip';
import { resMessages } from '../../utils/constants/constants';

function Profile() {
  const [state, dispatch] = useStore();
  const userInfo = state.user;
  const [userData, setUserData] = useState({
    name: userInfo.name,
    email: userInfo.email,
  });
  const [buttonProps, setButtonProps] = useState({
    disabled: true,
    className: 'profile__submit-active_disabled',
  });
  const [isFormActive, setFormActive] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [error, setError] = useState({ name: '', email: '' });

  useEffect(() => {
    if (userInfo.name === userData.name && userInfo.email === userData.email) {
      setButtonProps({
        disabled: true,
        className: 'profile__submit-active_disabled',
      });
      return;
    }
  }, [userData]);

  const handleChange = (e) => {
    let errorMessage = e.target.validationMessage;
    if (e.target.name === 'email') {
      errorMessage = errorMessage || isEmail(e.target.value);
      setError({
        ...error,
        email: errorMessage,
      });
    } else {
      errorMessage = errorMessage || isName(e.target.value);
      setError({
        ...error,
        name: errorMessage,
      });
    }

    setUserData({ ...userData, [e.target.name]: e.target.value });

    const haveSomeError = Object.keys(error).some(
      (key) => userData[key] === '' || errorMessage
    );
    setButtonProps({
      disabled: haveSomeError,
      className: haveSomeError ? 'profile__submit-active_disabled' : '',
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    updateUser(dispatch, userData)
      .then(({ success, statusCode = 0 }) => {
        if (success) {
          dispatch({
            type: TOOL_TIP,
            success: true,
            message: 'Данные пользователя успешно изменены!',
          });
          setFormActive(false);
        } else {
          dispatch({
            type: TOOL_TIP,
            success: false,
            message: resMessages[statusCode],
          });
        }
        setDisabled(false);
      })
  }

  function handleFormActive(e) {
    e.preventDefault();
    setFormActive(true);
  }

  function handleLogout() {
    logOut(dispatch);
    if (localStorage.getItem('moviesLocalState')) {
      localStorage.removeItem('moviesLocalState');
    }
    localStorage.removeItem('moviesAll');
  }

  return (
    <section className='profile'>
      <h1 className='profile__title text_medium'>Привет, {userData.name}!</h1>
      <form action='submit' className='profile__form text'>
        <label className='profile__label line'>
          <input
            name='name'
            type='text'
            className='profile__input'
            minLength={2}
            placeholder={userInfo.name}
            value={userData.name}
            onChange={handleChange}
            disabled={!isFormActive}
          />
          <span
            className={`profile-error ${
              error.name && 'profil-error_visible'
            } text`}
          >
            {error.name}
          </span>
        </label>
        <label className='profile__label'>
          <input
            name='email'
            type='text'
            className='profile__input'
            placeholder={userInfo.email}
            value={userData.email}
            onChange={handleChange}
            disabled={!isFormActive}
          />
          <span
            className={`profile-error ${
              error.email && 'profil-error_visible'
            } text`}
          >
            {error.email}
          </span>
        </label>

        <button
          type='submit'
          className={`profile__submit ${
            isFormActive
              ? `profile__submit-active ${buttonProps.className}`
              : ''
          } text`}
          onClick={isFormActive ? handleSubmit : handleFormActive}
          disabled={isFormActive && (buttonProps.disabled || disabled)}
        >
          {isFormActive ? 'Сохранить' : 'Редактировать'}
        </button>
      </form>
      {!isFormActive && (
        <button className='profile__logout link text' onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      )}
    </section>
  );
}

export default Profile;
