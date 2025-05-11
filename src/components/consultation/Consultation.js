const Consultation = () => {
    return (
        <section className="consultation">
            <div className="container">
                <div className="consultation__wrapper">
                    <div className="consultation-block">
                        <h3 className="consultation-title title-fw400">Закажите консультацию, если сомневаетесь</h3>
                        <form data-form className="consultation-block-wrapper">
                            <div className="consultation-item">
                                <div className="language">
                                    <span></span>
                                    <span></span>
                                    <span className="icon-down-open"></span>
                                </div>
                                <input
                                    required
                                    className="contacts__nav-item-input"
                                    type="tel"
                                    data-phone
                                    name="phone"
                                    placeholder="+38 XXX XXX XX XX"
                                />
                            </div>
                            <div className="phone-error-message"></div>
                            <button type="submit" className="button-big consultation-button">
                                Заказать
                            </button>
                        </form>
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
