import { CountriesResponse } from '@/types/countries';
import { createSlice } from '@reduxjs/toolkit';
import { CountriesTitles, initialState } from './types';
import { AppThunk } from '../store';
import { ApiRoutes } from '@/types/general';

const initialState: initialState = {
    countries: [],
    countryInformation: {} as CountriesResponse,
    countryBorders: [],
};

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
        setCountryInformation: (state, action) => {
            state.countryInformation = action.payload;
        },
        setCountryBorders: (state, action) => {
            state.countryBorders = action.payload;
        },
    },
});

export const getCountries = (): AppThunk => async dispatch => {
    try {
        const response = await fetch(`${process.env.API_URL}${ApiRoutes.COUNTRIES}`);
        const data = await response.json();
        const countries = data?.map((country: CountriesResponse) => {
            return {
                ...country,
                characteristics: [
                    {
                        title: CountriesTitles.POPULATION,
                        description: country.population.toLocaleString(),
                    },
                    {
                        title: CountriesTitles.REGION,
                        description: country.region,
                    },
                    {
                        title: CountriesTitles.CAPITAL,
                        description: country.capital,
                    },
                ],
            };
        });

        dispatch(setCountries(countries));
    } catch (error) {
        console.log(error);
    }
};

export const getBorders =
    (acronyms: string[]): AppThunk =>
    async dispatch => {
        try {
            const response = await fetch(`${process.env.API_URL}${ApiRoutes.BORDERS}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ acronyms }),
            });
            const data = await response.json();
            dispatch(setCountryBorders(data));
        } catch (error) {
            console.log(error);
        }
    };

export const { setCountries, setCountryBorders, setCountryInformation } = countriesSlice.actions;

export default countriesSlice.reducer;
