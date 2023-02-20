import { createSlice } from '@reduxjs/toolkit';

const filterInitial = {
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitial,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;