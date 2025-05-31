import { useEffect } from 'react';
import { initializeSwiper } from 'utils/slider';
import './casesPhotos.scss';

const CasesPhotos = ({ photos, process }) => {
    useEffect(() => {
        if (process === 'confirmed' && photos?.length > 0) {
            initializeSwiper('.casesPhotos__slider', '.casesPhotos__slider-nav');
        }
    }, [process, photos]);

    const renderSlides = (photos) => {
        return photos.map(({ images, id }, index) => (
            <div className="swiper-slide casesPhotos__slider-wrapper" key={id || index}>
                {images.map(({ src, alt }, idx) => (
                    <img
                        key={idx}
                        className="casesPhotos__img"
                        src={src}
                        alt={alt}
                    />
                ))}
            </div>
        ));
    };

    return (
        <section className="casesPhotos">
            <div className="container">
                <h2 className="casesPhotos__title title-fw800">Фотографии кейса</h2>

                <div className="casesPhotos__nav">
                    <span className="casesPhotos__slider-prev icon-left-big"></span>
                    <div className="swiper-pagination casesPhotos__slider-nav"></div>
                    <span className="casesPhotos__slider-next icon-right-big"></span>
                </div>

                <div className="swiper casesPhotos__slider">
                    <div className="swiper-wrapper casesPhotos__slider-slides">
                        {renderSlides(photos)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasesPhotos;
