import Form from 'components/form/Form';
import './consultation.scss';

const Consultation = () => {
    return (
        <section className="consultation">
            <div className="container">
                <div className="consultation__wrapper">
                    <div className="consultation-block">
                        <h3 className="consultation-title title-fw400">Закажите консультацию, если сомневаетесь</h3>
                        <div data-form className="consultation-block-wrapper phoneForm">
                            <Form
                                btnClass={'button-big consultation-button'}
                                extraFieldClass={'consultation-item'}
                                extraFormClass='consultation-items'
                                policyClass={'policy-text'}
                                extraBtnPlace={true}
                            />

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
