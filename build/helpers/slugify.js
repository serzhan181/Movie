"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
function slugify(str) {
    str = str.toLowerCase().trim();
    const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaaaeeeeiiiioooouuuunc------';
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from[i], 'g'), to[i]);
    }
    return str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
        .replace(/^-+/, '') // trim - from start of text
        .replace(/-+$/, '') // trim - from end of text
        .replace(/-/g, '_');
}
exports.slugify = slugify;
//# sourceMappingURL=slugify.js.map