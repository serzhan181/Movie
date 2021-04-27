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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownerMdl = void 0;
const handleError_1 = require("./../helpers/handleError");
const User_1 = require("./../entity/User");
const ownerMdl = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = res.locals.user;
    try {
        const userAcc = yield User_1.User.findOneOrFail({
            where: { username: req.params.name },
        });
        if (userAcc.username !== user.username) {
            return handleError_1.handleError(res, "You don't own this profile.", 403);
        }
        return next();
    }
    catch (err) {
        return handleError_1.handleError(res);
    }
});
exports.ownerMdl = ownerMdl;
//# sourceMappingURL=owner.middleware.js.map