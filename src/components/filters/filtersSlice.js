import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filterItemsData: [],
    sortOptionsData: [],
    filterMenuBtn: false,
    inputValue: '',
    activeFilters: [],
    activeSort: null,
    price: 5000,
    area: 1,
    searchBtnActive: false
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        uploadFilterItemsData: (state, action) => { state.filterItemsData = action.payload },
        uploadSortOptionsData: (state, action) => { state.sortOptionsData = action.payload },
        toggleFiltersOpen: state => { state.filterMenuBtn = !state.filterMenuBtn },
        changeInputValue: (state, action) => { state.inputValue = action.payload },
        changeActiveFilters: (state, action) => {
            const value = action.payload.trim().toLowerCase();

            if (state.activeFilters.includes(value)) {
                state.activeFilters = state.activeFilters.filter(cat => cat !== value);
            } else {
                state.activeFilters.push(value.trim().toLowerCase());
            }
        },
        changeActiveSort: (state, action) => {
            if (state.activeSort == action.payload) {
                state.activeSort = null;
            } else {
                state.activeSort = action.payload;
            }
        },
        changePrice: (state, action) => { state.price = action.payload },
        changeArea: (state, action) => { state.area = action.payload },
        toggleSearchBtnActive: state => { state.searchBtnActive = !state.searchBtnActive },
        resetFilters: (state) => {
            state.activeFilters = [];
            state.activeSort = null;
            state.price = 5000;
            state.area = 1;
            state.inputValue = '';
            state.searchBtnActive = false;
        }
    }
})

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
    uploadFilterItemsData,
    uploadSortOptionsData,
    toggleFiltersOpen,
    changeInputValue,
    changeActiveFilters,
    changeActiveSort,
    changePrice,
    changeArea,
    toggleSearchBtnActive,
    resetFilters
} = actions;