import mainApi from '../../utils/MainApi';
import auth from '../../utils/auth';
import { resMessages } from '../../utils/constants/constants';

export const AUTH_USER = 'SET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT = 'LOGOUT';

export const updateUser = (dispatch, body) => {
  return mainApi
    .updateUser(body)
    .then((data) => {
      dispatch({ type: UPDATE_USER, user: data });
      return { success: true };
    })
    .catch((statusCode) => {
      return { success: false, statusCode };
    });
};

export const onLogin = (dispatch, body) => {
  return auth
    .login(body)
    .then(() => {
      dispatch({ type: LOGIN_USER });
      return true;
    })
    .catch((statusCode) => {
      dispatch({ type: LOGIN_USER_FAILED, message: resMessages[statusCode] });
      setTimeout(() => {
        dispatch({ type: LOGIN_USER_FAILED, message: '' });
      }, 10000);
      return false;
    });
};

export const logOut = (dispatch) => {
  auth
    .logout()
    .then(() => {
      dispatch({ type: LOGOUT });
    })
    .catch(console.log);
};

export const onRegister = (dispatch, { name, email, password }) => {
  return auth
    .registration({ name, email, password })
    .then((res) => {
      dispatch({ type: REGISTER_USER });
      return true;
    })
    .then((success) => {
      if (success) {
        onLogin(dispatch, { email, password });
      }
    })
    .catch((statusCode) => {
      dispatch({ type: LOGIN_USER_FAILED, message: resMessages[statusCode] });
      setTimeout(() => {
        dispatch({ type: LOGIN_USER_FAILED, message: '' });
      }, 10000);
      return false;
    });
};

export const getUser = (dispatch) => {
  return auth
    .authentication()
    .then((user) => {
      dispatch({ type: AUTH_USER, user });
      return true;
    })
    .catch(() => {
      console.log('Пользователь не авторизован.');
      localStorage.clear();
      return false;
    });
};