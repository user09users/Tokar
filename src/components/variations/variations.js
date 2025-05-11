import React from "react";

const Variations = () => {
    return (
        <section className="variations">
            <div className="container">
                <h2 className="title-fw700">Мы разделяем 3 вида строений</h2>

                <div className="variations__wrapper">
                    {/* Variation 1: Жилые строения */}
                    <div className="variations__item">
                        <div className="variations__item-img">
                            <img
                                src="/img/houses/variations/residentialSmall.jpeg" // Corrected path
                                alt="residentialSmall"
                            />
                        </div>
                        <div className="variations__item-content">
                            <h3 className="variations__item-title title-fw400">Жилые строения</h3>
                            <ul className="variations__list">
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Дома из профилированого бруса</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Дома из оцилиндрованого</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Каркасные дома</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Дома из блока</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Variation 2: Коммерческие */}
                    <div className="variations__item">
                        <div className="variations__item-img">
                            <img
                                src="/img/houses/catalog/commerical.jpeg" // Corrected path
                                alt="commerical"
                            />
                        </div>
                        <div className="variations__item-content">
                            <h3 className="variations__item-title title-fw400">Коммерческие</h3>
                            <ul className="variations__list">
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Базы отдыха</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Гостинницы</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Рестораны</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Кафе</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Магазины</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Variation 3: Садовые и хоз */}
                    <div className="variations__item">
                        <div className="variations__item-img">
                            <img
                                src="/img/houses/variations/gardenUtility.jpeg" // Corrected path
                                alt="gardenUtility"
                            />
                        </div>
                        <div className="variations__item-content">
                            <h3 className="variations__item-title title-fw400">Садовые и хоз</h3>
                            <ul className="variations__list">
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Деревянные бании</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Беседки</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Альтанки</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Детские игровые площадки</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Гаражи</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Деревянные детские домики</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Мангальные зоны и барбекю</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="icon-right-open-big"></span>
                                        <div className="text-fw300">Кухни</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Variations;
