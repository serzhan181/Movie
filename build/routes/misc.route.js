"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const user_middleware_1 = require("./../middlewares/user.middleware");
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const express_1 = require("express");
const misc_controller_1 = require("../controllers/misc.controller");
const route = express_1.Router();
exports.route = route;
route.post('/vote', user_middleware_1.userMdl, auth_middleware_1.authMdl, misc_controller_1.misc.vote);
//# sourceMappingURL=misc.route.js.map