//import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { logOut, updateUser, UPDATE_USER } from '../../providers/actions/user';
import { isName, isEmail } from '../../utils/validation';
import { useStore } from '../../providers/StoreProvider';
import { TOOL_TIP } from '../../providers/actions/toolTip';
import { resMessages } from '../../utils/constants/constants';

function Profile() {
  // const navigate = useNavigate();

  // function handleLogout() {
  //   navigate('/');
  // }

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

  const checkEdit = useCallback(() => {
    if (userInfo.name !== userData.name || userInfo.email !== userData.email) {
      if (!isName(userInfo.name) && !isEmail(userInfo.email)) {
        setButtonProps({ disabled: false, className: 'profile__submit' });
        return;
      }
    }
    setButtonProps({ disabled: true, className: 'profile__submit_disabled' });
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

  function handleLogout() {
    logOut(dispatch);
    if (localStorage.getItem('moviesLocalState')) {
      localStorage.removeItem('moviesLocalState');
    }
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
            //value={userInfo.name}
            onChange={handleChange}
          />
        </label>
        <label className='profile__label'>
          <input
            name='email'
            type='text'
            className='profile__input'
            placeholder={userInfo.email}
            //value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <button
          type='submit'
          //className={`profile__submit text`}
          className={`${buttonProps.className} text`}
          onClick={handleSubmit}
          disabled={buttonProps.disabled}
        >
          Редактировать
        </button>
      </form>
      <button className='profile__logout link text' onClick={handleLogout} >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
