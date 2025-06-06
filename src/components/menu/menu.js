import { useState } from 'react';
import QueryWrapper from 'utils/QueryWrapper';
import SocialList from 'components/socialList/SocialList';
import { useGetMenuQuery } from 'api/apiSlice';

import './menu.scss';
import { useDispatch } from 'react-redux';
import { openModal } from 'components/modal/modalSlice';

const Menu = ({ isActive, onClose }) => {
    const [openIndices, setOpenIndices] = useState(new Set());
    const dispatch = useDispatch();
    const {
        data: menuItems = [],
        isLoading,
        isFetching,
        isError
    } = useGetMenuQuery();

    const toggleItem = (index) => {
        setOpenIndices((prev) => {
            const updated = new Set(prev);
            if (updated.has(index)) {
                updated.delete(index);
            } else {
                updated.add(index);
            }
            return updated;
        });
    };

    const renderItems = (menuItems) => {
        return (
            <nav>
                <ul className="menu__items">
                    {menuItems.map(({ title, items }, index) => {
                        const isOpen = openIndices.has(index);
                        return (
                            <li
                                className={`menu__item ${isOpen ? 'active' : ''}`}
                                key={index}
                            >
                                <div
                                    className={`menu__item-header ${isOpen ? 'active' : ''}`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="icon-down-open menu__item-corner"></span>
                                    <div className="menu__item-name">{title}</div>
                                    <span className="icon-down-open menu__item-corner"></span>
                                </div>
                                <ul
                                    className={`menu__item-content ${isOpen ? 'active' : ''}`}
                                >
                                    {items.map((item) => (
                                        <li className="text-fw300" key={item.id}>
                                            <a href={item.url}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }

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
                <QueryWrapper
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}
                    data={menuItems}>

                    {renderItems(menuItems)}
                </QueryWrapper>

            </div>
            <div className="menu__contacts">
                <div className="menu__social">
                    <div className="social__title">Связаться напрямую:</div>
                    <SocialList />
                </div>
                <a href="tel:+380671755630" className="footer__tel"> +3 80 (67) 175 56 30</a>

                <button className="button" onClick={() => dispatch(openModal())}>Заказать звонок</button>
                <div className="menu__date">с 09:00 до 18:00 (пн-вс)</div>
            </div>
        </section>
    );
};

export default Menu;
