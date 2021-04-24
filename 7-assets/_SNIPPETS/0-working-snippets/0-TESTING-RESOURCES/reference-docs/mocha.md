
[#](#features) Features---
--------------------------
---
-    [browser support](#running-mocha-in-the-browser)---
-    [simple async support, including promises](#asynchronous-code)---
-    [run Node.js tests in parallel](#parallel-tests)---
-    [test coverage reporting](#wallabyjs)---
-    [string diff support](#diffs)---
-    [JavaScript API for running tests](#more-information)---
-    [auto-detects and disables coloring for non-TTYs](#reporters)---
-    [async test timeout support](#delayed-root-suite)---
-    [test retry support](#retry-tests)---
-    [test-specific timeouts](#test-level)---
-    [Growl support](#desktop-notification-support)---
-    [reports test durations](#test-duration)---
-    [highlights slow tests](#dot-matrix)---
-    [file watcher support](#min)---
-    [global variable leak detection](#-check-leaks)---
-    [optionally run tests that match a regexp](#-grep-regexp-g-regexp)---
-    [auto-exit to prevent "hanging" with an active loop](#-exit)---
-    [easily meta-generate suites](#markdown) & [test-cases](#list)---
-    [config file support](#-config-path)---
-    [node debugger support](#-inspect-inspect-brk-inspect)---
-    [node native ES modules support](#nodejs-native-esm-support)---
-    [source-map support](#-enable-source-maps)---
-    [detects multiple calls to `done()`](#detects-multiple-calls-to-done)---
-    [use any assertion library you want](#assertions)---
-    [extensible reporting, bundled with 9+ reporters](#reporters)---
-    [extensible test DSLs or "interfaces"](#interfaces)---
-    [before, after, before each, after each hooks](#hooks)---
-    [arbitrary transpiler support (coffee-script etc)](#-compilers)---
-    [TextMate bundle](#textmate)---
---
[#](#table-of-contents) Table of Contents---
--------------------------------------------
---
-    [Installation](#installation)---
-    [Getting Started](#getting-started)---
-    [Run Cycle Overview](#run-cycle-overview)---
-    [Detects Multiple Calls to `done()`](#detects-multiple-calls-to-done)---
-    [Assertions](#assertions)---
-    [Asynchronous Code](#asynchronous-code)---
-    [Synchronous Code](#synchronous-code)---
-    [Arrow Functions](#arrow-functions)---
-    [Hooks](#hooks)---
-    [Pending Tests](#pending-tests)---
-    [Exclusive Tests](#exclusive-tests)---
-    [Inclusive Tests](#inclusive-tests)---
-    [Retry Tests](#retry-tests)---
-    [Dynamically Generating Tests](#dynamically-generating-tests)---
-    [Timeouts](#timeouts)---
-    [Diffs](#diffs)---
-    [Command-Line Usage](#command-line-usage)---
-    [Parallel Tests](#parallel-tests)---
-    [Root Hook Plugins](#root-hook-plugins)---
-    [Global Fixtures](#global-fixtures)---
-    [Test Fixture Decision-Tree Wizard Thing](#test-fixture-decision-tree-wizard-thing)---
-    [Interfaces](#interfaces)---
-    [Reporters](#reporters)---
-    [Node.JS native ESM support](#nodejs-native-esm-support)---
-    [Running Mocha in the Browser](#running-mocha-in-the-browser)---
-    [Desktop Notification Support](#desktop-notification-support)---
-    [Configuring Mocha (Node.js)](#configuring-mocha-nodejs)---
-    [The `test/` Directory](#the-test-directory)---
-    [Error Codes](#error-codes)---
-    [Editor Plugins](#editor-plugins)---
-    [Examples](#examples)---
-    [Testing Mocha](#testing-mocha)---
-    [More Information](#more-information)---
---
[#](#installation) Installation---
----------------------------------
---
Install with [npm](https://npmjs.org/) globally:---
---
    $ npm install --global mocha---
    ---
---
or as a development dependency for your project:---
---
    $ npm install --save-dev mocha---
    ---
---
> As of v8.0.0, Mocha requires Node.js v10.12.0 or newer.---
---
[#](#getting-started) Getting Started---
----------------------------------------
---
    $ npm install mocha---
    $ mkdir test---
    $ $EDITOR test/test.js ---
    ---
---
In your editor:---
---
    var assert = require('assert');---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it('should return -1 when the value is not present', function() {---
          assert.equal([1, 2, 3].indexOf(4), -1);---
        });---
      });---
    });---
    ---
---
Back in the terminal:---
---
    $ ./node_modules/mocha/bin/mocha---
    ---
      Array---
        ---
          ✓ should return -1 when the value is not present---
    ---
    ---
      1 passing (9ms)---
    ---
---
Set up a test script in package.json:---
---
    "scripts": {---
      "test": "mocha"---
    }---
    ---
---
Then run tests with:---
---
    $ npm test---
    ---
---
[#](#run-cycle-overview) Run Cycle Overview---
----------------------------------------------
---
> Updated for v9.0.0.---
---
The following is a mid-level outline of Mocha's "flow of execution" when run in Node.js; the "less important" details have been omitted.---
---
In a browser, test files are loaded by `<script>` tags, and calling `mocha.run()` begins at step 9 [below](#serial-mode).---
---
### [#](#serial-mode) Serial Mode---
---
1.  User (that's you) executes `mocha`---
2.  Loads options from config files, if present---
3.  Mocha processes any command-line options provided (see section on [configuration merging](#merging) for details)---
4.  If known flags for the `node` executable are found:---
    1.  Mocha will spawn `node` in a child process, executing itself with these flags---
    2.  Otherwise, Mocha does not spawn a child process---
5.  Mocha loads modules specified by `--require`---
    1.  If a file loaded this way contains known Mocha-specific exports (e.g., [root hook plugins](#root-hook-plugins)), Mocha "registers" these---
    2.  If not, Mocha ignores any exports of a `--require`'d module---
6.  Mocha validates any custom reporters or interfaces which were loaded via `--require` or otherwise---
7.  Mocha _discovers_ test files; when given no files or directories, it finds files with extensions `.js`, `.mjs` or `.cjs` in the `test` directory (but not its children), relative to the current working directory---
8.  The (default) [bdd interface](#bdd) loads the test files _in no particular order_, which are given an interface-specific `global` context (this is how, e.g., `describe()` ends up as a global in a test file)---
    1.  When a test file is loaded, Mocha executes all of its suites and finds–_but does not execute_–any hooks and tests therein.---
    2.  Top-level hooks, tests and suites are all made members of an "invisible" _root suite_; there is only _one_ root suite for the entire process---
9.  Mocha runs [global setup fixtures](#global-setup-fixtures), if any---
10.  Starting with the "root" suite, Mocha executes:---
11.  Any "before all" hooks (for the _root_ suite, this only happens once; see [root hook plugins](#root-hook-plugins))---
12.  For each test, Mocha executes:---
    1.  Any "before each" hooks---
    2.  The test (and reports the result)---
    3.  Any "after each" hooks---
13.  If the current suite has a child suite, repeat the steps in 10. for each child suite; each child suite _inherits_ any "before each" and "after each" hooks defined in its parent---
14.  Any "after all" hooks (for the _root_ suite, this only happens once; see [root hook plugins](#root-hook-plugins))---
15.  Mocha prints a final summary/epilog, if applicable---
16.  Mocha runs [global teardown fixtures](#global-teardown-fixtures), if any---
---
### [#](#parallel-mode) Parallel Mode---
---
1.  Repeat steps 1 through 6 from [Serial Mode](#serial-mode) above, skipping reporter validation---
2.  All test files found are put into a queue (they are _not_ loaded by the main process)---
3.  Mocha runs [global setup fixtures](#global-setup-fixtures), if any---
4.  Mocha creates a pool of subprocesses ("workers")---
5.  _Immediately before_ a worker runs the first test it receives, the worker "bootstraps" itself by:---
    1.  Loading all `--require`'d modules---
    2.  Registering any root hook plugins---
    3.  _Ignoring_ global fixtures and custom reporters---
    4.  Asserting the built-in or custom interface is valid---
6.  When a worker receives a test file to run, the worker creates a new Mocha instance _for the single test file_, and:---
7.  The worker repeats step 8 from [above](#serial-mode)---
8.  The worker repeats step 10 from [above](#serial-mode), with the caveat that the worker _does not_ report test results directly; it holds them in a memory buffer---
9.  When the worker completes the test file, buffered results are returned to the main process, which then gives them to the user-specified reporter (`spec` by default)---
10.  The worker makes itself available to the pool; the pool gives the worker another test file to run, if any remain---
11.  Mocha prints a final summary/epilog, if applicable---
12.  Mocha runs [global teardown fixtures](#global-teardown-fixtures), if any---
---
[#](#detects-multiple-calls-to-done) Detects Multiple Calls to `done()`---
--------------------------------------------------------------------------
---
If you use callback-based async tests, Mocha will throw an error if `done()` is called multiple times. This is handy for catching accidental double callbacks.---
---
    it('double done', function(done) {---
      ---
      setImmediate(done);---
      setImmediate(done);---
    });---
    ---
---
Running the above test will give you the below error message:---
---
    $ ./node_modules/.bin/mocha mocha.test.js---
    ---
    ---
      ✓ double done---
      1) double done---
    ---
      1 passing (6ms)---
      1 failing---
    ---
      1) double done:---
         Error: done() called multiple times---
          at Object.<anonymous> (mocha.test.js:1:63)---
          at require (internal/module.js:11:18)---
          at Array.forEach (<anonymous>)---
          at startup (bootstrap_node.js:187:16)---
          at bootstrap_node.js:608:3---
    ---
---
[#](#assertions) Assertions---
------------------------------
---
Mocha allows you to use any assertion library you wish. In the above example, we're using Node.js' built-in [assert](https://nodejs.org/api/assert.html) module — but generally, if it throws an `Error`, it will work! This means you can use libraries such as:---
---
-    [should.js](https://github.com/shouldjs/should.js) - BDD style shown throughout these docs---
-    [expect.js](https://github.com/LearnBoost/expect.js) - `expect()` style assertions---
-    [chai](https://www.chaijs.com/) - `expect()`, `assert()` and `should`\-style assertions---
-    [better-assert](https://github.com/visionmedia/better-assert) - C-style self-documenting `assert()`---
-    [unexpected](https://unexpected.js.org/) - "the extensible BDD assertion toolkit"---
---
[#](#asynchronous-code) Asynchronous Code---
--------------------------------------------
---
By adding an argument (usually named `done`) to `it()` to a test callback, Mocha will know that it should wait for this function to be called to complete the test. This callback accepts both an `Error` instance (or subclass thereof) _or_ a falsy value; anything else is invalid usage and throws an error (usually causing a failed test).---
---
    describe('User', function() {---
      describe('#save()', function() {---
        it('should save without error', function(done) {---
          var user = new User('Luna');---
          user.save(function(err) {---
            if (err) done(err);---
            else done();---
          });---
        });---
      });---
    });---
    ---
---
Alternatively, use the `done()` callback directly (which will handle an error argument, if it exists):---
---
    describe('User', function() {---
      describe('#save()', function() {---
        it('should save without error', function(done) {---
          var user = new User('Luna');---
          user.save(done);---
        });---
      });---
    });---
    ---
---
### [#](#working-with-promises) Working with Promises---
---
Alternately, instead of using the `done()` callback, you may return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This is useful if the APIs you are testing return promises instead of taking callbacks:---
---
    beforeEach(function() {---
      return db.clear().then(function() {---
        return db.save([tobi, loki, jane]);---
      });---
    });---
    ---
    describe('#find()', function() {---
      it('respond with matching records', function() {---
        return db.find({type: 'User'}).should.eventually.have.length(3);---
      });---
    });---
    ---
---
> The latter example uses [Chai as Promised](https://www.npmjs.com/package/chai-as-promised) for fluent promise assertions.---
---
In Mocha v3.0.0 and newer, returning a `Promise` _and_ calling `done()` will result in an exception, as this is generally a mistake:---
---
    const assert = require('assert');---
    ---
    ---
    it('should complete this test', function(done) {---
      return new Promise(function(resolve) {---
        assert.ok(true);---
        resolve();---
      }).then(done);---
    });---
    ---
---
The above test will fail with `Error: Resolution method is overspecified. Specify a callback - or-  return a Promise; not both.`. In versions older than v3.0.0, the call to `done()` is effectively ignored.---
---
### [#](#using-async-await) Using async / await---
---
If your JS environment supports [async / await](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/async_function), you can also write asynchronous tests like this:---
---
    beforeEach(async function() {---
      await db.clear();---
      await db.save([tobi, loki, jane]);---
    });---
    ---
    describe('#find()', function() {---
      it('responds with matching records', async function() {---
        const users = await db.find({type: 'User'});---
        users.should.have.length(3);---
      });---
    });---
    ---
---
[#](#synchronous-code) Synchronous Code---
------------------------------------------
---
When testing synchronous code, omit the callback and Mocha will automatically continue on to the next test.---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it('should return -1 when the value is not present', function() {---
          [1, 2, 3].indexOf(5).should.equal(-1);---
          [1, 2, 3].indexOf(0).should.equal(-1);---
        });---
      });---
    });---
    ---
---
[#](#arrow-functions) Arrow Functions---
----------------------------------------
---
Passing [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (aka "lambdas") to Mocha is discouraged. Lambdas lexically bind `this` and cannot access the Mocha context. For example, the following code will fail:---
---
    describe('my suite', () => {---
      it('my test', () => {---
        ---
        this.timeout(1000);---
        assert.ok(true);---
      });---
    });---
    ---
---
_If you do not need to use_ Mocha's context, lambdas should work. Be aware that using lambdas will be more painful to refactor if the need eventually arises!---
---
[#](#hooks) Hooks---
--------------------
---
With its default "BDD"-style interface, Mocha provides the hooks `before()`, `after()`, `beforeEach()`, and `afterEach()`. These should be used to set up preconditions and clean up after your tests.---
---
    describe('hooks', function() {---
      before(function() {---
        ---
      });---
    ---
      after(function() {---
        ---
      });---
    ---
      beforeEach(function() {---
        ---
      });---
    ---
      afterEach(function() {---
        ---
      });---
    ---
      ---
    });---
    ---
---
> Tests can appear before, after, or interspersed with your hooks. Hooks will run in the order they are defined, as appropriate; all `before()` hooks run (once), then any `beforeEach()` hooks, tests, any `afterEach()` hooks, and finally `after()` hooks (once).---
---
### [#](#describing-hooks) Describing Hooks---
---
Any hook can be invoked with an optional description, making it easier to pinpoint errors in your tests. If a hook is given a named function, that name will be used if no description is supplied.---
---
    beforeEach(function() {---
      ---
    });---
    ---
    beforeEach(function namedFun() {---
      ---
    });---
    ---
    beforeEach('some description', function() {---
      ---
    });---
    ---
---
### [#](#asynchronous-hooks) Asynchronous Hooks---
---
All hooks (`before()`, `after()`, `beforeEach()`, `afterEach()`) may be sync or async as well, behaving much like a regular test-case. For example, you may wish to populate database with dummy content before each test:---
---
    describe('Connection', function() {---
      var db = new Connection(),---
        tobi = new User('tobi'),---
        loki = new User('loki'),---
        jane = new User('jane');---
    ---
      beforeEach(function(done) {---
        db.clear(function(err) {---
          if (err) return done(err);---
          db.save([tobi, loki, jane], done);---
        });---
      });---
    ---
      describe('#find()', function() {---
        it('respond with matching records', function(done) {---
          db.find({type: 'User'}, function(err, res) {---
            if (err) return done(err);---
            res.should.have.length(3);---
            done();---
          });---
        });---
      });---
    });---
    ---
---
### [#](#root-level-hooks) Root-Level Hooks---
---
A hook defined at the top scope of a test file (outside of a suite) is a _root hook_.---
---
As of v8.0.0, [Root Hook Plugins](#root-hook-plugins) are the preferred mechanism for setting root hooks.---
---
### [#](#delayed-root-suite) Delayed Root Suite---
---
> _WARNING: Delayed root suites are incompatible with [parallel mode](#parallel-tests)._---
---
If you need to perform asynchronous operations before any of your suites are run, you may delay the root suite. Run `mocha` with the `--delay` flag. This will attach a special callback function, `run()`, to the global context:---
---
    setTimeout(function() {---
      ---
    ---
      describe('my suite', function() {---
        ---
      });---
    ---
      run();---
    }, 5000);---
    ---
---
[#](#pending-tests) Pending Tests---
------------------------------------
---
"Pending"–as in "someone should write these test cases eventually"–test-cases are those _without_ a callback:---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        ---
        it('should return -1 when the value is not present');---
      });---
    });---
    ---
---
Pending tests will be included in the test results, and marked as pending. A pending test is not considered a failed test.---
---
Read the [inclusive tests section](#inclusive-tests) for an example of conditionally marking a test as pending via `this.skip()`.---
---
[#](#exclusive-tests) Exclusive Tests---
----------------------------------------
---
> _WARNING: Exclusive tests are incompatible with [parallel mode](#parallel-tests)._---
---
The exclusivity feature allows you to run _only_ the specified suite or test-case by appending `.only()` to the function. Here's an example of executing only a particular suite:---
---
    describe('Array', function() {---
      describe.only('#indexOf()', function() {---
        ---
      });---
    });---
    ---
---
_Note_: All nested suites will still be executed.---
---
Here's an example of executing an individual test case:---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it.only('should return -1 unless present', function() {---
          ---
        });---
    ---
        it('should return the index when present', function() {---
          ---
        });---
      });---
    });---
    ---
---
Previous to v3.0.0, `.only()` used string matching to decide which tests to execute; this is no longer the case. In v3.0.0 or newer, `.only()` can be used multiple times to define a subset of tests to run:---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it.only('should return -1 unless present', function() {---
          ---
        });---
    ---
        it.only('should return the index when present', function() {---
          ---
        });---
    ---
        it('should return -1 if called with a non-Array context', function() {---
          ---
        });---
      });---
    });---
    ---
---
You may also choose multiple suites:---
---
    describe('Array', function() {---
      describe.only('#indexOf()', function() {---
        it('should return -1 unless present', function() {---
          ---
        });---
    ---
        it('should return the index when present', function() {---
          ---
        });---
      });---
    ---
      describe.only('#concat()', function() {---
        it('should return a new Array', function() {---
          ---
        });---
      });---
    ---
      describe('#slice()', function() {---
        it('should return a new Array', function() {---
          ---
        });---
      });---
    });---
    ---
---
But _tests will have precedence_:---
---
    describe('Array', function() {---
      describe.only('#indexOf()', function() {---
        it.only('should return -1 unless present', function() {---
          ---
        });---
    ---
        it('should return the index when present', function() {---
          ---
        });---
      });---
    });---
    ---
---
_Note_: Hooks, if present, will still be executed.---
---
> Be mindful not to commit usages of `.only()` to version control, unless you really mean it! To do so one can run mocha with the option `--forbid-only` in the continuous integration test command (or in a git precommit hook).---
---
[#](#inclusive-tests) Inclusive Tests---
----------------------------------------
---
This feature is the inverse of `.only()`. By appending `.skip()`, you may tell Mocha to ignore test case(s). Anything skipped will be marked as [pending](#pending-tests), and reported as such. Here's an example of skipping an individual test:---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it.skip('should return -1 unless present', function() {---
          ---
        });---
    ---
        it('should return the index when present', function() {---
          ---
        });---
      });---
    });---
    ---
---
You can also put `.skip()` on an entire suite. This is equivalent to appending `.skip()` onto all tests in the suite. Hooks in the suite are also skipped.---
---
    describe('Array', function() {---
      describe.skip('#indexOf()', function() {---
        it('should return -1 unless present', function() {---
          ---
        });---
      });---
    });---
    ---
---
_Note_: Code in skipped suites, that is placed outside of hooks or tests is still executed, as mocha will still invoke the suite function to build up the suite structure for visualization.---
---
> _Best practice_: Use `.skip()` instead of commenting tests out.---
---
You may also skip _at runtime_ using `this.skip()`. If a test needs an environment or configuration which cannot be detected beforehand, a runtime skip is appropriate. For example:---
---
    it('should only test in the correct environment', function() {---
      if () {---
        ---
      } else {---
        this.skip();---
      }---
    });---
    ---
---
The above test will be reported as [pending](#pending-tests). It's also important to note that calling `this.skip()` will effectively _abort_ the test.---
---
> _Best practice_: To avoid confusion, do not execute further instructions in a test or hook after calling `this.skip()`.---
---
Contrast the above test with the following code:---
---
    it('should only test in the correct environment', function() {---
      if () {---
        ---
      } else {---
        ---
      }---
    });---
    ---
---
Because this test _does nothing_, it will be reported as _passing_.---
---
> _Best practice_: Don't do nothing! A test should make an assertion or use `this.skip()`.---
---
To skip _multiple_ tests in this manner, use `this.skip()` in a "before all" hook:---
---
    before(function() {---
      if () {---
        ---
      } else {---
        this.skip();---
      }---
    });---
    ---
---
This will skip all `it`, `beforeEach/afterEach`, and `describe` blocks within the suite. `before/after` hooks are skipped unless they are defined at the same level as the hook containing `this.skip()`.---
---
    describe('outer', function() {---
      before(function() {---
        this.skip();---
      });---
    ---
      after(function() {---
        ---
      });---
    ---
      describe('inner', function() {---
        before(function() {---
          ---
        });---
    ---
        after(function() {---
          ---
        });---
      });---
    });---
    ---
---
> _Updated in v7.0.0:_ skipping a test within an "after all" hook is disallowed and will throw an exception. Use a return statement or other means to abort hook execution.---
---
Before Mocha v3.0.0, `this.skip()` was not supported in asynchronous tests and hooks.---
---
[#](#retry-tests) Retry Tests---
--------------------------------
---
You can choose to retry failed tests up to a certain number of times. This feature is designed to handle end-to-end tests (functional tests/Selenium…) where resources cannot be easily mocked/stubbed. - - It's not recommended to use this feature for unit tests- - .---
---
This feature does re-run a failed test and its corresponding `beforeEach/afterEach` hooks, but not `before/after` hooks. `this.retries()` has no effect on failing hooks.---
---
- - NOTE- - : Example below was written using Selenium webdriver (which [overwrites global Mocha hooks](https://github.com/SeleniumHQ/selenium/blob/c10e8a955883f004452cdde18096d70738397788/javascript/node/selenium-webdriver/testing/index.js) for `Promise` chain).---
---
    describe('retries', function() {---
      ---
      this.retries(4);---
    ---
      beforeEach(function() {---
        browser.get('http://www.yahoo.com');---
      });---
    ---
      it('should succeed on the 3rd try', function() {---
        ---
        this.retries(2);---
        expect($('.foo').isDisplayed()).to.eventually.be.true;---
      });---
    });---
    ---
---
[#](#dynamically-generating-tests) Dynamically Generating Tests---
------------------------------------------------------------------
---
Given Mocha's use of `Function.prototype.call` and function expressions to define suites and test cases, it's straightforward to generate your tests dynamically. No special syntax is required — plain ol' JavaScript can be used to achieve functionality similar to "parameterized" tests, which you may have seen in other frameworks.---
---
Take the following example:---
---
    var assert = require('chai').assert;---
    ---
    function add() {---
      return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {---
        return prev + curr;---
      }, 0);---
    }---
    ---
    describe('add()', function() {---
      var tests = [---
        {args: [1, 2], expected: 3},---
        {args: [1, 2, 3], expected: 6},---
        {args: [1, 2, 3, 4], expected: 10}---
      ];---
    ---
      tests.forEach(function(test) {---
        it('correctly adds ' + test.args.length + ' args', function() {---
          var res = add.apply(null, test.args);---
          assert.equal(res, test.expected);---
        });---
      });---
    });---
    ---
---
The above code will produce a suite with three specs:---
---
    $ mocha---
    ---
      add()---
        ✓ correctly adds 2 args---
        ✓ correctly adds 3 args---
        ✓ correctly adds 4 args---
    ---
---
Test duration---
----------------
---
Many reporters will display test duration and flag tests that are slow (default: 75ms), as shown here with the SPEC reporter:---
---
![test duration](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-spec-duration.resize920,9999-withoutEnlargement.317409f18f.png)---
---
There are three levels of test duration (depicted in the following image):---
---
1.  FAST: Tests that run within half of the "slow" threshold will show the duration in green (if at all).---
2.  NORMAL: Tests that run exceeding half of the threshold (but still within it) will show the duration in yellow.---
3.  SLOW: Tests that run exceeding the threshold will show the duration in red.---
---
![test duration range](data:image/png;base64,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)---
---
To tweak what's considered "slow", you can use the `slow()` method:---
---
    describe('something slow', function() {---
      this.slow(300000); ---
    ---
      it('should take long enough for me to go make a sandwich', function() {---
        ---
      });---
    });---
    ---
---
[#](#timeouts) Timeouts---
--------------------------
---
### [#](#suite-level) Suite-level---
---
Suite-level timeouts may be applied to entire test "suites", or disabled via `this.timeout(0)`. This will be inherited by all nested suites and test-cases that do not override the value.---
---
    describe('a suite of tests', function() {---
      this.timeout(500);---
    ---
      it('should take less than 500ms', function(done) {---
        setTimeout(done, 300);---
      });---
    ---
      it('should take less than 500ms as well', function(done) {---
        setTimeout(done, 250);---
      });---
    });---
    ---
---
### [#](#test-level) Test-level---
---
Test-specific timeouts may also be applied, or the use of `this.timeout(0)` to disable timeouts all together:---
---
    it('should take less than 500ms', function(done) {---
      this.timeout(500);---
      setTimeout(done, 300);---
    });---
    ---
---
### [#](#hook-level) Hook-level---
---
Hook-level timeouts may also be applied:---
---
    describe('a suite of tests', function() {---
      beforeEach(function(done) {---
        this.timeout(3000); ---
        setTimeout(done, 2500);---
      });---
    });---
    ---
---
Again, use `this.timeout(0)` to disable the timeout for a hook.---
---
> In v3.0.0 or newer, a parameter passed to `this.timeout()` greater than the [maximum delay value](https://developer.mozilla.org/docs/Web/API/WindowTimers/setTimeout#Maximum_delay_value) will cause the timeout to be disabled. In v8.0.0 or newer, `this.enableTimeouts()` has been removed. - - Warning:- -  With async tests if you disable timeouts via `this.timeout(0)` and then do not call `done()`, your test will exit silently.---
---
[#](#diffs) Diffs---
--------------------
---
Mocha supports the `err.expected` and `err.actual` properties of any thrown `AssertionError`s from an assertion library. Mocha will attempt to display the difference between what was expected, and what the assertion actually saw. Here's an example of a "string" diff using `--inline-diffs`:---
---
![string diffs](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-string-diffs.resize920,9999-withoutEnlargement.8cac51b73c.png)---
---
[#](#command-line-usage) Command-Line Usage---
----------------------------------------------
---
    mocha [spec..]---
    ---
    Run tests with Mocha---
    ---
    Commands---
      mocha inspect [spec..]  Run tests with Mocha                         [default]---
      mocha init <path>       create a client-side Mocha setup at <path>---
    ---
    Rules & Behavior---
      --allow-uncaught           Allow uncaught errors to propagate        [boolean]---
      --async-only, -A           Require all tests to use a callback (async) or---
                                 return a Promise                          [boolean]---
      --bail, -b                 Abort ("bail") after first test failure   [boolean]---
      --check-leaks              Check for global variable leaks           [boolean]---
      --delay                    Delay initial execution of root suite     [boolean]---
      --exit                     Force Mocha to quit after tests complete  [boolean]---
      --forbid-only              Fail if exclusive test(s) encountered     [boolean]---
      --forbid-pending           Fail if pending test(s) encountered       [boolean]---
      --global, --globals        List of allowed global variables            [array]---
      --jobs, -j                 Number of concurrent jobs for --parallel; use 1 to---
                                 run in serial---
                                       [number] [default: (number of CPU cores - 1)]---
      --parallel, -p             Run tests in parallel                     [boolean]---
      --retries                  Retry failed tests this many times         [number]---
      --slow, -s                 Specify "slow" test threshold (in milliseconds)---
                                                              [string] [default: 75]---
      --timeout, -t, --timeouts  Specify test timeout threshold (in milliseconds)---
                                                            [string] [default: 2000]---
      --ui, -u                   Specify user interface    [string] [default: "bdd"]---
    ---
    Reporting & Output---
      --color, -c, --colors                     Force-enable color output  [boolean]---
      --diff                                    Show diff on failure---
                                                           [boolean] [default: true]---
      --full-trace                              Display full stack traces  [boolean]---
      --growl, -G                               Enable Growl notifications [boolean]---
      --inline-diffs                            Display actual/expected differences---
                                                inline within each string  [boolean]---
      --reporter, -R                            Specify reporter to use---
                                                          [string] [default: "spec"]---
      --reporter-option, --reporter-options,    Reporter-specific options---
      -O                                        (<k=v,[k1=v1,..]>)           [array]---
    ---
    Configuration---
      --config   Path to config file           [string] [default: (nearest rc file)]---
      --package  Path to package.json for config                            [string]---
    ---
    File Handling---
      --extension          File extension(s) to load---
                                               [array] [default: ["js","cjs","mjs"]]---
      --file               Specify file(s) to be loaded prior to root suite---
                           execution                       [array] [default: (none)]---
      --ignore, --exclude  Ignore file(s) or glob pattern(s)---
                                                           [array] [default: (none)]---
      --recursive          Look for tests in subdirectories                [boolean]---
      --require, -r        Require module                  [array] [default: (none)]---
      --sort, -S           Sort test files                                 [boolean]---
      --watch, -w          Watch files in the current working directory for changes---
                                                                           [boolean]---
      --watch-files        List of paths or globs to watch                   [array]---
      --watch-ignore       List of paths or globs to exclude from watching---
                                          [array] [default: ["node_modules",".git"]]---
    ---
    Test Filters---
      --fgrep, -f   Only run tests containing this string                   [string]---
      --grep, -g    Only run tests matching this string or regexp           [string]---
      --invert, -i  Inverts --grep and --fgrep matches                     [boolean]---
    ---
    Positional Arguments---
      spec  One or more files, directories, or globs to test---
                                                         [array] [default: ["test"]]---
    ---
    Other Options---
      --help, -h         Show usage information & exit                     [boolean]---
      --version, -V      Show version number & exit                        [boolean]---
      --list-interfaces  List built-in user interfaces & exit              [boolean]---
      --list-reporters   List built-in reporters & exit                    [boolean]---
    ---
    Mocha Resources---
        Chat: https://gitter.im/mochajs/mocha---
      GitHub: https://github.com/mochajs/mocha.git---
        Docs: https://mochajs.org/---
    ---
---
### [#](#-allow-uncaught) `--allow-uncaught`---
---
By default, Mocha will attempt to trap uncaught exceptions thrown from running tests and report these as test failures. Use `--allow-uncaught` to disable this behavior and allow uncaught exceptions to propagate. Will typically cause the process to crash.---
---
This flag is useful when debugging particularly difficult-to-track exceptions.---
---
### [#](#-async-only-a) `--async-only, -A`---
---
Enforce a rule that tests must be written in "async" style, meaning each test provides a `done` callback or returns a `Promise`. Non-compliant tests will be marked as failures.---
---
### [#](#-bail-b) `--bail, -b`---
---
Causes Mocha to stop running tests after the first test failure it encounters. Corresponding "after each" and "after all" hooks are executed for potential cleanup.---
---
`--bail` does _not_ imply `--exit`.---
---
### [#](#-check-leaks) `--check-leaks`---
---
Use this option to have Mocha check for global variables that are leaked while running tests. Specify globals that are acceptable via the `--global` option (for example: `--check-leaks --global jQuery --global MyLib`).---
---
### [#](#-compilers) `--compilers`---
---
> _`--compilers` was removed in v6.0.0. See [further explanation and workarounds](https://github.com/mochajs/mocha/wiki/compilers-deprecation)._---
---
### [#](#-exit) `--exit`---
---
> _Updated in v4.0.0._---
---
TL;DR: If your tests hang after an upgrade to Mocha v4.0.0 or newer, use `--exit` for a quick (though not necessarily recommended) fix.---
---
_Prior to_ version v4.0.0, _by default_, Mocha would force its own process to exit once it was finished executing all tests. This behavior enables a set of potential problems; it's indicative of tests (or fixtures, harnesses, code under test, etc.) which don't clean up after themselves properly. Ultimately, "dirty" tests can (but not always) lead to _false positive_ or _false negative_ results.---
---
"Hanging" most often manifests itself if a server is still listening on a port, or a socket is still open, etc. It can also be something like a runaway `setInterval()`, or even an errant `Promise` that never fulfilled.---
---
The _default behavior_ in v4.0.0 (and newer) is `--no-exit`, where previously it was `--exit`.---
---
- - The easiest way to "fix" the issue is to pass `--exit` to the Mocha process.- -  It _can_ be time-consuming to debug — because it's not always obvious where the problem is — but it _is_ recommended to do so.---
---
To ensure your tests aren't leaving messes around, here are some ideas to get started:---
---
-    See the [Node.js guide to debugging](https://nodejs.org/en/docs/inspector/)---
-    Use the new [`async_hooks`](https://github.com/nodejs/node/blob/master/doc/api/async_hooks.md) API ([example](https://git.io/vdlNM))---
-    Try something like [wtfnode](https://npm.im/wtfnode)---
-    Use [`.only`](#exclusive-tests) until you find the test that causes Mocha to hang---
---
### [#](#-forbid-only) `--forbid-only`---
---
Enforce a rule that tests may not be exclusive (use of e.g., `describe.only()` or `it.only()` is disallowed).---
---
`--forbid-only` causes Mocha to fail when an exclusive ("only'd") test or suite is encountered, and it will abort further test execution.---
---
### [#](#-forbid-pending) `--forbid-pending`---
---
Enforce a rule that tests may not be skipped (use of e.g., `describe.skip()`, `it.skip()`, or `this.skip()` anywhere is disallowed).---
---
`--forbid-pending` causes Mocha to fail when a skipped ("pending") test or suite is encountered, and it will abort further test execution.---
---
### [#](#-global-variable-name) `--global <variable-name>`---
---
> _Updated in v6.0.0; the option is `--global` and `--globals` is now an alias._---
---
Define a global variable name. For example, suppose your app deliberately exposes a global named `app` and `YUI`, you may want to add `--global app --global YUI`.---
---
`--global` accepts wildcards. You could do `--global '- bar'` and it would match `foobar`, `barbar`, etc. You can also pass in `'- '` to ignore all globals.---
---
`--global` can accept a comma-delimited list; `--global app,YUI` is equivalent to `--global app --global YUI`.---
---
By using this option in conjunction with `--check-leaks`, you can specify a whitelist of known global variables that you _expect_ to leak into global scope.---
---
### [#](#-retries-n) `--retries <n>`---
---
Retries failed tests `n` times.---
---
Mocha does not retry test failures by default.---
---
### [#](#-slow-ms-s-ms) `--slow <ms>, -s <ms>`---
---
Specify the "slow" test threshold in milliseconds. Mocha uses this to highlight test cases that are taking too long. "Slow" tests are not considered failures.---
---
Note: A test that executes for _half_ of the "slow" time will be highlighted _in yellow_ with the default `spec` reporter; a test that executes for entire "slow" time will be highlighted _in red_.---
---
### [#](#-timeout-ms-t-ms) `--timeout <ms>, -t <ms>`---
---
> _Update in v6.0.0: `--no-timeout` is implied when invoking Mocha using inspect flags. It is equivalent to `--timeout 0`. `--timeout 99999999` is no longer needed._---
---
Specifies the test case timeout, defaulting to two (2) seconds (2000 milliseconds). Tests taking longer than this amount of time will be marked as failed.---
---
To override you may pass the timeout in milliseconds, or a value with the `s` suffix, e.g., `--timeout 2s` and `--timeout 2000` are equivalent.---
---
To disable timeouts, use `--no-timeout`.---
---
Note: synchronous (blocking) tests are also bound by the timeout, but they will not complete until the code stops blocking. Infinite loops will still be infinite loops!---
---
### [#](#-ui-name-u-name) `--ui <name>, -u <name>`---
---
The `--ui` option lets you specify the interface to use, defaulting to `bdd`.---
---
### [#](#-color-c-colors) `--color, -c, --colors`---
---
> _Updated in v6.0.0. `--colors` is now an alias for `--color`._---
---
"Force" color output to be enabled, or alternatively force it to be disabled via `--no-color`. By default, Mocha uses the [supports-color](https://npm.im/supports-color) module to decide.---
---
In some cases, color output will be explicitly suppressed by certain reporters outputting in a machine-readable format.---
---
### [#](#-diff) `--diff`---
---
When possible, show the difference between expected and actual values when an assertion failure is encountered.---
---
This flag is unusual in that it - - defaults to `true`- - ; use `--no-diff` to suppress Mocha's own diff output.---
---
Some assertion libraries will supply their own diffs, in which case Mocha's will not be used, regardless of the default value.---
---
Mocha's own diff output does not conform to any known standards, and is designed to be human-readable.---
---
### [#](#-full-trace) `--full-trace`---
---
Enable "full" stack traces. By default, Mocha attempts to distill stack traces into less noisy (though still useful) output.---
---
This flag is helpful when debugging a suspected issue within Mocha or Node.js itself.---
---
### [#](#-growl-g) `--growl, -G`---
---
Enable [Growl](http://growl.info/) (or OS-level notifications where available).---
---
Requires extra software to be installed; see the [growl module's docs](https://npm.im/growl) for more information.---
---
### [#](#-inline-diffs) `--inline-diffs`---
---
Enable "inline" diffs, an alternative output for diffing strings.---
---
Useful when working with large strings.---
---
Does nothing if an assertion library supplies its own diff output.---
---
### [#](#-reporter-name-r-name) `--reporter <name>, -R <name>`---
---
Specify the reporter that will be used, defaulting to `spec`.---
---
Allows use of third-party reporters. For example, [mocha-lcov-reporter](https://npm.im/mocha-lcov-reporter) may be used with `--reporter mocha-lcov-reporter` after it has been installed.---
---
### [#](#-reporter-option-option-o-option-reporter-options-option) `--reporter-option <option>, -O <option>, --reporter-options <option>`---
---
> _Updated in v6.0.0. Can be specified multiple times. `--reporter-options` is now an alias for `--reporter-option`._---
---
Provide options specific to a reporter in `<key>=<value>` format, e.g., `--reporter tap --reporter-option tapVersion=13`.---
---
Not all reporters accept options.---
---
Can be specified as a comma-delimited list.---
---
### [#](#-config-path) `--config <path>`---
---
> _New in v6.0.0._---
---
Specify an explicit path to a [configuration file](#configuring-mocha-nodejs).---
---
By default, Mocha will search for a config file if `--config` is not specified; use `--no-config` to suppress this behavior.---
---
### [#](#-opts-path) `--opts <path>`---
---
> _Removed in v8.0.0. Please use [configuration file](#configuring-mocha-nodejs) instead._---
---
### [#](#-package-path) `--package <path>`---
---
> _New in v6.0.0._---
---
Specify an explicit path to a [`package.json` file](#configuring-mocha-nodejs) (ostensibly containing configuration in a `mocha` property).---
---
By default, Mocha looks for a `package.json` in the current working directory or nearest ancestor, and will use the first file found (regardless of whether it contains a `mocha` property); to suppress `package.json` lookup, use `--no-package`.---
---
### [#](#-extension-ext) `--extension <ext>`---
---
Files having this extension will be considered test files. Defaults to `js`.---
---
Specifying `--extension` will _remove_ `.js` as a test file extension; use `--extension js` to re-add it. For example, to load `.mjs` and `.js` test files, you must supply `--extension mjs --extension js`.---
---
The option can be given multiple times. The option accepts a comma-delimited list: `--extension a,b` is equivalent to `--extension a --extension b`.---
---
> _New in v8.2.0._---
---
`--extension` now supports multipart extensions (e.g., `spec.js`), leading dots (`.js`) and combinations thereof (`.spec.js`);---
---
### [#](#-file-filedirectoryglob) `--file <file|directory|glob>`---
---
> _WARNING: `--file` is incompatible with [parallel mode](#parallel-tests)._---
---
Explicitly _include_ a test file to be loaded before other test files. Multiple uses of `--file` are allowed, and will be loaded in order given.---
---
Useful if you want to declare, for example, hooks to be run before every test across all other test files.---
---
Files specified this way are not affected by `--sort` or `--recursive`.---
---
Files specified in this way should contain one or more suites, tests or hooks. If this is not the case, consider `--require` instead.---
---
### [#](#-ignore-filedirectoryglob-exclude-filedirectoryglob) `--ignore <file|directory|glob>, --exclude <file|directory|glob>,`---
---
Explicitly ignore (exclude) one or more test files, directories or globs (e.g., `some/- - /files- `) that would otherwise be loaded.---
---
Files specified using `--file` _are not affected_ by this option.---
---
Can be specified multiple times.---
---
### [#](#-recursive) `--recursive`---
---
When looking for test files, recurse into subdirectories.---
---
See `--extension` for defining which files are considered test files.---
---
### [#](#-require-module-r-module) `--require <module>, -r <module>`---
---
Require a module before loading the user interface or test files. This is useful for:---
---
-    Test harnesses---
-    Assertion libraries that augment built-ins or global scope (such as [should.js](https://npm.im/should))---
-    Instant ECMAScript modules via [esm](https://npm.im/esm)---
-    Compilers such as Babel via [@babel/register](https://npm.im/@babel/register) or TypeScript via [ts-node](https://npm.im/ts-node) (using `--require ts-node/register`). See [Babel](https://github.com/mochajs/mocha-examples/tree/master/packages/babel) or [TypeScript](https://github.com/mochajs/mocha-examples/tree/master/packages/typescript) working examples.---
---
Modules required in this manner are expected to do work synchronously; Mocha won't wait for async tasks in a required module to finish.---
---
- - You cannot use `--require` to set hooks- - . If you want to set hooks to run, e.g., before each test, use a [Root Hook Plugin](#root-hook-plugins).---
---
> As of v8.0.0, Mocha supports `--require` for [NodeJS native ESM](#nodejs-native-esm-support). There is no separate `--import` flag.---
---
### [#](#-sort-s) `--sort, -S`---
---
> _WARNING: `--sort` is incompatible with [parallel mode](#parallel-tests)._---
---
Sort test files (by absolute path) using [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).---
---
### [#](#-watch-w) `--watch, -w`---
---
Rerun tests on file changes.---
---
The `--watch-files` and `--watch-ignore` options can be used to control which files are watched for changes.---
---
Tests may be rerun manually by typing ⓡ ⓢ ⏎ (same shortcut as `nodemon`).---
---
### [#](#-watch-files-filedirectoryglob) `--watch-files <file|directory|glob>`---
---
> _New in v7.0.0_---
---
List of paths or globs to watch when `--watch` is set. If a file matching the given glob changes or is added or removed mocha will rerun all tests.---
---
If the path is a directory all files and subdirectories will be watched.---
---
By default all files in the current directory having one of the extensions provided by `--extension` and not contained in the `node_modules` or `.git` folders are watched.---
---
The option can be given multiple times. The option accepts a comma-delimited list: `--watch-files a,b` is equivalent to `--watch-files a --watch-files b`---
---
### [#](#-watch-ignore-filedirectoryglob) `--watch-ignore <file|directory|glob>`---
---
> _New in v7.0.0_---
---
List of paths or globs to exclude from watching. Defaults to `node_modules` and `.git`.---
---
To exclude all files in a directory it is preferable to use `foo/bar` instead of `foo/bar/- - /- `. The latter will still watch the directory `foo/bar` but will ignore all changes to the content of that directory.---
---
The option can be given multiple times. The option accepts a comma-delimited list: `--watch-ignore a,b` is equivalent to `--watch-ignore a --watch-ignore b`---
---
### [#](#-fgrep-string-f-string) `--fgrep <string>, -f <string>`---
---
> _BREAKING CHANGE in v6.0.0; now mutually exclusive with `--grep`._---
---
Cause Mocha to only run tests having titles containing the given `string`.---
---
Mutually exclusive with `--grep`.---
---
### [#](#-grep-regexp-g-regexp) `--grep <regexp>, -g <regexp>`---
---
> _BREAKING CHANGE in v6.0.0; now mutually exclusive with `--fgrep`._---
---
Cause Mocha to only run tests matching the given `regexp`, which is internally compiled to a [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Regexp).---
---
Suppose, for example, you have "api" related tests, as well as "app" related tests, as shown in the following snippet; One could use `--grep api` or `--grep app` to run one or the other. The same goes for any other part of a suite or test-case title, `--grep users` would be valid as well, or even `--grep GET`.---
---
    describe('api', function() {---
      describe('GET /api/users', function() {---
        it('respond with an array of users', function() {---
          ---
        });---
      });---
    });---
    ---
    describe('app', function() {---
      describe('GET /users', function() {---
        it('respond with an array of users', function() {---
          ---
        });---
      });---
    });---
    ---
---
Mutually exclusive with `--fgrep`.---
---
### [#](#-invert) `--invert`---
---
Use the _inverse_ of the match specified by `--grep` or `fgrep`.---
---
Requires either `--grep` or `--fgrep` (but not both).---
---
### [#](#-inspect-inspect-brk-inspect) `--inspect, --inspect-brk, inspect`---
---
> _BREAKING CHANGE in v7.0.0; `--debug` / `--debug-brk` are removed and `debug` is deprecated._---
---
Enables Node.js' inspector.---
---
Use `--inspect` / `--inspect-brk` to launch the V8 inspector for use with Chrome Dev Tools.---
---
Use `inspect` to launch Node.js' internal debugger.---
---
All of these options are mutually exclusive.---
---
Implies `--no-timeout`.---
---
### [#](#-parallel-p) `--parallel, -p`---
---
> _New in v.8.0.0._---
---
Use the `--parallel` flag to run tests in a worker pool.---
---
Each test file will be put into a queue and executed as workers become available.---
---
- - NOTICE- - : `--parallel` has certain implications for Mocha's behavior which you must be aware of. Read more about [running tests in parallel](#parallel-tests).---
---
### [#](#-jobs-count-j-count) `--jobs <count>, -j <count>`---
---
> _New in v.8.0.0._---
---
Use `--jobs <count>` to specify the _maximum_ number of processes in the worker pool.---
---
The default value is the _number of CPU cores_ less 1.---
---
Hint: Use `--jobs 0` or `--jobs 1` to temporarily disable `--parallel`.---
---
Has no effect unless used with [`--parallel`](#-parallel-p).---
---
### [#](#about-option-types) About Option Types---
---
> _Updated in v6.0.0._---
---
Each flag annotated of type `[boolean]` in Mocha's `--help` output can be _negated_ by prepending `--no-` to the flag name. For example, `--no-color` will disable Mocha's color output, which is enabled by default.---
---
Unless otherwise noted, _all_ boolean flags default to `false`.---
---
### [#](#about-node-flags) About `node` Flags---
---
The `mocha` executable supports all applicable flags which the `node` executable supports.---
---
These flags vary depending on your version of Node.js.---
---
`node` flags can be defined in Mocha's [configuration](#configuring-mocha-nodejs).---
---
### [#](#-enable-source-maps) `--enable-source-maps`---
---
> _New in Node.js v12.12.0_---
---
If the [`--enable-source-maps`](https://nodejs.org/dist/latest-v12.x/docs/api/cli.html#cli_enable_source_maps) flag is passed to mocha, source maps will be collected and used to provide accurate stack traces for transpiled code:---
---
    Error: cool---
        at Object.<anonymous> (/Users/fake-user/bigco/nodejs-tasks/build/src/index.js:27:7)---
            -> /Users/fake-user/bigco/nodejs-tasks/src/index.ts:24:7---
    ---
---
### [#](#about-v8-flags) About V8 Flags---
---
Prepend `--v8-` to any flag listed in the output of `node --v8-options` (excluding `--v8-options` itself) to use it.---
---
V8 flags can be defined in Mocha's [configuration](#configuring-mocha-nodejs).---
---
[#](#parallel-tests) Parallel Tests---
--------------------------------------
---
> _New in v.8.0.0._---
---
Depending on the number and nature of your tests, you may find a significant performance benefit when running tests in parallel (using the [`--parallel`](#-parallel-p) flag).---
---
Parallel tests should work out-of-the box for many use cases. However, you must be aware of some important implications of the behavior.---
---
> _Note: Authors of third-party libraries built on Mocha should read this!_---
---
### [#](#reporter-limitations) Reporter Limitations---
---
Due to the nature of the following reporters, they cannot work when running tests in parallel:---
---
-    [`markdown`](#markdown)---
-    [`progress`](#progress)---
-    [`json-stream`](#json-stream)---
---
These reporters expect Mocha to know _how many tests it plans to run_ before execution. This information is unavailable in parallel mode, as test files are loaded only when they are about to be run.---
---
In serial mode, tests results will "stream" as they occur. In parallel mode, reporter output is _buffered_; reporting will occur after each file is completed. In practice, the reporter output will appear in "chunks" (but will otherwise be identical). If a test file is particularly slow, there may be a significant pause while it's running.---
---
### [#](#exclusive-tests-are-disallowed) Exclusive Tests are Disallowed---
---
- - You cannot use `it.only`, `describe.only`, `this.only()`, etc., in parallel mode.- -  This is for the same reason as the incompatible reporters noted above: in parallel mode, Mocha does not load all files and suites into memory before running tests.---
---
Suggested workarounds:---
---
1.  Use [`--grep`](#-grep-regexp-g-regexp) or [`--fgrep`](http://localhost:8080/#-fgrep-string-f-string) instead; it's not particularly efficient, but it will work.---
2.  Don't use parallel mode. Likely, you won't be running very many exclusive tests, so you won't see a great benefit from parallel mode anyhow.---
---
> _TIP: If parallel mode is defined in your config file, you can temporarily disable it on the command-line by using either the `--no-parallel` flag or reducing the job count, e.g., `--jobs=0`._---
---
### [#](#file-order-is-non-deterministic) File Order is Non-Deterministic---
---
In parallel mode, Mocha does not guarantee the order in which test files will run, nor which worker process runs them.---
---
Because of this, the following options, which depend on order, _cannot be used_ in parallel mode:---
---
-    [`--file`](#-file-filedirectoryglob)---
-    [`--sort`](#-sort-s)---
-    [`--delay`](#delayed-root-suite)---
---
### [#](#test-duration-variability) Test Duration Variability---
---
Running tests in parallel mode will naturally use more system resources. The OS may take extra time to schedule and complete some operations, depending on system load. For this reason, the timeouts of _individual tests_ may need to be increased either [globally](#-timeout-ms-t-ms) or [otherwise](#timeouts).---
---
### [#](#bail-is-best-effort) "Bail" is "Best Effort"---
---
When used with `--bail` (or `this.bail()`) to exit after the first failure, it's likely other tests will be running at the same time. Mocha must shut down its worker processes before exiting.---
---
Likewise, subprocesses may throw uncaught exceptions. When used with `--allow-uncaught`, Mocha will "bubble" this exception to the main process, but still must shut down its processes.---
---
Either way, Mocha will abort the test run "very soon."---
---
### [#](#root-hooks-are-not-global) Root Hooks Are Not Global---
---
> _NOTE: This only applies when running in parallel mode._---
---
A _root hook_ is a hook in a test file which is _not defined_ within a suite. An example using the `bdd` interface:---
---
    ---
    ---
    ---
    beforeEach(function() {---
      doMySetup();---
    });---
    ---
    ---
    afterEach(function() {---
      doMyTeardown();---
    });---
    ---
---
When run (in the default "serial" mode) via this command:---
---
    mocha --file "./test/setup.js" "./test/- - /- .spec.js"---
    ---
---
`setup.js` will be executed _first_, and install the two hooks shown above for every test found in `./test/- - /- .spec.js`.---
---
- - The above example does not work in parallel mode.- - ---
---
When Mocha runs in parallel mode, - - test files do not share the same process,- -  nor do they share the same instance of Mocha. Consequently, a hypothetical root hook defined in test file _A_ - - will not be present- -  in test file _B_.---
---
Here are a couple suggested workarounds:---
---
1.  `require('./setup.js')` or `import './setup.js'` at the top of every test file. Best avoided for those averse to boilerplate.---
2.  _Recommended_: Define root hooks in a "required" file, using the new (also as of v8.0.0) [Root Hook Plugin](#root-hook-plugins) system.---
---
If you need to run some code _once and only once_, use a [global fixture](#global-fixtures) instead.---
---
### [#](#no-browser-support) No Browser Support---
---
Parallel mode is only available in Node.js, for now.---
---
### [#](#limited-reporter-api-for-third-party-reporters) Limited Reporter API for Third-Party Reporters---
---
Third-party reporters may encounter issues when attempting to access non-existent properties within `Test`, `Suite`, and `Hook` objects. If a third-party reporter does not work in parallel mode (but otherwise works in serial mode), please [file an issue](https://github.com/mochajs/mocha/issues/new).---
---
### [#](#troubleshooting-parallel-mode) Troubleshooting Parallel Mode---
---
If you find your tests don't work properly when run with [`--parallel`](#-parallel-p), either shrug and move on, or use this handy-dandy checklist to get things working:---
---
-    ✅ Ensure you are using a [supported reporter](#reporter-limitations).---
-    ✅ Ensure you are not using [other unsupported flags](#file-order-is-non-deterministic).---
-    ✅ Double-check your [config file](#configuring-mocha-nodejs); options set in config files will be merged with any command-line option.---
-    ✅ Look for root hooks (they look like [this](#root-hooks-are-not-global)) in your tests. Move them into a [Root Hook Plugin](#root-hook-plugins).---
-    ✅ Do any assertion, mock, or other test libraries you're consuming use root hooks? They may need to be [migrated](#migrating-a-library-to-use-root-hook-plugins) for compatibility with parallel mode.---
-    ✅ If tests are unexpectedly timing out, you may need to increase the default test timeout (via [`--timeout`](#-timeout-ms-t-ms))---
-    ✅ Ensure your tests do not depend on being run in a specific order.---
-    ✅ Ensure your tests clean up after themselves; remove temp files, handles, sockets, etc. Don't try to share state or resources between test files.---
---
### [#](#caveats-about-testing-in-parallel) Caveats About Testing in Parallel---
---
Some types of tests are _not_ so well-suited to run in parallel. For example, extremely timing-sensitive tests, or tests which make I/O requests to a limited pool of resources (such as opening ports, or automating browser windows, hitting a test DB, or remote server, etc.).---
---
Free-tier cloud CI services may not provide a suitable multi-core container or VM for their build agents. Regarding expected performance gains in CI: your mileage may vary. It may help to use a conditional in a `.mocharc.js` to check for `process.env.CI`, and adjust the job count as appropriate.---
---
It's unlikely (but not impossible) to see a performance gain from a [job count](#-jobs-count-j-count) _greater than_ the number of available CPU cores. That said, _play around with the job count_–there's no one-size-fits all, and the unique characteristics of your tests will determine the optimal number of jobs; it may even be that fewer is faster!---
---
[#](#root-hook-plugins) Root Hook Plugins---
--------------------------------------------
---
> _New in v8.0.0._---
---
In some cases, you may want a [hook](#hooks) before (or after) every test in every file. These are called _root hooks_. Previous to v8.0.0, the way to accomplish this was to use `--file` combined with root hooks (see [example above](#root-hooks-are-not-global)). This still works in v8.0.0, but _not_ when running tests in parallel mode! For that reason, running root hooks using this method is _strongly discouraged_, and may be deprecated in the future.---
---
A _Root Hook Plugin_ is a JavaScript file loaded via [`--require`](#-require-module-r-module) which "registers" one or more root hooks to be used across all test files.---
---
### [#](#defining-a-root-hook-plugin) Defining a Root Hook Plugin---
---
A Root Hook Plugin file is a script which exports (via `module.exports`) a `mochaHooks` property. It is loaded via `--require <file>`.---
---
Here's a simple example which defines a root hook, written using CJS and ESM syntax.---
---
#### [#](#with-commonjs) With CommonJS---
---
    ---
    ---
    exports.mochaHooks = {---
      beforeEach(done) {---
        ---
        done();---
      }---
    };---
    ---
---
#### [#](#with-es-modules) With ES Modules---
---
We're using the `.mjs` extension in these examples.---
---
> _Tip: If you're having trouble getting ES modules to work, refer to [the Node.js documentation](https://nodejs.org/api/esm.html)._---
---
    ---
    ---
    export const mochaHooks = {---
      beforeEach(done) {---
        ---
        done();---
      }---
    };---
    ---
---
> _Note: Further examples will use ESM syntax._---
---
### [#](#available-root-hooks) Available Root Hooks---
---
Root hooks work with any interface, but _the property names do not change_. In other words, if you are using the `tdd` interface, `suiteSetup` maps to `beforeAll`, and `setup` maps to `beforeEach`.---
---
Available root hooks and their behavior:---
---
-    `beforeAll`:---
    -    In - - serial- -  mode (Mocha's default), _before all tests begin, once only_---
    -    In - - parallel- -  mode, run _before all tests begin, for each file_---
-    `beforeEach`:---
    -    In - - both- -  modes, run _before each test_---
-    `afterAll`:---
    -    In - - serial- -  mode, run _after all tests end, once only_---
    -    In - - parallel- -  mode, run _after all tests end, for each file_---
-    `afterEach`:---
    -    In - - both- -  modes, run _after every test_---
---
> _Tip: If you need to ensure code runs once and only once in any mode, use [global fixtures](#global-fixtures)._---
---
As with other hooks, `this` refers to to the current context object:---
---
    ---
    ---
    export const mochaHooks = {---
      beforeAll() {---
        ---
        if (require('os').userInfo().username === 'bob') {---
          return this.skip();---
        }---
      }---
    };---
    ---
---
### [#](#multiple-root-hooks-in-a-single-plugin) Multiple Root Hooks in a Single Plugin---
---
Multiple root hooks can be defined in a single plugin, for organizational purposes. For example:---
---
    ---
    ---
    export const mochaHooks = {---
      beforeEach: [---
        function(done) {---
          ---
          ---
        },---
        async function() {---
          ---
        }---
      ]---
    };---
    ---
---
### [#](#root-hook-plugins-can-export-a-function) Root Hook Plugins Can Export a Function---
---
If you need to perform some logic–such as choosing a root hook conditionally, based on the environment–`mochaHooks` can be a _function_ which returns the expected object.---
---
    ---
    ---
    export const mochaHooks = () => {---
      if (process.env.CI) {---
        ---
        return {---
          beforeEach: [---
            function() {---
              ---
            },---
            function() {---
              ---
            }---
          ]---
        };---
      }---
      ---
      return {---
        beforeEach() {---
          ---
        }---
      };---
    };---
    ---
---
If you need to perform an async operation, `mochaHooks` can be `Promise`\-returning:---
---
    ---
    ---
    export const mochaHooks = async () => {---
      const result = await checkSomething();---
      ---
      if (result) {---
        ---
        return {---
          beforeEach() {---
            ---
          }---
        };---
      }---
    };---
    ---
---
### [#](#multiple-root-hook-plugins) Multiple Root Hook Plugins---
---
Multiple root hook plugins can be registered by using `--require` multiple times. For example, to register the root hooks in `hooks-a.js` and `hooks-b.js`, use `--require hooks-a.js --require hooks-b.js`. These will be registered (and run) _in order_.---
---
### [#](#migrating-tests-to-use-root-hook-plugins) Migrating Tests to use Root Hook Plugins---
---
To migrate your tests using root hooks to a root hook plugin:---
---
1.  Find your root hooks (hooks defined _outside_ of a suite–usually `describe()` callback).---
2.  Create a new file, e.g., `test/hooks.js`.---
3.  _Move_ your root hooks into `test/hooks.js`.---
4.  In `test/hooks.js`, make your hooks a member of an exported `mochaHooks` property.---
5.  Use `--require test/hooks.js` (even better: use a [config file](#configuring-mocha-nodejs) with `{"require": "test/hooks.js"}`) when running your tests.---
---
For example, given the following file, `test/test.spec.js`, containing root hooks:---
---
    ---
    ---
    beforeEach(function() {---
      ---
    });---
    ---
    after(function() {---
      ---
    });---
    ---
    describe('my test suite', function() {---
      it('should have run my global setup', function() {---
        ---
      });---
    });---
    ---
---
Your `test/hooks.js` (for this example, a CJS module) should contain:---
---
    ---
    ---
    exports.mochaHooks = {---
      beforeEach(function() {---
        ---
      }),---
      afterAll(function() {---
        ---
      })---
    };---
    ---
---
> _NOTE: Careful! `after` becomes `afterAll` and `before` becomes `beforeAll`._---
---
Your original `test/test.spec.js` should now contain:---
---
    ---
    ---
    describe('my test suite', function() {---
      it('should have run my global setup', function() {---
        ---
      });---
    });---
    ---
---
Running `mocha --require test/hooks.js test/test.spec.js` will run as before (and is now ready to be used with [`--parallel`](#-parallel-p)).---
---
### [#](#migrating-a-library-to-use-root-hook-plugins) Migrating a Library to use Root Hook PLugins---
---
If you're a library maintainer, and your library uses root hooks, you can migrate by refactoring your entry point:---
---
-    Your library should _always_ export a [`mochaHooks` object](#defining-a-root-hook-plugin).---
-    To maintain backwards compatibility, run your root hooks _if and only if_ `global.beforeEach` (or other relevant hook) exists.---
-    Instruct your users to `--require <your-package>` when running `mocha`.---
---
[#](#global-fixtures) Global Fixtures---
----------------------------------------
---
> New in v8.2.0---
---
At first glance, _global fixtures_ seem similar to [root hooks](#root-hook-plugins). However, unlike root hooks, global fixtures:---
---
1.  Are _guaranteed_ to execute _once and only once_---
2.  Work identically parallel mode, watch mode, and serial mode---
3.  Do not share a context with tests, suites, or other hooks---
---
There are two types of global fixtures: [global setup fixtures](#global-setup-fixtures) and [global teardown fixtures](#global-teardown-fixtures).---
---
### [#](#global-setup-fixtures) Global Setup Fixtures---
---
To create a global setup fixture, export `mochaGlobalSetup` from a script, e.g.,:---
---
    ---
    ---
    ---
    exports.mochaGlobalSetup = async function() {---
      this.server = await startSomeServer({port: process.env.TEST_PORT});---
      console.log(`server running on port ${this.server.port}`);---
    };---
    ---
---
…or an ES module:---
---
    ---
    ---
    ---
    export async function mochaGlobalSetup() {---
      this.server = await startSomeServer({port: process.env.TEST_PORT});---
      console.log(`server running on port ${this.server.port}`);---
    }---
    ---
---
To use it, load this file when running Mocha via `mocha --require fixtures.cjs` (or whatever you have named the file).---
---
> Remember: you can define "requires" in a [configuration file](#configuring-mocha-nodejs).---
---
Now, before Mocha loads and runs your tests, it will execute the above global setup fixture, starting a server for testing. This won't shut _down_ the server when Mocha is done, however! To do that, use a [_global teardown fixture_](#global-teardown-fixtures).---
---
### [#](#global-teardown-fixtures) Global Teardown Fixtures---
---
Just like a [global setup fixture](#global-setup-fixtures), a _global teardown fixture_ can be created by exporting from a "required" script (we can put both types of fixtures in a single file):---
---
    ---
    ---
    ---
    exports.mochaGlobalTeardown = async function() {---
      await this.server.stop();---
      console.log('server stopped!');---
    };---
    ---
---
…or an ES module:---
---
    ---
    ---
    ---
    export async function mochaGlobalTeardown() {---
      await this.server.stop();---
      console.log('server stopped!');---
    }---
    ---
---
You'll note that we used `this` in the fixture examples. Global setup fixtures and global teardown fixtures _share a context_, which means we can add properties to the context object (`this`) in the setup fixture, and reference them later in the teardown fixture. This is more useful when the fixtures are in separate files, since you can just use JS' variable scoping rules instead ([example below](#when-not-to-use-global-fixtures)).---
---
As explained [above](#global-fixtures)–and [below](#when-not-to-use-global-fixtures)–test files _do not_ have access to this context object.---
---
### [#](#when-to-use-global-fixtures) When To Use Global Fixtures---
---
Global fixtures are good for spinning up a server, opening a socket, or otherwise creating a resource that your tests will repeatedly access via I/O.---
---
### [#](#when-not-to-use-global-fixtures) When Not To Use Global Fixtures---
---
If you need to access an in-memory value (such as a file handle or database connection), _don't_ use global fixtures to do this, because your tests will not have access to the value.---
---
> You could be clever and try to get around this restriction by assigning something to the `global` object, but this will _not_ work in parallel mode. It's probably best to play by the rules!---
---
Instead, use the global fixture to _start_ the database, and use [root hook plugins](#root-hook-plugins) or plain ol' [hooks](#hooks) to create a connection.---
---
Here's an example of using global fixtures and "before all" hooks to get the job done. Note that we do not reference the `server` object anywhere in our tests!---
---
First, use a global fixture to start and stop a test server:---
---
    ---
    ---
    let server;---
    ---
    export const mochaGlobalSetup = async () => {---
      server = await startSomeServer({port: process.env.TEST_PORT});---
      console.log(`server running on port ${server.port}`);---
    };---
    ---
    export const mochaGlobalTeardown = async () => {---
      await server.stop();---
      console.log('server stopped!');---
    };---
    ---
---
Then, connect to the server in your tests:---
---
    ---
    ---
    import {connect} from 'my-server-connector-thingy';---
    ---
    describe('my API', function() {---
      let connection;---
    ---
      before(async function() {---
        connection = await connect({port: process.env.TEST_PORT});---
      });---
    ---
      it('should be a nice API', function() {---
        ---
      });---
    ---
      after(async function() {---
        return connection.close();---
      });---
    });---
    ---
---
Finally, use this command to bring it together: `mocha --require fixtures.mjs test.spec.mjs`.---
---
[#](#test-fixture-decision-tree-wizard-thing) Test Fixture Decision-Tree Wizard Thing---
----------------------------------------------------------------------------------------
---
This flowchart will help you decide which of [hooks](#hooks), [root hook plugins](#root-hook-plugins) or [global fixtures](#global-fixtures) you should use.---
---
My testsneed setup!Setup MUST runonce and only onceSetup MUST sharestate with testsYESUse Root Hooks andAvoid Parallel ModeUse Global FixturesShould setup affecttests across ALL files?Use Root HooksUse Plain HooksYESNONOYESNO---
---
[#](#interfaces) Interfaces---
------------------------------
---
Mocha's "interface" system allows developers to choose their style of DSL. Mocha has - - BDD- - , - - TDD- - , - - Exports- - , - - QUnit- -  and - - Require- - \-style interfaces.---
---
### [#](#bdd) BDD---
---
The - - BDD- -  interface provides `describe()`, `context()`, `it()`, `specify()`, `before()`, `after()`, `beforeEach()`, and `afterEach()`.---
---
`context()` is just an alias for `describe()`, and behaves the same way; it provides a way to keep tests easier to read and organized. Similarly, `specify()` is an alias for `it()`.---
---
> All of the previous examples were written using the - - BDD- -  interface.---
---
    describe('Array', function() {---
      before(function() {---
        ---
      });---
    ---
      describe('#indexOf()', function() {---
        context('when not present', function() {---
          it('should not throw an error', function() {---
            (function() {---
              [1, 2, 3].indexOf(4);---
            }.should.not.throw());---
          });---
          it('should return -1', function() {---
            [1, 2, 3].indexOf(4).should.equal(-1);---
          });---
        });---
        context('when present', function() {---
          it('should return the index where the element first appears in the array', function() {---
            [1, 2, 3].indexOf(3).should.equal(2);---
          });---
        });---
      });---
    });---
    ---
---
### [#](#tdd) TDD---
---
The - - TDD- -  interface provides `suite()`, `test()`, `suiteSetup()`, `suiteTeardown()`, `setup()`, and `teardown()`:---
---
    suite('Array', function() {---
      setup(function() {---
        ---
      });---
    ---
      suite('#indexOf()', function() {---
        test('should return -1 when not present', function() {---
          assert.equal(-1, [1, 2, 3].indexOf(4));---
        });---
      });---
    });---
    ---
---
### [#](#exports) Exports---
---
The - - Exports- -  interface is much like Mocha's predecessor [expresso](https://github.com/tj/expresso). The keys `before`, `after`, `beforeEach`, and `afterEach` are special-cased, object values are suites, and function values are test-cases:---
---
    module.exports = {---
      before: function() {---
        ---
      },---
    ---
      Array: {---
        '#indexOf()': {---
          'should return -1 when not present': function() {---
            [1, 2, 3].indexOf(4).should.equal(-1);---
          }---
        }---
      }---
    };---
    ---
---
### [#](#qunit) QUnit---
---
The [QUnit](https://qunitjs.com/)\-inspired interface matches the "flat" look of QUnit, where the test suite title is defined _before_ the test-cases. Like TDD, it uses `suite()` and `test()`, but resembling BDD, it also contains `before()`, `after()`, `beforeEach()`, and `afterEach()`.---
---
    function ok(expr, msg) {---
      if (!expr) throw new Error(msg);---
    }---
    ---
    suite('Array');---
    ---
    test('#length', function() {---
      var arr = [1, 2, 3];---
      ok(arr.length == 3);---
    });---
    ---
    test('#indexOf()', function() {---
      var arr = [1, 2, 3];---
      ok(arr.indexOf(1) == 0);---
      ok(arr.indexOf(2) == 1);---
      ok(arr.indexOf(3) == 2);---
    });---
    ---
    suite('String');---
    ---
    test('#length', function() {---
      ok('foo'.length == 3);---
    });---
    ---
---
### [#](#require) Require---
---
The `require` interface allows you to require the `describe` and friend words directly using `require` and call them whatever you want. This interface is also useful if you want to avoid global variables in your tests.---
---
_Note_: The `require` interface cannot be run via the `node` executable, and must be run via `mocha`.---
---
    var testCase = require('mocha').describe;---
    var pre = require('mocha').before;---
    var assertions = require('mocha').it;---
    var assert = require('chai').assert;---
    ---
    testCase('Array', function() {---
      pre(function() {---
        ---
      });---
    ---
      testCase('#indexOf()', function() {---
        assertions('should return -1 when not present', function() {---
          assert.equal([1, 2, 3].indexOf(4), -1);---
        });---
      });---
    });---
    ---
---
[#](#reporters) Reporters---
----------------------------
---
Mocha reporters adjust to the terminal window, and always disable ANSI-escape coloring when the stdio streams are not associated with a TTY.---
---
### [#](#spec) Spec---
---
Alias: `Spec`, `spec`---
---
This is the default reporter. The Spec reporter outputs a hierarchical view nested just as the test cases are.---
---
![spec reporter](data:image/png;base64,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2ugfABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAAAVAnAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAAAiAAAAIgAAACIAAAAoKFvn0AAAIJSURBVCAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAADoAAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAnAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAwAoD4CM6AQDg0Ijst/VfdAQAwKER2W/rj7fdqzMAADZeZL7/tPUnf/anW/WTra3/6nIwAMDGXvaNmb8/juz3/wGBsK3vGXIftgAAAABJRU5ErkJggg==) ![spec reporter with failure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-spec-fail.resize920,9999-withoutEnlargement.b040f524a0.png)---
---
### [#](#dot-matrix) Dot Matrix---
---
Alias: `Dot`, `dot`---
---
The Dot Matrix reporter is a series of characters which represent test cases. Failures highlight in red exclamation marks (`!`), pending tests with a blue comma (`,`), and slow tests as yellow. Good if you prefer minimal output.---
---
![dot matrix reporter](data:image/png;base64,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)---
---
### [#](#nyan) Nyan---
---
Alias: `Nyan`, `nyan`---
---
The Nyan reporter is exactly what you might expect:---
---
![js nyan cat reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-nyan.resize920,9999-withoutEnlargement.7583dbc528.png)---
---
### [#](#tap) TAP---
---
Alias: `TAP`, `tap`---
---
The TAP reporter emits lines for a [Test-Anything-Protocol](https://en.wikipedia.org/wiki/Test_Anything_Protocol) consumer.---
---
![test anything protocol](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-tap.resize920,9999-withoutEnlargement.c14ac664d9.png)---
---
### [#](#landing-strip) Landing Strip---
---
Alias: `Landing`, `landing`---
---
The Landing Strip reporter is a gimmicky test reporter simulating a plane landing 😃 unicode ftw---
---
![landing strip plane reporter](data:image/png;base64,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BEAAAEwAAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACAAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIBJAAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAATAAAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIACIAAAAiAAABszwB4wCQAAOwYkf2W/tlEAADsGJH9lj438IjJAADY9iLz/ePSF77yxaX0ZJgGXQ4GANiel30j630ust//AzU4bRENYAFWAAAAAElFTkSuQmCC) ![landing strip with failure](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-landing-fail.resize920,9999-withoutEnlargement.d176a4434f.png)---
---
### [#](#list) List---
---
Alias: `List`, `list`---
---
The List reporter outputs a simple specifications list as test cases pass or fail, outputting the failure details at the bottom of the output.---
---
![list reporter](data:image/png;base64,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ZjxtepTaIAACgAB4rEKgXwIRAAFAAOTYiaDXRP8AgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAIgDoBAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABMxhIjcAAANOSURBVABAAAQAQAAEAEAABAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEA0AEAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAAAIgAAACIAAAAiAAADoBAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAHQAAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACACAAAgAgAAIAIAACAAgAAIAIAACAHA0A+AjOgEA4NiI7Lf1b3UEAMCxEdlv64923KYzAACOvMh8f7j1x3/2J1vVk62tf+d0MADAkT3tG0f+/iiy378C+vAZofKPlwgAAAAASUVORK5CYII=)---
---
### [#](#progress) Progress---
---
Alias: `Progress`, `progress`---
---
The Progress reporter implements a simple progress-bar:---
---
![progress bar](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAo8AAAGcCAYAAAC4OkrTAAAACXBIWXMAAAsSAAALEgHS3X78AAAfTklEQVR42u3d649c5YHn8f5bVpvNhkC08yfsq4k0o9HmTSRg2nikkYg0+2KzMwuDRYTAkwDJQARkDBkvhItgGOHYRiQxGmyIQR7MGnOz8b19aWxjbNAi1uQena3fqX6K0+XqunRXX/2x9JGr65w6fc7p27ef51T1xJ/+jz+fuHz58n/5/PPPv9f6/0hLBQAAMw7/6le/uqfVin+SbpzIjc8+++yVTz/9tPr4448BAGCWdGKrF3+Zbpxo3bg7d166dAkAAHpKL6YbJz755JOjFy9erAAAoJ9040RufPTRR3O6cOFCdf78+erMmTPVwYMHq+e2PFc98sgj1UMPPVTbtGlTfV+WZZ2sm8csZJu5Pa5tZv/mu58AAHwh3TgxaKVE1qlTp6qXX365evDBB6rNmzdX//Lss9X255+v5Xbuy7Ksk3XzmOXe5mOPPTZrm08//czI2wSWwYdnqrf2/p/q8NkPV9/7WIp9B1hmExl966cEWUbuEmMvvfRS9d5771UffPBBPYL3zrvv1PdlWdYpYTbMNjMyOHub07Xc3rVrV70s6wy7zd27d3e2mccfOHCg3l728+233+7s57DbhJXu/NmD1TM/+GFndL3bfffdX710YHrJ9mMc7+vi9L7q1nWT1ZZ9U4u2v4v1PpZi33tJtP77C49Wk5OTtTse/mkdsM11zhz4t2rTbe3lN274cbXnyJmR38+56anqxad+VB9jtvPXt95bbdl7eM71j+59rrr7viev2BdgdZvI6Fs/CbAnnnyiHr177bXXqv3799dTv8ePH69lee7LsqyTdXPfoG0+/vjj9fp79uzpbPPk1PFqamqqvp37sizrZN1htln2s3ub2c8EaXObw+wnrHitaHt5yzP1L0X1L3CtOLjppo2dtzPivm9qetH349yZ/dXG9eur7W+dHMu2/nFM21rq97EU+97Lm9s2tj7uN9Uhl2DL7cmHd1Znzn/Y2a97162rJu9/vjpy5N3q6e/eWK1b98PqzTMXRj6+v7/ptuqnr75VHT/0Vr2dRGR+aehed/rkm/X7nM/7AVa2iXPnzlX9ZLQusfX6669X+/a9WQdYRvESZpHbuS/Lsk7WzWP6bXPHjl9csc2MYB469H4tt7u3mccMs59v7H2js4/ZTtnP3C77mnWG2U9Y6fJFfPGTT3IBc+3dnz1Qrfv77bPuu/jR+QW/n+kzp2a9nZmHWetc+Kh+GYdxvK9miC7auet6H1ccz0rb7oD3eV8r0u7e9mb18aWPqgsXP67ef+Xx6qZ1/6seXcw69efFusfaI4C5Zml6X7W+tZ9P/vJg+/Oo9UtIvh+ePtu17fPT1Z4Xd9aPK2+fu/h/2++nsZ1/2vHe7MdNT1UvPPCX9bISj75eYe2YOHv2bNXP1q1b6yneZpBFRvKivF3CLOvmMaNuM9vKSGCU7Y6yzcRgpq2797F7m2W7WTePGXT8sJpkBCrxmAho3p9RoIwS3Xhjyw1/W49QlWUJi0xzZtozy295Zk8dJA//3feqLTt31qOZuX/dXVur944erqMgb09Ofr8ecco22ut/p46m5tt5fOf9zkyVZnliZdsDG9r3x3ef6CxrBthinacyQviT7T/vHF9z/3K5Szkf7WO9sx5tK49/e8/26q5WsJXlzePOduc67sWQj23OV6bKy32Zol4/c19C7uf3rKs/fuXzIhGY+zI6WV+C1Fo/I4j52Oftcg5effbu+v7mxyI/OLrPY+KxuU/5nMro564391b/eNNd9ei3r09YOybyjaKfRFuZBk54lRgro4Tl7TJamHXzmGG2mYgrgVe219xulmWdYbeZUcqyj93b695u1h20TVhtSjyemD7TuS+h9thfTtZTlkdPn66jqIxKZXn5QZ8RovywP3zyZB0kD2aasxUOj+54vY6lXOeWGEpoHnjr9fbymfjI+ompxEp5uzz+3n99pXp73856dOzOLW90lm9/7sXqwLFTdbh0L2tuazFccXwz+1dG5xJcuRzgtfeOVidPtoO5s2xmpC/7m+um8wSZHMcwx71Yx7JxJuDKfTmn+ZjWI4KtY9l257pOGNajoY2gzOdKRo67A7IZjhfOTfd831kn7ye/RDTfdx6X953PvRKPvj5h7ZjIk0n6KVGW4CoBduTIkero0aO13C73N6Ns0DYzdVy2efjw4Xpb5TrK3M59ZZtZd9A2X3jhhXqau2yv7GPZZvd2s24eM+j4YTVpxmO5r1wDlynKfO4fe+fF9pM69h7uPCajiOW6tIw4levV8phMRScCEkUJi0xZlpGrxEeCtBl82WZ5fAKiuX4iKsszApZn7CViEmeJm7Kse1tNmT5PkGU2IrMHw8j+XbGdmf3L+6in2lvxVM5TQijrfHjxozqaTp8+Vv1y87r6HCW4O4HYivF9B490ztlcx72ttc1ybN1y3eCwx5L1ErO9tpP9yy8EGR3N+ck+lHjM/jfPb33+W/c9NXMMnc+V8x/W4ZfPjRv+583V5E23tp8AdW6658ehxGU+R8o6Of76F5XWLxU5r3m7xKOvT1g7Jk63vrH2k2sNM/KX6wZLOCbE8sSWyO1jx47VUZZ1sm4e02+bibayzTwujz9x4kTrh8jJWm53bzOPGbSficyyvbKPZZvR3NesO2g/YbUp8Xi0cV9isTwLtzMN2wqDjCh1HjMzAlUec+rEG52AK2/fO3NdXXudY7PisbN+K0ibjy/voxkweXvqyOvVP997S3X99de3Q6W1b2Xb3dua7Vj9bN88i7y8Luxc8rJceaZvwqV7O93H1zxP7ffbfj/Zv0zz33br+joes62p02frdTvT1ht+XEfdMMfdLdcm3nP3PQOPJbJeRkl7bac827oeHW7tT65fzO32frT3IUH3xcd49sevs61W1LdDeXJmVHm658cglxyUuMz7LssS4O3PtTurf/jOhur2229vf97NXCrhaxTWholMu/ST33jzjagesWhEXtlAbifSsizr5CVy8ph+28xv0FmvbDOPP90YHah/uHRts7y0Tr/9zDqJ2+Y+lpf/yXbLvmad8tv8oOOH1aQZj+W+8gM9IdH8O6UZLZrrMc2AK2/f25iq7RePvR7fjKh8HTangfMnr7KtxGPP990lo4Sj/DWEjJJdsZ1G5JX7EnIJoowulnOWOMq5ytR+GXnMuhmly35npO6umen7Qcfd61jKdoY5jqyXUOv5sT/ZnnquP7aXPpp1LFmeIGx+jDPa+9TMSPLpxn35uOQ49+7d3RldzWUMs75/P35LHYcZqS6fQ8XJ42/Vr7yRX/ijHp3MLyo7Xq2n9n2Nwtow0RyZ6yXxlhG6TPM2Q68ZZdlQRvWyTgnNYbeZx9XfRM98cY1W9zaz7jDbzPvOdZfZxzw++1cu7iy/QWdZec3HQduE1aaE4OFZ97dDIdc0vrj/UP15nzhoX8/X+zHNCKp/6TryeiceyzZLPB7usX73282p6bx8VonH7EPn9QlLqFzx2PErMZzrN7MPuYYzT5wpMVzHV2ufyjRw+zrGO9vnrBVIuV4zU9a5XaZpBx73In7cs//Zn3zPLNen1k98mm7PvpTrEDNymfNfppwTl/U2jpeX3fl+55nReSZ1jjtPZkr4Zb0S1TlPicQyEFCfi3yenD7beTZmvu+212+HZiLe1yisDRMZpesno3QJuHyTyJNNekVZ7suyrJN1y+hfv21m2njYbWbdYbZZ9jNT3e3A/aCxzQ/q+/KDMyOOw+wnrDZlCvrwzOUfcXzqdH3NYuIg07BFAifLy8v7NB9TYrGsk7cfnJm2bo/sz4xSzQRfr/Wbbzcjqr4sZea6y3paeMOPq21P/aDzZI3uxy6GTgz/8I7O+ch+JHISVyWmMi2dZfnTpvUIY6auW7+g5lw0H5cIG+a4F0tGA5sf2zxZJ9dbdo63FXUJ4nI8+T9T9gm68vH4u8lN9fFntLR83iQgc81ifunIfV9MS09+cfytbeW6x1771V7/+3V0+/qEtWOi+YSSXsoTT0qYZWSvOTWc27mvBFl5Es0w2ywB2dxmCcHyEj1ZZ5RtZh+yL+PYT1htMg2aJypcsawVApnWLLMFF2aerDLnY1rrN9cpb2easqxTTx+Xx82xfuftmfXL4xMzmYLNvtRPyDl/vjOj0euxY9d6Hznuj2aOqT4nFy50/qhAvQ8X2qNl2e/y2oX1rMjJ9vkr5zL7n+Aa5rgX8+OefS3nttf7q1/DcTqX7bTXb+5jHpPj6Bx/1+dBOb7649bjT5XN9bEq61+xXWBVm8hUdD8lssozlXMdS6Yr8qzqKNe3lGdMl3VH2Wa5/rBcJ1PeXsg2y36Wbc5nP2GtKb+grYR9yTeg5r7Uo10zT2pbqvffaz+6z1dZr/vcraRzWfYnl+X026fyy/RSnmdg7ZkoL7nTT0KrvPxN85tU8xtVc521tE0AAL4wMcrKCa4SX03l/vnswGrZJgAArXgsQQUAAINMdI/OAQDAXCY85RyGeGmXqSnfMGAO5bpy4Cp5qZ5HHnmkAgYTCdCb7w9wdZnI34wG+hOP0D8efZ+Aq4d4BPEI4hEQjyAeQTwC4hHEI4hHYDXF49NPP1Pdc/c91be//e1qcnKyltu5L8ucVK7meMyf7HziySeqOzdurL8uIrdzX5YJDcQjcFXF4+bNm+sfht+6+eb6/w0bNtSa92UdJ7afbdU/33tLddt3H662P//8Ctwe843Hl156qbrvvvur22+/vf5l6sEHH6jldu7LsqwjNuZ25Mi71YtP/aj60VPbqveOrrztIR6BEeIxo4olFPODsJcSlEYg+8fe9/78muo/f/2OscXjeLfHfOIxo4olFDdt2tRTCUojkP1jL5/PX/3GfdW+g0dW3PYQj8AI8ZhRkxKOb7/9dvXcluc60Zjbua8EZNZ1cueOvR9Mtn+YrcztMZ94/Jdnn+2EY/7uZ0YYSzTmdu4rAZl1BcfcsfeTb32tuu6vHhrbyOM4t4d4BEaIx1y3VWLxscceq/bte7OOxsjt3FeWZ10nt3/sXXPTXdVtt66vvvSlL1X/6b/eWN3x8E/r5ZmCzn3x5S//RT0dXR636bbJ6k+//OV62TXX3FD9ZPvPZ23v7o3/vbO9TNM510sXj1leYnHr1q3VwYMH62iM3M59Zbkn3/SPvUdv/lr9+ZyvhWuu+Up17Z/9TfXkLw/Wy1999u76vrYbqnv/9ZXO47Y9sKG64dpr62Vf/eq3qhf3H+psL/H45KY7Otv76atvOd/iEVjseMx0dHN6ugRkCcfmdHbWdXIHxGN++LV+QOYHWoIwP+wSg1ue+FG1fcer1dt7tren22bu3/bUD+rH5Ifgrjf31jHSnqb+YnuZui4/cL9+q2/mSxmPmY5uTk+XgCzh2JzOzrqCo388XnfddfXnej7v/9s111TXXntH9dp7R6uXtzxTR+GpE2/Un/fl/qN7n6sf87Vv/e96hHHPizvraerm9srXW25P3v+88y0egaUceYxc15hrtyK3m8uMPA6Ox4ReInDPnj0z8dceScxIVQIwT0Ba/2fXdu7/2fNPVOu/0h5xmbzp1npkcceOX3S2lx+i2V6iM+vd+N0nnOsljMc8Uax5fWMek0s5Ireby7Ku4Ogfj7kM4/DZD6vpM6fqaefmSGKeAPMP39lQf32U+4+982L1NwnOlr++9d56ZPH40S+2l6+PbC/RmfVuftgTl8QjsOjx+NBDD826xrGMODansMvyrOvk9o/HjKrMHom8oX45l3Yg3lDHYaapSzzWo5H7dtZhWaau24E4+5rHEpnicWnjsTkt3Zyqbk5hN6e1BUf/eCwjiJ2YbEVifjlK+JXR+Ke/e2MjKo9X587sr0cWM1KZiLzlmT2zpq2zvRKZkw/vdL7FI7DY8ZiwKXHYnKpuTmGX5VnXye0fj7me8e77nuz8sMtIZMIvtzPlnNuZts56CclMZ2f9/AB9+fH21HR3PGYaWzwuTzzu2rWrE4fNqermFHZZnnUFx4BrHlu/ND264/Xq3194tL6OMZ/f+eUpt//inq317fJL15a9h+sR9wRlRhff3LaxjseMLopH8QgsYzxmijTTbYnD8pqOzWsgc19uZ532dKqT2y8e86SWhGJGEDN6kh+UOW//9Ldfr8OwfrLMres71y/m2q/yRJr6CTM33VVt2blz1hNmxOPyxeOBAwc609O55rd5jWNu574ynZ11BUf/eMyTWhKK182MNG5/62S9LKON9fWLrWjME8RyOzH5/iuPz9z/lc71krkWsnsks8SjaWvxCCxRPDYDspcSjuKxv33791fvvPtO7Y29b9Rv7/63n3WW5b5cK5fR3Nzeu3d3PW1d1o8Db70+6zF5O7fLehmZca6XLh6PHDnS8/rGXtdBZl3BMfd5PHP+w+r8+fO1qamp+u2TJ79YdurUqfr/s2fP1stzXeTxqdP1+ll26uSZ6sK56ZlrHtuPydu5nentrHduesr5Fo/AYsdj5LqtTLllGi7fLMq0XG7nvizLOk7s8HqFdvO+7uXifPni8dCh9/v+AD127FjnBcMzClyuCc7t8sLgZR2Gk9fH7HdfbjdjPG/3egziEVimeCzxsnv37s7oWOR27hM1XM3xWEbOTp48WX3wwXR17ty5Wm7nPiOOrEX5uhCPIB6BHvFY/lLM8ePHqxMnTsBVLV8H5a8pZYTd9wkQj0BDLsvID8hEJDBbvj58n4CrKB5ffvnlCgAAhjHht2YAAIY10fr3/wAAuHpk+nn//v3Vp59+Wrt06VL9cmflyaF5KbS8JNrFixfr5Z999ln9f54IKh4BAK4yebJb/mhFovA3v/lN9dvf/rb+PxF55syZ6sKFC3Usfv7559Xvf//76o9//GP1u9/9rr5PPAIAiEfxCADAcPF4/fXXV9/85jerb3zjGx15O7JMPAIAiEfxOIrLly9Xi739xX4fa32/V+P5A4DVGo9PPPlEtXnz5uqhhx6qn1Wd248//vjyxeNKi6nF3JelPs7FeH8r4WO12j5GYheA1R6PicbE46ZNm+p4zB/IWPaRx7U+qrUcx7eWjkU8AoBp6wX9gC0jluVxvR7fvc5cy5rLm9sb5XHzObZRj6F7+TD3j/q4QedtrmMadQR5Icc+134P83EfZn9GOWcL+TgAwGoaeXzwwQdW3sjjqD/shwmhXm8PiqK51h30PuYTj+M6hrmiZpjoG+bYFyMex3Hsozxuvh+rxfg4AIB4XMZ4HDUiRo2ipYjH+YTQqKODg0bD5nP+FzrSvJCP36jHt5B4HGZU0rQ1AKatl2HKetQgu5rjcT73jytyljse+00hj/vyiXF9nAFgtcXjin2R8NUYj+O65nHYYxj1ur+ljsfFHDlejEsJxhWPpq0BWEt27PhF9c6779Qx+Otf/7oOx/yfaDxx4kT1wQfT1fnz56tPPvmk/tmcZfk/yyeWIxxH+WE7KD4W+oSZYSJpoSN1oxzDfJ8YMswTOcYxwjbueOx37KM8YWY+4TbKOVvIxwEAVpoXXnih2r9/fx2PkRHHU6dOVYcOvV8dPny4mpqaqs6ePVtdvHixXp4Ryvx/7tw5f2Fmtb3EjGMAABZq69at1XNbnqsyfZ2QzNuREcldu3ZVu3fvrt7Y+0YdmJneTlTm/9wnHlfIE4PsNwCwVI4fP16PNJbRxUxPZ3Qx1zhmCrtc51j84Q9/qK+LzPS1eAQAEI/iEQAA8QgAgHgEAEA8AgAgHgEAEI8AAIhH8QgAgHgEAEA8AgAgHgEAEI8AAIhHAADEo3gEABCP4hEAAPEIAIB4BABAPAIAIB4BABCPixePd27cWDX5IAGrje9jgHhc4nj0gQHWUkg6D4B4FI8AvqcB4lE8AvieBiAeAcQjwNUTj5cvX64AVjLxCIhH8QggHgFMWwOYtgYQjwDiEUA8AohHAPHY9xutv8wArPZg9H0MEI/+tjUAgHgUjwAAiEcAAMQjAADiEQAA8QgAgHgUjwAA4lE8AgAgHgEAEI8AAIhHAADEIwAA4hEAAPEoHgEAEI8AAIhHAADEIwAA4hEAAPEIAIB4XOnx+KWd/7FqGnYZ8z/PK23f7ty4sYpB9zXvH7Ss1/Jx7RsAiMdF9icf/odqlMiZz7JxrL9c21zqiFxJxz5XBPZaNujtYbY9zv0EAPG4SOEoHsXjfIJsmFjst41xB5+ABEA8rrBwHFc8dk9395sOH3Z6dyHbHMe0/Vz39XpMc71Rz+9SHfswITaueOyeyh51OlxAAiAexxyPvSJxlHAcJj7mM+o1TDx1h9mojx/2cQsN5e5YHBRyo+7bUh/7OOKx37WSzfvnisj5TIeLRwDE4yLE43xGHEeNloVsa5hRtFGDb76jjguJx2HibZR4HPQEpfmcz3HG47CjiHNdOznMyKOpawDE4xLGY9O4rqsb9zV6Cx0VHPT4UfZ3pcXjUob9uEJtXPG4HE/CAQDxuMBwHDSNvNjxuNqmra/2eBx2+aB4NG0NgHhchifMzDccR3mdx/le9zjK60cOe/3lcj5hZlA8zucJQcM8dj7ncz7x1/16jd3XL476Oo+jTFsLRwDEo78wc1VZbS8ltFqCTDgCIB6dQPG4gsJspcaZvzADgHgUjwAA4lE8AgAgHgEAEI8AAIhHAADEIwAA4hEAAPEoHgEAEI8AAIhHAADEIwAA4hEAAPEIAIB4FI8AAIhHAADEIwAA4pGrzPr166u5OD8AIB7hingc5X4AQDwiHsUjAIjH1e3y5cvVYm9/sd/Hathv8QgA4nFNxNRi7stSH+divL9xbVM8AoB4XFVhtdT7sRzHt5KPRTwCgHhc0iApI5blcb0e373OXMuay5vbG+Vx8zm2UY+he/kw94/6uEHnba5jGnUEWTwCgHhc0unrQaHT7+1BUTTXuoPex3zicVzHMFd4DhN9wxy7eAQA8bhm4nGYmFpIFC1FPI56DMOcs2FGMoc9L+OeuhaPACAexzJlPWqQXc3xOJ/7R41N8QgA4lE8jiEex3XN47DHMGiUcL7T1uOKR9PWACAel+2JMsNEyKDwWugTZoaJpIWO1I1yDP32ZZRrOEc59vlMh4tHABCPLNMzytfyMYhHABCPLMITg9bqfotHABCPMFI8zsX5AQDxCACAeAQAQDyKRwAA8SgeAQAQjwAAiEcAAMQjAADiEQAA8QgAgHgUjwAAiEcAAMQjAADiEQAA8QgAgHgEAEA8ikcAAMQjAADiEQAA8QgAgHgEAEA8AgAgHsUjAIB4FI8AAIhHAADEIwAA4hEAAPEIAIB4BABAPIpHAADEIwAA4hEAAPEIAIB4BABAPAIAIB7FIwAA4hEAAPEIAIB4BABAPAIAIB4BABCP4hEAQDyKRwAAxCMAAOIRAADxCACAeAQAQDyKRwAA8SgeAQAQjwAAiEcAAMQjAADiEQAA8QgAgHgUjwAAiEcAAMQjAADiEQAA8QgAgHgEAEA8ikcAAPEoHgEAEI8AAIhHAADEIwAA4hEAAPEoHgEAxKN4BABAPAIAIB4BABCPAACIRwAAxCMAAOJRPAIAIB4BABCPAACIRwAAxCMAAOIRAADxKB4BABCPAACIRwAAxCMAAOIRAADxCACAeBSPAADiUTwCACAeAQAQjwAAiEcAAMQjAADi0QkEABCP4hEAAPEIAIB4BABAPAIAIB4BABCPAACIR/EIAIB4BABAPAIAIB4BABCPAACIRwAAxKN4BAAQj+IRAADxCACAeAQAQDwCACAeAQAQj+IRAEA8ikcAAMQjAADiEQAA8QgAgHgEAEA8AgAgHsUjAADiEQAA8QgAgHgEAEA8AgAgHgEAEI/iEQAA8QgAgHgEAEA8AgAgHgEAEI8AAIhH8QgAIB7FIwAA4hEAAPEIAIB4BABAPAIAIB6dRAAA8SgeAQAQjwAAiEcAAMQjAADiEQAA8QgAgHgUjwAAiEcAAMQjAADiEQAA8QgAgHgEAEA8ikcAAPEoHgEAEI8AAIhHAADEIwAA4hEAAPEoHgEAxKN4BABAPAIAIB4BABCPAACIRwAAxCMAAOJRPAIAIB4BABCPAACIRwAAxCMAAOIRAADxKB4BAMSjeAQAQDwCACAeAQAQjwAAiEcAAMSjeAQAEI/iEQAA8QgAgHgEAEA8AgAgHgEAEI8AAIhH8QgAgHgEAEA8AgAgHgEAEI8AAIhHAADEo3gEAEA8AgAgHgEAEI8AAIhHAADEIwAA4lE8AgCIR/EIAIB4BABAPAIAIB4BABCPAACIRycQAEA8ikcAAMQjAADiEQAA8QgAgHgEAEA8AgAgHsUjAADiEQAA8QgAgHgEAEA8AgAgHgEAEI/iEQBAPIpHAADEIwAA4hEAAPEIAIB4BABAPIpHAADxKB4BABCPAACIRwAAxCMAAOIRAADxCACAeBSPAACIRwAAxCMAAOIRAADxCACAeAQAQDyKRwAAxCMAAOIRAADxCACAeAQAQDwCACAexSMAgHgUjwAAiEcAAMQjAADiEQAA8QgAgHh0AgEAxKN4BABAPAIAIB4BABCPAACsLEePHq3mSzwCAFyF8Tjff+IRAEA8ikcAAMYXjydOnBCPAADicbhwvO+++8UjAIB47P8vz8xOOF66dEk8AgCIx+HDUTwCAIjHnv+yTjMcXfMIACAee/47fPjwFeHomkcAAPE4MByPHTvmmkcAAPE4ejiKRwAA8Vj/O3To/b7hmLfFIwCAeOwZir3eFo8AAFd5PA4bjq55BAAQjyP/+/92gUQ4A1KsQwAAAABJRU5ErkJggg==)---
---
### [#](#json) JSON---
---
Alias: `JSON`, `json`---
---
The JSON reporter outputs a single large JSON object when the tests have completed (failures or not).---
---
![json reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-json.resize920,9999-withoutEnlargement.078924d591.png)---
---
### [#](#json-stream) JSON Stream---
---
Alias: `JSONStream`, `json-stream`---
---
The JSON Stream reporter outputs newline-delimited JSON "events" as they occur, beginning with a "start" event, followed by test passes or failures, and then the final "end" event.---
---
![json stream reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-json-stream.resize920,9999-withoutEnlargement.7cac98a80f.png)---
---
### [#](#min) Min---
---
Alias: `Min`, `min`---
---
The Min reporter displays the summary only, while still outputting errors on failure. This reporter works great with `--watch` as it clears the terminal in order to keep your test summary at the top.---
---
![min reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-min.resize920,9999-withoutEnlargement.1cff5750fd.png)---
---
### [#](#doc) Doc---
---
Alias: `Doc`, `doc`---
---
The Doc reporter outputs a hierarchical HTML body representation of your tests. Wrap it with a header, footer, and some styling, then you have some fantastic documentation!---
---
![doc reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-doc.resize920,9999-withoutEnlargement.02ce5adcef.png)---
---
For example, suppose you have the following JavaScript:---
---
    describe('Array', function() {---
      describe('#indexOf()', function() {---
        it('should return -1 when the value is not present', function() {---
          [1, 2, 3].indexOf(5).should.equal(-1);---
          [1, 2, 3].indexOf(0).should.equal(-1);---
        });---
      });---
    });---
    ---
---
The command `mocha --reporter doc array` would yield:---
---
    <section class="suite">---
      <h1>Array</h1>---
      <dl>---
        <section class="suite">---
          <h1>#indexOf()</h1>---
          <dl>---
            <dt>should return -1 when the value is not present</dt>---
            <dd>---
              <pre><code>[1,2,3].indexOf(5).should.equal(-1);---
    [1,2,3].indexOf(0).should.equal(-1);</code></pre>---
            </dd>---
          </dl>---
        </section>---
      </dl>---
    </section>---
    ---
---
The SuperAgent request library [test documentation](https://visionmedia.github.io/superagent/docs/test.html) was generated with Mocha's doc reporter using this Bash command:---
---
    $ mocha --reporter=doc | cat docs/head.html - docs/tail.html > docs/test.html---
    ---
---
View SuperAgent's [Makefile](https://github.com/visionmedia/superagent/blob/master/Makefile) for reference.---
---
### [#](#markdown) Markdown---
---
Alias: `Markdown`, `markdown`---
---
The Markdown reporter generates a markdown TOC and body for your test suite. This is great if you want to use the tests as documentation within a Github wiki page, or a markdown file in the repository that Github can render. For example, here is the Connect [test output](https://github.com/senchalabs/connect/blob/90a725343c2945aaee637e799b1cd11e065b2bff/tests.md).---
---
### [#](#xunit) XUnit---
---
Alias: `XUnit`, `xunit`---
---
The XUnit reporter is also available. It outputs an XUnit-compatible XML document, often applicable in CI servers.---
---
By default, it will output to the console. To write directly to a file, use `--reporter-option output=filename.xml`.---
---
To specify custom report title, use `--reporter-option suiteName="Custom name"`.---
---
### [#](#third-party-reporters) Third-Party Reporters---
---
Mocha allows you to define custom reporters. For more information see the [wiki](https://github.com/mochajs/mocha/wiki/Third-party-reporters).---
---
Examples:---
---
-    the [TeamCity reporter](https://github.com/travisjeffery/mocha-teamcity-reporter)---
-    our [working example](https://github.com/mochajs/mocha-examples/tree/master/packages/third-party-reporter)---
---
### [#](#html-reporter) HTML Reporter---
---
Alias: `HTML`, `html`---
---
- - The HTML reporter is not intended for use on the command-line.- - ---
---
[#](#nodejs-native-esm-support) Node.JS native ESM support---
-------------------------------------------------------------
---
> _New in v7.1.0_---
---
Mocha supports writing your tests as ES modules, and not just using CommonJS. For example:---
---
    ---
    import {add} from './add.mjs';---
    import assert from 'assert';---
    ---
    it('should add to numbers from an es module', () => {---
      assert.equal(add(3, 5), 8);---
    });---
    ---
---
To enable this you don't need to do anything special. Write your test file as an ES module. In Node.js this means either ending the file with a `.mjs` extension, or, if you want to use the regular `.js` extension, by adding `"type": "module"` to your `package.json`. More information can be found in the [Node.js documentation](https://nodejs.org/api/esm.html).---
---
> Mocha supports ES modules only from Node.js v12.11.0 and above. To enable this in versions smaller than 13.2.0, you need to add `--experimental-modules` when running Mocha. From version 13.2.0 of Node.js, you can use ES modules without any flags. (Mocha _will_ load ESM even in Node v10, but this is not officially supported. Use at your own risk.)---
---
### [#](#current-limitations) Current Limitations---
---
Node.JS native ESM support still has status: - - Stability: 1 - Experimental- - ---
---
-    [Watch mode](#-watch-w) does not support ES Module test files---
-    [Custom reporters](#third-party-reporters) and [custom interfaces](#interfaces) can only be CommonJS files---
-    [Configuration file](#configuring-mocha-nodejs) can only be a CommonJS file (`.mocharc.js` or `.mocharc.cjs`)---
-    When using module-level mocks via libs like `proxyquire`, `rewiremock` or `rewire`, hold off on using ES modules for your test files---
-    Node.JS native ESM support does not work with [esm](https://npm.im/esm) module---
---
[#](#running-mocha-in-the-browser) Running Mocha in the Browser---
------------------------------------------------------------------
---
Mocha runs in the browser. Every release of Mocha will have new builds of `./mocha.js` and `./mocha.css` for use in the browser.---
---
A typical setup might look something like the following, where we call `mocha.setup('bdd')` to use the - - BDD- -  interface before loading the test scripts, running them `onload` with `mocha.run()`.---
---
    <!DOCTYPE html>---
    <html lang="en">---
      <head>---
        <meta charset="utf-8" />---
        <title>Mocha Tests</title>---
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />---
        <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />---
      </head>---
      <body>---
        <div id="mocha"></div>---
    ---
        <script src="https://unpkg.com/chai/chai.js"></script>---
        <script src="https://unpkg.com/mocha/mocha.js"></script>---
    ---
        <script class="mocha-init">---
          mocha.setup('bdd');---
          mocha.checkLeaks();---
        </script>---
        <script src="test.array.js"></script>---
        <script src="test.object.js"></script>---
        <script src="test.xhr.js"></script>---
        <script class="mocha-exec">---
          mocha.run();---
        </script>---
      </body>---
    </html>---
    ---
---
### [#](#grep) Grep---
---
The browser may use the `--grep` as functionality. Append a query-string to your URL: `?grep=api`.---
---
### [#](#browser-configuration) Browser Configuration---
---
Mocha options can be set via `mocha.setup()`. Examples:---
---
    ---
    ---
    mocha.setup('tdd');---
    ---
    ---
    mocha.setup({---
      ui: 'tdd'---
    });---
    ---
    ---
    mocha.setup({---
      allowUncaught: true,---
      asyncOnly: true,---
      bail: true,---
      checkLeaks: true,---
      forbidOnly: true,---
      forbidPending: true,---
      global: ['MyLib'],---
      retries: 3,---
      slow: '100',---
      timeout: '2000',---
      ui: 'bdd'---
    });---
    ---
---
### [#](#browser-specific-options) Browser-specific Option(s)---
---
Browser Mocha supports many, but not all [cli options](#command-line-usage). To use a [cli option](#command-line-usage) that contains a "-", please convert the option to camel-case, (eg. `check-leaks` to `checkLeaks`).---
---
#### [#](#options-that-differ-slightly-from-cli-options) Options that differ slightly from [cli options](#command-line-usage):---
---
`reporter` _{string|constructor}_ You can pass a reporter's name or a custom reporter's constructor. You can find - - recommended- -  reporters for the browser [here](#reporting). It is possible to use [built-in reporters](#reporters) as well. Their employment in browsers is neither recommended nor supported, open the console to see the test results.---
---
#### [#](#options-that-only-function-in-browser-context) Options that _only_ function in browser context:---
---
`noHighlighting` _{boolean}_ If set to `true`, do not attempt to use syntax highlighting on output test code.---
---
### [#](#reporting) Reporting---
---
The HTML reporter is the default reporter when running Mocha in the browser. It looks like this:---
---
![HTML test reporter](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/reporter-html.resize920,9999-withoutEnlargement.e2b1172cb9.png)---
---
[Mochawesome](https://npm.im/mochawesome) is a great alternative to the default HTML reporter.---
---
[#](#desktop-notification-support) Desktop Notification Support---
------------------------------------------------------------------
---
Desktop notifications allow asynchronous communication of events without forcing you to react to a notification immediately. Their appearance and specific functionality vary across platforms. They typically disappear automatically after a short delay, but their content is often stored in some manner that allows you to access past notifications.---
---
[Growl](http://growl.info/) was an early notification system implementation for OS X and Windows, hence, the name of Mocha's `--growl` option.---
---
Once enabled, when your root suite completes test execution, a desktop notification should appear informing you whether your tests passed or failed.---
---
### [#](#node-based-notifications) Node-based notifications---
---
In order to use desktop notifications with the command-line interface (CLI), you - - must- -  first install some platform-specific prerequisite software. Instructions for doing so can be found [here](https://github.com/mochajs/mocha/wiki/Growl-Notifications).---
---
Enable Mocha's desktop notifications as follows:---
---
    $ mocha --growl---
    ---
---
### [#](#browser-based-notifications) Browser-based notifications---
---
Web notification support is being made available for current versions of modern browsers. Ensure your browser version supports both [promises](https://caniuse.com/#feat=promises) and [web notifications](https://caniuse.com/#feat=notifications). As the Notification API evolved over time, - - do not expect- -  the minimum possible browser version to necessarily work.---
---
Enable Mocha's web notifications with a slight modification to your client-side mocha HTML. Add a call to `mocha.growl()` prior to running your tests as shown below:---
---
    <!DOCTYPE html>---
    <html lang="en">---
      <head>---
        <meta charset="utf-8" />---
        <title>Mocha Tests</title>---
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />---
        <link rel="stylesheet" href="https://unpkg.com/mocha/mocha.css" />---
      </head>---
      <body>---
        <div id="mocha"></div>---
    ---
        <script src="https://unpkg.com/chai/chai.js"></script>---
        <script src="https://unpkg.com/mocha/mocha.js"></script>---
    ---
        <script class="mocha-init">---
          mocha.setup('bdd');---
          mocha.growl(); ---
        </script>---
        <script src="test.spec.js"></script>---
        <script class="mocha-exec">---
          mocha.run();---
        </script>---
      </body>---
    </html>---
    ---
---
[#](#configuring-mocha-nodejs) Configuring Mocha (Node.js)---
-------------------------------------------------------------
---
> _New in v6.0.0_---
---
Mocha supports configuration files, typical of modern command-line tools, in several formats:---
---
-    - - JavaScript- - : Create a `.mocharc.js` (or `.mocharc.cjs` when using [`"type"="module"`](#nodejs-native-esm-support) in your `package.json`) in your project's root directory, and export an object (`module.exports = {/-  ... - /}`) containing your configuration.---
-    - - YAML- - : Create a `.mocharc.yaml` (or `.mocharc.yml`) in your project's root directory.---
-    - - JSON- - : Create a `.mocharc.json` (or `.mocharc.jsonc`) in your project's root directory. Comments — while not valid JSON — are allowed in this file, and will be ignored by Mocha.---
-    - - package.json- - : Create a `mocha` property in your project's `package.json`.---
---
### [#](#custom-locations) Custom Locations---
---
You can specify a custom location for your configuration file with the `--config <path>` option. Mocha will use the file's extension to determine how to parse the file, and will assume JSON if unknown.---
---
You can specify a custom `package.json` location as well, using the `--package <path>` option.---
---
### [#](#ignoring-config-files) Ignoring Config Files---
---
To skip looking for config files, use `--no-config`. Likewise, use `--no-package` to stop Mocha from looking for configuration in a `package.json`.---
---
### [#](#priorities) Priorities---
---
If no custom path was given, and if there are multiple configuration files in the same directory, Mocha will search for — and use — only one. The priority is:---
---
1.  `.mocharc.js`---
2.  `.mocharc.yaml`---
3.  `.mocharc.yml`---
4.  `.mocharc.jsonc`---
5.  `.mocharc.json`---
---
### [#](#merging) Merging---
---
Mocha will also _merge_ any options found in `package.json` into its run-time configuration. In case of conflict, the priority is:---
---
1.  Arguments specified on command-line---
2.  Configuration file (`.mocharc.js`, `.mocharc.yml`, etc.)---
3.  `mocha` property of `package.json`---
---
Options which can safely be repeated (e.g., `--require`) will be _concatenated_, with higher-priorty configuration sources appearing earlier in the list. For example, a `.mocharc.json` containing `"require": "bar"`, coupled with execution of `mocha --require foo`, would cause Mocha to require `foo`, then `bar`, in that order.---
---
### [#](#extending-configuration) Extending Configuration---
---
Configurations can inherit from other modules using the `extends` keyword. See [here](http://yargs.js.org/docs/#api-configobject-extends-keyword) for more information.---
---
### [#](#configuration-format) Configuration Format---
---
-    Any "boolean" flag (which doesn't require a parameter, such as `--bail`), can be specified using a boolean value, e.g.: `"bail": true`.---
-    Any "array"-type option (see `mocha --help` for a list) can be a single string value.---
-    For options containing a dash (`-`), the option name can be specified using camelCase.---
-    Aliases are valid names, e.g., `R` instead of `reporter`.---
-    Test files can be specified using `spec`, e.g., `"spec": "test/- - /- .spec.js"`.---
-    Flags to `node` are _also_ supported in configuration files. Use caution, as these can vary between versions of Node.js!---
---
- - For more configuration examples, see the [`example/config`](https://github.com/mochajs/mocha/tree/master/example/config) directory on GitHub.- - ---
---
[#](#the-test-directory) The `test/` Directory---
-------------------------------------------------
---
By default, `mocha` looks for the glob `"./test/- .js"`, so you may want to put your tests in `test/` folder. If you want to include subdirectories, pass the `--recursive` option.---
---
To configure where `mocha` looks for tests, you may pass your own glob:---
---
    $ mocha --recursive "./spec/- .js"---
    ---
---
Some shells support recursive matching by using the globstar (`- - `) wildcard. Bash >= 4.3 supports this with the [`globstar` option](https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html) which [must be enabled](https://github.com/mochajs/mocha/pull/3348#issuecomment-383937247) to get the same results as passing the `--recursive` option ([ZSH](http://zsh.sourceforge.net/Doc/Release/Expansion.html#Recursive-Globbing) and [Fish](https://fishshell.com/docs/current/#expand-wildcard) support this by default). With recursive matching enabled, the following is the same as passing `--recursive`:---
---
    $ mocha "./spec/- - /- .js"---
    ---
---
[You should _always_ quote your globs in npm scripts](https://medium.com/@jakubsynowiec/you-should-always-quote-your-globs-in-npm-scripts-621887a2a784). If you use double quotes, it's the shell on UNIX that will expand the glob. On the other hand, if you use single quotes, the [`node-glob`](https://www.npmjs.com/package/glob) module will handle its expansion.---
---
See this [tutorial](https://gist.github.com/reggi/475793ea1846affbcfe8) on using globs.---
---
_Note_: Double quotes around the glob are recommended for portability.---
---
[#](#error-codes) Error Codes---
--------------------------------
---
> _New in v6.0.0_---
---
When Mocha itself throws exception, the associated `Error` will have a `code` property. Where applicable, consumers should check the `code` property instead of string-matching against the `message` property. The following table describes these error codes:---
---
| Code                                  | Description                                                  | --- |
| ------------------------------------- | ------------------------------------------------------------ | --- |
| ERR\_MOCHA\_INVALID\_ARG\_TYPE        | wrong type was passed for a given argument                   | --- |
| ERR\_MOCHA\_INVALID\_ARG\_VALUE       | invalid or unsupported value was passed for a given argument | --- |
| ERR\_MOCHA\_INVALID\_EXCEPTION        | a falsy or otherwise underspecified exception was thrown     | --- |
| ERR\_MOCHA\_INVALID\_INTERFACE        | interface specified in options not found                     | --- |
| ERR\_MOCHA\_INVALID\_REPORTER         | reporter specified in options not found                      | --- |
| ERR\_MOCHA\_NO\_FILES\_MATCH\_PATTERN | test file(s) could not be found                              | --- |
| ERR\_MOCHA\_UNSUPPORTED               | requested behavior, option, or parameter is unsupported      | --- |
---
[#](#editor-plugins) Editor Plugins---
--------------------------------------
---
The following editor-related packages are available:---
---
### [#](#textmate) TextMate---
---
The [Mocha TextMate bundle](https://github.com/mochajs/mocha.tmbundle) includes snippets to make writing tests quicker and more enjoyable.---
---
### [#](#jetbrains) JetBrains---
---
[JetBrains](https://www.jetbrains.com/) provides a [NodeJS plugin](https://www.jetbrains.com/idea/features/nodejs.html) for its suite of IDEs (IntelliJ IDEA, WebStorm, etc.), which contains a Mocha test runner, among other things.---
---
![JetBrains Mocha Runner Plugin in Action](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/jetbrains-plugin.resize920,9999-withoutEnlargement-pngquant.ef580022d4.png?ncolors=)---
---
The plugin is titled - - NodeJS- - , and can be installed via - - Preferences- -  > - - Plugins- - , assuming your license allows it.---
---
### [#](#wallabyjs) Wallaby.js---
---
[Wallaby.js](https://wallabyjs.com/) is a continuous testing tool that enables real-time code coverage for Mocha with any assertion library in VS Code, Atom, JetBrains IDEs (IntelliJ IDEA, WebStorm, etc.), Sublime Text and Visual Studio for both browser and node.js projects.---
---
![Wallaby.js in Action](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/wallaby.resize920,9999-withoutEnlargement-pngquant.6d5ba62803.png?ncolors=)---
---
### [#](#emacs) Emacs---
---
[Emacs](https://www.gnu.org/software/emacs/) support for running Mocha tests is available via a 3rd party package [mocha.el](https://github.com/scottaj/mocha.el). The package is available on MELPA, and can be installed via `M-x package-install mocha`.---
---
![Emacs Mocha Runner in Action](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/emacs.resize920,9999-withoutEnlargement-pngquant.a28a96898b.png?ncolors=)---
---
[Mocha sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar) is the most complete mocha extension for vs code.---
---
#### [#](#features-2) Features---
---
-    see all tests in VS Code sidebar menu---
-    run & debug tests for each level hierarchy from all tests to a single test (and each suite)---
-    auto run tests on file save---
-    see tests results directly in the code editor---
---
![mocha side bar in Action](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/static/mocha_side_bar.resize920,9999-withoutEnlargement-pngquant.46d96fb76c.png?ncolors=)---
---
[#](#examples) Examples---
--------------------------
---
Real live example code:---
---
-    [Mocha examples](https://github.com/mochajs/mocha-examples)---
-    [Express](https://github.com/visionmedia/express/tree/master/test)---
-    [Connect](https://github.com/senchalabs/connect/tree/master/test)---
-    [SuperAgent](https://github.com/visionmedia/superagent/tree/master/test/node)---
-    [WebSocket.io](https://github.com/LearnBoost/websocket.io/tree/master/test)---
-    [Mocha tests](https://github.com/mochajs/mocha/tree/master/test)---
---
[#](#testing-mocha) Testing Mocha---
------------------------------------
---
To run Mocha's tests, you will need GNU Make or compatible; Cygwin should work.---
---
    $ cd /path/to/mocha---
    $ npm install---
    $ npm test---
    ---
---
[#](#more-information) More Information---
------------------------------------------
---
In addition to chatting with us on [Gitter](https://gitter.im/mochajs/mocha), for additional information such as using spies, mocking, and shared behaviours be sure to check out the [Mocha Wiki](https://github.com/mochajs/mocha/wiki) on GitHub. For discussions join the [Google Group](https://groups.google.com/group/mochajs). For a running example of Mocha, view [example/tests.html](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/example/tests.html). For the JavaScript API, view the [API documentation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/api/) or the [source](https://github.com/mochajs/mocha/blob/master/lib/mocha.js).---
---
---
[Source](https://mochajs.org/)
