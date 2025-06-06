import { configureStore } from '@reduxjs/toolkit';
import filters from 'components/filters/filtersSlice';
import catalog from 'components/catalog/catalogSlice';
import modal from 'components/modal/modalSlice';
import { apiSlice } from '../api/apiSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {
        filters,
        catalog,
        modal,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;