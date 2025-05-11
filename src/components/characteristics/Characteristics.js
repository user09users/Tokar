import React from "react";

const Characteristics = () => {
    return (
        <section className="characteristics">
            <div className="container">
                <div className="characteristics__wrapper">
                    <h2 className="characteristics__title title-fw800">
                        Характеристика строения:
                    </h2>

                    {/* SIZES Section */}
                    <div className="characteristics__sizes">
                        <div className="characteristics__size">
                            <img
                                className="characteristics__size-img"
                                src="/icons/sizes/length-big.svg"
                                alt="length-big"
                            />
                            <div className="characteristics__size-text">4x5м</div>
                        </div>
                        <div className="characteristics__size">
                            <img
                                className="characteristics__size-img"
                                src="/icons/sizes/floors-big.svg"
                                alt="floors-big"
                            />
                            <div className="characteristics__size-text">2 этажа</div>
                        </div>
                        <div className="characteristics__size">
                            <img
                                className="characteristics__size-img"
                                src="/icons/sizes/area-big.svg"
                                alt="area-big"
                            />
                            <div className="characteristics__size-text">20м²</div>
                        </div>
                    </div>

                    {/* INFO Section */}
                    <div className="characteristics__info">
                        <img
                            className="characteristics__info-img"
                            src="/img/secondPage/catalog/barcelona.jpeg"
                            alt="barcelona"
                        />
                        <div className="characteristics__info-descr">
                            <div className="characteristics__info-name title-fw400">
                                Barcelona
                            </div>

                            <div className="characteristics__info-tech">
                                <img
                                    src="/icons/characteristics/technologies.svg"
                                    alt="technologies"
                                />
                                <div>
                                    Технологии: <br />
                                    <span>Дом из газоблока и кирпича</span>
                                </div>
                            </div>

                            <div className="characteristics__info-time">
                                <img
                                    src="/icons/characteristics/Clock.svg"
                                    alt="Clock"
                                />
                                <div>
                                    Сроки строительства: <br />
                                    <span>30 дней</span>
                                </div>
                            </div>

                            <div className="characteristics__info-ul">
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Фундамент</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Стиль</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Окна и входные двери</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Внутренняя отделка</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Кровля</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Фасад</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Электросеть</a>
                                </div>
                                <div className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href="#">Процесс работы</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IMAGES Section */}
                    <div className="characteristics__images">
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Фундамент</h3>
                            <img
                                src="/img/cardPage/foundation.jpeg"
                                alt="foundation"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Стиль</h3>
                            <img
                                src="/img/cardPage/style.jpeg"
                                alt="style"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Окна и входные двери</h3>
                            <img
                                src="/img/cardPage/windows.jpeg"
                                alt="win-doors-1"
                            />
                            <img
                                src="/img/cardPage/doors.jpeg"
                                alt="win-doors-2"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Внутренняя отделка</h3>
                            <img
                                src="/img/cardPage/decoration.jpeg"
                                alt="decoration"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Фасад</h3>
                            <img
                                src="/img/cardPage/facade.jpeg"
                                alt="facade"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Кровля</h3>
                            <img
                                src="/img/cardPage/roof.jpeg"
                                alt="roof"
                            />
                        </div>
                        <div className="characteristics__image">
                            <h3 className="title-fw800">Электросеть</h3>
                            <img
                                src="/img/cardPage/electricity.jpeg"
                                alt="electricity"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Characteristics;
