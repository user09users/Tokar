import { Link } from 'react-router-dom';
import ThumbsSlider from 'components/thumbsSlider/ThumbsSlider';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import useTocarService from 'services/TocarService';

import './cardPageSlider.scss';

const CardPageSlider = ({ thumbs }) => {
    const { postData, clearError } = useTocarService();

    const handleSubmit = (phone) => {
        clearError();
        postData(phone);
    };

    return (
        <section className="cardPageSlider">
            <div className="container">
                <div className="page__nav">
                    Главная страница / Жилое / Вариант ST-56 «Barcelona»
                </div>

                <div className="title-wrapper">
                    <h1 className="cardPageSlider__title title-fw800">
                        Вариант ST-56 «Barcelona»
                    </h1>
                    <Link className="backButton" to="/catalog">
                        <div className="backButton-circle">
                            <span className="backButton-icon icon-left-open-big"></span>
                        </div>
                        <div className="backButton-text">Вернуться назад</div>
                    </Link>
                </div>

                {/* Thumbs slider */}
                <ThumbsSlider
                    thumbs={thumbs}
                    slider=".thumbsSlider__slider"
                    sliderNav=".thumbsSlider__slider-nav"
                />

                <div className="cardPageSlider__price">
                    <h3 className="cardPageSlider__price-title title-fw400">от 1 000 000 грн</h3>
                    <p className="cardPageSlider__price-text">
                        Стоимость строения зависит от комплектации
                    </p>
                    <button className="button-big">Получить точный расчет</button>
                </div>

                {/* Заменяем на PhoneForm */}
                <div className="cardPageSlider__consultation">
                    <h3 className="cardPageSlider__consultation-title title-fw400">
                        Закажите консультацию, если сомневаетесь
                    </h3>
                    <div className="cardPageSlider__consultation-block">
                        <PhoneForm
                            onSubmit={handleSubmit}
                            btnClass="button-big cardPageSlider__consultation-button"
                            extraFieldClass="cardPageSlider__consultation-phone"
                            extraFormClass="cardPageSlider__consultation-items"
                            policyClass={'policy-text'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardPageSlider;
