import { useState, useEffect } from 'react';

import useTocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import Accordion from 'utils/accordion';

import './menu.scss';

const Menu = ({ isActive, onClose }) => {
    const { loading, error, getData } = useTocarService();
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        getData('menu').then(setItemsList);
    }, []);

    // Prepare Accordion items, with header and content structured properly
    const accordionItems = itemsList.map(({ title, items }) => ({
        header: (
            <>
                <span className="icon-down-open menu__item-corner"></span>
                <div className="menu__item-name">{title}</div>
                <span className="icon-down-open menu__item-corner"></span>
            </>
        ),
        content: (
            <ul className="menu__item-content">
                {items.map(item => (
                    <li className="text-fw300" key={item.id}>
                        <a href={item.url}>{item.label}</a>
                    </li>
                ))}
            </ul>
        ),
    }));

    return (
        <section className={`menu ${isActive ? 'active' : ''}`}>
            <div className="menu__header">
                <div className="menu__name">Меню</div>
                <div className="menu__close" onClick={onClose}>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className="menu__wrapper">
                {loading && <Spinner />}
                {error && <ErrorMessage />}
                {!loading && !error && (
                    <Accordion
                        items={accordionItems}
                        blockClass="menu__item"
                        headerClass="menu__item-header"
                        contentClass="menu__item-content"
                    />
                )}
            </div>
        </section>
    );
};

export default Menu;
/* 

const Menu = () => {
    return (
        <section className="menu">
            <div className="menu__header">
                <div className="menu__name">Меню</div>
                <div className="menu__close">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="menu__wrapper">
                <nav>
                    <ul className="menu__items">
                        <li className="menu__item">
                            <div className="menu__item-header">
                                <span className="menu__item-corner">
                                <div className="menu__item-name">Коммерческое</div>
                                <span className="menu__item-corner">
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Дом из бруса</a></li>
                            </ul>
                        </li>


                        
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Menu;
 */