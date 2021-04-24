'use strict';

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

function getFiles(cppDir) {
    return fs
        .readdirSync(cppDir)
        .filter(function (item) {
            const fullPath = path.join(cppDir, item);
            return fs.lstatSync(fullPath).isDirectory();
        })
        .map(function (dirname) {
            const fullPath = path.join(cppDir, dirname);
            return fs
                .readdirSync(fullPath)
                .filter(function (item) {
                    return item.endsWith('.cpp');
                })
                .map(function (filename) {
                    return path.join(cppDir, dirname, filename);
                });
        })
        .reduce(function (flattenedArray, fileSet) {
            return flattenedArray.concat(fileSet);
        }, []);
}

function execute(command, printOutput = false) {
    const execFileMatch = command.match(/\/c\+\+\/([\w-_/.]+)$/);
    const execFile = execFileMatch && execFileMatch.length > 1 ? execFileMatch[1] : '';
    const printFile = execFile.replace(/\.out$/, '.cpp');
    return new Promise(function (resolve, reject) {
        return childProcess.exec(command, function (err, stdout, stderr) {
            if (err) {
                console.log(`${printFile}\n${stdout}`);
                return reject(err);
            } else if (printOutput) {
                console.log(`${printFile}\n${stdout}`);
            }
            return resolve();
        });
    });
}

function runTest(filename) {
    const outputFile = filename.replace(/\.cpp$/, '.out');
    const compileCommand = `g++ --std=c++11 --output ${outputFile} ${filename}`;
    const executeCommand = outputFile;
    return execute(compileCommand)
        .then(execute.bind(null, executeCommand, true));
}

function clearOutputFiles() {
    const clearCommand = 'find . -name "*.out" -delete';
    return execute(clearCommand);
}

if (!module.parent) {
    const args = process.argv;
    const userRequestedFiles = args.slice(2);
    const cppDir = path.join(__dirname, 'c++');
    const files = userRequestedFiles.length ? userRequestedFiles : getFiles(cppDir);
    const promises = files.map(runTest);
    Promise.all(promises)
        .then(clearOutputFiles);
}
