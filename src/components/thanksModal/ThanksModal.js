import { useContext, useEffect } from 'react';
import ModalContext from 'context/modal/ModalContext';
import './thanksModal.scss';

const ThanksModal = ({ result, onClose }) => {

    const { closeModal } = useContext(ModalContext);
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
            closeModal();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const handleOverlayClick = () => {
        onClose();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal active" data-thanks-modal>
            <div className="modal__overlay" onClick={handleOverlayClick}></div>
            <div className="modal__wrapper" onClick={stopPropagation}>
                <span className="modal__close icon-cancel" onClick={onClose}></span>
                <div className="modal__content modal__content--thanks">
                    <h3 className="modal__title title-fw400">
                        {result
                            ? 'Спасибо! Мы свяжемся с вами в ближайшее время.'
                            : 'Что-то пошло не так... Попробуйте позже.'}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ThanksModal;
