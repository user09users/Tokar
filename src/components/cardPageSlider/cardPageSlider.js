import './cardPageSlider.scss';

const CardPageSlider = () => {
    return (
        <section className="cardPageSlider">
            <div className="container">
                {/* Navigation */}
                <div className="page__nav">
                    Главная страница / Жилое / Вариант ST-56 «Barcelona»
                </div>

                {/* Title and Back Button */}
                <div className="title-wrapper">
                    <h1 className="cardPageSlider__title title-fw800">
                        Вариант ST-56 «Barcelona»
                    </h1>
                    <a className="backButton">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </a>
                </div>

                {/* Slider Wrapper */}
                <div className="cardPageSlider__wrapper pure-g">
                    {/* Main Slider */}
                    <div className="swiper cardPageSlider__slider pure-u-1 pure-u-xl-5-6">
                        <div className="swiper-wrapper">
                            {/* Updated image paths to use /img/ instead of /src/img/ */}
                            <div className="swiper-slide cardPageSlider__img">
                                <img
                                    src="/img/secondPage/catalog/barcelona.jpeg"
                                    alt="barcelona"
                                />
                            </div>
                            <div className="swiper-slide cardPageSlider__img">
                                <img
                                    src="/img/secondPage/catalog/elegant.jpeg"
                                    alt="elegant"
                                />
                            </div>
                            <div className="swiper-slide cardPageSlider__img">
                                <img
                                    src="/img/secondPage/catalog/milano.jpeg"
                                    alt="milano"
                                />
                            </div>
                            <div className="swiper-slide cardPageSlider__img">
                                <img
                                    src="/img/secondPage/catalog/edinburgh.jpeg"
                                    alt="edinburgh"
                                />
                            </div>
                            <div className="swiper-slide cardPageSlider__img">
                                <img
                                    src="/img/secondPage/catalog/classic-plus.jpeg"
                                    alt="classic-plus"
                                />
                            </div>
                        </div>

                        <div className="cardPageSlider__nav">
                            <span className="cardPageSlider__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination cardPageSlider__slider-nav"></div>
                            <span className="cardPageSlider__slider-next icon-right-big"></span>
                        </div>
                    </div>

                    {/* Thumbs Slider */}
                    <div className="swiper cardPageSlider__thumbs pure-u-1 pure-u-xl-1-6">
                        {/* Updated image paths to use /img/ instead of /src/img/ */}
                        <img
                            className="cardPageSlider__thumbs-thumb"
                            src="/img/secondPage/catalog/barcelona.jpeg"
                            alt="barcelona"
                        />
                        <img
                            className="cardPageSlider__thumbs-thumb"
                            src="/img/secondPage/catalog/elegant.jpeg"
                            alt="elegant"
                        />
                        <img
                            className="cardPageSlider__thumbs-thumb"
                            src="/img/secondPage/catalog/milano.jpeg"
                            alt="milano"
                        />
                        <img
                            className="cardPageSlider__thumbs-thumb"
                            src="/img/secondPage/catalog/edinburgh.jpeg"
                            alt="edinburgh"
                        />
                        <img
                            className="cardPageSlider__thumbs-thumb"
                            src="/img/secondPage/catalog/classic-plus.jpeg"
                            alt="classic-plus"
                        />
                    </div>
                </div>

                {/* Price Block */}
                <div className="cardPageSlider__price">
                    <h3 className="cardPageSlider__price-title title-fw400">
                        от 1 000 000 грн
                    </h3>
                    <p className="cardPageSlider__price-text">
                        Стоимость строения зависит от комплектации
                    </p>
                    <button data-openModal className="button-big">
                        Получить точный расчет
                    </button>
                </div>

                {/* Consultation Form */}
                <form data-form className="cardPageSlider__consultation">
                    <h3 className="cardPageSlider__consultation-title title-fw400">
                        Закажите консультацию, если сомневаетесь
                    </h3>
                    <div className="cardPageSlider__consultation-block">
                        <div action="#" className="cardPageSlider__consultation-phone">
                            <div className="language">
                                <span></span>
                                <span></span>
                                <span className="icon-down-open"></span>
                            </div>
                            <input
                                required
                                type="tel"
                                data-phone
                                name="phone"
                                placeholder="+38 XXX XXX XX XX"
                            />
                        </div>
                        <div className="phone-error-message"></div>
                        <button
                            type="submit"
                            className="button-big cardPageSlider__consultation-button"
                        >
                            Заказать
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CardPageSlider;
