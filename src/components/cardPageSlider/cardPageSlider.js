import { useEffect, useRef } from 'react';
import { initializeSwiper } from 'utils/slider';

import './cardPageSlider.scss';
import { Link } from 'react-router-dom';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import Spinner from 'components/spinner/Spinner';

const CardPageSlider = ({ slides, loading, error }) => {
    const thumbsRef = useRef([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!slides || slides.length === 0) return;

        swiperRef.current = initializeSwiper('.cardPageSlider__slider', '.cardPageSlider__slider-nav');
        const swiperInstance = swiperRef.current;

        thumbsRef.current.forEach((thumb, index) => {
            if (!thumb) return;
            thumb.onclick = () => {
                swiperInstance.slideToLoop(index);
            };
        });

        swiperInstance.on('slideChange', () => {
            const realIndex = swiperInstance.realIndex;
            thumbsRef.current.forEach((thumb, i) => {
                if (thumb) thumb.classList.toggle('active', i === realIndex);
            });
        });

        thumbsRef.current[0]?.classList.add('active');

        return () => {
            thumbsRef.current.forEach((thumb) => {
                if (thumb) thumb.onclick = null;
            });
            if (swiperInstance) swiperInstance.destroy();
        };
    }, [slides]);

    if (loading) return <Spinner />;
    if (error || !slides || slides.length === 0) return <ErrorMessage message={error} />;
    return (
        <section className="cardPageSlider">
            <div className="container">
                <div className="page__nav">
                    Главная страница / Жилое / Вариант ST-56 «Barcelona»
                </div>

                <div className="title-wrapper">
                    <h1 className="cardPageSlider__title title-fw800">
                        Вариант ST-56 «Barcelona»
                    </h1>
                    <Link className="backButton" to={'/catalog'}>
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </Link>
                </div>

                <div className="cardPageSlider__wrapper pure-g">
                    <div className="swiper cardPageSlider__slider pure-u-1 pure-u-xl-5-6">
                        <div className="swiper-wrapper">
                            {slides.map(({ src, alt, id }) => (
                                <div className="swiper-slide cardPageSlider__img" key={id}>
                                    <img src={src} alt={alt} />
                                </div>
                            ))}
                        </div>

                        <div className="cardPageSlider__nav">
                            <span className="cardPageSlider__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination cardPageSlider__slider-nav"></div>
                            <span className="cardPageSlider__slider-next icon-right-big"></span>
                        </div>
                    </div>

                    <div className="cardPageSlider__thumbs pure-u-1 pure-u-xl-1-6">
                        {slides.map(({ src, alt, id }, i) => (
                            <img
                                key={id}
                                src={src}
                                alt={alt}
                                className="cardPageSlider__thumbs-thumb"
                                ref={(el) => (thumbsRef.current[i] = el)}
                            />
                        ))}
                    </div>
                </div>

                <div className="cardPageSlider__price">
                    <h3 className="cardPageSlider__price-title title-fw400">от 1 000 000 грн</h3>
                    <p className="cardPageSlider__price-text">
                        Стоимость строения зависит от комплектации
                    </p>
                    <button className="button-big">Получить точный расчет</button>
                </div>

                <form className="cardPageSlider__consultation">
                    <h3 className="cardPageSlider__consultation-title title-fw400">
                        Закажите консультацию, если сомневаетесь
                    </h3>
                    <div className="cardPageSlider__consultation-block">
                        <div className="cardPageSlider__consultation-phone">
                            <div className="language">
                                <span></span>
                                <span></span>
                                <span className="icon-down-open"></span>
                            </div>
                            <input
                                required
                                type="tel"
                                name="phone"
                                placeholder="+38 XXX XXX XX XX"
                            />
                        </div>
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
