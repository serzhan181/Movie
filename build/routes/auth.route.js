"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const user_middleware_1 = require("./../middlewares/user.middleware");
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const route = express_1.Router();
exports.route = route;
route.post('/register', auth_controller_1.authController.register);
route.post('/login', auth_controller_1.authController.login);
route.get('/me', user_middleware_1.userMdl, auth_middleware_1.authMdl, auth_controller_1.authController.me);
route.get('/logout', user_middleware_1.userMdl, auth_middleware_1.authMdl, auth_controller_1.authController.logout);
//# sourceMappingURL=auth.route.js.map