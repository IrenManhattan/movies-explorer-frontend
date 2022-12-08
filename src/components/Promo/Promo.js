
import './Promo.css';
import logo from '../../images/landing-logo.svg';

export default function Promo() {
  return (
  <section className="promo">
    <div className="promo__container">
      <div className="promo__about-project">
        <h1 className="promo__title">
          Учебный проект студентки факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a
          href="https://practicum.yandex.ru/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="promo__learn-more-url"
        >
          Узнать больше
        </a>
      </div>
      <img src={logo} alt="логотип" className="promo__logo" />
    </div>
  </section>
  );
}