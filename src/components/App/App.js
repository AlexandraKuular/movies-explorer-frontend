import { Routes, Route } from 'react-router-dom';
import AppLayout from '../AppLayout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <AppLayout>
              <Main />
            </AppLayout>
          }
        />
        <Route
          path='/movies'
          element={ 
            <AppLayout>
              <Movies />
            </AppLayout> }
        />
        <Route
          path='/saved-movies'
          element={ 
            <AppLayout>
              <SavedMovies />
            </AppLayout> }
        />
        <Route
          path='/profile'
          element={ <Profile />  }
        />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
