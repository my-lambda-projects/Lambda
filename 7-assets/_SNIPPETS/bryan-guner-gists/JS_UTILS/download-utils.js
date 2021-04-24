"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadResource = exports.downloadFileToDestination = exports.downloadFileToStr = void 0;
const https = require("https");
const fs = require("fs");
const url = require("url");
function downloadFileToStr(urlStr) {
    return downloadResource(urlStr, (response, resolve) => {
        let downloadedData = "";
        response.on("data", (data) => {
            downloadedData += data;
        });
        response.on("end", () => {
            resolve(downloadedData);
        });
    });
}
exports.downloadFileToStr = downloadFileToStr;
function downloadFileToDestination(urlStr, destinationPath) {
    return downloadResource(urlStr, (response, resolve) => {
        const createdFile = fs.createWriteStream(destinationPath);
        createdFile.on("finish", () => {
            resolve();
        });
        response.pipe(createdFile);
    });
}
exports.downloadFileToDestination = downloadFileToDestination;
function downloadResource(urlStr, callback) {
    return new Promise((resolve, reject) => {
        const parsedUrl = url.parse(urlStr);
        const request = https.request({
            host: parsedUrl.host,
            path: parsedUrl.path,
            rejectUnauthorized: false,
            headers: { "User-Agent": "TabNine.tabnine-vscode" },
        }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                let redirectUrl;
                if (typeof response.headers.location === "string") {
                    redirectUrl = response.headers.location;
                }
                else {
                    if (!response.headers.location || response.headers.location) {
                        return reject(new Error("Invalid download location received"));
                    }
                    [redirectUrl] = response.headers.location;
                }
                return resolve(downloadResource(redirectUrl, callback));
            }
            if (response.statusCode !== 200 && response.statusCode !== 403) {
                return reject();
            }
            callback(response, resolve);
            response.on("error", (error) => {
                reject(error);
            });
            return undefined;
        });
        request.on("error", (error) => {
            reject(error);
        });
        request.end();
    });
}
exports.downloadResource = downloadResource;
//# sourceMappingURL=download.utils.js.map