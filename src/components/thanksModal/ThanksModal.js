import { useEffect } from 'react';
import './thanksModal.scss';
import { closeModal } from 'components/modal/modalSlice';
import { useDispatch } from 'react-redux';
const ThanksModal = ({ result, onClose }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
            dispatch(closeModal());
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const handleOverlayClick = () => {
        onClose();
    };
    return (
        <div className="modal active" data-thanks-modal>
            <div className="modal__overlay" onClick={handleOverlayClick}></div>
            <div className=" thanksModal__wrapper">
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
