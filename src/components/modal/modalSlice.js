import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpened: false,
    isBottomScrolled: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpened = true;
        },
        closeModal: (state) => {
            state.isModalOpened = false;
        },
        setBottomScrolled: (state) => {
            state.isBottomScrolled = true;
        }
    },
});

export const { openModal, closeModal, setBottomScrolled } = modalSlice.actions;
export default modalSlice.reducer;
