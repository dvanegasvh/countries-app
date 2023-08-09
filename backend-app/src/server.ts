import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
// Routes
import { CountriesRoutes } from "./routes/countries.route";

dotEnv.config();

export class Server {
    private app: express.Application;
    private static instance: Server;
    private port = process.env.APP_PORT || 3000;
    private countriesRoute = new CountriesRoutes();

    private constructor() {
        this.app = express();
        this.app.set("port", process.env.APP_PORT || "3000");
    }

    public static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port http://localhost:${this.port}`);
        });
    }
    private routes() {
        this.countriesRoute.routes(this.app);
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    public start() {
        this.middlewares();
        this.routes();
        this.listen();
    }
}

export default Server;
