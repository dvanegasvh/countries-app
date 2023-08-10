"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Routes
const countries_route_1 = require("./routes/countries.route");
dotenv_1.default.config();
class Server {
    constructor() {
        this.port = process.env.APP_PORT || 3000;
        this.countriesRoute = new countries_route_1.CountriesRoutes();
        this.app = (0, express_1.default)();
        this.app.set("port", process.env.APP_PORT || "3000");
    }
    static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on port http://localhost:${this.port}`);
        });
    }
    routes() {
        this.countriesRoute.routes(this.app);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    start() {
        this.middlewares();
        this.routes();
        this.listen();
    }
}
exports.Server = Server;
exports.default = Server;
