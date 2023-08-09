import { CountriesResponse } from '@/types/countries';

export enum CountriesTitles {
    POPULATION = 'Population',
    REGION = 'Region',
    CAPITAL = 'Capital',
}

export interface initialState {
    countries: CountriesResponse[];
    countryInformation: CountriesResponse;
    countryBorders: string[];
}
