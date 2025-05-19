import React from "react";
import './works.scss';

const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <div className="page__nav">Главная страница / Наши работы</div>
                <div className="title-wrapper">
                    <h1 className="about__introduction-title title-fw800">Примеры выполненных работ</h1>
                    <a className="backButton">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </a>
                </div>
                <div className="works__wrapper">

                    {/* Work Card 1 */}
                    <div className="works__card">
                        <img src="/img/works/works-1.jpeg" alt="works-1" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом на Осокорках (2020)</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 2 */}
                    <div className="works__card">
                        <img src="/img/works/works-2.jpeg" alt="works-2" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">135 м2</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>187 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 3 */}
                    <div className="works__card">
                        <img src="/img/works/works-3.jpeg" alt="works-3" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в Стоянке</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 4 */}
                    <div className="works__card">
                        <img src="/img/works/works-4.jpeg" alt="works-4" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в Жулянах</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>249 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 5 - big */}
                    <div className="works__card big">
                        <img src="/img/works/works-5.jpeg" alt="works-5" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в с. Петровцы (2016)</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 6 */}
                    <div className="works__card">
                        <img src="/img/works/works-6.jpeg" alt="works-6" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в Киеве, Осокорки (2018)</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 7 */}
                    <div className="works__card">
                        <img src="/img/works/works-7.jpeg" alt="works-7" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в Белогородке</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Card 8 */}
                    <div className="works__card">
                        <img src="img/works/works-8.jpeg" alt="works-8" className="works__card-img" />
                        <div className="works__card-content">
                            <h3 className="works__card-title title-card">Дом в Требухове</h3>
                            <div className="works__card-wrapper">
                                <a href="#" className="works__card-btn button-works">Подробнее</a>
                                <div className="works__card-size">
                                    <div><img src="/icons/sizes/area.svg" alt="width-height" /></div>
                                    <span>135 m2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="button-more">
                    <span className="icon-arrows-cw"></span>
                    <div>Показать еще больше</div>
                </button>
            </div>
        </section>
    );
};

export default Works;
