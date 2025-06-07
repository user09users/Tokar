import React, { useMemo, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import QueryWrapper from 'utils/QueryWrapper';

import { useGetCatalogQuery } from 'api/apiSlice';
import {
    catalogItemsSelector,
    setCatalogEnded,
    incrementOffset,
    uploadCatalog,
} from './catalogSlice';

import './catalog.scss';
import { useDispatch, useSelector } from 'react-redux';

const Catalog = () => {
    const dispatch = useDispatch();
    const { inputValue, activeFilters, activeSort, area, price } = useSelector(state => state.filters);
    const { offset, catalogEnded } = useSelector(state => state.catalog);
    const items = useSelector(catalogItemsSelector);

    const {
        data: catalog = [],
        isLoading,
        isFetching,
        isError
    } = useGetCatalogQuery({ catalogBaseName: 'catalog', offset, limit: 4 });

    useEffect(() => {
        if (!catalog) return;

        if (catalog.length === 0) {
            dispatch(setCatalogEnded(true));
        } else {
            dispatch(uploadCatalog(catalog));
            dispatch(setCatalogEnded(catalog.length < 4));
        }
    }, [catalog, dispatch]);

    const handleRequest = () => {
        dispatch(incrementOffset(4));
    };

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            const matchesSearch = inputValue
                ? item.subtitle?.toLowerCase().includes(inputValue.toLowerCase())
                : true;

            const matchesCategory = activeFilters.length > 0
                ? item.category
                    ?.split(',')
                    .map(cat => cat.trim().toLowerCase())
                    .some(cat => activeFilters.includes(cat))
                : true;

            const matchesArea = typeof area === 'number' ? item.area >= area : true;
            const matchesPrice = typeof price === 'number' ? item.price >= price : true;

            return matchesSearch && matchesCategory && matchesArea && matchesPrice;
        }).sort((a, b) => {
            if (!activeSort) return 0;
            if (activeSort === 'Алфавиту') return a.subtitle.localeCompare(b.subtitle);
            if (activeSort === 'Цене') return a.price - b.price;
            if (activeSort === 'Популярности') return b.popularity - a.popularity;
            return 0;
        });
    }, [inputValue, items, activeFilters, activeSort, area, price]);

    const renderItems = (arr) => {
        const items = arr.map(item => {
            const { title, subtitle, category, price, popularity, area, dimensions, image, id } = item;

            return (
                <CSSTransition key={id} classNames="fade" timeout={300}>
                    <div
                        className="catalog__item"
                        data-popularity={popularity}
                        data-price={price}
                        data-category={category}
                        data-area={area}
                        data-dimensions={dimensions}
                    >
                        <div className="catalog__item-inner">
                            <img className="catalog__item-img" src={image} alt={subtitle} />
                            <div className="catalog__item-content">
                                <h3 className="catalog__item-title">{title} <span>{subtitle}</span></h3>
                                <div className="catalog__item-content-wrapper">
                                    <div className="catalog__item-size">
                                        <div><img src="/icons/sizes/area.svg" alt="area" /></div>
                                        <span>{dimensions}</span>
                                    </div>
                                    <div className="catalog__item-size">
                                        <div><img src="/icons/sizes/length.svg" alt="length" /></div>
                                        <span>{area} м²</span>
                                    </div>
                                    <Link to={`/catalog/${id}`} className="button-item catalog__item-btn">Ознакомиться</Link>
                                    <div className="catalog__item-price">{price} грн</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            );
        })
        return (
            <TransitionGroup className="catalog__wrapper">
                {items}
            </TransitionGroup>
        )
    };

    return (
        <section className="catalog">
            <div className="container">
                <QueryWrapper
                    isLoading={offset === 0 && isLoading} // show spinner only on first load
                    isFetching={false}
                    isError={isError}
                    data={filteredItems}
                >
                    {renderItems(filteredItems)}
                </QueryWrapper>

                <div className="catalog__create">
                    <div className="catalog__create-info">
                        <h3 className="catalog__create-title title-fw400">Нет подходящего проекта?</h3>
                        <p className="catalog__create-text tex-fw300">
                            Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета
                        </p>
                        <button className="button-big catalog__create-btn" onClick={() => alert('Создать проект')}>
                            Разработать проект
                        </button>
                    </div>
                    <div className="catalog__create-block">
                        <img
                            className="catalog__create-img"
                            src="/img/secondPage/create-man.jpeg"
                            alt="create-man"
                        />
                    </div>
                </div>

                {!catalogEnded && (
                    <button
                        data-button-more
                        className="button-more"
                        disabled={isFetching}
                        onClick={handleRequest}
                        aria-busy={isFetching}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault(); // prevent scroll on space
                                handleRequest();
                            }
                        }}
                    >
                        <span className="icon-arrows-cw"></span>
                        <div>Показать еще больше</div>
                    </button>
                )}
            </div>
        </section >
    );
};

export default Catalog;
