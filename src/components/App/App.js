import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import AppLayout from '../AppLayout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoToolTip from '../Modal/InfoToolTip/InfoToolTip';
import Modal from '../Modal/Modal';

import { useStore } from '../../providers/StoreProvider';
import { getUser } from '../../providers/actions/user';
import { CLOSE_TOOL_TIP } from '../../providers/actions/toolTip';
import { getSavedMovies } from '../../providers/actions/savedMovies';
import { SET_STATE_MAIN_MOVIES } from '../../providers/actions/mainMovies';

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useStore();
  const { loggedIn } = state;
  const location = useLocation();

  function checkDataInStorage() {
    const moviesLocalState = JSON.parse(localStorage.getItem('moviesLocalState'));
    if (moviesLocalState) {
      dispatch({ type: SET_STATE_MAIN_MOVIES, mainMovie: moviesLocalState });
    }
  }

  useLayoutEffect(() => {
    getUser(dispatch).then((success) => {
      if (success) {
        navigate(location.pathname);
      }
    });
    if (loggedIn) {
      checkDataInStorage();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getSavedMovies(dispatch);
    }
  }, [dispatch, loggedIn]);

  useEffect(() => {
    if (state.toolTip.isOpen) {
      setTimeout(() => {
        dispatch({ type: CLOSE_TOOL_TIP });
      }, 5000);
    }
  }, [dispatch, state.toolTip.isOpen]);

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
            <ProtectedRoute path='/movies'>
              <Movies />
            </ProtectedRoute> }
        />
        <Route
          path='/saved-movies'
          element={ 
            <ProtectedRoute path='/saved-movies'>
              <SavedMovies />
            </ProtectedRoute> }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute path='/profile'>
              <Profile />
            </ProtectedRoute>  }
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {state.toolTip.isOpen && (
        <Modal>
          <InfoToolTip />
        </Modal>
      )}
    </div>
  );
}

export default App;
