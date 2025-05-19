import './cases.scss';

const CasesSection = () => {
    return (
        <section className="cases cardPageSlider">
            <div className="container">
                {/* Page Navigation */}
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
                            {/* Add your swiper slide items here */}
                            {/* For example, this could be a dynamic rendering of images if applicable */}
                        </div>
                        <div className="cardPageSlider__nav">
                            <span className="cardPageSlider__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination cardPageSlider__slider-nav"></div>
                            <span className="cardPageSlider__slider-next icon-right-big"></span>
                        </div>
                    </div>

                    {/* Thumbs Slider */}
                    <div className="swiper cardPageSlider__thumbs pure-u-1 pure-u-xl-1-6">
                        {/* Add your swiper thumb items here */}
                        {/* For example, dynamically render thumb images */}
                    </div>
                </div>

                {/* Steps Section */}
                <div className="cases__blocks">
                    <div data-openModal className="cases__steps">
                        <h3 className="cases__steps-title title-fw400">
                            Проведем точный расчет <span>в 2 шага</span>
                        </h3>
                        <button href="#" className="button-big cases__steps-button">
                            Узнать точную цену
                        </button>
                    </div>

                    {/* Consultation Form */}
                    <form data-form className="cases__consultation">
                        <h3 className="cases__consultation-title title-fw400">
                            Закажите консультацию, если сомневаетесь
                        </h3>
                        <div className="input">
                            <div className="input-language">
                                <span></span>
                                <span></span>
                                <span className="icon-down-open"></span>
                            </div>
                            <input
                                required
                                className="input-input"
                                type="tel"
                                data-phone
                                name="phone"
                                placeholder="+38 XXX XXX XX XX"
                            />
                        </div>
                        <div className="phone-error-message"></div>
                        <button type="submit" className="button-big cases__consultation-button">
                            Заказать
                        </button>
                        <div className="cases__consultation-text">
                            Отправляя данные, Вы соглашаетесь на обработку{" "}
                            <span>персональных данных</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CasesSection;
