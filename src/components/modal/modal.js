// Modal.jsx
import { Component } from "react";
import './modal.scss';

class Modal extends Component {

    state = {
        hasScrolledToBottom: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (this.props.show && !prevProps.show) {
            // Modal just opened
            document.body.style.overflow = 'hidden';
        } else if (!this.props.show && prevProps.show) {
            // Modal just closed
            document.body.style.overflow = '';
        }
    }

    handleScroll = () => {
        const { hasScrolledToBottom } = this.state;

        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight &&
            !hasScrolledToBottom
        ) {
            this.setState({ hasScrolledToBottom: true });

            // 👉 Notify App to show the modal
            if (this.props.onScrollToBottom) {
                this.props.onScrollToBottom();
            }
        }
    };

    openModal = () => {
        this.setState({
            showModal: true,
            hasScrolledToBottom: true,
        });
        document.body.style.overflow = 'hidden';

    };

    closeModal = () => {
        this.setState({ showModal: false });
        document.body.style.overflow = '';

    };


    render() {
        if (!this.props.show) return null;

        return (
            <div data-consultation className={`modal ${this.props.show ? "active" : ""}`}>
                <div className="modal__overlay" onClick={this.props.onClose}></div>
                <div data-info className="modal__wrapper">
                    <span
                        data-close
                        className="modal__close icon-cancel"
                        onClick={this.props.onClose}
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
    }
}

export default Modal;
