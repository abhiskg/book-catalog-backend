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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const client_1 = require("@prisma/client");
let server;
exports.prisma = new client_1.PrismaClient();
// uncaught exception error
process.on("uncaughtException", (error) => {
    console.log(error);
    process.exit(1);
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // connection here
            console.log("Database is connected Successfully");
            server = app_1.default.listen(config_1.default.port, () => {
                console.log(`Application listing on port ${config_1.default.port}`);
            });
        }
        catch (error) {
            console.log("Failed to connect database", error);
        }
        // unhandled rejection error
        process.on("unhandledRejection", () => {
            if (server && server.listening) {
                server.close(() => {
                    console.log("Unhandled Rejection Error");
                    process.exit(1);
                });
            }
            else {
                // close the server immediately
                process.exit(1);
            }
        });
    });
})();
// If our server crash suddenly/pm2, to get a signal
process.on("SIGTERM", () => {
    console.log("SIGTERM is received");
    if (server) {
        server.close();
    }
});
