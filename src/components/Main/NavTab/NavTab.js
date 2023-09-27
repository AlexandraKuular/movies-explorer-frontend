import { SECTION_IDS } from '../constants';

const NavBar = () => {
  const handleClickButton = sectionId => () => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <nav>
      <ul className='promo__list'>
        <li
          name='aboutProject'
          className='promo__list-item color_secondary text'
          onClick={handleClickButton(SECTION_IDS.aboutProjects)}
        >
          О проекте
        </li>
        <li
          name='techs'
          className='promo__list-item color_secondary text'
          onClick={handleClickButton(SECTION_IDS.techs)}
        >
          Технологии
        </li>
        <li
          name='student'
          className='promo__list-item color_secondary text'
          onClick={handleClickButton(SECTION_IDS.student)}
        >
          Студент
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
