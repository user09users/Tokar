import { useState, useEffect } from 'react';

import QueryWrapper from 'utils/QueryWrapper';
import { useGetLastStatesQuery } from 'api/apiSlice';

import { initializeSwiper } from 'utils/slider';

import './lastStates.scss';

const LastStates = () => {

    const { data: lastStates = [], isLoading, isFetching, isError } = useGetLastStatesQuery();

    const [swiperInitialized, setSwiperInitialized] = useState(false);

    useEffect(() => {
        if (lastStates.length > 0 && !swiperInitialized) {
            initializeSwiper(
                '.lastStates__slider',
                '.lastStates__slider-nav',
                {
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1900: {
                            spaceBetween: 35,
                        },
                    },
                }
            );
            setSwiperInitialized(true);
        }
    }, [lastStates, swiperInitialized]);

    function renderItems(arr) {
        const items = arr.map(item => {
            const { label, title, description, image, alt, id } = item;

            return (
                <div className="swiper-slide lastStates__item" key={id}>
                    <div className="lastStates__item-img">
                        <div className="lastStates__item-label">{label}</div>
                        <img src={image} alt={alt} />
                    </div>
                    <div className="lastStates__item-content">
                        <h3 className="lastStates__item-title">
                            {title}
                        </h3>
                        <p className="text-fw300">
                            {description}
                        </p>
                    </div>
                </div>
            )
        });
        return (
            <div className="swiper-wrapper lastStates__slider-items">
                {items}
            </div>
        )
    }

    return (
        <section className="lastStates">
            <div className="container">
                <h2 className="title-fw700">Последние статьи</h2>

                <div className="lastStates__slider-wrapper">
                    <div className="swiper lastStates__slider">
                        <div className="lastStates__nav">
                            <span className="lastStates__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination lastStates__slider-nav"></div>
                            <span className="lastStates__slider-next icon-right-big"></span>
                        </div>
                        <QueryWrapper
                            data={lastStates}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            isError={isError}>

                            {renderItems(lastStates)}
                        </QueryWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastStates;
