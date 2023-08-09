import dotEnv from "dotenv";
dotEnv.config();

const baseUrl = process.env.APP_API_URL;

export const urls = {
    countries: {
        getCountriesByFlags: (flags: string[]) => `${baseUrl}/all?fields=${flags.join(",")}`,
        getBordersNames: (acronyms: string[]): string => `${baseUrl}/alpha?codes=${acronyms.join(",")}`,
    },
};
