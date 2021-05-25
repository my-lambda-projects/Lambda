// From https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245

const semver = require("semver");
const { engines } = require("../package");
const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  throw new Error(
    `The current node version ${process.version} does not satisfy the required version ${version} .`
  );
}
