import {
  UPDATE_USER,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  AUTH_USER,
  LOGOUT,
} from '../actions/user';

export const userReducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: { ...state.user, ...action.user },
        loggedIn: true,
      };

    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
        toolTip: {
          success: true,
          isOpen: true,
          message: 'Успешно!',
        },
      };

    case LOGIN_USER_FAILED:
      return { ...state, authMessage: action.message };

    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: { _id: '', name: '', email: '' },
        mainMovie: {
          ...state.mainMovie,
          searchText: '',
          showedMovies: 0,
          filterShortFilms: false,
          movies: [],
          saved: [],
        },
      };

    case UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.user } };

    default:
      return state;
  }
};
