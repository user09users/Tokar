import React from 'react';
import './characteristics.scss';
import Spinner from 'components/spinner/Spinner';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
const Characteristics = ({ characteristics, loading, error }) => {
    if (loading) return <Spinner />;
    if (error || !characteristics) return <ErrorMessage message={error} />;

    const { sizes, info, images } = characteristics;

    return (
        <section className="characteristics">
            <div className="container">
                <div className="characteristics__wrapper">
                    <h2 className="characteristics__title title-fw800">Характеристика строения:</h2>

                    {/* Sizes */}
                    <div className="characteristics__sizes">
                        {sizes.map(({ text, image, alt }, index) => (
                            <div className="characteristics__size" key={index}>
                                <img src={image} alt={alt} />
                                <div className="characteristics__size-text">{text}</div>
                            </div>
                        ))}
                    </div>

                    {/* Info block */}
                    <div className="characteristics__info">
                        <div className="characteristics__info-img">
                            <img className="characteristics__info-img" src={info.image} alt={info.alt} />
                        </div>

                        <div className="characteristics__info-descr">
                            <div className="characteristics__info-name title-fw400">{info.name}</div>

                            <div className="characteristics__info-tech">
                                <img src="/icons/characteristics/technologies.svg" alt="technologies" />
                                <div>
                                    Технологии: <br />
                                    <span>{info.technologies.text}</span>
                                </div>
                            </div>

                            <div className="characteristics__info-time">
                                <img src="/icons/characteristics/Clock.svg" alt="Clock" />
                                <div>
                                    Сроки строительства: <br />
                                    <span>{info.construction_time.text}</span>
                                </div>
                            </div>
                        </div>

                        <ul className="characteristics__info-ul">
                            {info.links.map(({ text, url }, index) => (
                                <li key={index} className="characteristics__info-li">
                                    <span className="icon-right-open-big"></span>
                                    <a href={`#${url}`}>{text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Images block */}
                <div className="characteristics__images">
                    {images.map(({ title, src, alt, extraSrc, extraAlt, id }) => (
                        <div className="characteristics__image" key={id} id={id}>
                            <h3 className="title-fw800">{title}</h3>
                            <img src={src} alt={alt} />
                            {extraSrc && <img src={extraSrc} alt={extraAlt} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Characteristics;
