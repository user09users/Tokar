import { useState, useEffect } from 'react';
import useTocarService from 'services/TocarService';
import setContent from 'utils/setContent';
import { initializeSwiper } from 'utils/slider';

import './materials.scss';

const Materials = () => {

    const [itemsList, setItemsList] = useState([]);
    const [sliderList, setSliderList] = useState([]);
    const [swiperInitialized, setSwiperInitialized] = useState(false);

    const { process, setProcess, getData, clearError } = useTocarService();

    const requestData = (link, onSuccess) => {
        clearError();
        getData(link)
            .then(onSuccess)
            .then(() => setProcess('confirmed'))
    };

    const handleDataLoaded = (key, data) => {
        if (key === 'itemsList') {
            setItemsList(data);
        } else if (key === 'sliderList') {
            setSliderList(data);
        }
    };

    useEffect(() => {
        Promise.all([
            getData('materials'),
            getData('materialsSlider')
        ])
            .then(([materialsData, sliderData]) => {
                setItemsList(materialsData);
                setSliderList(sliderData);
                setProcess('confirmed');
            });

    }, []);


    useEffect(() => {
        if (process === 'confirmed' && !swiperInitialized && sliderList.length > 0) {
            initializeSwiper('.materials__slider', '.materials__slider-nav');
            setSwiperInitialized(true);
        }
    }, [sliderList, swiperInitialized]);

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

    return (
        <section className="materials">
            <div className="container">
                <h2 className="title-fw800">Из чего состоят наши строения?</h2>

                {setContent(process, renderItems, itemsList)}

                <div className="materials__slider-wrapper">
                    <div className="swiper materials__slider">
                        <div className="materials__nav">
                            <span className="materials__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination materials__slider-nav"></div>
                            <span className="materials__slider-next icon-right-big"></span>
                        </div>
                        {setContent(process, renderSlides, sliderList)}
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
