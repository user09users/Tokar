import PhoneForm from 'components/PhoneForm/PhoneForm';
import './consultation.scss';

const Consultation = () => {
    return (
        <section className="consultation">
            <div className="container">
                <div className="consultation__wrapper">
                    <div className="consultation-block">
                        <h3 className="consultation-title title-fw400">Закажите консультацию, если сомневаетесь</h3>
                        <div data-form className="consultation-block-wrapper phoneForm">
                            <PhoneForm />
                            <button type="submit" className="button-big consultation-button">
                                Заказать
                            </button>
                        </div>
                        <div className="consultation-text">
                            Отправляя данные, Вы соглашаетесь на обработку <span>персональных данных</span>
                        </div>
                    </div>
                    <img
                        className="consultation-block-img"
                        src="/img/cardPage/cardPage-man.jpeg"
                        alt="cardPage-man"
                    />
                </div>
            </div>
        </section>
    );
};

export default Consultation;
