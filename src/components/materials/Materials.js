import React from "react";

const Materials = () => {
    return (
        <section className="materials">
            <div className="container">
                <h2 className="title-fw800">Из чего состоят наши строения?</h2>

                {/* Static content for the materials section */}
                <div className="materials__wrapper">
                    <div className="materials__item">
                        <img className="materials__item-img" src="/img/materials/3d-model.png" alt="3d-model" />
                        <h3 className="title-fw400 materials__item-title">Создание <br />3D-макета</h3>
                        <p className="text-fw300 materials__item-text">
                            Это визуализация строения через экран гаджета. Макет создается индивидуально для клиента.
                            Главная задача 3D-визуализации: учесть все детали в разработке и показать конечный вид проекта в
                            оригинальном цвете и размере, используя актуальные материалы и наполнение внутри.
                        </p>
                        <img className="materials__item-number" src="/icons/numbers/number-1.svg" alt="number-1" />
                    </div>
                    <div className="materials__item">
                        <img className="materials__item-img" src="/img/materials/measurements.png" alt="measurements" />
                        <h3 className="title-fw400 materials__item-title">Взятие замеров и <br />создание фундамента.</h3>
                        <p className="text-fw300 materials__item-text">
                            Мы выезжаем на объект, обсуждаем задачу, выявляем потребность клиента и берем замеры. Строим
                            несущую конструкцию, которая выдержит нагрузку от здания и погодных условий. Профессионалы
                            используют лазерный уровень и качественные материалы, чтобы фундамент получился максимально
                            крепким и ровным.
                        </p>
                        <img className="materials__item-number" src="/icons/numbers/number-2.svg" alt="number-2" />
                    </div>
                    <div className="materials__item">
                        <img className="materials__item-img" src="/img/materials/structure.png" alt="structure" />
                        <h3 className="title-fw400 materials__item-title">Производство<br />конструкции</h3>
                        <p className="text-fw300 materials__item-text">
                            На одном из 4 заводов по всей территории Украины мы производим конструкцию по техническому заданию.
                            Задание создается и согласуется с вами через прописанный договор в начале работ.
                        </p>
                        <img className="materials__item-number" src="/icons/numbers/number-3.svg" alt="number-3" />
                    </div>
                    <div className="materials__item">
                        <img className="materials__item-img" src="/img/materials/instalation.png" alt="instalation" />
                        <h3 className="title-fw400 materials__item-title">Монтажные<br />работы</h3>
                        <p className="text-fw300 materials__item-text">
                            Выполним полный объем работ: от возведения фундамента до устройства кровли. В конечном итоге, можно
                            будет сразу использовать строение, а не докупать материал на собственные деньги. Проведем сантехнические
                            работы до полной сдачи проекта.
                        </p>
                        <img className="materials__item-number" src="/icons/numbers/number-4.svg" alt="number-4" />
                    </div>
                </div>

                {/* Static content for the materials slider */}
                <div className="materials__slider-wrapper">
                    <div className="swiper materials__slider">
                        <div className="materials__nav">
                            <span className="materials__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination materials__slider-nav"></div>
                            <span className="materials__slider-next icon-right-big"></span>
                        </div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img className="materials__slider-img" src="/img/main-slide.jpeg" alt="main-slide" />
                            </div>
                            <div className="swiper-slide">
                                <img className="materials__slider-img" src="/img/main-slide.jpeg" alt="main-slide" />
                            </div>
                            <div className="swiper-slide">
                                <img className="materials__slider-img" src="/img/main-slide.jpeg" alt="main-slide" />
                            </div>
                            <div className="swiper-slide">
                                <img className="materials__slider-img" src="/img/main-slide.jpeg" alt="main-slide" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button section */}
                <div className="button-mix materials__buttons">
                    <a href="#" className="button-big">Перейти в каталог домов</a>
                    <a href="#" className="button-circe">
                        <div className="button-circe__circle">
                            <span className="icon-right-open-big"></span>
                        </div>
                        <div className="button-circe__text">Каталог бань</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Materials;
