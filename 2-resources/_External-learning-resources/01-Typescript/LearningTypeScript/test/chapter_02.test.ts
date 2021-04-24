import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 02", () => {
    
    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "01_type_inference.ts")
        ],
        { strict: false }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "02_type_annotations.ts")
        ],
        ["Argument of type '\"2\"' is not assignable to parameter of type 'number'."],
        { strict: false }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "03_structural_type_system.ts")
        ],
        [
            "Argument of type '{ name: string; familyName: string; }' is not assignable to parameter of type 'Person'." +
            "Property 'surname' is missing in type '{ name: string; familyName: string; }'."
        ],
        { strict: false }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "04_union_types.ts")
        ],
        [
            "Type '1' is not assignable to type 'string | string[]'.",
            "Property 'orderItems' does not exist on type 'Supplier | Customer'.Property 'orderItems' does not exist on type 'Customer'.",
            "Property 'sellItems' does not exist on type 'Supplier | Customer'.Property 'sellItems' does not exist on type 'Supplier'."
        ],
        { strict: false }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "05_type_aliases.ts")
        ],
        { strict: false }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "06_intersection_types.ts")]
            ,
        [
            "Property 'd' does not exist on type 'A & B & C'.",
            "Property 'd' does not exist on type 'A & B & C'.",
            "Argument of type 'true' is not assignable to parameter of type 'number'."
        ],
        { strict: false }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "07_nullable_types.ts")
        ],
        { strict: false }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "08_non_nullable_types.ts")
        ],
        [
            "Type 'null' is not assignable to type 'string'.",
            "Type 'undefined' is not assignable to type 'string'.",
            "Type 'null' is not assignable to type 'number'.",
            "Type 'undefined' is not assignable to type 'number'.",
            "Type '{ name: null; age: null; }' is not assignable to type '{ name: string; age: number; }'.Types of property 'name' are incompatible.Type 'null' is not assignable to type 'string'.",
            "Type '{ name: undefined; age: undefined; }' is not assignable to type '{ name: string; age: number; }'.Types of property 'name' are incompatible.Type 'undefined' is not assignable to type 'string'.",
            "Type 'null' is not assignable to type '{ name: string; age: number; }'.",
            "Type 'undefined' is not assignable to type '{ name: string; age: number; }'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "09_typeof_operator.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "10_type_guards.ts")
        ],
        [
            "Property 'splice' does not exist on type 'string'. Did you mean 'slice'?"
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "11_custom_type_guards.ts")
        ],
        [
            "Property 'subtr' does not exist on type 'string'. Did you mean 'substr'?",
            "Property 'substr' does not exist on type 'string | number'.Property 'substr' does not exist on type 'number'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "12_control_flow_analysis.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "13_literal_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "14_discriminated_unions.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "15_never_type.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "16_enumerations.ts")
        ],
        [
            "Argument of type '\"Righ\"' is not assignable to parameter of type 'DirectionUnionType'."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "17_object_literals.ts")
        ],
        [
            "Type '{ name: string; }' is not assignable to type 'User'.Property 'age' is missing in type '{ name: string; }'."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "18_weak_types.ts")
        ],
        [
            "Type '{ firstName: string; yearBorn: number; }' is not assignable to type 'User'.Object literal may only specify known properties, and 'firstName' does not exist in type 'User'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "19_keyof_operator.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "20_index_signature.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "21_local_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "22_type_casting.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "23_generic_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "24_generic_constraints.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "25_mapped_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "26_lookup_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "27_mapped_type_modifiers.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "28_conditional_types.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_02", "29_polymorphic_this_type.ts")
        ],
        { strict: true }
    );

});
