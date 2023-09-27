import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }
  return (
    <section className='profile'>
      <h1 className='profile__title text_medium'>Привет, Виталий!</h1>
      <form action='submit' className='profile__form text'>
        <label className='profile__label line'>
          <input
            name='name'
            type='text'
            className='profile__input'
            minLength={2}
            placeholder='Виталий'
          />
        </label>
        <label className='profile__label'>
          <input
            name='email'
            type='text'
            className='profile__input'
            placeholder='pochta@yandex.ru'
          />
        </label>
        <button
          type='submit'
          className={`profile__submit text`}
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
