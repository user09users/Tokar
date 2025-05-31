import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTocarService from 'services/TocarService';
import setContent from 'utils/setContent';
import PhoneForm from 'components/PhoneForm/PhoneForm';

import './contacts.scss';

const Contacts = () => {

  const { getData, clearError, process, setProcess } = useTocarService();
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    clearError();
    getData('contacts').then(res => {
      setItemsList(res);
    })
      .then(() => setProcess('confirmed'));
  }, [getData, clearError]);

  const renderItems = (arr) => {
    return arr.map((item) => {
      const { type, icon, alt, items, buttonText, id, socials } = item;

      if (type === 'Мессенджеры') {
        return (
          <li className="contacts__item" key={id}>
            <div className="contacts__item-block">
              <h4 className="contacts__item-title title-fw400">{type}</h4>
              <ul className="social__list">
                {socials?.map(({ name, href, icon, alt }) => (
                  <li
                    key={name}
                    className={`social__list-item social__list-item_big ${name}`}
                  >
                    <a href={href} className={name}>
                      <img src={icon} alt={alt} />
                    </a>
                  </li>
                ))}
              </ul>
              <a className="contacts__item-button" href="#">
                {buttonText}
              </a>
            </div>
            <img className="contacts__item-img" src={icon} alt={alt} />
          </li>
        );
      }

      return (
        <li className="contacts__item" key={id}>
          <div className="contacts__item-block">
            <h4 className="contacts__item-title title-fw400">{type}</h4>
            {items.map(({ label, value }, index) => (
              <div className="contacts__item-elem" key={index}>
                <div className="contacts__item-elem-name">{label}</div>
                <div className="contacts__item-elem-link">{value}</div>
              </div>
            ))}
            <a
              className="contacts__item-button"
              href={
                type === 'Почта'
                  ? `mailto:${items?.[0]?.value}`
                  : type === 'Телефоны'
                    ? `tel:${items?.[0]?.value?.replace(/\D/g, '')}`
                    : '#'
              }
            >
              {buttonText}
            </a>
          </div>
          <img className="contacts__item-img" src={icon} alt={alt} />
        </li>
      );
    });
  };

  return (
    <section className="contacts">
      <div className="container">
        <div className="page__nav">Главная страница / Контакты</div>
        <div className="title-wrapper">
          <h1 className="contacts__title title-fw700">Контакты, как с нами связаться</h1>
          <Link to='/' className="backButton" href="/home">
            <div className="backButton-circle">
              <span className="backButton-icon icon-left-open-big"></span>
            </div>
            <div className="backButton-text">Вернуться назад</div>
          </Link>
        </div>

        <div className="contacts__wrapper">
          <div className="contacts__contacts">
            <h3 className="contacts__contacts-title title-fw400">
              Связаться с компанией TokarMebel вы сможете с помощью одного из этих способов:
            </h3>

            <ul className="contacts__contacts-list">
              {setContent(process, renderItems, itemsList)}
            </ul>

            <div className="contacts__addr">
              <div className="contacts__addr-addr text-fw400">
                Компания TokarMabel находится по адресу: <br />
                <span className="text-fw700">
                  Украина, Тячевский район. г. Тячев, ТЦ "Стиль"
                </span>
              </div>
              <a href="https://maps.google.com" className="contacts__addr-route">
                Проложить маршрут
              </a>
            </div>
          </div>

          <div className="contacts__nav">
            <div className='contacts__nav-wrapper'>
              <h3 className="contacts__title title-fw400">
                Закажите консультацию, если сомневаетесь
              </h3>

              <PhoneForm
                btnClass={'button-big contacts__nav-button'}
                extraFormClass='contacts__items'
                extraFieldClass=''
                extraField={true}
                policyClass={'policy-text'} />
            </div>


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
