import { SECTION_IDS } from '../constants';
import profileFoto from '../../../images/profile.jpg';

const AboutMe = ((props) => {
  return (
    <section className='aboutme' id={SECTION_IDS.student}>
      <h2 className='aboutme__header text_subtitle underline-pb25'>Студент</h2>
      <div className='aboutme__info'>
        <div className='aboutme__info-description'>
          <h3 className='aboutme__info-title text_title'>Александра</h3>
          <p className='aboutme__info-subtitle'>24 года</p>
          <p className='aboutme__info-description text'>
            Я родилась и живу в Москве. Закончила МАИ по специальонсти электромагнитная совместимость
            и защита бортовых комплексов. Люблю долгие прогулки по лесу и путешествия в горы.
            Стараюсь заботится о природе, не выкидываю пластик, бумагу, стекло и тд на помойку.
            Сейчас прохожу обучение в Я.Практикуме, после его окончания планирую искать работу по
            новой специальности.
          </p>
          <ul className='aboutme__links text'>
            <li>
              <a href='https://github.com/alexandrakuular' className='link' target='_blank' rel='noreferrer'>
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='aboutme__info-image' src={profileFoto} alt='Фото' />
      </div>
    </section>
  );
});

export default AboutMe;
