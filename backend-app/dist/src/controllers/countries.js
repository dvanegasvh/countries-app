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
exports.CountriesController = void 0;
const countries_1 = require("../services/countries");
class CountriesController {
    constructor() {
        this.getAllCountries = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const countries = yield this.countriesService.getCountries();
            return res.status(countries.status).send(countries.data);
        });
        this.getBordersNames = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { acronyms } = req.body;
            const borders = yield this.countriesService.getBordersNames(acronyms);
            return res.status(borders.status).send(borders.data);
        });
        this.countriesService = new countries_1.CountriesService();
    }
}
exports.CountriesController = CountriesController;
