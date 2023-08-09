export enum CountryIndex {
    FIRST_POSITION = 0,
}

export interface Sar {
    name: string;
    symbol: string;
}

export type Flags = {
    png: string;
    svg: string;
    alt: string;
};

export type Name = {
    common: string;
    official: string;
    nativeName: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
};

export interface Country {
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
}

export interface CountryResponseApi {
    flags: Flags;
    name: Name;
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
        };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: { [key: string]: string };
    borders: string[];
    population: number;
    continents: string[];
}
