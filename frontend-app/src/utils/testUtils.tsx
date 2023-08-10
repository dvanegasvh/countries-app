import React from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import countriesReducer from '@/redux/countries/countries.slice';

jest.mock('next/navigation', () => require('next-router-mock'));

export const renderWithProviders = (
    ui: React.ReactElement,
    preloadedState?: object,
    options?: Omit<RenderOptions, 'wrapper'>,
) => {
    const Wrapper: React.FC<{ children: any }> = ({ children }) => {
        const store = configureStore({
            reducer: { countries: countriesReducer },
            preloadedState,
        });

        return <Provider store={store}>{children}</Provider>;
    };

    return render(ui, { wrapper: Wrapper, ...options });
};
