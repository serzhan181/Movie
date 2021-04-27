"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const Vote_1 = require("./Vote");
const Comment_1 = require("./Comment");
const User_1 = require("./User");
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const makeId_1 = require("../helpers/makeId");
const slugify_1 = require("../helpers/slugify");
const class_transformer_1 = require("class-transformer");
let Post = class Post extends BaseModel_1.BaseModel {
    constructor(post) {
        super();
        Object.assign(this, post);
    }
    get commentCount() {
        var _a;
        return (_a = this.comments) === null || _a === void 0 ? void 0 : _a.length;
    }
    get voteScore() {
        var _a;
        return (_a = this.votes) === null || _a === void 0 ? void 0 : _a.reduce((acc, cur) => acc + +cur.value, 0);
    }
    get postImg() {
        return this.postImgUrn
            ? `${process.env.APP_URL}/images/posts/${this.postImgUrn}`
            : null;
    }
    setUserVote(user) {
        var _a;
        const idx = (_a = this.votes) === null || _a === void 0 ? void 0 : _a.findIndex((v) => v.username === user.username);
        this.userVote = idx > -1 ? this.votes[idx].value : 0;
    }
    makeIdAndSlug() {
        this.identifier = makeId_1.makeid(6);
        this.slug = slugify_1.slugify(this.title);
    }
};
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "postImgUrn", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "identifier", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "slug", void 0);
__decorate([
    typeorm_1.Column({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "body", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User, (user) => user.posts),
    typeorm_1.JoinColumn({ name: 'username', referencedColumnName: 'username' }),
    __metadata("design:type", User_1.User)
], Post.prototype, "user", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.OneToMany(() => Comment_1.Comment, (comment) => comment.post),
    __metadata("design:type", Array)
], Post.prototype, "comments", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.OneToMany(() => Vote_1.Vote, (vote) => vote.post),
    __metadata("design:type", Array)
], Post.prototype, "votes", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Post.prototype, "commentCount", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Post.prototype, "voteScore", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Post.prototype, "postImg", null);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "makeIdAndSlug", null);
Post = __decorate([
    typeorm_1.Entity('posts'),
    __metadata("design:paramtypes", [Object])
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map