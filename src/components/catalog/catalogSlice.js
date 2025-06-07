import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const catalogAdapter = createEntityAdapter();

const initialState = catalogAdapter.getInitialState({
    offset: 0,
    catalogEnded: false,
});

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        incrementOffset: (state, action) => {
            state.offset += action.payload
        },
        setCatalogEnded: (state, action) => {
            state.catalogEnded = action.payload
        },
        uploadCatalog: (state, action) => {
            if (state.offset === 0) {
                catalogAdapter.setAll(state, action.payload); // Replace on first load
            } else {
                catalogAdapter.addMany(state, action.payload); // Append more items
            }
        },
    }
});

const { actions, reducer } = catalogSlice;

export default reducer;
export const { selectAll: catalogItemsSelector } = catalogAdapter.getSelectors(state => state.catalog);

export const {
    incrementOffset,
    setCatalogEnded,
    uploadCatalog
} = actions;
