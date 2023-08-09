import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '@/redux/countries/countries.slice';

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
    },
    // devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
