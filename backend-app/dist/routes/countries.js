"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRoute = void 0;
const countries_1 = require("@controllers/countries");
class CountriesRoute {
    constructor() {
        this.countriesController = new countries_1.CountriesController();
    }
    routes(app) {
        app.route("/countries").get(this.countriesController.getAllCountries);
        app.route("/countries/borders").post(this.countriesController.getBordersNames);
    }
}
exports.CountriesRoute = CountriesRoute;
