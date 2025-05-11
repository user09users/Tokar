import React from 'react'; // Importing React as usual for the component

const AboutStats = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="title-fw800">О компании TokarMebel</h2>
                <div className="about__wrapper">
                    {/* Updated image paths to use /img/ instead of /src/img/ */}
                    <img src="/img/about.bg.png" alt="about-bg" className="about__bg" />
                    <img src="/img/about-man.png" alt="about-man" className="about__man" />
                    <div className="about__label">
                        <div className="about__label-block">
                            {/* Updated icon path to use /icons/ instead of /src/icons/ */}
                            <img src="/icons/quote.svg" alt="quote" className="about__label-img" />
                        </div>
                        <div className="about__label-block">
                            <h3 className="about__label-name">Точилов Александр Николаевич</h3>
                            <p className="about__label-text text-fw300">
                                Цитата о компании, пару слов от самого лица компании. Цитата о компании, пару слов от самого
                                лица компании.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about__items">
                    <div className="about__item">
                        <div className="about__item-title">
                            <span className="title-fw400">21</span> год
                        </div>
                        <span className="divider"></span>
                        <p className="about__item-text text-fw300">Работаем на рынке Украины с 1998 года</p>
                    </div>
                    <div className="about__item">
                        <div className="about__item-title">
                            <span className="title-fw400">300+</span>
                        </div>
                        <span className="divider"></span>
                        <p className="about__item-text text-fw300">Позиций различных строений</p>
                    </div>
                    <div className="about__item">
                        <div className="about__item-title">
                            до <span className="title-fw400">7%</span>
                        </div>
                        <span className="divider"></span>
                        <p className="about__item-text text-fw300">Влажность просушенного дерева, что соответствует нормативам ГОСТ</p>
                    </div>
                    <div className="about__item">
                        <div className="about__item-title">
                            в <span className="title-fw400">1,5</span> раза
                        </div>
                        <span className="divider"></span>
                        <p className="about__item-text text-fw300">Стоимость доставки ниже рыночной</p>
                    </div>
                </div>

                <div className="button-mix materials__buttons about__btns">
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

export default AboutStats;
