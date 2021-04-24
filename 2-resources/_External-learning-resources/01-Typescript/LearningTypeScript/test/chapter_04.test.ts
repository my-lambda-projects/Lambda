import { shouldNotThrow, shouldThrow, describe } from "./test_utils";
import * as path from "path";

describe("CHAPTER 04", () => {

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "01_classes.ts")
        ],
        [
            "Property 'height' has no initializer and is not definitely assigned in the constructor.",
            "Property 'width' has no initializer and is not definitely assigned in the constructor.",
            "Property 'height' has no initializer and is not definitely assigned in the constructor."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "02_Inheritance.ts")
        ],
        [
            "Property 'teach' does not exist on type 'Person'."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "03_access_modifiers.ts")
        ],
        [
            "Property '_email' is private and only accessible within class 'Person'.",
            "Property '_email' is private and only accessible within class 'Person'.",
            "Property '_email' is private and only accessible within class 'Person'.",
            "Property '_email' is private and only accessible within class 'Person'.",
            "Property '_email' is private and only accessible within class 'Person'.",
            "Property '_email' is protected and only accessible within class 'Person' and its subclasses.",
            "Property '_email' is protected and only accessible within class 'Person' and its subclasses."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "04_parameter_properties.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "05_class_expressions.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "06_static_members.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "07_optional_properties.ts")
        ],
        [
            "Object is possibly 'undefined'.",
            "Object is possibly 'undefined'."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "08_readonly_properties.ts")
        ],
        [
            "Cannot assign to 'x' because it is a constant or a read-only property.",
            "Cannot assign to 'y' because it is a constant or a read-only property.",
            "Cannot assign to 'z' because it is a constant or a read-only property."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "09_method_overriding.ts")
        ],
        [
            "Property 'teach' does not exist on type 'Person'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "10_generic_classes.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "11_generic_constraints.ts")
        ],
        [
            "Property 'doSomethingElse' does not exist on type 'T'.",
            "Cannot use 'new' with an expression whose type lacks a call or construct signature."
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "12_mixins.ts")
        ],
        [
            "Classes can only extend a single class."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "13_iterables.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "14_abstract_classes.ts")
        ],
        [
            "Cannot create an instance of an abstract class.",
            "Property 'generateReports' does not exist on type 'Department'.",
            "Property 'generateReports' does not exist on type 'Department'."
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "15_interfaces.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "16_srp.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "17_encapsulation.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "18_ocp.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "19_polymorphism.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "20_isp.ts")
        ],
        { strict: true }
    );

    shouldNotThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "21_lsp.ts")
        ],
        { strict: true }
    );

    shouldThrow(
        [
            path.join(__dirname, "..", "chapters", "chapter_04", "22_dip.ts")
        ],
        [
            "Argument of type 'LocalStoragePersitanceService' is not assignable to parameter of type 'CookiePersitanceService'.Property 'CookiesSupported' is missing in type 'LocalStoragePersitanceService'."
        ],
        { strict: true }
    );

});
