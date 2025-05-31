import React, { useMemo, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

import setCatalog from 'utils/setCatalog';
import FiltersContext from "context/filters/FiltersContext";
import { useCatalogData } from 'hooks/catalogData.hook';

import './catalogSecondPage.scss';

const CatalogSecondPage = () => {
    const { inputValue, activeCategories, sort, area, price } = useContext(FiltersContext);
    const { dataList, dataEnded, newDataLoading, onRequest, process } = useCatalogData({
        initialOffset: 0,
        catalogBaseName: 'catalog',
        limit: 4
    });

    // Filter and sort items without mutating original list
    const filteredItems = useMemo(() => {
        return dataList.filter(item => {
            const matchesSearch = inputValue
                ? item.subtitle?.toLowerCase().includes(inputValue.toLowerCase())
                : true;

            const matchesCategory = activeCategories.length > 0
                ? item.category
                    ?.split(',')
                    .map(cat => cat.trim().toLowerCase())
                    .some(cat => activeCategories.includes(cat))
                : true;

            const matchesArea = typeof area === 'number' ? item.area >= area : true;
            const matchesPrice = typeof price === 'number' ? item.price >= price : true;

            return matchesSearch && matchesCategory && matchesArea && matchesPrice;
        }).sort((a, b) => {
            if (!sort) return 0;
            if (sort === 'Алфавиту') return a.subtitle.localeCompare(b.subtitle);
            if (sort === 'Цене') return a.price - b.price;
            if (sort === 'Популярности') return b.popularity - a.popularity;
            return 0;
        });
    }, [inputValue, dataList, activeCategories, sort, area, price]);

    // Render each item wrapped in CSSTransition for fade animation
    const renderItems = (arr) => {
        const items = arr.map(item => {
            const { title, subtitle, category, price, popularity, area, dimensions, image, id } = item;

            return (
                <CSSTransition key={id} classNames="fade" timeout={300}>
                    <div
                        className="catalogSecondPage__item"
                        data-popularity={popularity}
                        data-price={price}
                        data-category={category}
                        data-area={area}
                        data-dimensions={dimensions}
                    >
                        <div className="catalogSecondPage__item-inner">
                            <img className="catalogSecondPage__item-img" src={image} alt={subtitle} />
                            <div className="catalogSecondPage__item-content">
                                <h3 className="catalogSecondPage__item-title">{title} <span>{subtitle}</span></h3>
                                <div className="catalogSecondPage__item-content-wrapper">
                                    <div className="catalogSecondPage__item-size">
                                        <div><img src="/icons/sizes/area.svg" alt="area" /></div>
                                        <span>{dimensions}</span>
                                    </div>
                                    <div className="catalogSecondPage__item-size">
                                        <div><img src="/icons/sizes/length.svg" alt="length" /></div>
                                        <span>{area} м²</span>
                                    </div>
                                    <Link to={`/catalog/${id}`} className="button-item catalogSecondPage__item-btn">Ознакомиться</Link>
                                    <div className="catalogSecondPage__item-price">{price} грн</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            );
        })
        return (
            <TransitionGroup className="catalogSecondPage__wrapper">
                {items}
            </TransitionGroup>
        )
    };


    return (
        <section className="catalogSecondPage">
            <div className="container">

                {setCatalog(process, renderItems, filteredItems, newDataLoading)}

                <div className="catalogSecondPage__create">
                    <div className="catalogSecondPage__create-info">
                        <h3 className="catalogSecondPage__create-title title-fw400">Нет подходящего проекта?</h3>
                        <p className="catalogSecondPage__create-text tex-fw300">
                            Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета
                        </p>
                        <button className="button-big catalogSecondPage__create-btn" onClick={() => alert('Создать проект')}>
                            Разработать проект
                        </button>
                    </div>
                    <div className="catalogSecondPage__create-block">
                        <img
                            className="catalogSecondPage__create-img"
                            src="/img/secondPage/create-man.jpeg"
                            alt="create-man"
                        />
                    </div>
                </div>

                {!dataEnded && (
                    <button
                        data-button-more
                        className="button-more"
                        disabled={newDataLoading}
                        onClick={() => onRequest()}
                        aria-busy={newDataLoading}
                    >
                        <span className="icon-arrows-cw"></span>
                        <div>Показать еще больше</div>
                    </button>
                )}
            </div>
        </section>
    );
};

export default CatalogSecondPage;
