export const moviesApiAddress = 'https://api.nomoreparties.co';
export const backendApiAddress =
  'https://api.movies.explorer.alexkuular.nomoredomainsrocks.ru';
// export const backendApiAddress = 'http://localhost:3000';

export const regForSymbols = /[_~!@#$%^&*()\\[\]+`'";:<>\\/\\|=]/g;
export const regForName = /[a-z-. а-яё]+/g;
export const regForPassword = /[0-9a-z-а-яё]+/g;

export const validationMessages = {
  name: 'Имя содержит недопустимые символы.',
  email: 'Введен некорректный формат почты',
  password: 'Пароль содержит не допустимые символы.',
};

export const resMessages = {
  409: 'Пользователь с введенным email уже существует.',
  401: 'Не авторизован / не зарегистрирован.',
  500: 'На сервере произошла ошибка.',
  400: 'Введены невалидные данные.',
};

export const infoMessages = {
  notFound: 'Ничего не найдено',
  requestMoviesFaild:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

export const SCREEN_WIDTH_768 = 768;
export const SCREEN_WIDTH_1107 = 1107;
export const SCREEN_WIDTH_685 = 685;
export const SCREEN_WIDTH_480 = 480;
export const INITIAL_COUNT_MOVIES_FOR_MOBILE = 5;
export const INITIAL_COUNT_MOVIES_FOR_MIDDLE = 8;
export const INITIAL_COUNT_MOVIES_FOR_DESKTOP = 12;
export const TWO_COUNT_MOVIES_FOR_MORE_BUTTON = 2;
export const THREE_COUNT_MOVIES_FOR_MORE_BUTTON = 3;
export const MAX_DURATION_SHORT_MOVIES = 40;
