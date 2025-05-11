import React from "react";

const Footer = () => {
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
                            <ul className="footer__items-wrapper">
                                {/* Жилое */}
                                <li className="footer__item">
                                    <div className="footer__item-header footer__item-header-event">
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                        <div className="footer__item-name footer__item-name_white">Жилое</div>
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                    </div>
                                    <ul className="footer__item-content">
                                        <li className="text-fw300"><a href="#">Дома из профилированого бруса</a></li>
                                        <li className="text-fw300"><a href="#">Дома из оцилиндрованого бруса</a></li>
                                        <li className="text-fw300"><a href="#">Каркасные дома</a></li>
                                        <li className="text-fw300"><a href="#">Дома из блока</a></li>
                                    </ul>
                                </li>

                                {/* Коммерческое */}
                                <li className="footer__item">
                                    <div className="footer__item-header footer__item-header-event">
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                        <div className="footer__item-name footer__item-name_white">Коммерческое</div>
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                    </div>
                                    <ul className="footer__item-content">
                                        <li className="text-fw300"><a href="#">Базы отдыха</a></li>
                                        <li className="text-fw300"><a href="#">Гостинницы</a></li>
                                        <li className="text-fw300"><a href="#">Рестораны</a></li>
                                        <li className="text-fw300"><a href="#">Кафе</a></li>
                                        <li className="text-fw300"><a href="#">Магазины</a></li>
                                    </ul>
                                </li>

                                {/* Садовое */}
                                <li className="footer__item">
                                    <div className="footer__item-header footer__item-header-event">
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                        <div className="footer__item-name footer__item-name_white">Садовое</div>
                                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                                    </div>
                                    <ul className="footer__item-content">
                                        <li className="text-fw300"><a href="#">Деревянные бани</a></li>
                                        <li className="text-fw300"><a href="#">Беседки</a></li>
                                        <li className="text-fw300"><a href="#">Альтанки</a></li>
                                        <li className="text-fw300"><a href="#">Детские игровые площадки</a></li>
                                        <li className="text-fw300"><a href="#">Гаражи</a></li>
                                        <li className="text-fw300"><a href="#">Деревянные детские домики</a></li>
                                        <li className="text-fw300"><a href="#">Мангальные зоны и барбекю</a></li>
                                        <li className="text-fw300"><a href="#">Кухни</a></li>
                                    </ul>
                                </li>
                            </ul>

                            {/* Static Links */}
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
                        <a href="tel:+380671755630" className="menu__tel"> +3 80 (67) 175 56 30</a>
                        <div className="menu__date">с 09:00 до 18:00 (пн-вс)</div>
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
