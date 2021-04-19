import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 08", () => {

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "01_class_decorator.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "01_class_decorator.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "02_method_decorator.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "04_parameter_decorator.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "05_decorator_factory.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "06_decorator_options.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_08", "07_reflect_metadata.ts")
        ],
        { strict: true }
    );

});
