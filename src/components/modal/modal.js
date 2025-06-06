import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneForm from "components/form/Form";
import {
    openModal,
    closeModal,
    setBottomScrolled,
} from "./modalSlice";
import "./modal.scss";

const Modal = () => {
    const dispatch = useDispatch();
    const { isModalOpened, isBottomScrolled } = useSelector((state) => state.modal);

    // Scroll handler to open modal when user scrolls near bottom
    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 10 &&
            !isBottomScrolled
        ) {
            dispatch(setBottomScrolled());
            dispatch(openModal());
        }
    }, [dispatch, isBottomScrolled]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpened ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpened]);

    if (!isModalOpened) return null; // Don't render modal if closed

    return (
        <div className={`modal ${isModalOpened ? "active" : ""}`} data-consultation>
            <div
                className="modal__overlay"
                onClick={() => dispatch(closeModal())}
            ></div>
            <div className="modal__wrapper" data-info>
                <span
                    className="modal__close icon-cancel"
                    onClick={() => dispatch(closeModal())}
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
                    <PhoneForm
                        btnClass="button-big modal__button"
                        extraFormClass="modal__items"
                        policyClass={"policy-text"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;
