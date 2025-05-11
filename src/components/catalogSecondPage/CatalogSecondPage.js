const CatalogSecondPage = () => {
    return (
        <section className="catalogSecondPage">
            <div className="container">
                <div className="page__nav">Главная страница / Жилое</div>
                <h1 className="catalogSecondPage__title title-fw800">Каталог жилых строений</h1>
                <div className="catalogSecondPage__search">
                    <span className="icon-search"></span>
                    <input required type="text" id="search" name="search" placeholder="Поиск по жилым строениям..." />
                </div>

                <div className="catalogSecondPage__blocks">
                    <div className="catalogSecondPage__blocks-block">
                        <div className="filters">
                            <div className="filters__header">
                                <div className="filters__header-name">Фильтры</div>
                                <span className="icon-cancel filters__header-cancel"></span>
                            </div>
                            <div className="filters__wrapper">
                                <nav>
                                    <ul className="filters__blocks">
                                        <li className="filters__filter">
                                            <div className="filters__filter-header">
                                                <div>Подкатегория</div>
                                                <span className="icon-down-open filters__filter-corner"></span>
                                            </div>
                                            <div className="filters__filter-content">
                                                <div className="filters__filter-name">Дома и жилые строения</div>
                                                <ul className="filters__filter-items">
                                                    <li className="filters__filter-item">
                                                        <span className="icon-right-open-big"></span>
                                                        <button className="filtersCategoryButton">Дома</button>
                                                    </li>
                                                    {/* Add more filter items here */}
                                                </ul>
                                            </div>
                                        </li>

                                        <li className="filters__filter">
                                            <div className="filters__filter-header">
                                                <div>Сортировать по:</div>
                                                <span className="icon-down-open filters__filter-corner"></span>
                                            </div>
                                            <div className="filters__filter-content">
                                                <ul className="filters__filter-items">
                                                    <li className="filters__filter-item">
                                                        <span className="icon-right-open-big"></span>
                                                        <button className="sortBtn">Алфавиту</button>
                                                    </li>
                                                    {/* Add more sort options here */}
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="catalogSecondPage__blocks-block">
                        <div className="catalogSecondPage__wrapper">
                            <div className="catalogSecondPage__create">
                                <div className="catalogSecondPage__create-info">
                                    <h3 className="catalogSecondPage__create-title title-fw400">Нет подходящего проекта?</h3>
                                    <p className="catalogSecondPage__create-text tex-fw300">Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета</p>
                                    <a href="#" className="button-big catalogSecondPage__item-btn">Разработать проект</a>
                                </div>
                                <div className="catalogSecondPage__create-block">
                                    <img className="catalogSecondPage__create-img" src="/img/secondPage/create-man.jpeg" alt="create-man" />
                                </div>
                            </div>

                            <button data-buttonMore className="button-more">
                                <span className="icon-arrows-cw"></span>
                                <div>Показать еще больше</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="catalogSecondPage__wrapper">
                <div className="catalogSecondPage__item">
                    <img className="catalogSecondPage__item-img" src="/img/secondPage/catalog/bavaria.jpeg" alt="bavaria" />
                    <div className="catalogSecondPage__item-content">
                        <h3 className="catalogSecondPage__item-title">Вариант Z-65 <span>Bavaria</span></h3>
                        <div className="catalogSecondPage__item-content-wrapper">
                            <div className="catalogSecondPage__item-size">
                                <div><img src="/icons/sizes/area.svg" alt="area" /></div>
                                <span>7,5х9 м</span>
                            </div>
                            <div className="catalogSecondPage__item-size">
                                <div><img src="/icons/sizes/length.svg" alt="length" /></div>
                                <span>135 м2</span>
                            </div>
                            <a href="#" className="button-item catalogSecondPage__item-btn">Ознакомиться</a>
                            <div className="catalogSecondPage__item-price">1,000,000 грн</div>
                        </div>
                    </div>
                </div>
                {/* Other catalog items */}
            </div>
        </section>
    );
};

export default CatalogSecondPage;
