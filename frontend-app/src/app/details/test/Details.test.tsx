import '@testing-library/jest-dom';
import { act, fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/testUtils';
import { MOCK_CHARACTERISTICS, MOCK_DATA } from './constants/MockData';
import Details from '@/app/details/page';

describe('Details page', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        }),
    ) as jest.Mock;

    beforeEach(async () => {
        await act(() => {
            renderWithProviders(<Details />, {
                countries: {
                    countries: [],
                    countryBorders: [],
                    countryInformation: MOCK_DATA,
                },
            });
        });
    });

    it('should render the details information correctly', () => {
        const title = screen.getByText(MOCK_DATA.name);
        MOCK_CHARACTERISTICS.forEach(item => {
            const title = screen.getByText(item.title);
            const value = screen.getByText(item.description);
            expect(title).toBeInTheDocument();
            expect(value).toBeInTheDocument();
        });
        expect(title).toBeInTheDocument();
    });

    it('should render button back', () => {
        const backButton = screen.getByRole('button', { name: /back/i });
        expect(backButton).toBeInTheDocument();
    });
});
