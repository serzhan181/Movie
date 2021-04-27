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
exports.authController = void 0;
const handleError_1 = require("./../helpers/handleError");
const parseValidationErrors_1 = require("../helpers/parseValidationErrors");
const class_validator_1 = require("class-validator");
const User_1 = require("./../entity/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_1 = __importDefault(require("cookie"));
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            try {
                let errors = {};
                const userExistsEmail = yield User_1.User.findOne({ email });
                const userExistsUsername = yield User_1.User.findOne({ username });
                if (userExistsEmail)
                    errors.email = ['Email is already taken.'];
                if (userExistsUsername)
                    errors.username = ['Username is already taken.'];
                if (Object.keys(errors).length) {
                    throw { errors };
                }
                const user = new User_1.User({ username, email, password });
                const validationErrors = yield class_validator_1.validate(user);
                errors = parseValidationErrors_1.parseValidationErrors(validationErrors);
                if (Object.keys(errors).length) {
                    throw { errors };
                }
                yield user.save();
                return res.status(201).json(user);
            }
            catch (err) {
                return res.status(400).json(err);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield User_1.User.findOne({ username });
                const passwordMatches = yield bcrypt_1.default.compare(password, user.password);
                if (!user || !passwordMatches) {
                    return res
                        .status(401)
                        .json({ username: ['Username or password is incorrect.'] });
                }
                const token = jsonwebtoken_1.default.sign({ username }, process.env.JWT_SECRET);
                res.set('Set-Cookie', cookie_1.default.serialize('token', token, {
                    httpOnly: true,
                    secure: process.env.PROJECT_STATE === 'production',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/',
                }));
                return res.json({ success: true, user });
            }
            catch (err) {
                return handleError_1.handleError(res);
            }
        });
        this.me = (_, res) => {
            return res.json({ success: true, user: res.locals.user });
        };
        this.logout = (_, res) => __awaiter(this, void 0, void 0, function* () {
            res.set('Set-Cookie', cookie_1.default.serialize('token', '', {
                httpOnly: true,
                secure: process.env.PROJECT_STATE === 'production',
                sameSite: 'strict',
                expires: new Date(0),
                path: '/',
            }));
            return res.json({ success: true });
        });
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map