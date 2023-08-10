import '@testing-library/jest-dom';
import { act, screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/testUtils';
import { MOCK_DATA } from './constants/MockData';
import Home from '@/app/page';

describe('Home page', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA),
        }),
    ) as jest.Mock;

    beforeEach(async () => {
        await act(() => {
            renderWithProviders(<Home />);
        });
    });

    it('should render the countries cards', () => {
        const cardsContainer = screen.getByTestId('cards-container');
        expect(cardsContainer.children).toHaveLength(MOCK_DATA.length);
    });

    it('should render the cards with the correct information', () => {
        MOCK_DATA.forEach(item => {
            const title = screen.getByText(item.name);
            const population = screen.getByText(item.population.toLocaleString());
            const region = screen.getByText(item.region);
            const capital = screen.getByText(item.capital);
            const flag = screen.getByAltText(`${item.name}-flag`);

            expect(title).toBeInTheDocument();
            expect(population).toBeInTheDocument();
            expect(region).toBeInTheDocument();
            expect(capital).toBeInTheDocument();
            expect(flag).toBeInTheDocument();
        });
    });

    it('should render the search inputs', () => {
        const searchInput = screen.getByPlaceholderText(/search for a country/i);
        const filterInput = screen.getByTestId('select-input');

        expect(searchInput).toBeInTheDocument();
        expect(filterInput).toBeInTheDocument();
    });
});
