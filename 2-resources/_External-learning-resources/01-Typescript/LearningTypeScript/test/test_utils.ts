import * as typescript from "typescript";
import Ast, * as SimpleAst from "ts-simple-ast";
import * as path from "path";
import chalk from "chalk";

function diagnosticToString(diagnosticMessageChain: SimpleAst.DiagnosticMessageChain, result = "") {
    result += diagnosticMessageChain.getMessageText();
    const next = diagnosticMessageChain.getNext();
    if (next) {
        result += diagnosticToString(next);
    }
    return result;
}

export function describe(name: string, cb: () => void) {
    console.log(chalk.blueBright(`\n${name}:`));
    cb();
}

export function getFileDiagnostics(filePaths: string[], opt?: SimpleAst.CompilerOptions) {

    const tsconfigPath = path.join(__dirname, "..", "tsconfig.json");

    const baseOptions = {
        tsConfigFilePath: tsconfigPath,
        addFilesFromTsConfig: false
    };

    const overrideOptions = opt ? { compilerOptions: opt } : {};
    const finalOptions = { ...baseOptions, ...overrideOptions };
    const ast = new Ast(finalOptions);

    filePaths.forEach(filePath => ast.addExistingSourceFile(filePath));

    const diagnostics = ast.getDiagnostics();

    return diagnostics.map(diagnostic => {
        const message =  diagnostic.getMessageText();
        if (typeof message === "string") {
            return message;
        } else {
            return diagnosticToString(message);
        }
    });

}

export function shouldNotThrow(filePaths: string[], opt?: SimpleAst.CompilerOptions) {
    console.log(chalk.blueBright(`Parsing file: ${filePaths.join("\n")}`));
    const diagnostics = getFileDiagnostics(filePaths, opt);
    diagnostics.forEach((msg) => {
        throw new Error(chalk.redBright(`Expected ${filePaths.join("\n")} to not have errors but found:\n- ${msg}`));
    });
    console.log(chalk.greenBright("OK!"));
}

export function shouldThrow(filePaths: string[], errors: string[], opt?: SimpleAst.CompilerOptions) {
    console.log(chalk.blueBright(`Parsing file: ${filePaths.join("\n")}`));
    const diagnostics = getFileDiagnostics(filePaths, opt);
    diagnostics.forEach((actual, index) => {
        console.log(chalk.blueBright(`Found: ${actual}`));
        const expected = errors[index];
        if (expected !== actual) {
            throw new Error(chalk.redBright(`Expected ${filePaths.join("\n")} to throw:\n- ${expected}\nbut found:\n- ${actual}`));
        } else {
            console.log(chalk.greenBright("OK!"));
        }
    });
}
