import useThumbsSlider from 'hooks/thumbsSlider.hook';
import './thumbsSlider.scss';

const ThumbsSlider = ({ thumbs, slider, sliderNav, extraClass = null }) => {
    const { thumbsRef } = useThumbsSlider(thumbs, slider, sliderNav);

    return (
        <div className="thumbsSlider__wrapper pure-g">
            <div className="swiper thumbsSlider__slider pure-u-1 pure-u-xl-5-6">
                <div className="swiper-wrapper">
                    {thumbs.map(({ src, alt, id }) => (
                        <div className="swiper-slide thumbsSlider__img" key={id}>
                            <img src={src} alt={alt} />
                        </div>
                    ))}
                </div>

                <div className={`thumbsSlider__nav ${extraClass}`} >
                    <span className="thumbsSlider__slider-prev icon-left-big"></span>
                    <div className="swiper-pagination thumbsSlider__slider-nav"></div>
                    <span className="thumbsSlider__slider-next icon-right-big"></span>
                </div>
            </div>

            <div className="thumbsSlider__thumbs pure-u-1 pure-u-xl-1-6">
                {thumbs.map(({ src, alt, id }, i) => (
                    <img
                        key={id}
                        src={src}
                        alt={alt}
                        className="thumbsSlider__thumbs-thumb"
                        ref={(el) => (thumbsRef.current[i] = el)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ThumbsSlider;
