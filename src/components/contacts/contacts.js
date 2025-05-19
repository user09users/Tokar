import './contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="page__nav">Главная страница / Контакты</div>
        <div className="title-wrapper">
          <h1 className="contacts__title title-fw700">Контакты, как с нами связаться</h1>
          <a className="backButton" href="/home">
            <div className="backButton-circle">
              <span className="backButton-icon icon-left-open-big"></span>
            </div>
            <div className="backButton-text">Вернуться назад</div>
          </a>
        </div>

        <div className="contacts__wrapper">
          <div className="contacts__contacts">
            <h3 className="contacts__contacts-title title-fw400">
              Связаться с компанией TokarMebel вы сможете с помощью одного из этих способов:
            </h3>
            <ul className="contacts__contacts-list">
              {/* Телефоны */}
              <li className="contacts__item">
                <div className="contacts__item-block">
                  <h4 className="contacts__item-title title-fw400">Телефоны:</h4>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Отдел продаж:</div>
                    <div className="contacts__item-elem-link">+38 (098) 188 55 66</div>
                  </div>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Отдел логистики:</div>
                    <div className="contacts__item-elem-link">+38 (068) 704 37 77</div>
                  </div>
                  <a className="contacts__item-button" href="tel:+380981885566">
                    Позвонить компании
                  </a>
                </div>
                <img className="contacts__item-img" src="/img/icons/contacts/phone.svg" alt="phone" />
              </li>

              {/* Почта */}
              <li className="contacts__item">
                <div className="contacts__item-block">
                  <h4 className="contacts__item-title title-fw400">Почта:</h4>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Отдел продаж:</div>
                    <div className="contacts__item-elem-link">sales.tokarmebel@gmail.com</div>
                  </div>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Отдел логистики:</div>
                    <div className="contacts__item-elem-link">logistics.tokarmebel@gmail.com</div>
                  </div>
                  <a
                    className="contacts__item-button"
                    href="mailto:sales.tokarmebel@gmail.com"
                  >
                    Написать на почту (отвечаем ...)
                  </a>
                </div>
                <img className="contacts__item-img" src="/img/icons/contacts/email.svg" alt="email" />
              </li>

              {/* График работы */}
              <li className="contacts__item">
                <div className="contacts__item-block">
                  <h4 className="contacts__item-title title-fw400">График работы:</h4>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Пн. - Пт.:</div>
                    <div className="contacts__item-elem-link">с 9:00 до 18:00</div>
                  </div>
                  <div className="contacts__item-elem">
                    <div className="contacts__item-elem-name">Сб. - Вс.:</div>
                    <div className="contacts__item-elem-link">Выходной</div>
                  </div>
                  <a className="contacts__item-button" href="https://maps.google.com">
                    Посетить лично в офис
                  </a>
                </div>
                <img className="contacts__item-img" src="/img/icons/contacts/schedule.svg" alt="schedule" />
              </li>

              {/* Мессенджеры */}
              <li className="contacts__item">
                <div className="contacts__item-block">
                  <h4 className="contacts__item-title title-fw400">Мессенджеры:</h4>
                  <ul className="social__list">
                    <li className="social__list-item social__list-item_big telegram">
                      <a href="https://t.me/your_telegram" className="telegram">
                        <img src="/img/icons/social/telegram.svg" alt="telegram" />
                      </a>
                    </li>
                    <li className="social__list-item social__list-item_big whatsapp">
                      <a href="https://wa.me/your_whatsapp" className="whatsapp">
                        <img src="/img/icons/social/whatsapp.svg" alt="whatsapp" />
                      </a>
                    </li>
                    <li className="social__list-item social__list-item_big viber">
                      <a href="viber://chat?number=your_viber" className="viber">
                        <img src="/img/icons/social/viber.svg" alt="viber" />
                      </a>
                    </li>
                  </ul>
                  <a className="contacts__item-button" href="#">Написать в соцсети (отвечаем ...)</a>
                </div>
                <img className="contacts__item-img" src="/img/icons/contacts/messengers.svg" alt="messengers" />
              </li>
            </ul>

            <div className="contacts__addr">
              <div className="contacts__addr-addr text-fw400">
                Компания TokarMabel находится по адресу: <br />
                <span className="text-fw700">
                  Украина, Тячевский район. г. Тячев, ТЦ "Стиль"
                </span>
              </div>
              <a href="https://maps.google.com" className="contacts__addr-route">Проложить маршрут</a>
            </div>
          </div>

          <div className="contacts__nav">
            <form data-form className="contacts__nav-wrapper">
              <h3 className="contacts__title title-fw400">Закажите консультацию, если сомневаетесь</h3>

              <div className="contacts__nav-item">
                <img className="contacts__nav-item-img" src="/img/icons/User.svg" alt="User" />
                <input
                  required
                  className="contacts__nav-item-input"
                  type="text"
                  name="name"
                  data-name
                  placeholder="Введите имя"
                />
              </div>
              <div className="name-error-message"></div>

              <div className="input">
                <div className="input-language">
                  <span></span>
                  <span></span>
                  <span className="icon-down-open"></span>
                </div>
                <input
                  required
                  className="input-input"
                  type="tel"
                  data-phone
                  name="phone"
                  placeholder="+38 XXX XXX XX XX"
                />
              </div>
              <div className="phone-error-message"></div>

              <button type="submit" className="button-big contacts__nav-button">Получить точный расчет</button>
              <div className="contacts__nav-text">
                Отправляя данные, Вы соглашаетесь на обработку <span>персональных данных</span>
              </div>
            </form>

            <iframe
              className="contacts__nav-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.1407439949894!2d23.57495357629003!3d48.01099067122984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473791144d96a467%3A0x680995c0930c4019!2zVGsgU3R5bMq5!5e0!3m2!1sen!2sse!4v1745433679567!5m2!1sen!2sse"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
