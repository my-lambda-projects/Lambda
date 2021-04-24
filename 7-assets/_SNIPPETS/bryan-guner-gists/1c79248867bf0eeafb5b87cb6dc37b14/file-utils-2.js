"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmp = require("tmp");
function createTempFileWithPostfix(postfix) {
    return new Promise((resolve, reject) => {
        tmp.file({ postfix }, (err, path, fd, cleanupCallback) => {
            if (err) {
                return reject(err);
            }
            return resolve({
                name: path,
                fd,
                removeCallback: cleanupCallback,
            });
        });
    });
}
exports.default = createTempFileWithPostfix;
//# sourceMappingURL=file.utils.js.map