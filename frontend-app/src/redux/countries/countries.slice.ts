import { CountriesResponse } from '@/types/countries';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: { countries: CountriesResponse[] } = {
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

    extraReducers(builder) {
        builder.addCase(getCountries.fulfilled, (state, action) => {
            const countries = action.payload.map((country: CountriesResponse) => {
                return {
                    ...country,
                    characteristics: [
                        {
                            title: 'Population',
                            description: country.population.toLocaleString(),
                        },
                        {
                            title: 'Region',
                            description: country.region,
                        },
                        {
                            title: 'Capital',
                            description: country.capital,
                        },
                    ],
                };
            });
            state.countries = countries;
        });
    },
});

export const getCountries = createAsyncThunk('countries/all', async () => {
    try {
        const response = await fetch('http://localhost:4000/countries/all');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
