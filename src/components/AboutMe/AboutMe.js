import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/profile-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <div className='about-me__container'>
        <SectionTitle title="Студентка" />
        <div className="about-me__content">
          <article className="about-me__article">
            <div className="about-me__article-content">
              <h2 className="about-me__article-title">Ирина</h2>
              <p className="about-me__article-subtitle">
                Фронтенд-разработчик, 32 года
              </p>
              <p className="about-me__article-text">
              Я родилась в Украине, но уже 20 лет живу в Москве, закончила факультет Управления
              Московского университета им. С.Ю.Витте. У меня есть муж и дочь. Я люблю учиться,
              смотреть сериалы и много-много кодить. С 2019 года работала веб-аналитиком.
              После того, как прошла курс по веб-разработке, начала внедрять разработку в свои рабочие задачи
              и развиваться в этом направлении.
              </p>
              <ul className="about-me__article-links">
                <li className="about-me__article-link">
                  <a
                    className="about-me__article-link"
                    href="'https://t.me/IrenManhattan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li className="about-me__article-link">
                  <a
                    className="about-me__article-link"
                    href="https://github.com/IrenManhattan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="about-me__article-photo">
              <img
                className="about-me__article-pfoto-img"
                src={photo}
                alt="мое фото"
              ></img>
            </div>
          </article>
          <Portfolio />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;


