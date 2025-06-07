import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const worksAdapter = createEntityAdapter();

const initialState = worksAdapter.getInitialState({
    isWorksDataEnded: false,
    offset: 0,
});

const worksSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {
        setWorksData: (state, action) => {
            worksAdapter.setAll(state, action.payload);
        },
        addWorksData: (state, action) => {
            worksAdapter.addMany(state, action.payload);
        },
        setWorksEnded: (state, action) => {
            state.isWorksDataEnded = action.payload;
        },
        incrementOffset: (state, action) => {
            state.offset += action.payload;
        },
    },
});

export const {
    setWorksData,
    addWorksData,
    setWorksEnded,
    incrementOffset,
} = worksSlice.actions;

export default worksSlice.reducer;

export const {
    selectAll: selectWorksCards,
} = worksAdapter.getSelectors((state) => state.works);
