import React from "react";

const Modal = () => {
    return (
        <div data-consultation className="modal">
            <div className="modal__overlay"></div>
            <div data-info className="modal__wrapper">
                <span data-close className="modal__close icon-cancel"></span>
                <img
                    src="/img/cardPage/cardPage-man.jpeg" // Corrected image path
                    alt="cardPage-man"
                    className="modal__img"
                />
                <div className="modal__content">
                    <h3 className="modal__title title-fw400">
                        Получите ответы на все свои вопросы за 15 минут
                    </h3>
                    <form action="#" data-form>
                        <div className="input">
                            <div className="input-language">
                                <span></span>
                                <span></span>
                                <span className="icon-down-open"></span>
                            </div>
                            <input
                                required
                                className="input-input"
                                type="tel"
                                data-phone
                                name="phone"
                                placeholder="+38 XXX XXX XX XX"
                            />
                        </div>
                        <div className="phone-error-message"></div>
                        <button type="submit" className="button-big modal__button">
                            Заказать
                        </button>
                    </form>
                    <div className="modal__text">
                        Отправляя данные, Вы соглашаетесь на обработку{" "}
                        <span>персональных данных</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
