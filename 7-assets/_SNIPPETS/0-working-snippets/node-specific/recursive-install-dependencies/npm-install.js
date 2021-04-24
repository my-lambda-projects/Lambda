let fs = require( "fs" );
let resolve = require( "path" ).resolve;
let join = require( "path" ).join;
let cp = require( "child_process" );
let os = require( "os" );
let lib = resolve( __dirname, "../lib/" );
fs.readdirSync( lib ).forEach( function ( mod ) {
  let modPath = join( lib, mod );
  if ( !fs.existsSync( join( modPath, "package.json" ) ) ) {
    return;
  }
  let npmCmd;
  if ( os.platform().startsWith( "win" ) ) {
    npmCmd = "npm.cmd";
  } else {
    npmCmd = "npm";
  }
  cp.spawn( npmCmd, [ "i" ], {
    env: process.env,
    cwd: modPath,
    stdio: "inherit",
  } );
} );
