import { Request, Response } from "express";
import { CountriesService } from "../services/countries.service";

export class CountriesController {
    private countriesService: CountriesService;

    constructor() {
        this.countriesService = new CountriesService();
    }

    public getAllCountries = async (_req: Request, res: Response) => {
        const countries = await this.countriesService.getCountries();
        return res.status(countries.status).send(countries.data);
    };

    public getBordersNames = async (req: Request, res: Response) => {
        const { acronyms } = req.body;
        const borders = await this.countriesService.getBordersNames(acronyms);
        return res.status(borders.status).send(borders.data);
    };
}
