"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const user_middleware_1 = require("./../middlewares/user.middleware");
const owner_middleware_1 = require("./../middlewares/owner.middleware");
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const makeId_1 = require("../helpers/makeId");
const route = express_1.Router();
exports.route = route;
route.get('/:name', user_middleware_1.userMdl, user_controller_1.user.getUser);
const upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: 'public/images',
        filename: (_, file, callback) => {
            const name = makeId_1.makeid(10);
            callback(null, name + path_1.default.extname(file.originalname));
        },
    }),
    fileFilter: (_, file, callback) => {
        if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
            return callback(null, true);
        }
        return callback(new Error('file not an image.'));
    },
});
route.post('/:name/image', user_middleware_1.userMdl, auth_middleware_1.authMdl, owner_middleware_1.ownerMdl, upload.single('file'), user_controller_1.user.uploadImage);
//# sourceMappingURL=user.route.js.map