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
exports.createCommentsTable1616055037175 = void 0;
class createCommentsTable1616055037175 {
    constructor() {
        this.name = 'createCommentsTable1616055037175';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
            yield queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "postId" SET NOT NULL`);
            yield queryRunner.query(`COMMENT ON COLUMN "comments"."postId" IS NULL`);
            yield queryRunner.query(`CREATE INDEX "IDX_8e7297165a3d53fa13b720bb11" ON "comments" ("identifier") `);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
            yield queryRunner.query(`DROP INDEX "IDX_8e7297165a3d53fa13b720bb11"`);
            yield queryRunner.query(`COMMENT ON COLUMN "comments"."postId" IS NULL`);
            yield queryRunner.query(`ALTER TABLE "comments" ALTER COLUMN "postId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.createCommentsTable1616055037175 = createCommentsTable1616055037175;
//# sourceMappingURL=1616055037175-create-comments-table.js.map