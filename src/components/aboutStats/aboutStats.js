import QueryWrapper from 'utils/QueryWrapper';
import { useGetAboutStatsQuery } from 'api/apiSlice';

import './aboutStats.scss';
import { Link } from 'react-router-dom';

const AboutStats = () => {
    const { data: aboutStats = [], isLoading, isFetching, isError } = useGetAboutStatsQuery();

    function renderItems(arr) {
        const items = arr.map(item => {
            const { titlePrefix, titleSuffix, titleHighlight, text, id } = item;

            return (
                <div className="about__item" key={id}>
                    <div className="about__item-title">
                        {titlePrefix}  <span className="title-fw400"> {titleHighlight}</span>  {titleSuffix}
                    </div>
                    <span className="divider"></span>
                    <p className="about__item-text text-fw300"> {text}</p>
                </div>
            )
        });

        return (
            <div className="about__items">
                {items}
            </div>
        )
    }

    return (

        <section className="about">
            <div className="container">
                <h2 className="title-fw800">О компании TokarMebel</h2>
                <div className="about__wrapper">
                    <img src="/img/about.bg.png" alt="about-bg" className="about__bg" />
                    <img src="/img/about-man.png" alt="about-man" className="about__man" />
                    <div className="about__label">
                        <div className="about__label-block">
                            <img src="/icons/quote.svg" alt="quote" className="about__label-img" />
                        </div>
                        <div className="about__label-block">
                            <h3 className="about__label-name">Точилов Александр Николаевич</h3>
                            <p className="about__label-text text-fw300">
                                Цитата о компании, пару слов от самого лица компании. Цитата о компании, пару слов от самого
                                лица компании.
                            </p>
                        </div>
                    </div>
                </div>

                <QueryWrapper
                    data={aboutStats}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isError={isError}>

                    {renderItems(aboutStats)}
                </QueryWrapper>

                <div className="button-mix materials__buttons about__btns">
                    <Link to={'/catalog'} className="button-big">Перейти в каталог домов</Link>
                    <Link to={'/works'} className="button-circe">
                        <div className="button-circe__circle">
                            <span className="icon-right-open-big"></span>
                        </div>
                        <div className="button-circe__text">Каталог работ</div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
