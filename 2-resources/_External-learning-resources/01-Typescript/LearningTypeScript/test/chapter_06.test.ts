import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 06", () => {

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "01_stack.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "02_function_calls.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "03_bind.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "04_prototypes.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "05_prototype_chain.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_06", "06_closures.ts")
        ],
        { strict: true }
    );

});
