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
exports.User = void 0;
const Vote_1 = require("./Vote");
const Post_1 = require("./Post");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const class_transformer_1 = require("class-transformer");
const BaseModel_1 = require("./BaseModel");
let User = class User extends BaseModel_1.BaseModel {
    constructor(props) {
        super();
        Object.assign(this, props);
    }
    get imageUrl() {
        return this.imageUrn
            ? `${process.env.APP_URL}/images/${this.imageUrn}`
            : `https://via.placeholder.com/150/222/ccc/?text=${this.username[0]}`;
    }
    hashPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            this.password = yield bcrypt_1.default.hash(this.password, +process.env.SALT_COUNT);
        });
    }
};
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({ unique: true }),
    class_validator_1.Length(1, 255),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "imageUrn", void 0);
__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column(),
    class_validator_1.Length(6, 255),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => Post_1.Post, (post) => post.user),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    typeorm_1.OneToMany(() => Vote_1.Vote, (vote) => vote.user),
    __metadata("design:type", Array)
], User.prototype, "votes", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], User.prototype, "imageUrl", null);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    typeorm_1.Entity('users'),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=User.js.map