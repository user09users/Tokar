// src/context/ModalProvider.js
import { useState, useCallback } from "react";
import ModalContext from "./ModalContext";

const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const toggleModal = () => setShow(prev => !prev);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const onScrollToBottom = useCallback(() => {
        openModal(); // можно тут добавить логику
    }, []);

    return (
        <ModalContext.Provider
            value={{
                show,
                openModal,
                closeModal,
                toggleModal,
                onScrollToBottom
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
