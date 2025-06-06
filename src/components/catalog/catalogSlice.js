import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const catalogAdapter = createEntityAdapter();

const initialState = catalogAdapter.getInitialState({
    offset: 0,
    catalogEnded: false,
    newCatalogItemsLoading: true,

});

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        incrementOffset: (state, action) => { state.offset += action.payload },
        setCatalogEnded: (state, action) => { state.catalogEnded = action.payload },
        setNewCatalogItemsLoading: (state, action) => { state.newCatalogItemsLoading = action.payload },
        uploadCatalog: (state, action) => {
            if (state.offset === 0) {
                catalogAdapter.setAll(state, action.payload); // Replace old with new items
            } else {
                catalogAdapter.addMany(state, action.payload); // Append new items
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
    setNewCatalogItemsLoading,
    uploadCatalog
} = actions;