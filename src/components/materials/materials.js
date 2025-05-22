import { useState, useEffect } from 'react';
import useTocarService from 'services/services';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { initializeSwiper } from 'utils/slider';

import './materials.scss';

const Materials = () => {

    const [itemsList, setItemsList] = useState([]);
    const [sliderList, setSliderList] = useState([]);
    const [swiperInitialized, setSwiperInitialized] = useState(false);

    const { loading, error, getData } = useTocarService();

    const requestData = (link, onSuccess) => {
        getData(link)
            .then(onSuccess)
    };

    const handleDataLoaded = (key, data) => {
        if (key === 'itemsList') {
            setItemsList(data);
        } else if (key === 'sliderList') {
            setSliderList(data);
        }
    };

    useEffect(() => {
        requestData('materials', (data) => handleDataLoaded('itemsList', data));
        requestData('materialsSlider', (data) => handleDataLoaded('sliderList', data));
    }, []);

    useEffect(() => {
        if (!loading && !error && !swiperInitialized && sliderList.length > 0) {
            initializeSwiper('.materials__slider', '.materials__slider-nav');
            setSwiperInitialized(true);
        }
    }, [sliderList, loading, error, swiperInitialized]);

    function renderItems(arr) {
        return (
            <div className="materials__wrapper">
                {arr.map(({ image, alt, title, text, number, numberAlt, id }) => (
                    <div className="materials__item" key={id}>
                        <img className="materials__item-img" src={image} alt={alt} />
                        <h3 className="title-fw400 materials__item-title">{title}</h3>
                        <p className="text-fw300 materials__item-text">{text}</p>
                        <img className="materials__item-number" src={number} alt={numberAlt} />
                    </div>
                ))}
            </div>
        );
    }

    function renderSlides(arr) {
        return (
            <div className="swiper-wrapper">
                {arr.map(({ image, alt, id }) => (
                    <div className="swiper-slide" key={id}>
                        <img className="materials__slider-img" src={image} alt={alt} />
                    </div>
                ))}
            </div>
        );
    }


    const items = renderItems(itemsList);
    const renderedSlider = renderSlides(sliderList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;
    const slider = !(loading || error) ? renderedSlider : null;

    return (
        <section className="materials">
            <div className="container">
                <h2 className="title-fw800">Из чего состоят наши строения?</h2>

                {errorMessage}
                {spinner}
                {content}

                <div className="materials__slider-wrapper">
                    <div className="swiper materials__slider">
                        <div className="materials__nav">
                            <span className="materials__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination materials__slider-nav"></div>
                            <span className="materials__slider-next icon-right-big"></span>
                        </div>
                        {slider}
                    </div>
                </div>

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
}

export default Materials;
