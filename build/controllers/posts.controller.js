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
exports.posts = void 0;
const Comment_1 = require("./../entity/Comment");
const handleError_1 = require("./../helpers/handleError");
const Post_1 = require("./../entity/Post");
const fs_1 = __importDefault(require("fs"));
class PostsController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, body } = req.body;
            const user = res.locals.user;
            try {
                const post = new Post_1.Post({ title, body, user });
                yield post.save();
                return res.json(post);
            }
            catch (err) {
                return handleError_1.handleError(res);
            }
        });
        this.uploadImg = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const user = res.locals.user;
            const { postId, slug } = req.params;
            try {
                const post = yield Post_1.Post.findOneOrFail({ identifier: postId, slug: slug }, { relations: ['user'] });
                if (user.username !== post.user.username)
                    throw new Error();
                if ((_a = post === null || post === void 0 ? void 0 : post.postImgUrn) === null || _a === void 0 ? void 0 : _a.length) {
                    fs_1.default.unlinkSync(`public\\images\\posts\\${post.postImgUrn}`);
                }
                post.postImgUrn = req.file.filename;
                yield post.save();
                return res.json({ success: true });
            }
            catch (e) {
                console.log(e);
                return handleError_1.handleError(res);
            }
        });
        this.getPosts = (_, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.Post.find({
                    relations: ['user', 'votes', 'comments'],
                    order: { createdAt: 'DESC' },
                });
                if (res.locals.user) {
                    posts.forEach((p) => p.setUserVote(res.locals.user));
                }
                return res.json(posts);
            }
            catch (_b) {
                return handleError_1.handleError(res);
            }
        });
        this.getPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { identifier, slug } = req.params;
            try {
                const post = yield Post_1.Post.findOneOrFail({ identifier, slug }, { relations: ['user', 'votes', 'comments'] });
                if (res.locals.user) {
                    post.setUserVote(res.locals.user);
                }
                return res.json(post);
            }
            catch (err) {
                return handleError_1.handleError(res, 'Post not found', 404);
            }
        });
        this.getPostComments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { identifier, slug } = req.params;
            try {
                const post = yield Post_1.Post.findOneOrFail({ identifier, slug });
                const comments = yield Comment_1.Comment.find({
                    where: { post },
                    relations: ['votes', 'user'],
                    order: { createdAt: 'DESC' },
                });
                if (res.locals.user) {
                    post.setUserVote(res.locals.user);
                    comments.forEach((c) => c.setUserVote(res.locals.user));
                }
                return res.json(comments);
            }
            catch (err) {
                return handleError_1.handleError(err);
            }
        });
        this.deletePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = res.locals.user;
            const { postIdentifier } = req.body;
            try {
                yield Post_1.Post.delete({ user, identifier: postIdentifier });
                return res.json({ success: true });
            }
            catch (err) {
                console.log(err);
                return handleError_1.handleError(res);
            }
        });
        this.commentOnPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { identifier, slug } = req.params;
            const body = req.body.body;
            try {
                const post = yield Post_1.Post.findOneOrFail({ identifier, slug });
                const comment = new Comment_1.Comment({ body, user: res.locals.user, post });
                yield comment.save();
                return res.json(comment);
            }
            catch (err) {
                return handleError_1.handleError(res, 'Post not found.', 400);
            }
        });
        this.deleleComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = res.locals.user;
            const { postId, slug, commentId } = req.params;
            try {
                const post = yield Post_1.Post.findOneOrFail({ identifier: postId, slug });
                yield Comment_1.Comment.delete({ post, identifier: commentId });
                return res.json({ success: true });
            }
            catch (err) {
                console.log(err);
                return handleError_1.handleError(res);
            }
        });
    }
}
exports.posts = new PostsController();
//# sourceMappingURL=posts.controller.js.map