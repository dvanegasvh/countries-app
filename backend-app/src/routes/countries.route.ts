import { Application } from "express";
import { CountriesController } from "../controllers/countries.controller";

export class CountriesRoutes {
    private countriesController: CountriesController;

    constructor() {
        this.countriesController = new CountriesController();
    }

    public routes(app: Application): void {
        app.route("/countries/all").get(this.countriesController.getAllCountries);
        app.route("/countries/borders").post(this.countriesController.getBordersNames);
    }
}
