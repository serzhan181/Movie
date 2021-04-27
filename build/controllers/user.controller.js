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
exports.user = void 0;
const Post_1 = require("./../entity/Post");
const User_1 = require("./../entity/User");
const handleError_1 = require("./../helpers/handleError");
const fs_1 = __importDefault(require("fs"));
class UserController {
    constructor() {
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.params.name;
            try {
                const user = yield User_1.User.findOne({ username: name });
                if (!user) {
                    return handleError_1.handleError(res, `No user named ${name}`, 404);
                }
                const posts = yield Post_1.Post.find({
                    where: { user },
                    relations: ['comments', 'votes', 'user'],
                });
                user.posts = posts;
                if (res.locals.user) {
                    user.posts.forEach((p) => p.setUserVote(res.locals.user));
                }
                return res.json(user);
            }
            catch (e) {
                console.log(e);
                return handleError_1.handleError(res);
            }
        });
        this.uploadImage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const user = res.locals.user;
            try {
                if ((_a = user === null || user === void 0 ? void 0 : user.imageUrn) === null || _a === void 0 ? void 0 : _a.length) {
                    fs_1.default.unlinkSync(`public\\images\\${user.imageUrn}`);
                }
                user.imageUrn = req.file.filename;
                yield user.save();
                return res.json(user);
            }
            catch (error) {
                console.log(error);
                return handleError_1.handleError(res);
            }
        });
    }
}
exports.user = new UserController();
//# sourceMappingURL=user.controller.js.map