import { backendApiAddress } from './constants/constants';

class Auth {
  constructor(address) {
    this._address = address;
    this._headers = {
      'Content-type': 'application/json',
    };
  }

  _handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  };

  login({ email, password }) {
    return fetch(`${this._address}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://movies.explorer.alexkuular.nomoredomainsrocks.ru',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  registration({ name, email, password }) {
    return fetch(`${this._address}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://movies.explorer.alexkuular.nomoredomainsrocks.ru',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  }

  authentication() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://movies.explorer.alexkuular.nomoredomainsrocks.ru',
      },
    }).then(this._handleResponse);
  }

  logout() {
    return fetch(`${this._address}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://movies.explorer.alexkuular.nomoredomainsrocks.ru',
      },
    }).then(this._handleResponse);
  }
}

const auth = new Auth(backendApiAddress);

export default auth;
