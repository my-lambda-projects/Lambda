"use strict";

const AWS = require("aws-sdk");
const S3 = new AWS.S3({
  signatureVersion: "v4", // let's also add a signature version, this just tells S3 to use the v4 set of permissions
});
const Sharp = require("sharp");

const BUCKET = process.env.BUCKET;
const URL = process.env.URL;

module.exports.resize = (event, context, callback) => {
  const key = event.queryStringParameters.key;
  const match = key.match(/(\d+)x(\d+)\/(.*)/);

  const width = Number(match[1]);
  const height = Number(match[2]);

  const originalKey = match[3];
  const newKey = "" + width + "x" + height + "/" + originalKey;

  S3.getObject({ Bucket: BUCKET, Key: originalKey })
    .promise()
    .then((data) =>
      Sharp(data.Body).resize(width, height).toFormat("png").toBuffer()
    )
    .then((buffer) =>
      S3.putObject({
        Body: buffer,
        Bucket: BUCKET,
        ContentType: "image/png",
        Key: newKey,
      }).promise()
    )
    .then(() =>
      callback(null, {
        statusCode: "301",
        headers: { location: `${URL}/${newKey}` },
        body: "",
      })
    )
    .catch((err) => callback(err));
};
