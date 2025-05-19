import './casesPhotos.scss';

const CasesPhotos = () => {
    return (
        <section className="casesPhotos">
            <div className="container">
                <h2 className="casesPhotos__title title-fw800">Фотографии кейса</h2>

                {/* Slider Navigation */}
                <div className="casesPhotos__nav">
                    <span className="casesPhotos__slider-prev icon-left-big"></span>
                    <div className="swiper-pagination casesPhotos__slider-nav"></div>
                    <span className="casesPhotos__slider-next icon-right-big"></span>
                </div>

                {/* Swiper Slider */}
                <div className="swiper casesPhotos__slider">
                    <div className="swiper-wrapper casesPhotos__slider-slides">
                        <div className="casesPhotos__slider-wrapper swiper-slide">
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-1.jpeg"
                                alt="casesPhoto-1"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-2.jpeg"
                                alt="casesPhoto-2"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-3.jpeg"
                                alt="casesPhoto-3"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-4.jpeg"
                                alt="casesPhoto-4"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-5.jpeg"
                                alt="casesPhoto-5"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-6.jpeg"
                                alt="casesPhoto-6"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-7.jpeg"
                                alt="casesPhoto-7"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-8.jpeg"
                                alt="casesPhoto-8"
                            />
                        </div>
                        <div className="casesPhotos__slider-wrapper swiper-slide">
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-1.jpeg"
                                alt="casesPhoto-1"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-2.jpeg"
                                alt="casesPhoto-2"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-3.jpeg"
                                alt="casesPhoto-3"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-4.jpeg"
                                alt="casesPhoto-4"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-5.jpeg"
                                alt="casesPhoto-5"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-6.jpeg"
                                alt="casesPhoto-6"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-7.jpeg"
                                alt="casesPhoto-7"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-8.jpeg"
                                alt="casesPhoto-8"
                            />
                        </div>
                        <div className="casesPhotos__slider-wrapper swiper-slide">
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-1.jpeg"
                                alt="casesPhoto-1"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-2.jpeg"
                                alt="casesPhoto-2"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-3.jpeg"
                                alt="casesPhoto-3"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-4.jpeg"
                                alt="casesPhoto-4"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-5.jpeg"
                                alt="casesPhoto-5"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-6.jpeg"
                                alt="casesPhoto-6"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-7.jpeg"
                                alt="casesPhoto-7"
                            />
                            <img
                                className="casesPhotos__img"
                                src="/img/casesPhotos/casesPhoto-8.jpeg"
                                alt="casesPhoto-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesPhotos;
