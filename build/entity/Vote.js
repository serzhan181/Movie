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
exports.Vote = void 0;
const Comment_1 = require("./Comment");
const Post_1 = require("./Post");
const User_1 = require("./User");
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
let Vote = class Vote extends BaseModel_1.BaseModel {
    constructor(props) {
        super();
        Object.assign(this, props);
    }
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vote.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn({ name: 'username', referencedColumnName: 'username' }),
    __metadata("design:type", User_1.User)
], Vote.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vote.prototype, "username", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Post_1.Post),
    __metadata("design:type", Post_1.Post)
], Vote.prototype, "post", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comment_1.Comment),
    __metadata("design:type", Comment_1.Comment)
], Vote.prototype, "comment", void 0);
Vote = __decorate([
    typeorm_1.Entity('votes'),
    __metadata("design:paramtypes", [Object])
], Vote);
exports.Vote = Vote;
//# sourceMappingURL=Vote.js.map