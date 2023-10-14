import { moviesApiAddress } from './constants/constants';

class MoviesApi {
  constructor(address) {
    this._address = address;
    this._headers = { 'Content-type': 'application/json' };
  }

  _handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.message}`);
  };

  getMovies() {
    return fetch(`${this._address}/beatfilm-movies`)
      .then(this._handleResponse);
  }
}

const moviesApi = new MoviesApi(moviesApiAddress);

export default moviesApi;
