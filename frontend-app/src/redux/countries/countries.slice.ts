import { createSlice } from '@reduxjs/toolkit';

const initialState: { countries: string[] } = {
    countries: [],
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
    },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
