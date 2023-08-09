import { ResponseObject } from "../types/response";
import { formatAllCountries, formatBordersNames } from "../utils/countries";
import { Country } from "../types/countries";
import { urls } from "../constants/urls";

export class CountriesService {
    public getCountries = async (): Promise<ResponseObject<Country>> => {
        try {
            const response = await fetch(
                urls.countries.getCountriesByFlags([
                    "name",
                    "nativeName",
                    "population",
                    "region",
                    "subregion",
                    "borders",
                    "capital",
                    "languages",
                    "currencies",
                    "continents",
                    "tld",
                    "flags",
                ])
            );
            const countries = await response.json();

            return { status: 200, data: formatAllCountries(countries) };
        } catch (error) {
            console.log(error);
            return { status: 500, data: error as Error };
        }
    };

    public getBordersNames = async (acronyms: string[]): Promise<ResponseObject<string[]>> => {
        try {
            const response = await fetch(urls.countries.getBordersNames(acronyms));
            const borders = await response.json();

            return { status: 200, data: formatBordersNames(borders) };
        } catch (error) {
            return { status: 500, data: error as Error };
        }
    };
}
