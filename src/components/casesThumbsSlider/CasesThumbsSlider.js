import { Link } from 'react-router-dom';

import ThumbsSlider from 'components/thumbsSlider/ThumbsSlider';
import Form from 'components/form/Form';

import './casesThumbsSlider.scss';
import '../cardPageSlider/cardPageSlider.scss';

const CasesThumbsSlider = ({ thumbs }) => {
    return (
        <section className="cases cardPageSlider">
            <div className="container">
                {/* Page Navigation */}
                <div className="page__nav">
                    Главная страница / Жилое / Вариант ST-56 «Barcelona»
                </div>

                {/* Title and Back Button */}
                <div className="title-wrapper">
                    <h1 className="cardPageSlider__title title-fw800">
                        Вариант ST-56 «Barcelona»
                    </h1>
                    <Link to={'/works'} className="backButton">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </Link>
                </div>

                {/* Thumbs Slider */}
                <ThumbsSlider
                    thumbs={thumbs}
                    slider=".thumbsSlider__slider"
                    sliderNav=".thumbsSlider__slider-nav"
                    extraClass="removePagination"
                />

                <div className="cases__blocks">
                    <div className="cases__steps">
                        <h3 className="cases__steps-title title-fw400">
                            Проведем точный расчет <span>в 2 шага</span>
                        </h3>
                        <button href="#" className="button-big cases__steps-button">
                            Узнать точную цену
                        </button>
                    </div>
                    {/* Consultation Form */}
                    <div className="cases__consultation">
                        <h3 className="cases__consultation-title title-fw400">
                            Закажите консультацию, если сомневаетесь
                        </h3>
                        <Form
                            extraFormClass='cases__consultation-items'
                            btnClass={'button-big cases__consultation-button'}
                            policyClass={'policy-text'}
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CasesThumbsSlider;
