import { useCallback, useEffect, useState } from 'react';
import { logOut, updateUser, UPDATE_USER } from '../../providers/actions/user';
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
    className: 'profile__submit_disabled',
  });
  const [isFormActive, setFormActive] = useState(false);

  const checkEdit = useCallback(() => {
    if (
      userInfo.name !== userData.name ||
      (userInfo.email !== userData.email && !isFormActive)
    ) {
      if (!isName(userInfo.name) && !isEmail(userInfo.email) && isFormActive) {
        setButtonProps({
          disabled: false,
          className: 'profile__submit-active',
        });
        return;
      }
    }
    setButtonProps({
      disabled: true,
      className: 'profile__submit-active profile__submit-active_disabled',
    });
  }, [userData, userInfo]);

  useEffect(() => {
    checkEdit();
  }, [checkEdit]);

  function handleChange(e) {
    dispatch({ type: UPDATE_USER, user: { [e.target.name]: e.target.value } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUser(dispatch, userInfo).then(({ success, statusCode = 0 }) => {
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
    });
    setUserData(userInfo);
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
            value={userInfo.name}
            onChange={handleChange}
          />
        </label>
        <label className='profile__label'>
          <input
            name='email'
            type='text'
            className='profile__input'
            placeholder={userInfo.email}
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>

        <button
          type='submit'
          className={`profile__submit ${
            isFormActive ? buttonProps.className : ''
          } text`}
          onClick={isFormActive ? handleSubmit : handleFormActive}
          disabled={isFormActive && buttonProps.disabled}
        >
          {isFormActive ? 'Сохранить' : 'Редактировать'}
        </button>

        {/* <button
          type='submit'
          className={`${buttonProps.className} text`}
          onClick={handleSubmit}
          disabled={buttonProps.disabled}
        >
          Редактировать
        </button> */}
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
