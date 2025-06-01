// components/Modal/Modal.jsx
import { useState, useEffect, useCallback, useContext } from 'react';
import ModalContext from 'context/modal/ModalContext';
import PhoneForm from 'components/form/Form';
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className={`modal ${show ? 'active' : ''}`} data-consultation>
            <div className="modal__overlay" onClick={closeModal}></div>
            <div className="modal__wrapper" data-info>
                <span className="modal__close icon-cancel" onClick={closeModal}></span>
                <img src="/img/cardPage/cardPage-man.jpeg" alt="cardPage-man" className="modal__img" />
                <div className="modal__content">
                    <h3 className="modal__title title-fw400">
                        Получите ответы на все свои вопросы за 15 минут
                    </h3>

                    <PhoneForm
                        btnClass="button-big modal__button"
                        extraFormClass='modal__items'
                        policyClass={'policy-text'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
