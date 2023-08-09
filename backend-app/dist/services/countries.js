"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
class CountriesService {
    constructor() {
        this.getCountries = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${process.env.APP_API_URL}/all?fields=name,nativeName,population,region,subregion,borders,capital,languages,currencies,continents,tld`);
                const countries = yield response.json();
                const formatData = countries.map((country) => {
                    return {
                        name: country.name.common,
                        population: country.population,
                        region: country.region,
                        subregion: country.subregion,
                        capital: country.capital[0],
                        currencies: Object.values(country.currencies).map((currency) => currency.name),
                        top_level: country.tld[0],
                        borders: country.borders.join(","),
                    };
                });
                return { status: 200, data: formatData };
            }
            catch (error) {
                return { status: 500, data: error };
            }
        });
        this.getBordersNames = (names) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${process.env.APP_API_URL}/alpha?codes=${names}`);
                const borders = yield response.json();
                const formatData = borders.map((border) => border.name.common);
                return { status: 200, data: formatData };
            }
            catch (error) {
                return { status: 500, data: error };
            }
        });
    }
}
exports.CountriesService = CountriesService;
