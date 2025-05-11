import React from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

new Swiper('.lastStates__slider', {
    loop: true,
    navigation: {
        nextEl: '.lastStates__slider-next',
        prevEl: '.lastStates__slider-prev',
    },
    pagination: {
        el: '.lastStates__slider-nav',
        clickable: true,
    },
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
});

const LastStates = () => {
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
                        <div className="swiper-wrapper lastStates__slider-items">
                            <div className="swiper-slide lastStates__item">
                                <div className="lastStates__item-img">
                                    <div className="lastStates__item-label">Архитектура</div>
                                    <img src="/img/houses/lastStates/StateHouse-1.jpeg" alt="StateHouse-1" />
                                </div>
                                <div className="lastStates__item-content">
                                    <h3 className="lastStates__item-title">
                                        Готовый загородный дом или самостоятельное строительство?
                                    </h3>
                                    <p className="text-fw300">
                                        Купить или построить дом с нуля – неизбежный вопрос, когда возникает желание
                                        приобрести частную недвижимость за городом.
                                    </p>
                                </div>
                            </div>
                            {/* You can duplicate and modify the block below to add more static slides */}
                            <div className="swiper-slide lastStates__item">
                                <div className="lastStates__item-img">
                                    <div className="lastStates__item-label">Архитектура</div>
                                    <img src="/img/houses/lastStates/StateHouse-2.jpeg" alt="StateHouse-2" />
                                </div>
                                <div className="lastStates__item-content">
                                    <h3 className="lastStates__item-title">
                                        Авторские проекты домов – почему эксклюзив выгоднее
                                    </h3>
                                    <p className="text-fw300">
                                        Владельцу предстоит решить вопрос: купить готовый типовой вариант или заказать индивидуальный.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide lastStates__item">
                                <div className="lastStates__item-img">
                                    <div className="lastStates__item-label">Архитектура</div>
                                    <img src="/img/houses/lastStates/StateHouse-2.jpeg" alt="StateHouse-2" />
                                </div>
                                <div className="lastStates__item-content">
                                    <h3 className="lastStates__item-title">
                                        Авторские проекты домов – почему эксклюзив выгоднее
                                    </h3>
                                    <p className="text-fw300">
                                        Владельцу предстоит решить вопрос: купить готовый типовой вариант или заказать индивидуальный.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastStates;
