import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalContext from 'Context/modal/ModalContext';
import Menu from 'components/menu/Menu';

import './header.scss';

const HeaderMain = () => {

    const { toggleModal } = useContext(ModalContext);
    const [active, setActive] = useState(false);

    const handleMenuClose = () => {
        setActive(false);
    };

    return (

        <>
            <section className="header">
                <div className="container">
                    {/* Mobile Header */}
                    <div className="header__mobile">
                        <div className="header__mobile-wrapper">
                            <div className="header__mobile-hamburger" onClick={() => setActive(prev => !prev)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="header__mobile-logo">
                                <img src="/icons/logo.png" alt="TokarCompany Logo" className="header__mobile-block-logo" />
                            </div>
                            <div className="header__mobile-phone">
                                <span className="icon-phone-1" aria-label="Phone contact"></span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Header */}
                    <div className="header__desktop">
                        <div className="header__desktop-wrapper">
                            <div className="header__desktop-introduction">
                                <div className="header__desktop-img">
                                    <img src="/icons/logo.png" alt="TokarCompany Logo" />
                                </div>
                                <div className="header__desktop-text">
                                    TokarCompany - производственно -строительная компания
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="social__desktop">
                                <div className="social__desktop-text">Связаться напрямую:</div>
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

                            {/* Contact Information */}
                            <div className="header__desktop-info">
                                <a href="tel:+380671755630" className="header__desktop-info-tel">
                                    +3 80 (67) 175 56 30
                                </a>
                                <div className="header__desktop-info-date">с 09:00 до 18:00 (пн-вс)</div>
                            </div>

                            {/* Call Request Button */}
                            <div className="header__desktop-order">
                                <button data-openmodal="true" onClick={toggleModal} className="button">Заказать звонок</button>
                                <div className="header__desktop-order-text">Бесплатно по Украине</div>
                            </div>

                            {/* Language Selector */}
                            <div className="header__desktop-language">
                                <div className="header__desktop-language-item">
                                    <span className="white"></span>
                                    <span className="blue"></span>
                                    <span className="red"></span>
                                </div>
                                <span className="header__desktop-language-arrow icon-down-open"></span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="header__desktop-menu">
                            <ul className="header__desktop-menu-variations">
                                <li className="header__desktop-menu-variations-item"><a href="#">Жилое</a></li>
                                <li className="header__desktop-menu-variations-item"><a href="#">Коммерческое</a></li>
                                <li className="header__desktop-menu-variations-item"><a href="#">Садовое</a></li>
                            </ul>
                            <ul className="header__desktop-menu-info">
                                <li className="header__desktop-menu-info-item"><Link to="/about">О компании</Link></li>
                                <li className="header__desktop-menu-info-item"><Link to="/works">Наши работы</Link></li>
                                <li className="header__desktop-menu-info-item"><Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <Menu isActive={active} onClose={handleMenuClose} />
        </>
    );
};

export default HeaderMain;
