"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValidationErrors = void 0;
const parseValidationErrors = (errors) => {
    const res = {};
    errors.forEach((field) => {
        res[field.property] = Object.values(field.constraints);
    });
    return res;
};
exports.parseValidationErrors = parseValidationErrors;
//# sourceMappingURL=parseValidationErrors.js.map