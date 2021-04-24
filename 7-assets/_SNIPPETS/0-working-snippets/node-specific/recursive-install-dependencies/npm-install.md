```js
let fs = require("fs");
let resolve = require("path").resolve;
let join = require("path").join;
let cp = require("child_process");
let os = require("os");

// get library path
let lib = resolve(__dirname, "../lib/");

/*
  function readdirSync(path: fs.PathLike, options?: {
    encoding: BufferEncoding;
    withFileTypes?: false;
} | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex"): string[] (+3 overloads)
Synchronous readdir(3) - read a directory.

@param path — A path to a file. If a URL is provided, it must use the file: protocol.

@param options — The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, 'utf8' is used.
*/


fs.readdirSync(lib).forEach(function (mod) {
  let modPath = join(lib, mod);

  // ensure path has package.json
  /*
    function existsSync(path: fs.PathLike): boolean
Synchronously tests whether or not the given path exists by checking with the file system.

@param path
A path to a file or directory. If a URL is provided, it must use the file: protocol. URL support is experimental.
  */

  if (!fs.existsSync(join(modPath, "package.json"))) {
    return;
  }

  // npm binary based on OS
  /*
  (method) String.startsWith(searchString: string, position?: number): boolean
  Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
    */

  let npmCmd;

  if (os.platform().startsWith("win")) {
    npmCmd = "npm.cmd";
  } else {
    npmCmd = "npm";
  }

  // install folder
  /*
    function spawn(command: string, args: readonly string[], options: cp.SpawnOptions): cp.ChildProcess
  */

  cp.spawn(npmCmd, ["i"], {
    env: process.env,
    cwd: modPath,
    stdio: "inherit",
  });
});
```
