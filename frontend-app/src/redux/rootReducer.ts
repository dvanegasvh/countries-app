import { Reducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';

import countriesReducer from '@/redux/countries/countries.slice';

export const rootReducer = combineReducers({
    countries: countriesReducer || null,
});
