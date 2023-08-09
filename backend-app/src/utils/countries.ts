import { Country, CountryIndex, CountryResponseApi } from "../types/countries";

/**
 * Utils to format the countries data
 * @param countries
 * @returns
 */
export const formatAllCountries = (countries: CountryResponseApi[]): Country[] => {
    return countries?.map((country) => {
        return {
            name: country.name.common,
            native_names: Object.values(country.name.nativeName).map(({ common }) => common),
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital[CountryIndex.FIRST_POSITION],
            currencies: Object.values(country.currencies).map(({ name }) => name),
            top_level: country.tld[CountryIndex.FIRST_POSITION],
            borders: country.borders,
            flag: country.flags.svg,
            languages: Object.values(country.languages),
        };
    });
};

/**
 * Utils to format the borders names
 * @param borders
 * @returns
 */
export const formatBordersNames = (borders: CountryResponseApi[]): string[] => {
    return borders.map((border: any) => border.name.common);
};
