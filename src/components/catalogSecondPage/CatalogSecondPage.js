import { useEffect, useState, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';

import useTocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { useContext } from "react";
import FiltersContext from "Context/filters/FiltersContext";

import './catalogSecondPage.scss';

const CatalogSecondPage = () => {
    const { inputValue, activeCategories, sort, area, price } = useContext(FiltersContext);
    const [itemsEnded, setItemsEnded] = useState(false);
    const [itemsList, setItemsList] = useState([]); // all items
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [start, setStart] = useState(0);
    const hasFetched = useRef(false);/* 
    const [currentSort, setCurrentSort] = useState(null); */

    const { loading, error, getCatalog, clearError } = useTocarService();

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        onRequest('catalog', start);
    }, []);

    const onRequest = (url, start) => {
        clearError();
        setNewItemsLoading(true);

        getCatalog(url, start, 4)
            .then(newItems => {
                setItemsList(prev => [...prev, ...newItems]);
                setNewItemsLoading(false);
                setStart(prev => prev + 4);
                setItemsEnded(newItems.length < 4);
            });
    };

    // ✨ фильтруем список на лету, не мутируя оригинальный itemsList
    const filteredItems = useMemo(() => {
        let filtered = itemsList.filter(item => {
            const matchesSearch = inputValue
                ? item.subtitle.toLowerCase().includes(inputValue.toLowerCase())
                : true;

            const matchesCategory = activeCategories.length > 0
                ? item.category
                    ?.split(',')
                    .map(cat => cat.trim().toLowerCase())
                    .some(cat => activeCategories.includes(cat))
                : true;

            const matchesArea = item.area >= area;     // filter by area
            const matchesPrice = item.price >= price;  // filter by price

            return matchesSearch && matchesCategory && matchesArea && matchesPrice;
        });

        // sort logic unchanged
        if (sort) {
            filtered = [...filtered].sort((a, b) => {
                if (sort === 'Алфавиту') {
                    return a.subtitle.localeCompare(b.subtitle);
                } else if (sort === 'Цене') {
                    return a.price - b.price;
                } else if (sort === 'Популярности') {
                    return b.popularity - a.popularity;
                }
                return 0;
            });
        }

        return filtered;
    }, [inputValue, itemsList, activeCategories, sort, area, price]);


    const renderItems = (arr) => (
        <div className="catalogSecondPage__wrapper">
            {arr.map(item => {
                const { title, subtitle, category, price, popularity, area, dimensions, image, id } = item;
                return (
                    <div
                        className="catalogSecondPage__item"
                        key={id}
                        data-popularity={popularity}
                        data-price={price}
                        data-category={category}
                        data-area={area}
                        data-dimensions={dimensions}
                    >
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
                                    <span>{area} м2</span>
                                </div>
                                <Link to={`/catalog/${id}`} className="button-item catalogSecondPage__item-btn">Ознакомиться</Link>
                                <div className="catalogSecondPage__item-price">{price} грн</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemsLoading ? <Spinner /> : null;

    return (
        <section className="catalogSecondPage">
            <div className="container">
                {errorMessage}
                {spinner}
                {renderItems(filteredItems)}
                <div className="catalogSecondPage__create">
                    <div className="catalogSecondPage__create-info">
                        <h3 className="catalogSecondPage__create-title title-fw400">Нет подходящего проекта?
                        </h3>
                        <p className="catalogSecondPage__create-text tex-fw300">
                            Мы разработаем проект индивидуально под ваш запрос с помощью 3D-макета
                        </p>
                        <a href="#" className="button-big catalogSecondPage__item-btn">Разработать проект</a>
                    </div>
                    <div className="catalogSecondPage__create-block">
                        <img className="catalogSecondPage__create-img" src="/img/secondPage/create-man.jpeg"
                            alt="create-man" />
                    </div>
                </div>
                {!itemsEnded && !loading && (

                    <button data-button-more className="button-more"
                        disabled={newItemsLoading}
                        onClick={() => onRequest('catalog', start)}>
                        <span className="icon-arrows-cw"></span>
                        <div>Показать еще больше</div>
                    </button>
                )}
            </div>
        </section>
    );
};

export default CatalogSecondPage;
