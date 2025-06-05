import React, { useEffect, useState } from 'react';
import { initializeSwiper } from 'utils/slider';
import QueryWrapper from 'utils/QueryWrapper';
import { useGetMaterialsDataQuery } from 'api/apiSlice';

import './materials.scss';
import { Link } from 'react-router-dom';

const Materials = () => {
    const { data: materialsData = {}, isLoading, isFetching, isError } = useGetMaterialsDataQuery();

    const [swiperInitialized, setSwiperInitialized] = useState(false);

    // Инициализация Swiper при появлении слайдов
    useEffect(() => {
        if (!swiperInitialized && materialsData.materialsSlider?.length > 0) {
            initializeSwiper('.materials__slider', '.materials__slider-nav');
            setSwiperInitialized(true);
        }
    }, [materialsData.materialsSlider, swiperInitialized]);

    const renderItems = (arr = []) => (
        <div className="materials__wrapper">
            {arr.map(({ image, alt, title, text, number, numberAlt, id }) => (
                <div className="materials__item" key={id}>
                    <img className="materials__item-img" src={image} alt={alt} />
                    <h3 className="title-fw400 materials__item-title">{title}</h3>
                    <p className="text-fw300 materials__item-text">{text}</p>
                    <img className="materials__item-number" src={number} alt={numberAlt} />
                </div>
            ))}
        </div>
    );

    const renderSlides = (arr = []) => (
        <div className="swiper-wrapper">
            {arr.map(({ image, alt, id }) => (
                <div className="swiper-slide" key={id}>
                    <img className="materials__slider-img" src={image} alt={alt} />
                </div>
            ))}
        </div>
    );

    return (
        <section className="materials">
            <div className="container">
                <h2 className="title-fw800">Из чего состоят наши строения?</h2>

                <QueryWrapper
                    data={materialsData.materials}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}>

                    {renderItems(materialsData.materials)}
                </QueryWrapper>

                <div className="materials__slider-wrapper">
                    <div className="swiper materials__slider">
                        <div className="materials__nav">
                            <span className="materials__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination materials__slider-nav"></div>
                            <span className="materials__slider-next icon-right-big"></span>
                        </div>

                        <QueryWrapper
                            data={materialsData.materialsSlider}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            isError={isError}>

                            {renderSlides(materialsData.materialsSlider)}
                        </QueryWrapper>
                    </div>
                </div>

                <div className="button-mix materials__buttons">
                    <Link to={'/catalog'} className="button-big">Перейти в каталог домов</Link>
                    <Link to={'/works'} className="button-circe">
                        <div className="button-circe__circle">
                            <span className="icon-right-open-big"></span>
                        </div>
                        <div className="button-circe__text">Каталог работ</div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Materials;
