import { useState, useEffect } from 'react';
import useTocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

import './footer.scss';
import '../social/social.scss';

const Footer = () => {
    const [itemsList, setItemsList] = useState([]);

    const { loading, error, getData } = useTocarService();

    useEffect(() => {
        getData('navigation')
            .then(onItemsLoaded);
    }, []);
    const onItemsLoaded = (itemsList) => setItemsList(itemsList);

    function renderItems(arr) {
        const items = arr.map(item => {
            const { category, links, id } = item;

            const renderedLinks = links.map(link => {
                const { url, name, id: linkId } = link;
                return (
                    <li className="text-fw300" key={linkId}>
                        <a href={url}>{name}</a>
                    </li>
                );
            });

            return (
                <li className="footer__item" key={id}>
                    <div className="footer__item-header footer__item-header-event">
                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                        <div className="footer__item-name footer__item-name_white">{category}</div>
                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                    </div>
                    <ul className="footer__item-content">
                        {renderedLinks}
                    </ul>
                </li>
            );
        });
        return (
            <ul className="footer__items-wrapper">
                {items}
            </ul>
        )
    }

    const items = renderItems(itemsList);

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ? items : null;

    return (
        <section className="footer">
            <div className="container">
                {/* Introduction Block */}
                <div className="footer__introduction">
                    <div className="footer__introduction-img">
                        <img src="/icons/logo.png" alt="logo" />
                    </div>
                    <div className="footer__introduction-text">
                        TokarCompany - производственно -строительная компания
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="footer__wrapper">
                    <nav>
                        <ul className="footer__items">
                            {spinner}
                            {errorMessage}
                            {content}

                            <li>
                                <a href="#" className="footer__item-link footer__item-header">
                                    <div className="footer__item-name">О компании</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer__item-link footer__item-header">
                                    <div className="footer__item-name">Наши работы</div>
                                </a>
                            </li>
                            <li>
                                <button data-openmodal className="button">Заказать звонок</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <div className="footer__social">
                            <div className="social__title">Связаться напрямую:</div>
                            <ul className="social__list">
                                <li className="social__list-item telegram">
                                    <a href="https://t.me/yourTelegramLink" className="telegram" aria-label="Telegram">
                                        <img src="/icons/social/telegram.svg" alt="Telegram" />
                                    </a>
                                </li>
                                <li className="social__list-item whatsapp">
                                    <a href="https://wa.me/yourWhatsAppNumber" className="whatsapp" aria-label="WhatsApp">
                                        <img src="/icons/social/whatsapp.svg" alt="WhatsApp" />
                                    </a>
                                </li>
                                <li className="social__list-item viber">
                                    <a href="viber://chat?number=yourViberNumber" className="viber" aria-label="Viber">
                                        <img src="/icons/social/viber.svg" alt="Viber" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="tel:+380671755630" className="footer__tel"> +3 80 (67) 175 56 30</a>
                        <div className="footer__date">с 09:00 до 18:00 (пн-вс)</div>
                    </div>
                </div>

                {/* Rights */}
                <p className="rights">
                    © 2020. Все права защищены. TokarCompany - Производственно-строительная компания.
                    Информация, представленная на сайте, не является публичной офертой.
                </p>
            </div>
        </section>
    );
};

export default Footer;
