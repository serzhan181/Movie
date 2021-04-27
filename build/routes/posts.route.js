"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const user_middleware_1 = require("./../middlewares/user.middleware");
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const makeId_1 = require("../helpers/makeId");
const route = express_1.Router();
exports.route = route;
route.get('/', user_middleware_1.userMdl, posts_controller_1.posts.getPosts);
const postImgUpload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: 'public/images/posts',
        filename: (_, filename, cb) => {
            const name = makeId_1.makeid(7);
            cb(null, name + path_1.default.extname(filename.originalname));
        },
    }),
    fileFilter: (_, file, cb) => {
        if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
            return cb(null, true);
        }
        return cb(new Error('file not an image.'));
    },
});
route.post('/', user_middleware_1.userMdl, auth_middleware_1.authMdl, posts_controller_1.posts.create);
route.post('/upload_image/:postId/:slug', user_middleware_1.userMdl, auth_middleware_1.authMdl, postImgUpload.single('post_img'), posts_controller_1.posts.uploadImg);
route.get('/:identifier/:slug', user_middleware_1.userMdl, posts_controller_1.posts.getPost);
route.delete('/delete', user_middleware_1.userMdl, auth_middleware_1.authMdl, posts_controller_1.posts.deletePost);
route.post('/:identifier/:slug/comments', user_middleware_1.userMdl, auth_middleware_1.authMdl, posts_controller_1.posts.commentOnPost);
route.get('/:identifier/:slug/comments', user_middleware_1.userMdl, posts_controller_1.posts.getPostComments);
route.delete('/:postId/:slug/:commentId', user_middleware_1.userMdl, auth_middleware_1.authMdl, posts_controller_1.posts.deleleComment);
//# sourceMappingURL=posts.route.js.map