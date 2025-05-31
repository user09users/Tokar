import { useState, useEffect, useRef } from 'react';
import useTocarService from 'services/TocarService';
import setContent from 'utils/setContent';
import { initializeSwiper } from 'utils/slider';

import './ceo.scss';

const Ceo = () => {
    const [itemsList, setItemsList] = useState([]);
    const [process, setProcess] = useState('waiting'); // для setContent
    const sliderRef = useRef();

    const { getData, clearError } = useTocarService();

    useEffect(() => {
        clearError();
        setProcess('loading');

        getData('ceoSlider')
            .then(onItemsLoaded)
            .then(() => setProcess('confirmed'))
    }, []);

    const onItemsLoaded = (items) => {
        setItemsList(items);
    };

    useEffect(() => {
        if (process !== 'confirmed' || itemsList.length === 0) return;

        let cancelled = false;

        waitForImagesToLoad().then(() => {
            if (cancelled) return;
            initializeSwiper('.ceo__slider', '.ceo__slider-nav');
        });

        return () => { cancelled = true };
    }, [process, itemsList]);

    const waitForImagesToLoad = () => {
        return new Promise((resolve) => {
            const slider = sliderRef.current;
            if (!slider) {
                resolve();
                return;
            }

            const images = slider.querySelectorAll('img');
            if (images.length === 0) {
                resolve();
                return;
            }

            let loadedCount = 0;
            const onLoadOrError = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    resolve();
                }
            };

            images.forEach((img) => {
                if (img.complete) {
                    onLoadOrError();
                } else {
                    img.addEventListener('load', onLoadOrError);
                    img.addEventListener('error', onLoadOrError);
                }
            });
        });
    };

    const renderSlider = (items) => (
        <div className="swiper ceo__slider" ref={sliderRef}>
            <div className="swiper-wrapper ceo__slider-items">
                {items.map((item) => (
                    <div className="swiper-slide ceo__img" key={item.id}>
                        <img src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="ceo">
            <div className="container">
                <div className="ceo__wrapper pure-g">
                    <div className="ceo__block pure-u-1 pure-u-xl-1-2">
                        <h2 className="title-fw700 ceo__title">Заголовок текста для СЕО</h2>
                        <p className="text-fw300 ceo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec. Tincidunt eget nullam non nisi est sit amet facilisis magna. Faucibus vitae aliquet nec ullamcorper sit amet risus. <br />
                            Aliquet nec ullamcorper sit amet risus nullam. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Commodo viverra maecenas accumsan lacus vel facilisis. <br />
                            Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Enim facilisis gravida neque convallis a.
                        </p>
                    </div>

                    <div className="ceo__block pure-u-1 pure-u-xl-1-2">
                        <div className="ceo__nav">
                            <span className="ceo__slider-prev icon-left-big"></span>
                            <div className="swiper-pagination ceo__slider-nav"></div>
                            <span className="ceo__slider-next icon-right-big"></span>
                        </div>

                        {setContent(process, renderSlider, itemsList)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ceo;
