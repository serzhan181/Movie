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
exports.Comment = void 0;
const Vote_1 = require("./Vote");
const Post_1 = require("./Post");
const User_1 = require("./User");
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const makeId_1 = require("../helpers/makeId");
const class_transformer_1 = require("class-transformer");
let Comment = class Comment extends BaseModel_1.BaseModel {
    constructor(comment) {
        super();
        Object.assign(this, comment);
    }
    get voteScore() {
        var _a;
        return (_a = this.votes) === null || _a === void 0 ? void 0 : _a.reduce((acc, cur) => acc + +cur.value, 0);
    }
    get imageUrl() {
        return this.user.imageUrn
            ? `${process.env.APP_URL}/images/${this.user.imageUrn}`
            : `https://via.placeholder.com/150/222/ccc/?text=${this.user.username[0]}`;
    }
    setUserVote(user) {
        var _a;
        const idx = (_a = this.votes) === null || _a === void 0 ? void 0 : _a.findIndex((v) => v.username === user.username);
        this.userVote = idx > -1 ? this.votes[idx].value : 0;
    }
    makeIdAndSlug() {
        this.identifier = makeId_1.makeid(7);
    }
};
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "identifier", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "body", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Comment.prototype, "username", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn({ name: 'username', referencedColumnName: 'username' }),
    __metadata("design:type", User_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.ManyToOne(() => Post_1.Post, (post) => post.comments, { nullable: false }),
    __metadata("design:type", Post_1.Post)
], Comment.prototype, "post", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.OneToMany(() => Vote_1.Vote, (vote) => vote.comment),
    __metadata("design:type", Array)
], Comment.prototype, "votes", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Comment.prototype, "voteScore", null);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Comment.prototype, "imageUrl", null);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Comment.prototype, "makeIdAndSlug", null);
Comment = __decorate([
    typeorm_1.Entity('comments'),
    __metadata("design:paramtypes", [Object])
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map