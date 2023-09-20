function Profile() {
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
          />
        </label>
        <label className='profile__label'>
          <input
            name='email'
            type='text'
            className='profile__input'
          />
        </label>
        <button
          type='submit'
          className={`profile__submit text`}
        >
          Редактировать
        </button>
      </form>
      <button className='profile__logout link text' >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
