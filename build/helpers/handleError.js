"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, errorMessage = 'Something went wrong', statusCode = 500) => {
    return res.status(statusCode).json({ error: errorMessage });
};
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map