import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 07", () => {

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "01_pure_functions.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "02_lambdas.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "03_function_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "04_higher_order_function.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "05_composition.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "06_partial_application.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "07_currying.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "08_pipes.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "09_pointfree_style.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "10_recursion.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "11_functors.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "12_monads.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "13_immutable.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_07", "14_ramda.ts")
        ],
        { strict: true }
    );

});
