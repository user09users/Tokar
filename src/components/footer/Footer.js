import { useState, useContext } from 'react';

import QueryWrapper from 'utils/QueryWrapper';
import { useGetFooterNavigationQuery } from 'api/apiSlice';

import './footer.scss';
import '../socialList/social.scss';
import SocialList from 'components/socialList/SocialList';
import ModalContext from 'context/modal/ModalContext';

import './footer.scss';

const Footer = () => {

    const { openModal } = useContext(ModalContext);
    const [openIndexes, setOpenIndexes] = useState([]);
    const { data: footerNavigation = [], isLoading, isFetching, isError } = useGetFooterNavigationQuery();

    const toggleOpenIndexes = id => {
        setOpenIndexes(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    function renderItems(arr) {
        const items = arr.map(item => {
            const { category, links, id } = item;
            const isOpen = openIndexes.includes(id);

            const renderedLinks = links.map(link => {
                const { url, name, id: linkId } = link;
                return (
                    <li className="text-fw300" key={linkId}>
                        <a href={url}>{name}</a>
                    </li>
                );
            });

            return (
                <li className={`footer__item ${isOpen ? 'active' : ''}`} key={id}>
                    <div className="footer__item-header footer__item-header-event" onClick={() => toggleOpenIndexes(id)}>
                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                        <div className="footer__item-name footer__item-name_white">{category}</div>
                        <span className="footer__item-corner"><span className="icon-down-open"></span></span>
                    </div>
                    <ul className={`footer__item-content ${isOpen ? 'active' : ''}`}>
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

                <div className="footer__wrapper">
                    <nav>
                        <ul className="footer__items">
                            <QueryWrapper
                                data={footerNavigation}
                                isLoading={isLoading}
                                isFetching={isFetching}
                                isError={isError}>

                                {renderItems(footerNavigation)}
                            </QueryWrapper>

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
                                <button
                                    className="button"
                                    onClick={() => openModal()}
                                >Заказать звонок</button>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <div className="footer__social">
                            <div className="social__title">Связаться напрямую:</div>
                            <SocialList />
                        </div>
                        <a href="tel:+380671755630" className="footer__tel"> +3 80 (67) 175 56 30</a>
                        <div className="footer__date">с 09:00 до 18:00 (пн-вс)</div>
                    </div>
                </div>

                <p className="rights">
                    © 2020. Все права защищены. TokarCompany - Производственно-строительная компания.
                    Информация, представленная на сайте, не является публичной офертой.
                </p>
            </div>
        </section>
    );
};

export default Footer;
