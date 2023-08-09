export interface Characteristics {
    title: string;
    description: string;
}

export interface CountriesResponse {
    name: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    currencies: string[];
    top_level: string;
    borders: string[];
    flag: string;
    languages: string[];
    characteristics?: Characteristics[];
}
