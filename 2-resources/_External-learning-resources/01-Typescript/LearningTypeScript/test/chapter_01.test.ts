import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 01", () => {

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "01_type_inference.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "02_variables.ts")
    ]);
    
    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_01", "03_tuples.ts")
        ],
        [
            "Type '[number, string]' is not assignable to type '[string, number]'.Type 'number' is not assignable to type 'string'.",
            "Type '[number, string]' is not assignable to type '[string, number]'."
        ]
    );
    
    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "04_scope.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "05_spread_operator.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "06_flow_controls.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "07_functions.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "08_classes.ts")
    ]);
    
    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_01", "09_interfaces.ts")
        ],
        [
            "Type '{ name: string; }' is not assignable to type 'UserInterface'.Property 'password' is missing in type '{ name: string; }'."
        ]
    );
    
    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "10_modules.ts")
    ]);

    shouldNotThrow([
        path.join(__dirname, "..", "chapters", "chapter_01", "11_geometry.ts")
    ]);

});
