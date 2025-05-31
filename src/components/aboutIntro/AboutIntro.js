import { Link } from 'react-router-dom';

import './aboutIntro.scss';

const AboutIntro = () => {
    return (
        <section className="aboutIntro">
            <div className="container">
                <div className="page__nav">Главная страница / О компании</div>

                <div className="title-wrapper">
                    <h1 className="aboutIntro__title title-fw800">О компании</h1>
                    <Link to={'/'} className="backButton">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </Link>
                </div>

                <div className="aboutIntro__block">
                    <div className="aboutIntro__block-block">
                        <p className="aboutIntro__block-text text-fw300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
                            Lorem donec massa sapien faucibus et molestie ac feugiat sed. Mauris nunc congue nisi vitae
                            suscipit tellus mauris a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque
                            habitant.
                        </p>
                    </div>
                    <div className="aboutIntro__block-img">
                        <picture>
                            <source media="(max-width: 576px)" srcSet="/img/main-house-min.png" />
                            <source media="(min-width: 576px)" srcSet="/img/main-house.png" />
                            <img src="/img/main-house.png" alt="house" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
