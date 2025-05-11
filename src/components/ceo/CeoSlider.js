import React from "react";

const Ceo = () => {
    return (
        <section className="ceo">
            <div className="container">
                <div className="ceo__wrapper pure-g">
                    <div className="ceo__block pure-u-1 pure-u-xl-1-2">
                        <h2 className="title-fw700 ceo__title">Заголовок текста для СЕО</h2>
                        <p className="text-fw300 ceo__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. In fermentum posuere urna nec. Tincidunt eget nullam non nisi est sit amet facilisis magna. Faucibus vitae aliquet nec ullamcorper sit amet risus. <br />
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
                        <div className="swiper ceo__slider">
                            <div className="swiper-wrapper ceo__slider-items">
                                {/* Slide 1 */}
                                <div className="swiper-slide ceo__img">
                                    <img src="/img/houses/houseCEO.jpeg" alt="houseCEO" />
                                </div>

                                {/* Slide 2 */}
                                <div className="swiper-slide ceo__img">
                                    <img src="/img/houses/houseCEO.jpeg" alt="houseCEO" />
                                </div>

                                {/* Slide 3 */}
                                <div className="swiper-slide ceo__img">
                                    <img src="/img/houses/houseCEO.jpeg" alt="houseCEO" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ceo;
