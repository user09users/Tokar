import React from "react";
import './promoMain.scss';
import { Link } from "react-router-dom";

const PromoMain = () => {
    return (
        <section className="promoMain">
            <div className="container">
                <div className="promoMain__wrapper pure-g">
                    <div className="promoMain__wrapper-info pure-u-1 pure-u-xl-1-2">
                        <div className="promoMain__info">
                            TokarCompany - производственно-строительная компания
                        </div>
                        <h1 className="promoMain__title title-fw800">
                            Производим и устанавливаем строения разных видов в Украине
                        </h1>

                        <div className="promoMain__text text-fw400">
                            Индивидуально под ваш запрос построим дом, ресторан, баню, беседку, мангал или любую
                            другую постройку
                        </div>
                        <div className="button-mix">
                            <Link to="/catalog" className="button-big">Перейти в каталог домов</Link>
                            <Link to={'/works'} className="button-circe">
                                <div className="button-circe__circle">
                                    <span className="icon-right-open-big"></span>
                                </div>
                                <div className="button-circe__text">Каталог работ</div>
                            </Link>
                        </div>
                    </div>

                    <div className="promoMain__wrapper-img pure-u-1 pure-u-xl-1-2">
                        <div className="promoMain__img">
                            <picture>
                                <source media="(max-width: 576px)" srcSet="/img/main-house-min.png" />
                                <source media="(min-width: 576px)" srcSet="/img/main-house.png" />
                                <img src="/img/main-house.png" alt="house" />
                            </picture>
                            <div className="promoMain__tree">
                                <img src="/img/tree.png" alt="tree" />
                            </div>
                            <div className="promoMain__scoop">
                                <img src="/img/scoop.png" alt="scoop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoMain;
