"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(cors_1.default({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
}));
// ROUTES
app.use('/auth', routes_1.authRouter);
app.use('/user', routes_1.userRoute);
app.use('/posts', routes_1.postsRoute);
app.use('/misc', routes_1.miscRoute);
// CONNECTION
typeorm_1.createConnection()
    .then(() => {
    app.listen(PORT, () => {
        console.log('Server running && DB connected.');
    });
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map