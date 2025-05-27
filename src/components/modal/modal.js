import { useState, useEffect, useCallback, useContext } from "react";
import ModalContext from "Context/modal/ModalContext";
import './modal.scss';

const Modal = () => {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

    const { show, closeModal, onScrollToBottom } = useContext(ModalContext);

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 &&
            !hasScrolledToBottom
        ) {
            setHasScrolledToBottom(true);
            if (onScrollToBottom) {
                onScrollToBottom();
            }
        }
    }, [hasScrolledToBottom, onScrollToBottom]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        if (show) { document.body.style.overflow = 'hidden'; }
        else { document.body.style.overflow = ''; }
        return () => { document.body.style.overflow = ''; };
    }, [show]);

    if (!show) return null; // ← also fixed this logic: modal should render only when show is true

    return (
        <div data-consultation className={`modal ${show ? "active" : ""}`}>
            <div className="modal__overlay" onClick={closeModal}></div>
            <div data-info className="modal__wrapper">
                <span
                    data-close
                    className="modal__close icon-cancel"
                    onClick={closeModal}
                ></span>
                <img
                    src="/img/cardPage/cardPage-man.jpeg"
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
