"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = exports.miscRoute = exports.postsRoute = exports.authRouter = void 0;
var auth_route_1 = require("./auth.route");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return auth_route_1.route; } });
var posts_route_1 = require("./posts.route");
Object.defineProperty(exports, "postsRoute", { enumerable: true, get: function () { return posts_route_1.route; } });
var misc_route_1 = require("./misc.route");
Object.defineProperty(exports, "miscRoute", { enumerable: true, get: function () { return misc_route_1.route; } });
var user_route_1 = require("./user.route");
Object.defineProperty(exports, "userRoute", { enumerable: true, get: function () { return user_route_1.route; } });
//# sourceMappingURL=index.js.map