import './menu.scss';

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
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                                <div className="menu__item-name">Жилое</div>
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Коттедж</a></li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item-header">
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                                <div className="menu__item-name">Коммерческое</div>
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Дом из бруса</a></li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item-header">
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                                <div className="menu__item-name">Садовое</div>
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Дом из бруса</a></li>
                                <li className="text-fw300"><a href="#">Дачный дом</a></li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item-header">
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                                <div className="menu__item-name">О компании</div>
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Дом из бруса</a></li>
                            </ul>
                        </li>

                        <li className="menu__item">
                            <div className="menu__item-header">
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                                <div className="menu__item-name">Наши работы</div>
                                <span className="menu__item-corner"><span className="icon-down-open"></span></span>
                            </div>
                            <ul className="menu__item-content">
                                <li className="text-fw300"><a href="#">Коттедж</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Menu;
