import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 03", () => {

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "01_function_declaration.ts")
        ],
        [
            "Block-scoped variable 'greetUnnamed' used before its declaration.",
            "Variable 'greetUnnamed' is used before being assigned."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "02_function_types.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "03_trailing_comas.ts")
        ],
        [
            "',' expected."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "04_optional_parameters.ts")
        ],
        [
            "Expected 3 arguments, but got 0.",
            "Expected 3 arguments, but got 2.",
            "Expected 2-3 arguments, but got 0."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "05_default_parameters.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "06_rest_parameters.ts")
        ],
        [
            "Expected 1 arguments, but got 0.",
            "Argument of type '2' is not assignable to parameter of type 'number[]'.",
            "Expected 1 arguments, but got 2.",
            "Expected 1 arguments, but got 3."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "07_function_overloading.ts")
        ],
        [
            "Argument of type '{ custom: string; }' is not assignable to parameter of type 'boolean'.",
            "Overload signature is not compatible with function implementation."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "08_specialized_overloading.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "09_function_scope.ts")
        ],
        [
            "Cannot find name 'bar'.",
            "Cannot assign to 'bar' because it is a constant or a read-only property.",
            "Cannot find name 'bar'."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "10_iife.ts")
        ],
        [
            "Cannot find name 'foo'.",
            "Cannot find name 'foo'.",
            "Property '_i' is private and only accessible within class 'Counter'.",
            "Argument of type '(nestedCallback: (e: number) => void) => void' is not assignable to parameter of type '(nestedCallback: (error: number, result: any) => void) => void'.Types of parameters 'nestedCallback' and 'nestedCallback' are incompatible."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "11_tag_templates.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "12_arrow_functions.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "13_callbak_hell.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "14_promises.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "15_covariant_arguments.ts")
        ],
        [
            "Argument of type '(nestedCallback: (e: number) => void) => void' is not assignable to parameter of type '(nestedCallback: (error: number, result: any) => void) => void'.Types of parameters 'nestedCallback' and 'nestedCallback' are incompatible.",
            "Argument of type '\"error\"' is not assignable to parameter of type 'number | PromiseLike<number> | undefined'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "16_generators.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "17_async_await.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "18_async_generators.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "19_async_iterators.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_03", "20_delegate_generators.ts")
        ],
        { strict: true }
    );

});
