[HTML TAG EXAMPLES](./one-of-every-tag.html)
[Navigation](./directory.html)
[Playground](https://code-playground.netlify.app/) 
[Quiz Me](https://web-dev-interview-prep-quiz-website.netlify.app/)
[Text-Tools](https://devtools42.netlify.app/) 
[Github HTML FilePreviewer](https://githtmlpreview.netlify.app/)[simple-sidebar-template](./_Resources\simple-side-bar\directory.html)
[My Blog Posts](https://bryanguner.medium.com/)
------------------------------------------------------------------------




[![](https://img.icons8.com/pastel-glyph/64/000000/home.png)](https://lambda-prep.netlify.app/)HOME

Resources
=========

Submit Resources For Me To Include Below!
-----------------------------------------

  Title            Link
  ---------------- -------------------------------------------------------------
  Edabit           <https://edabit.com/challenges>
  Free Code Camp   <https://www.freecodecamp.org/learn/responsive-web-design/>
  ExplainShell     <https://explainshell.com/>
                   
                   
                   
                   
                   
                   
---



MAIN

**Links**

Description

[<https://nodejs.dev/>]{.underline}

Node Docs

[https://developer.mozilla.org/]{.underline}

MDN DOCS

[<https://www.npmjs.com/>]{.underline}

npm Docs



General Learning Links

[<https://edabit.com/challenges/javascript>]{.underline}

[<https://leetcode.com/>]{.underline}

[<https://www.hackerrank.com/>]{.underline}

[<https://www.algoexpert.io/product>]{.underline}

Coding Interview Advice




Git-Hub Repos





Week1







week2







week3







week4







week5







week6
















⇧⇧⇧Edit In Playground Above!⇧⇧⇧

This is heading 1
=================

This is heading 2 followed by an embeded video of me playing guitar
-------------------------------------------------------------------



------------------------------------------------------------------------

### This is heading 3

#### This is heading 4

##### This is heading 5

###### This is heading 6

**- Bold text **- Important text** *- Italic text* *- Emphasized text* -
Marked text [- Small text]{.small} ~~- Deleted text~~ [- Inserted
text]{.underline} ~-\ Subscript\ text~ ^-\ Superscript\ text^**

The easiest thing you can do in HTML is write a sentence. To do this you
need to know one of the very basic and easy to use tags - the

"Use q for short quotes"

> The blockquote tag should be used when we want to talk about some long
> quote that is quoted from another source.


> your very long and interesting probably quote.

![What your image is about](https://i.redd.it/tfugj4n3l6ez.png)
[MDN](https://developer.mozilla.org/en-US/)

This is done with the target attribute. The target attribute specifies
where to open the linked document and it can have one of the following
values:
1.  list item 1
2.  list item 2
3.  list item N

-   list item 1
-   list item 2
-   list item N


  table row 1 first square   table row 1 second square
  -------------------------- ---------------------------
  table row 2 first square   table row 2 second square
  table row 2 first square   table row 2 second square

The paragraph is a block-level element.

A block-level element always starts on a new line and takes up the full
width available (stretches out to the left and right as far as it can).

Examples of block-level elements: div h1 - h6 p form

This span is an inline element

This An inline element occupies only the space bounded by the tags that
define the inline element. Generally, inline elements may contain only
data and other inline elements. The following example demonstrates the
inline element\'s influence: is an inline element


Lisbon
------

Div Element The div element belongs to the block-level group, often used
as a container for other HTML elements. The div element has no required
attributes, but both style and class are common. When used together with
CSS, the div element can be used to style blocks of content, as we can
see in the example below:

My super [Span Element The span element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. The span is very much like a div element, but div is a block-level element whereas a span is an inline element.]{style="color:red"} Heading
=====================================================================================================================================================================================================================================================================================================================================================================================================================================

Classes Using the html class attribute makes it possible to define equal
styles, for elements with the same class name.

`         `

      
        div.cities {
          background-color: black;
          color: white;
          margin: 20px 0 20px 0;
          padding: 20px;
        }
      

London
------

London is the capital of England.


Kingston
--------

Kingston is the capital city of Jamaica.


Tokyo
-----

Tokyo is the capital of Japan, the center of the Greater Tokyo Area, and
the most populous metropolitan area in the world.

My Ultra [Important]{.note} Heading
===================================

This is some random but [important]{.note} text.

The button tag defines a clickable button.

These buttons work and behave in exactly the same way as our
counterparts above. In addition to submitting the form, you can make
them disabled, add an accesskey or even specify a tabindex.


tag is that you can put useful HTML elements inside them, like images:

``` {.language-html data-info="html" data-role="codeBlock"}
<button type="submit"><img src="" alt="" /> Submit</button>
```

\"Buttons created with the **BUTTON** element function just like buttons
created with the **INPUT** element,but they offer richer rendering possibilities: the **BUTTON** tag may
have content.For example:a **BUTTON** element that contains an image functions like and may
resemble an **INPUT** element whose type is set to "image\",but the **BUTTON** element type allows content.\" W3

``` {.language-html data-info="html" data-role="codeBlock"}
<div class="buttons">
    <button type="submit" class="positive">
        <img src="/images/icons/tick.png" alt=""/>
        Save
    </button>    <a href="/password/reset/">
        <img src="/images/icons/textfield_key.png" alt=""/>
        Change Password
    </a>    <a href="#" class="negative">
        <img src="/images/icons/cross.png" alt=""/>
        Cancel
    </a>
</div>
```

*Tip*: Always specify the type attribute for a button element.Different browsers use different default types for the button element.

Styles and Sizes (With Bootstrap) {#styles-and-sizes-with-bootstrap .mume-header}
---------------------------------


Great Work!As we know, this is where we would start using only CSS to style and
size our buttons..? No!We are introducing you to Bootstrap (the most popular HTML, CSS, and
JavaScript framework for developing responsive,mobile-first web sites) because it´s an easier way to get the job done!

### Do you prefer larger or smaller buttons? {#do-you-prefer-larger-or-smaller-buttons .mume-header}


Add .btn-lg (large), .btn-md(medium), .btn-sm(small), or
.btn-xs(extra-small) for additional sizes.

``` {.language-html data-info="html" data-role="codeBlock"}
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary btn-md">Medium</button>
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">XSmall</button>
```

Create block level buttons --- those that span the full width of a
parent---by adding *.btn-block*:

``` {.language-html data-info="html" data-role="codeBlock"}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
```

After you decide the size of your buttons it´s time to style them!Bootstrap provides different styles of buttons:

-   Basic
-   Default
-   Primary
-   Success
-   Info
-   Warning
-   Danger
-   Link

``` {.language-html data-info="html" data-role="codeBlock"}
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<!-- Secondary, outline button -->
<button type="button" class="btn btn-secondary">Secondary</button>
<!-- Indicates a successful or positive action -->
<button type="button" class="btn btn-success">Success</button>
<!-- Contextual button for informational alert messages -->
<button type="button" class="btn btn-info">Info</button>
<!-- Indicates caution should be taken with this action -->
<button type="button" class="btn btn-warning">Warning</button>
<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="btn btn-danger">Danger</button>
<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="btn btn-link">Link</button>
```

### Outline buttons {#outline-buttons .mume-header}


Replace the default modifier classes with the *.btn-outline-* ones to
remove all background images and colors on any button.

``` {.language-html data-info="html" data-role="codeBlock"}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
```

### Great resources to learn HTML5 {#great-resources-to-learn-html5 .mume-header}


<https://developer.mozilla.org/en-US/docs/Web/HTML/Element>

-   Name:
-   E-mail:
-   Message:


Animations!
===========






---

# Readme:
[![](https://img.icons8.com/pastel-glyph/64/000000/home.png)](https://lambda-prep.netlify.app/)
HOME

Prep-Work
=========

**Notes**
=========

**How to learn effectively**
----------------------------

**Learning**: The acquisition of skills and the ability to apply them in
the future.

**What makes an Effective learner?**

-   They are active listeners.
-   They are engaged with the material.
-   They are receptive of feedback.
-   They are open to difficulty.

**Why do active learning techniques feel difficult?**

-   It feels difficult because you are constantly receiving feedback,
    and so you are constantly adapting and perfecting the material.

**Desirable Difficulty**

-   The skills we wish to obtain is often a difficult one.
-   We want challenging but possible lessons based on current level of
    skill.

**Effective learners space their practice**

-   Consistent effort \> cramming =\> for **durable knowledge**

------------------------------------------------------------------------

**Hello World**
---------------

-   **console.log** : command used to print something onto the screen.

-   **syntax** : the exact arrangement of the symbols, characters, and
    keywords in our code.
-   **//** : notation for creating a code comment in JS.
-   **code comment** : useful for annotating pieces of code to explain
    how something works, ignored by computer.

> "Simplicity is prerequisite for reliability." -- Edsger W. Dijkstra

------------------------------------------------------------------------

**The Number Data Type**
------------------------

The **number** data type in JS is used to represent any numerical
values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

-   **+** (addition)
-   **-** (subtraction)
-   **asterisk** (multiplication)
-   **/** (division)
-   **%** (modulo)

JS evaluates more complex expressions using the general math order of
operations aka PEMDAS.

-   **PEMDAS** : Parentheses, Exponents, Multiplication, Division,
    Modulo, Addition, Subtraction.
-   *To force a specific order of operation, use the group operator ( )
    around a part of the expression.*

**Modulo** : Very useful operation to check divisibility of numbers,
check for even & odd, whether a number is prime, and much more!
*(Discrete Math concept, circular problems can be solved with modulo)*

-   Whenever you have a smaller number % a larger number, the answer
    will just be the initial small number.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="0"}
    console.log(7 % 10); // => 7;
    ```

------------------------------------------------------------------------

**The String Data Type**
------------------------

The **string** data type is a primitive data type that used to represent
textual data.

-   can be wrapped by either **single** or **double** quotation marks,
    *best to choose one and stick with it for consistency*.
-   If your string contains quotation marks inside, can layer single or
    double quotation marks to allow it to work.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="1"}
    "That's a great string"; (valid)

    'Shakespeare wrote, "To be or not to be"'; (valid)

    'That's a bad string'; (invalid)
    ```

    -   Alt. way to add other quotes within strings is to use template
        literals.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="2"}
    `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within.
    ```

-   **.length** : property that can be appended to data to return the
    length.
    -   empty strings have a length of zero.
-   **indices** : indexes of data that begin at 0, can call upon index
    by using the bracket notation \[ \].

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="3"}
    console.log("bootcamp"[0]); // => "b"
    console.log("bootcamp"[10]); // => "undefined"
    console.log("boots"[1 * 2]); // => "o"
    console.log("boots"["boot".length - 1]); // => "t"
    ```

    -   we can pass expressions through the brackets as well since JS
        always evaluates expressions first.

-   The index of the last character of a string is always one less than
    it's length.
-   **indexOf()** : method used to find the first index of a given
    character within a string.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="4"}
    console.log("bagel".indexOf("b")); // => 0
    console.log("bagel".indexOf("z")); // => -1
    ```

    -   if the character inside the indexOf() search does not exist in
        the string, the output will be -1.
    -   the indexOf() search will return the first instanced index of
        the the char in the string.
    -   **concatenate** : word to describe joining strings together into
        a single string.

------------------------------------------------------------------------

**The Boolean Data Type**
-------------------------

The **boolean** data type is the simplest data type since there are only
two values: **true** and **false**.

-   **Logical Operators** (B*oolean Operators*) are used to establish
    logic in our code.

    -   **!** (not) : reverses a boolean value.

        ``` {.sourceCode .js data-initialized="true" data-gclp-id="5"}
        console.log(!true); // => false
        console.log(!!false); // => false
        ```

    -   **&&** (and) **Truth Table**

          Input   Input   Output
          ------- ------- --------
          T       T       T
          T       F       F
          F       T       F
          F       F       F

    -   **\|\|** (or) **Truth Table**

          Input   Input   Output
          ------- ------- --------
          T       T       T
          T       F       T
          F       T       T
          F       F       F

-   **Logical Order of Operations** : JS will evaluate !, then &&, then
    \|\|.
-   **De Morgan's Law** : Common mistake in boolean logic is incorrectly
    distributing ! across parentheses.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="6"}
    !(A || B) === !A && !B;
    !(A && B) === !A || !B;
    ```

    -   In summary, to correctly distribute ! across parentheses we must
        also flip the operation within.

-   **Short-Circuit Evaluation** : Because JS evalutes from left to
    right, expressions can "short-circuit". For example if we have true
    on the left of an \|\| logical comparison, it will stop evaluating
    and yield true instead of wasting resources on processing the rest
    of the statement.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="7"}
    console.log(true || !false); // => stops after it sees "true ||"
    ```

    ------------------------------------------------------------------------

**Comparison Operators**
------------------------

All comparison operators will result in a boolean output.

**The relative comparators**

-   **\>** (greater than)
-   **\<** (less than)
-   **\>=** (greater than or equal to)
-   **\<=** (less than or equal to)
-   **===** (equal to)
-   **!==** (not equal to)

> Fun Fact: "a" \< "b" is considered valid JS Code because string
> comparisons are compared lexicographically (meaning dictionary order),
> so "a" is less than "b" because it appears earlier!

> If there is ever a standstill comparison of two string
> lexicographically (i.e. app vs apple) the comparison will deem the
> shorter string lesser.

**Difference between == and ===**

-   **===** : Strict Equality, will only return true if the two
    comparisons are entirely the same.
-   **==** : Loose Equality, will return true even if the values are of
    a different type, due to coercion. (Avoid using this)

------------------------------------------------------------------------

**Variables**
-------------

Variables are used to store information to be referenced and manipulated
in a program.

-   We initialize a variable by using the **let** keyword and a **=**
    single equals sign (assignment operator).

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="8"}
    let bootcamp = "Lambda";
    console.log(bootcamp); // "Lambda"
    ```

-   JS variable names can contain any alphanumeric characters,
    underscores, or dollar signs (cannot being with a number).
-   If you do not declare a value for a variable, undefined is
    automatically set.

    ``` {.sourceCode .js data-initialized="true" data-gclp-id="9"}
    let bootcamp;
    console.log(bootcamp); // undefined
    ```

-   We can change the value of a previously declared variable (let, not
    const) by re-assigning it another value.
-   **let** is the updated version of **var**; there are some
    differences in terms of hoisting and global/block scope - will be
    covered later in the course (common interview question!)

**Assignment Shorthand**

``` {.sourceCode .js data-initialized="true" data-gclp-id="10"}
let num = 0;
num += 10; // same as num = num + 10
num -= 2; // same as num = num - 2
num /= 4; // same as num = num / 4
num *= 7; // same as num = num * 7
```

-   In general, any nonsensical arithmetic will result in **NaN** ;
    usually operations that include undefined.

-   **declaration** : process of simply introducing a variable name.
-   **initialization** : process of both declaring and assigning a
    variable on the same line.

------------------------------------------------------------------------

**Functions**
-------------

A function is a procedure of code that will run when called. Functions
are used so that we do not have to rewrite code to do the same thing
over and over. (Think of them as 'subprograms')

-   **Function Declaration** : Process when we first initially write our
    function.
    -   Includes three things:
        -   Name of the function.
        -   A list of *parameters* ()
        -   The code to execute {}
-   **Function Calls** : We can call upon our function whenever and
    wherever\* we want. (\*wherever is only after the initial
    declaration)
    -   JS evaluates code top down, left to right.
    -   When we execute a declared function later on in our program we
        refer to this as **invoking** our function.
    -   Every function in JS returns undefined unless otherwise
        specified.
    -   When we hit a **return** statement in a function we immediately
        exit the function and return to where we called the function.
-   When naming functions in JS always use camelCase and name it
    something appropriate. \> Greate code reads like English and almost
    explains itself. Think: Elegant, readable, and maintainable!

------------------------------------------------------------------------

**Parameters and Arguments**
----------------------------

-   **Parameters** : Comma seperated variables specified as part of a
    function's declaration.
-   **Arguments** : Values passed to the function when it is invoked.

-   *If the number of arguments passed during a function invocation is
    different than the number of paramters listed, it will still work.*
-   However, is there are not enough arguments provided for parameters
    our function will likely yield **Nan**.

------------------------------------------------------------------------












[]{style="margin: 0px auto; border: 2px dotted rgb(0, 0, 0); position: absolute; z-index: 2147483647; visibility: hidden; left: 1024px; width: 0px; top: 3258px; height: 0px;"}[]{style="z-index: 2147483647; position: absolute; visibility: hidden; left: 1009px; width: 50px; top: 3243px; height: 20px; font-size: 10px; color: black;"}

[deployment](https://60637489113cfe1345c7fcf9--jolly-shannon-bbcd09.netlify.app/)
---------------------------------------------------------------------------------

0.) Links:

  -------------------------------------------------------------------------------------------------------------------------------------------------
  Name                                Hyperlink
  ----------------------------------- -------------------------------------------------------------------------------------------------------------
  OKTA                                <https://lambdaschoolsso.okta.com/login/login.htm?fromURI=%2Fapp%2FUserHome>

  Calendar                            <https://calendar.google.com/calendar/u/0/embed?src=c_2q0kvam9h9k5i6t40qp5n18dh8@group.calendar.google.com>

  Slack                               <https://app.slack.com/client/T4JUEB3ME/G01QG65CN75>

                                      

                                      

                                      

                                      

                                      

  Prep Work                           <https://apply.lambdaschool.com/courses/web/>
  -------------------------------------------------------------------------------------------------------------------------------------------------

1.) Platforms we need while attending class:

2.) Web Development Software:

3.) Pre-Course Work

Prep-Work {#prep-work .mume-header}
=========

[deployment](https://60637489113cfe1345c7fcf9--jolly-shannon-bbcd09.netlify.app/) {#deploymenthttps60637489113cfe1345c7fcf9-jolly-shannon-bbcd09netlifyapp .mume-header}
---------------------------------------------------------------------------------

0.) Links:

Name

Hyperlink

OKTA

<https://lambdaschoolsso.okta.com/login/login.htm?fromURI=%2Fapp%2FUserHome>

Calendar

<https://calendar.google.com/calendar/u/0/embed?src=c_2q0kvam9h9k5i6t40qp5n18dh8@group.calendar.google.com>

Slack

<https://app.slack.com/client/T4JUEB3ME/G01QG65CN75>

Prep Work

<https://apply.lambdaschool.com/courses/web/>

1.) Platforms we need while attending class:

2.) Web Development Software:

3.) Pre-Course Work

``` {.language- data-role="codeBlock" data-info=""}
.
├── README.html
├── README.md
├── SUMMARY.html
├── SUMMARY.md
├── codeswing.json
├── comparison.png
├── demo.html
├── directory.html
├── index.html
├── javascript-practice
│   ├── 00_expressions_variables
│   │   ├── exercises
│   │   │   ├── A_executing_code_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── B_expressions_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── C_variables_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── D_string_indexing_and_methods_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_executing_code_solution
│   │       │   ├── age.js
│   │       │   ├── greeting.js
│   │       │   ├──
│   │       │   ├── thirsty.js
│   │       │   └── whoami.js
│   │       ├── B_expressions_solution
│   │       │   ├── boolean-expressions.js
│   │       │   ├── comparisons.js
│   │       │   ├── number-expressions.js
│   │       │   ├──
│   │       │   └── string-expressions.js
│   │       ├── C_variables_solution
│   │       │   ├── four.js
│   │       │   ├── one.js
│   │       │   ├──
│   │       │   ├── three.js
│   │       │   ├── two.js
│   │       │   └── zero.js
│   │       ├── D_string_indexing_and_methods_solution
│   │       │   ├── a-tedious-task.js
│   │       │   ├── dare-to-decipher.js
│   │       │   ├── proper-patterns.js
│   │       │   ├──
│   │       │   └── small-string-snippets.js
│   │       
│   ├── 01_conditionals
│   │   ├── exercises
│   │   │   ├── A_conditionals_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_conditionals_solution
│   │       │   ├── one.js
│   │       │   ├──
│   │       │   ├── three.js
│   │       │   ├── two.js
│   │       │   └── zero.js
│   │       
│   ├── 02_functions
│   │   ├── exercises
│   │   │   ├── A_functions_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── B_functions_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── C_functions_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_functions_solution
│   │       │   ├── average.js
│   │       │   ├── ends-with-t.js
│   │       │   ├── half.js
│   │       │   ├── is-div-by-4.js
│   │       │   ├── is-long.js
│   │       │   ├── keep-it-quiet.js
│   │       │   ├──
│   │       │   ├── snippet-0-1.js
│   │       │   ├── snippet-0-2.js
│   │       │   ├── snippet-0-3.js
│   │       │   └── snippet-0-4.js
│   │       ├── B_functions_solution
│   │       │   ├── ends-in-ly.js
│   │       │   ├── funny-sound.js
│   │       │   ├── longer.js
│   │       │   ├── one-or-none.js
│   │       │   ├── parity.js
│   │       │   ├──
│   │       │   ├── starts-with-r.js
│   │       │   ├── string-size.js
│   │       │   └── wacky-word.js
│   │       ├── C_functions_solution
│   │       │   ├── average-of-four.js
│   │       │   ├── case-changer.js
│   │       │   ├── contains.js
│   │       │   ├── divisible.js
│   │       │   ├── in-range.js
│   │       │   ├── larger.js
│   │       │   ├── number-change.js
│   │       │   
│   │       
│   ├── 03_loops
│   │   ├── exercises
│   │   │   ├── A_loops_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── B_loops_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── C_loops_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_loops_solution
│   │       │   ├── count-up.js
│   │       │   ├── evens.js
│   │       │   ├── min-to-max.js
│   │       │   ├── one-to-four.js
│   │       │   ├──
│   │       │   ├── snippet-1.js
│   │       │   ├── snippet-2.js
│   │       │   ├── snippet-3.js
│   │       │   ├── snippet-4.js
│   │       │   ├── snippet-5.js
│   │       │   └── string-iterate.js
│   │       ├── B_loops_solution
│   │       │   ├── div-by-either.js
│   │       │   ├── five-multiples-of.js
│   │       │   ├── no-ohs.js
│   │       │   ├── odd-sum.js
│   │       │   ├── product-up-to.js
│   │       │   ├──
│   │       │   ├── string-repeater.js
│   │       │   └── sum-up-to.js
│   │       ├── C_loops_solution
│   │       │   ├── censor-e.js
│   │       │   ├── divisible-range.js
│   │       │   ├── fizz-buzz.js
│   │       │   ├── raise-power.js
│   │       │   ├── remove-capitals.js
│   │       │   ├── reverse-iterate.js
│   │       │   
│   │       
│   ├── 04_arrays
│   │   ├── exercises
│   │   │   ├── A_arrays_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── B_arrays_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── C_arrays_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_arrays_solution
│   │       │   ├── bleep-vowels.js
│   │       │   ├── divisors.js
│   │       │   ├── filter-long-words.js
│   │       │   ├── num-odds.js
│   │       │   ├──
│   │       │   ├── stay-positive.js
│   │       │   ├── strings-to-lengths.js
│   │       │   └── total.js
│   │       ├── B_arrays_solution
│   │       │   ├── choose-divisibles.js
│   │       │   ├── make-acronym.js
│   │       │   ├── maximum.js
│   │       │   ├── reverse-array.js
│   │       │   ├──
│   │       │   ├── word-count.js
│   │       │   └── your-average-function.js
│   │       ├── C_arrays_solution
│   │       │   ├── alternating-caps.js
│   │       │   ├── common-elements.js
│   │       │   ├── lengthiest-word.js
│   │       │   ├── number-range.js
│   │       │   ├── remove-short-words.js
│   │       │   
│   │       
│   ├── 05_nesting
│   │   ├── exercises
│   │   │   ├── A_nested_loops_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── B_two_dimensional_arrays_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   ├── C_more_problems_exercise
│   │   │   │   ├── README.html
│   │   │   │   ├── README.md
│   │   │   │   
│   │   │   
│   │   ├──
│   │   └── solutions
│   │       ├── A_nested_loops_solution
│   │       │   ├── pair-print.js
│   │       │   ├── print-combinations.js
│   │       │   ├──
│   │       │   ├── snippet-1.js
│   │       │   ├── snippet-2.js
│   │       │   ├── snippet-3.js
│   │       │   ├── snippet-4.js
│   │       │   ├── snippet-5.js
│   │       │   └── two-sum.js
│   │       ├── B_two_dimensional_arrays_solution
│   │       │   ├── make-matrix.js
│   │       │   ├── print-2d.js
│   │       │   ├──
│   │       │   ├── total-product.js
│   │       │   ├── two-sum-pairs.js
│   │       │   └── zipper.js
│   │       ├── C_more_problems_solution
│   │       │   ├── remove-dupes.js
│   │       │   ├── remove-first-vowel.js
│   │       │   ├── remove-vowels.js
│   │       │   ├──
│   │       │   ├── shorten-long-words.js
│   │       │   └── spam.js
│   │       
│   ├── 06_decomposition_pattern
│   │   ├── A_decomposing_problems_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   ├── B_decomposing_problems_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   ├── C_decomposing_problems_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   
│   ├── 07_objects
│   │   ├── A_objects_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   ├── B_objects_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   ├── C_objects_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   
│   ├── 08_higher_order_functions
│   │   ├── A_native_callback_methods_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   ├── B_native_callback_methods_exercise
│   │   │   ├── README.html
│   │   │   ├── README.md
│   │   │   
│   │   
│   
├── js.js
├── one-of-every-tag.html
├── readme
│   ├── README.html
│   ├── README_files
│   │   ├── katex.min.css
│   │   
│   
├── resources.html
├── resources.md
├── script.js
├── style.css
└── tree.md

66 directories, 241 files




```

WEEK 1 *Introduction to JavaScript (Part 1)* {#week-1brintroduction-to-javascript-part-1 .mume-header .undefined}
============================================

------------------------------------------------------------------------

[**Expression Learning Objectives**](#expression-learning-objectives)[**Intro to Functions Learning
Objectives**](#intro-to-functions-learning-objectives)

-   [Hello World](#hello-world)
    -   [Getting visual feedback in your
        programs](#getting-visual-feedback-in-your-programs)
    -   [Code comments](#code-comments)
-   [The Number Type](#the-number-type)
    -   [All the numbers](#all-the-numbers)
    -   [The basic arithmetic
        operators](#the-basic-arithmetic-operators)
-   [The String Type](#the-string-type)
    -   [Writing a valid string](#writing-a-valid-string)
    -   [Calculating length](#calculating-length)
    -   [Indexing a string](#indexing-a-string)
    -   [Concatenation](#concatenation)
-   [The Boolean Type](#the-boolean-type)
    -   [Logical Operators](#logical-operators)
    -   [De Morgan\'s Law](#de-morgans-law)
-   [Comparison Operators](#comparison-operators)
    -   [The relative comparators](#the-relative-comparators)
    -   [=== vs ==](#vs)
-   [Basic Variables](#basic-variables)
    -   [Initializing a variable](#initializing-a-variable)
    -   [Manipulating variables](#manipulating-variables)
    -   [NaN](#nan)
-   [Introduction to Functions](#introduction-to-functions)
    -   [Writing Functions](#writing-functions)
    -   [Invoking or \"calling\" a
        function](#invoking-or-calling-a-function)
    -   [Returning a value](#returning-a-value)
    -   [The importance of naming](#the-importance-of-naming)
-   [Parameters and Arguments](#parameters-and-arguments)
    -   [The difference between Parameters and
        Arguments](#the-difference-between-parameters-and-arguments)

[**Control Flow and Array Learning
Objectives**](#control-flow-and-array-learning-objectives)

-   [Control Flow - Conditional
    Statements](#control-flow-conditional-statements)
    -   [A Quick Word on Syntax](#a-quick-word-on-syntax)
    -   [Writing Conditional
        Statements](#writing-conditional-statements)
-   [Mutually Exclusive Conditions](#mutually-exclusive-conditions)
    -   [When to use if statements](#when-to-use-if-statements)
-   [Control Flow - Looping](#control-flow-looping)
    -   [Looping](#looping)
    -   [Translating From One Loop to
        Another](#translating-from-one-loop-to-another)
-   [The Array Type](#the-array-type)
    -   [Using arrays](#using-arrays)
    -   [Indexing arrays](#indexing-arrays)
    -   [Working with arrays](#working-with-arrays)
    -   [Concatenation with arrays](#concatenation-with-arrays)

[**Intermediate Functions Learning
Objectives**](#intermediate-functions-learning-objectives)

-   [Function Expressions](#function-expressions)
    -   [Functions as first-class
        objects](#functions-as-first-class-objects)
-   [Two-Dimensional Arrays (2D
    Arrays)](#two-dimensional-arrays-2d-arrays)
    -   [Multidimensional Arrays](#multidimensional-arrays)
    -   [Iterating through 2D Arrays](#iterating-through-2d-arrays)
    -   [When is a 2D array practical?](#when-is-a-2d-array-practical)
-   [Mutability in JavaScript](#mutability-in-javascript)
    -   [What is mutability?](#what-is-mutability)
    -   [Mutable or immutable, that is the
        question](#mutable-or-immutable-that-is-the-question)
    -   [The mutability misconception](#the-mutability-misconception)
-   [Array Splice](#array-splice)
    -   [Notation](#notation)
    -   [What can Array\#splice do?](#what-can-arraysplice-do)
-   [String\#split and Array\#join](#stringsplit-and-arrayjoin)
    -   [String\#split](#stringsplit)
    -   [Array\#join](#arrayjoin)
    -   [A clever combination](#a-clever-combination)
-   [Determining Types](#determining-types)
    -   [The typeof operator](#the-typeof-operator)
    -   [How to tell if a value is an
        array](#how-to-tell-if-a-value-is-an-array)
    -   [Practical use in \"real\" code](#practical-use-in-real-code)
-   [The Null Type (And Undefined)](#the-null-type-and-undefined)
    -   [A type with only one value](#a-type-with-only-one-value)
    -   [The meaning of null](#the-meaning-of-null)
    -   [The absence of a value](#the-absence-of-a-value)
    -   [An unknown value](#an-unknown-value)
    -   [Checking if a value is null](#checking-if-a-value-is-null)
    -   [Oh, and there\'s that undefined value,
        too](#oh-and-theres-that-undefined-value-too)
    -   [What happens when\...](#what-happens-when)
-   [Catch Me If You Can](#catch-me-if-you-can)
    -   [Structured exception handling](#structured-exception-handling)
    -   [Try and catch](#try-and-catch)
    -   [How can I make my own errors?](#how-can-i-make-my-own-errors)
    -   [What else is there?](#what-else-is-there)
    -   [How do I best use this?](#how-do-i-best-use-this)

------------------------------------------------------------------------

Introduction

------------------------------------------------------------------------

Expression Learning Objectives {#expression-learning-objectives .mume-header}
==============================

Below is a complete list of the terminal learning objectives for this
lesson.When you complete this lesson, you should be able to perform each of
thefollowing objectives. These objectives capture how you may be evaluated
on theassessment for this lesson.

1.  Given a working REPL interface, write and execute a statement that
    will print    \"hello world\" using console.log

2.  Identify that strings are a list of characters defined by using
    double or    single quotes

3.  Given an arithmetic expression using +, -, \*, /, %, compute its
    value

4.  Given an expression, predict if its value is NaN

5.  Construct the truth tables for &&, \|\|, !

6.  Given an expression consisting of \>, \>=, ===, \<, \<=, compute
    it\'s value

7.  Apply De Morgan\'s law to a boolean expression

8.  Given an expression that utilizes operator precedence, compute its
    value

9.  Given an expression, use the grouping operator to change it\'s
    evaluation

10. Given expressions using == and ===, compute their values

11. Given a code snippet using postfix ++, postfix \--, +=, -=, /=, \*=,
    predict    the value of labeled lines

12. Create and assign a variable using `let` to a string, integer, and
    a    boolean. Read its value and print to the console.l learning
    objectives for this lesson.    When you complete this lesson, you should be able to perform each of
    the    following objectives. These objectives capture how you may be
    evaluated on the    assessment for this lesson.

13. Given a working REPL interface, write and execute a statement that
    will print    \"hello world\" using console.log

14. Identify that strings are a list of characters defined by using
    double or    single quotes

15. Given an arithmetic expression using +, -, \*, /, %, compute its
    value

16. Given an expression, predict if its value is NaN

17. Construct the truth tables for &&, \|\|, !

18. Given an expression consisting of \>, \>=, ===, \<, \<=, compute
    it\'s value

19. Apply De Morgan\'s law to a boolean expression

20. Given an expression that utilizes operator precedence, compute its
    value

21. Given an expression, use the grouping operator to change it\'s
    evaluation

22. Given expressions using == and ===, compute their values

23. Given a code snippet using postfix ++, postfix \--, +=, -=, /=, \*=,
    predict    the value of labeled lines

24. Create and assign a variable using `let` to a string, integer, and
    a    boolean. Read its value and print to the console.

------------------------------------------------------------------------

Intro to Functions Learning Objectives {#intro-to-functions-learning-objectives .mume-header}
======================================

Below is a complete list of the terminal learning objectives for this
lesson.When you complete this lesson, you should be able to perform each of
thefollowing objectives. These objectives capture how you may be evaluated
on theassessment for this lesson.

1.  Define a function using function declaration

2.  Define a function that calculates the average of two numbers, call
    it,    pass in arguments, and print it\'s return value

3.  Identify the difference between parameters vs argument terminal
    learning objectives for this lesson.    When you complete this lesson, you should be able to perform each of
    the    following objectives. These objectives capture how you may be
    evaluated on the    assessment for this lesson.

4.  Define a function using function declaration

5.  Define a function that calculates the average of two numbers, call
    it,    pass in arguments, and print it\'s return value

6.  Identify the difference between parameters vs arguments

------------------------------------------------------------------------

Hello World {#hello-world .mume-header}
===========

Hey Programmer! Welcome to the JavaScript module. In the next few
sections,we\'ll be learning the fundamentals of the JavaScript programming
language. Ifit\'s your first time programming, don\'t worry; we designed this
courseespecially for you. We\'ll have you executing your first lines of code
in notime!

When you finish this article, you should be able to:

-   use the `console.log` command to print out messages
-   use double slashes (`//`) to write code comments

Getting visual feedback in your programs {#getting-visual-feedback-in-your-programs .mume-header}
----------------------------------------

The first command we\'ll learn in JavaScript is `console.log`. This
command isused to *print* something onto the screen. As we write our first lines
of code,we\'ll be using `console.log` frequently as a way to visually see the
output ofour programs. Let\'s write our first program:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("hello world");
console.log("how are you?");
```

Executing the program above would print out the following:

``` {.language-plaintext data-role="codeBlock" data-info="plaintext"}
hello world
how are you?
```

Nothing too ground breaking here, but pay close attention to the exact
way wewrote the program. In particular, notice how we lay out the periods,parentheses, and quotation marks. We\'ll also terminate lines with
semicolons(😉.

> Depending on how you structure your code, sometimes you\'ll be able to
> omit> semicolons at the end of lines. For now, you\'ll want to include them> just as we do.

### Syntax {#syntax .mume-header}

We refer to the exact arrangement of the symbols, characters, and
keywords as**syntax**. These details matter - your computer will only be able to"understand\" proper JavaScript syntax. A programming language is
similar to aspoken language. A spoken language like English has grammar rules that
we shouldfollow in order to be understood by fellow speakers. In the same way, aprogramming language like JavaScript has syntax rules that we ought to
follow!

As you write your first lines of code in this new language, you may make
manysyntax errors. Don\'t get frustrated! This is normal - all new
programmers gothrough this phase. Every time we recognize an error in our code, we
have anopportunity to reinforce your understanding of correct syntax. Adopt a
growthmindset and learn from your mistakes.

Additionally, one of the best things about programming is that we can
get suchimmediate feedback from our creations. There is no penalty for making a
mistakewhen programming. Write some code, run the code, read the errors, fix
theerrors, rinse and repeat!

Code comments {#code-comments .mume-header}
-------------

Occasionally we\'ll want to leave **comments** or notes in our code.
Commentedlines will be ignored by our computer. This means that we can use
comments towrite plain english or temporarily avoid execution of some JavaScript
lines. Theproper *syntax* for writing a comment is to begin the line with double
forwardslashes (`//`):

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
// let's write another program!!!
console.log("hello world");

// console.log("how are you?");

console.log("goodbye moon");
```

The program above would only print:

``` {.language-plaintext data-role="codeBlock" data-info="plaintext"}
hello world
goodbye moon
```

Comments are useful when annotating pieces of code to offer an
explanation ofhow the code works. We\'ll want to strive to write straightforward code
that isself-explanatory when possible, but we can also use comments to add
additionalclarity. The real art of programming is to write code so elegantly that
it iseasy to follow.

\"Simplicity is prerequisite for reliability.\" --- Edsger W. Dijkstra

Remember {#what-youve-learned .mume-header}
--------

-   `console.log` can be used to print to the screen
-   using `//` at the front of a line will turn it into a comment;
    comments are    ignored by JavaScript

------------------------------------------------------------------------

The Number Type {#the-number-type .mume-header}
===============

The **Number** data type in JavaScript does exactly what you expect! It
is usedto represent any numerical values, this includes integers and decimal
numbers.As one of our first data types, we\'ll be interested in what operations
we canuse with numbers.

When you finish this article, you should be able to:

-   predict the evaluation of arithmetic expressions
-   explain the order of operations for JavaScript\'s arithmetic
    operators
-   use the grouping operator, `()`, to manipulate the order of
    operations in an    expression

All the numbers {#all-the-numbers .mume-header}
---------------

JavaScript\'s **Number** encompasses numerical values. All of the
following values are of number type:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
42;
-5;
3.14159;
7.0;
```

The basic arithmetic operators {#the-basic-arithmetic-operators .mume-header}
------------------------------

For any given data type, we\'re interested in what operations we can
perform withthat type. We use the word *operator* to refer to the symbol that
performs aparticular *operation*. For example, the `+` operator performs the
additionoperation. Here are the common arithmetic operators in JS:

-   `+` (addition)
-   `-` (subtraction)
-   `*` (multiplication)
-   `/` (division)
-   `%` (modulo)

With number values and arithmetic operators in hand, we can evaluate our
firstexpressions:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(2 + 3); // => 5
console.log(42 - 42); // => 0
console.log(-4 * 1.5); // => -6
console.log(25 / 8); // => 3.125
```

Nothing too groundbreaking about the results above. An expression
consists ofvalues and operators. JavaScript will evaluate an expression into a
singlevalue.

We can write more complex expressions using multiple operators. However,
we\'llwant to be aware of the general math order of operations. That is, we
performmultiplication-division operations first and then addition-subtractionoperations. To force a specific order of operation, we can use the
groupingoperator, `( )`, around a part of the expression:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(5 * 3 + 2); // => 17
console.log(2 + 3 * 5); // => 17
console.log((2 + 3) * 5); // => 25
```

### The modulo operation {#the-modulo-operation .mume-header}

All of the math operators listed above are the simple operations you
useeveryday, except for maybe modulo `%`. **Modulo gives us the remainder
thatresults from a division.** For example, `10 % 3` is 1 because when we
divide 10by 3, we are left with a remainder of 1. We can read `10 % 3` as \"ten
modulothree\" or \"ten mod three.\"

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(10 % 3); // => 1
console.log(14 % 5); // => 4
console.log(20 % 17); // => 3
console.log(18 % 6); // => 0
console.log(7 % 9); // => 7
```

Modulo is a very useful operation in the realm of computers. We can use
it tocheck the divisibility of numbers, whether numbers are even, whether
they areprime, and much, much more. Don\'t take this seemingly simple operation
fromgranted! We\'ll provide a ton of practice using these modulo patterns as
we move through the course.

In the order of operations, modulo has the the same precedence asmultiplication-division. So our complete order of math operations in JS
isparentheses, multiplication-division-modulo, addition-subtraction.

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
// modulo has precedence over addition
console.log(4 + 12 % 5); // => 6
console.log((4 + 12) % 5); // => 1
```

Remember {#what-youve-learned-1 .mume-header}
--------

-   The **Number** type is used to represent integer and decimal values
-   The operators `+`, `-`, `/`, `*` perform the normal math operations
    of    addition, subtraction, division, multiplication respectively
-   `a % b` returns the remainder when we divide `a` by `b`; we call
    this    operation modulo
-   JavaScript follows the usual mathematical order of operations and we
    can use    the `()` to force precedence

------------------------------------------------------------------------

The String Type {#the-string-type .mume-header}
===============

This article is about one of JavaScript\'s primitive data types,
**String**.Strings are what we\'ll use to represent textual data. This means that
stringsare useful in representing things like messages, names, poems, and so
on. Astring is a sequence of characters.

When you finish this article, you should be able to:

-   Write strings using correct syntax
-   Use `.length` to obtain a count of the numbers of characters that
    comprise a    string
-   Index a string to refer to a single character
-   Concatenate strings together

Writing a valid string {#writing-a-valid-string .mume-header}
----------------------

Strings are always wrapped by a pair of single quotation marks (`'`) or
by apair of double quotation marks (`"`). Between the enclosing quotation
marks, wecan put any characters! Here are a six examples of strings:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
"potato";
"New York";
"azablan@.io";
"Follow the yellow brick road, please!";
"365 days a year";
"";
```

Above, notice that we are free to mix in **any** characters into a
string. Thisincludes spaces, numerics, punctuation, and other symbols. The sixth
stringabove is the empty string; it contains zero characters!

You are probably wondering why we are allowed to use either single or
doublequotes when denoting a string - why is this useful? Maybe we want a
string that*contains* quotation marks:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
// valid strings
'Shakespeare wrote, "To be or not to be"';
"That's a great string";
```

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
// invalid string
'That's a bad string'
```

If we want to use a single quote as a character of a string, we simply
need toenclose the string in double quotes, and vice versa.

Calculating length {#calculating-length .mume-header}
------------------

Since a single string can contain any number of characters, we may find
ituseful to count the number of characters in a string using `.length`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0
```

Indexing a string {#indexing-a-string .mume-header}
-----------------

Strings consist of multiple characters. These characters are numbered
by**indices** starting at 0. So in the string `'bootcamp'`, `'b'` is at
index 0,`'o'` is at index 1, `'o'` is at index 2, `'t'` is at index 3, and so
on. We canlook at particular characters of a string by using `[]` and specifying
an index:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("bootcamp"[0]); // => 'b'
console.log("bootcamp"[1]); // => 'o'
console.log("bootcamp"[2]); // => 'o'
console.log("bootcamp"[3]); // => 't'
console.log("bootcamp"[7]); // => 'p'
console.log("bootcamp"[10]); // => undefined
console.log("bootcamp"[-3]); // => undefined
```

In general, when we index a string using the expression `string[i]`, we
get backthe **single character** at position `i`. Looking at the last two
examplesabove, if we use an invalid index with a string, the value returned is`undefined`. This makes since because there is no character at the
givenposition! It\'s also worth mentioning that an index should always be a
number.

### The classic \"off by one\" error {#the-classic-off-by-one-error .mume-header}

Bear in mind that indices begin at 0 and not 1! Forgetting this nuance
can leadto incorrect code for both new and experienced programmers alike. Let\'s
hone inon an important distinction: the index of the last character of a string
isalways one less than it\'s length.

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("cat".length); // => 3
console.log("cat"[3]); // => undefined
console.log("cat"[2]); // => 't'
```

In other words, although the `length` of `'cat'` is 3, the index of the
lastcharacter (`'t'`) is 2.

### Using indexOf {#using-indexof .mume-header}

We can also calculate the index of a given character within a string by
using`indexOf`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1
```

If we attempt to search for a character that is **not** present in a
string,`indexOf` will return -1. This makes sense because we know that -1 is
not avalid string index. The smallest index possible is 0!

If we search for a character that appears more than once in a string,`indexOf` will return the index of the first occurance of that
character.

We can also use `indexOf` to search for a substring of characters. Under
thiscircumstance, `indexOf` will return the index where the substring begins
in themain string:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("door hinge".indexOf("oor")); // => 1
console.log("door hinge".indexOf("hi")); // => 5
console.log("door hinge".indexOf("hint")); // => -1
```

Concatenation {#concatenation .mume-header}
-------------

Concatenation is just a fancy word for joining strings together into a
singlestring. To concatenate strings, we use the `+` operator:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("hello" + "world"); // => 'helloworld'
console.log("goodbye" + " " + "moon"); // => 'goodbye moon'
```

Remember {#what-youve-learned-2 .mume-header}
--------

-   a **String** is a data type that contains multiple characters
    enclosed in    quotation marks
-   `string.length` returns the number of characters in the `string`
-   each character of a string is associated with a number index; the
    first    character of a string is at index 0
-   we can use `string.indexOf(char)` to obtain the index of `char`
    within    `string`; if `char` is not found, then -1 is returned
-   we can use `+` to concatenate multiple strings, combining them into
    a single    string

------------------------------------------------------------------------

The Boolean Type {#the-boolean-type .mume-header}
================

The **Boolean** data type is perhaps the simplest type since there are
only twopossible values, `true` and `false`. However, we\'ll find booleans very
usefulbecause they will act as components of later concepts. As programmers,
we\'ll usebooleans to describe the validity of statements. In an abstract sense,
*\"Todayis Monday\"* and *\"one plus one equals ten\"* are examples of
statements withboolean values. That is, they are either `true` or `false`.

When you finish this article, you should be able to:

-   predict the evaluation of expressions that use the boolean
    operations of `!`,    `||`, and `&&`
-   explain DeMorgan\'s law

Logical Operators {#logical-operators .mume-header}
-----------------

In the long run, we\'ll be using booleans to establish logic in our
code. Forthis reason, the *boolean operators* can also be referred to as the
*logicaloperators*. There are only three such operators:

-   `!` (not)
-   `&&` (and)
-   `||` (or)

### Logical NOT {#logical-not .mume-header}

The not (`!`) operator will reverse a boolean value:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(!true); // => false
console.log(!false); // => true
console.log(!!false); // => false
```

It\'s worth mentioning that `!` is a unary operator. This means that the
notoperation is applied to a single value. This is in contrast to a binary
operatorsuch as multiplication, which is applied between two values. It does not
makesense to `!` two values together.

### Logical AND {#logical-and .mume-header}

The and (`&&`) operator will take two boolean values and will only
evaluate to`true` when both input values are `true`. Otherwise, it will return
`false`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(false && false); // => false
console.log(false && true); // => false
console.log(true && false); // => false
console.log(true && true); // => true
```

### Logical OR {#logical-or .mume-header}

The or (`||`) operator will take two boolean values and will only
evaluate to`false` when both input values are `false`. Otherwise, it will return
`true`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(false || false); // => false
console.log(false || true); // => true
console.log(true || false); // => true
console.log(true || true); // => true
```

### Logical order of operations {#logical-order-of-operations .mume-header}

We can write boolean expressions that consist of multiple logical
operations, but we should be aware of the order of operations.
JavaScript will evaluate `!` then `&&` then `||`.

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(true || true && false);    // => true
console.log(false && !(false || true)); // => false
```

In general, `A || B && C` is equivalent to `A || (B && C)` where `A`,
`B`, `C` are booleans.

De Morgan\'s Law {#de-morgans-law .mume-header}
----------------

A common mistake in boolean logic is to incorrectly distribute `!`
across parentheses. Say we had boolean values of `A`, `B`. Here is
something to remember:

-   `!(A || B)` is equivalent to `!A && !B`
-   `!(A && B)` is equivalent to `!A || !B`

In other words, to correctly distribute `!` across parentheses, we must
also flip the operation within parentheses. Beware that:

-   `!(A || B)` is not equivalent to `!A || !B`
-   `!(A && B)` is not equivalent to `!A && !B`

We call this property **De Morgan\'s Law**. Shout out to Augustus De
Morgan of Great Britain.

Remember {#what-youve-learned-3 .mume-header}
--------

-   `!`, `&&`, `||` are the boolean operators that we can use to
    establish logic in our code
-   De Morgan\'s Law should be used to distribute `!` against
    parentheses

These are just the basics of the type. We\'ll be seeing more booleans in
the upcoming section, so stay tuned for that!

------------------------------------------------------------------------

Comparison Operators {#comparison-operators .mume-header}
====================

In our previous introduction to the boolean data type, we described
booleans asway to represent the validity of an expression. We\'ll continue this
conversationby exploring **comparison** operators. As you learn about these
operators, bearin mind that all comparisons will result in a boolean, `true` or
`false`.

When you finish this article, you should be able to:

-   Predict the result of expressions that utilize the operators `>`,
    `<`, `>=`    `<=`, `===`, and `!==`
-   Explain the difference between the equality operators `==` and `===`

The relative comparators {#the-relative-comparators .mume-header}
------------------------

-   `>` (greater than)
-   `<` (less than)
-   `>=` (greater than or equal to)
-   `<=` (less than or equal to)
-   `===` (equal to)
-   `!==` (not equal to)

Using these operators is pretty straightforward. Here are a few
examples:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(10 > 5); // => true
console.log(10 < 5); // => false
console.log(1 < 7); // => true
console.log(7 <= 7); // => true
console.log(5 === 6); // => false
console.log(5 !== 6); // => true
console.log("a" !== "A"); // => true
console.log(false === false); // => true
```

Notice that a comparison expression always evaluate to a boolean value
(`true`or `false`). Comparison operators like `===` are a useful to compare
strings,booleans, etc. not just numbers.

**Did you know?** `'a' < 'b'` is valid JS code? When you relatively
comparestrings using `>` or `<` you will be comparing them lexicographically.Lexicographically is fancy shmancy talk for \"dictionary\" order! A
\"lesser\"string is one that would appear earlier in the dictionary:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log("a" < "b"); // => true
console.log("apple" < "abacus"); // => false
console.log("app" < "apple"); // => true
console.log("zoo" > "mississippi"); // => true
```

**Gotcha** capitilized letters are considered lexicographically less
thanlower case letters. i.e \"A\" \< \"z\" // =\> true.

=== vs == {#vs .mume-header}
---------

In JavaScript there are two equality operators triple-equals (`===`)
anddouble-equals (`==`). The operators differ in how they compare across
differingtypes. Triple-equals performs the *strict equality*, meaning it will
only return`true` if the types are the same. Double-equals performs the *loose
equality*,meaning it can return `true` even if the values are of different type.Double-equals may *coerce* a value into another type for the comparison,
andthis behavior is hard to predict:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(5 === "5"); // false
console.log(5 == "5"); // true
console.log(0 === false); // false
console.log(0 == false); //true
```

Whoa! Surprised by these results? It can be hard to predict how `==`
behaves, sowe will avoid using it in this course and as a best practice. Stick to
using`===` because it respects data types.

Remember {#what-youve-learned-4 .mume-header}
--------

-   `>`, `<`, `>=`,`<=`, `===`, and `!==` can be used to compare values
-   we prefer to use `===` to check for equality because it takes the
    type into    account.

------------------------------------------------------------------------

Basic Variables {#basic-variables .mume-header}
===============

Variables are used to store information to be referenced and manipulated
in acomputer program. They also provide a way of labeling data with a
descriptivename, so our programs can be understood more clearly by programmers. It
ishelpful to think of variables as containers that hold information. Their
solepurpose is to label and store data in computer memory. This data can
then beused and even changed throughout the lifetime of your program.

When you finish this reading, you should be able to:

-   declare variables using the `let` keyword
-   assign values to variables using the assignment operator (`=`)
-   use the shortcuts `+=`, `-=`, `++`, `--` to reassign variables
-   identify `undefined` as the default value for unassigned variables

Initializing a variable {#initializing-a-variable .mume-header}
-----------------------

To initialize a variable in JavaScript we\'ll need two new pieces of
syntax:`let` and `=`. We can give the variable any name that we wish and assign
it avalue. Once we initialize a variable, the variable will evaluate to the
valueassigned:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let bootcamp = "";
console.log(bootcamp); // ''

let birthYear = 2012;
console.log(birthYear); // 2012
```

**Did you know?** JavaScript variables names can contain any
alphanumericcharacters, underscore (\_), or dollar sign (\$). However, they *cannot*
beginwith a number.

Above are examples of how you\'ll create variables most of the time, so
we\'llgrow very familiar with the syntax. As a best practice, we should name
ourvariables in a way that is descriptive and concise.

The variable initializations above really consist of two steps:
*declaration*with `let` and *assignment* with `=`. Let\'s break these two steps down.

### Declaring a variable {#declaring-a-variable .mume-header}

In JavaScript, in order to use a variable, we must *declare* it.
Variable**declaration** is the act of introducing the variable to the
environment.

To declare a variable, use the `let` keyword, followed by a space and
then thename of the variable.

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let bootcamp;
console.log(bootcamp); // undefined
```

Once a variable is declared, it will contain `undefined` as it\'s
value.`undefined` is a common default value in JavaScript, we\'ll see it come
up in afew different places. You can think of `undefined` as showing that the
variableis empty.

### Assigning a variable {#assigning-a-variable .mume-header}

Once a variable has been declared, we can assign it a value using
single-equals`=` :

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let bootcamp;
console.log(bootcamp); // undefined
bootcamp = "";
console.log(bootcamp); // ''
```

Manipulating variables {#manipulating-variables .mume-header}
----------------------

To change the value of a variable, we need to reassign it to a new value
with`=` :

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let num = 42;
console.log(num + 8); // => 50
console.log(num); // => 42

num = num + 10;
console.log(num); // => 52
```

In the code above, `num + 8` will evaluate to `50`, but it will not
change the `num`variable to `50`. If we want to change the `num` variable, we must
reassign toit.

### Assignment Shorthand {#assignment-shorthand .mume-header}

Changing the value of a number variable is something fairly common in
theprogramming world. Luckily there is some shorthand operators we can use:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let number = 0;
number += 10; // equivalent to number = number + 10
number -= 2; // equivalent to number = number - 2
number /= 4; // equivalent to number = number / 4
number *= 7; // equivalent to number = number * 7
console.log(number); // 14
```

We also have other shorthand to add or subtract exactly 1 from a
variable, theincrement (`++`) and decrement (`--`) operators:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let year = 3004;
year++;
console.log(year); // 3005
year--;
console.log(year); // 3004
```

NaN {#nan .mume-header}
---

Now that we have the ability to perform arithmetic with variables,
let\'s take alook at a common programming mistake, getting a result of `NaN` (not a
number):

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let num;
console.log(num + 3); // NaN
```

The above code gives `NaN` because the unassigned `num` variable
contains`undefined`; adding `3` to `undefined` results in `NaN`. In general,
anynonsensical arithmetic will result in `NaN`. Math operations involving`undefined` is perhaps the most common mistake:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log(undefined + 3); // NaN
console.log("fish" * 2); // NaN
```

Remember {#what-youve-learned-5 .mume-header}
--------

-   variables are declared with `let` and will contain the value
    `undefined` by    default
-   we can use single-equals `=` to assign variables
-   changing a variable requires a reassignment, for which there are
    many    shortcuts for (`+=`, `-=`, etc.)

------------------------------------------------------------------------

Introduction to Functions {#introduction-to-functions .mume-header}
=========================

We hope you are ready - because you are on the brink of one of the most
funparts of writing JavaScript: writing **functions**. A function is a
procedure ofcode that will run when called. We only \"write\" a function once
(**functiondeclaration**), but we can \"use\" it as many times as we please
(**functioncalls**). Functions are the fundamental building blocks of JavaScript
andmastering them is a big step on the road to JavaScript mastery.

When you finish this reading, you should be able to:

1.  Describe what a function in JavaScript is.
2.  Demonstrate how to invoke a function.
3.  Write a function using function declaration.
4.  Use the `return` keyword to return a value from a function.

Writing Functions {#writing-functions .mume-header}
-----------------

A function is a set procedure of code that will run when called.
Functionsreally start to make sense when put in the perspective of solving
problems. Sofor example say you want to find the average of two given numbers.
Meaning wewant to take two numbers, add them together then divide by 2:

``` {.language-javascript data-role="codeBlock" data-info="js"}
> (5 + 5) / 2
5

> (15 + 3) / 2
9

> (7 + 2) / 2
4.5
```

Writing out the same code again and again gets tedious fast. What you
can doinstead is write a new *function*.

### Function Declaration {#function-declaration .mume-header}

A *function definition* consists of the function keyword, followed by
threethings:

1.  The **name** of the function.
2.  A list of *parameters* to the function, enclosed in parentheses,
    `()`.
3.  The code to be run when this function is run, enclosed in curly    brackets,`{ }`.

So for our above example of averaging two numbers we could write a
function thatwould do that for us! We would write something like the following:

``` {.language-javascript data-role="codeBlock" data-info="js"}
// 1. average is the name of the function
// 2. number1 & number2 are the parameters being passed in
function average(number1, number2) {
  // 3. this is the code run every time this function is used
  return (number1 + number2) / 2;
}
```

First thing to notice for the above `average` function is that we
didn\'t use any*real* numbers. You always want to write functions to accept as wide a
range ofdata as possible. Utilizing the incoming *parameters* to a function is
one ofthe keys to making functions flexible.

In the case of the `average` function, we want to use it to calculate
theaverage of any two numbers. `number1` and `number2` are the *parameters*
for the`average` function. In other words, the `average` function expects to be
giventwo numbers, `number1` and `number2`. We\'ll be talking a lot more
aboutparameters later - but for now know that when you define a function
withparameters you are declaring those parameters as usable variables within
thatfunction.

The beauty of a function is that if we define it in a clever way, it
will workon a whole slew of data! For example, we want `average` to work on any
twonumbers, whether or not they are whole numbers, decimal, negative, etc.

Invoking or \"calling\" a function {#invoking-or-calling-a-function .mume-header}
----------------------------------

Now that we\'ve written a function how do we actually use it? Once
defined afunction can be invoked or \"called\" as many times as we please.

### Order of code {#order-of-code .mume-header}

Let\'s step away from `average` for a bit to see how a simple function
callworks. Say we run JavaScript code that looks like this:

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log("First!");

console.log("Second!");
```

Running this code will return exactly as we expect. We will see `First!`
printedout, followed by `Second!`. In other words, JavaScript will evaluate
your codeleft-to-right and top-to-bottom. Very intuitive! It\'s exactly how you
arereading these notes right now.

However, when JavaScript sees a function definition, JavaScript will
**not**evaluate the code inside of the definition. It will only \"remember\"
the code sowe can execute it later. The code below only prints `First!` followed
by`Fourth!`:

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log("First!");

function callMe() {
  console.log("Second!");
  console.log("Third!");
}

console.log("Fourth");

// when run this code is ran it will print out:
// "First!"
// "Fourth"
```

To actually get the code within `callMe` to evaluate, we must *call* it
by using`callMe()`. The code below will now print out in order:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function callMe() {
  console.log("Second!");
  console.log("Third!");
}

console.log("First!");
// we call the function by adding ending parenthesis
callMe();
console.log("Fourth!");

// when run this code is ran it will print out:
// "First!"
// "Second!"
// "Third!"
// "Fourth"
```

Let\'s say JavaScript is running the file above. Here are the steps it
wouldtake, starting from the tippy top of the code:

1.  JS sees a definition for `callMe`. It will remember this definition
    in case    we call the function later. It will **not** evaluate the code inside
    the    function yet.
2.  JS prints out `First!`
3.  JS sees that we are calling `callMe()`. At this point it will look
    at the    prior `callMe` definition and run the code inside. It is as if we
    are    \"jumping\" to inside the function definition. This means it will
    print    `Second!` followed by `Third!`
4.  JS sees there is no more code to be run inside of `callMe`, so it
    \"jumps\"    back to where we originally called `callMe()`
5.  JS will continue evaluating in order and print `Fourth!`

### An average example {#an-average-example .mume-header}

So a declared function is \"saved for later use\", and will be executed
later,when it is called, also known as being **invoked**. So thinking back to
ouraverage function we can declare the function and then *invoke* it.

When we specify what data to use for a function call, we refer to that
process**passing arguments to the function**.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// this is a function definition
function average(number1, number2) {
  return (number1 + number2) / 2;
}

// this is a function call with the arguments being 15 & 3
> average(15, 3)
9

// this is a function call with the arguments being 5 & 5
> average(10, 5)
7.5
```

When we call the function `average(15, 3)`, we run the code inside the*definition* for `average`. That is, we plug in the parameters with real
numbers(`number1` becomes `10` and `number2` becomes 16). Think of `number1`
and`number2` as *variables* that contain the values we pass in when we
called thefunction. Then we proceed by running the code inside the function. The
parameternames `number1` and `number2` used through the body of the function and
behavelike variables.

Returning a value {#returning-a-value .mume-header}
-----------------

Now that we know how functions are declared and invoked let\'s talk
about theinside of the function. We\'ll start with a statement: *Every function
inJavaScript returns `undefined` unless otherwise specified.*

Now what does that mean? We\'ll start with a simple example:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sayNumber(number) {
  console.log(number);
}

> sayNumber(1); // prints 1
1
undefined
```

So what happened there? Let\'s do a quick step by step:

1.  We declared the `sayNumber` function
2.  `sayNumber` was called handing in the argument of 1
3.  The `number` parameter is printed to the console
4.  Then the function ends without encountering a `return` statement.
    Since    nothing was specifically returned then the function returned the
    default    value for a function which is `undefined`.

Now let\'s change our above example to use the keyword `return` to
return avalue:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sayNumber(number) {
  console.log(number);
  return true;
}

> sayNumber(1);
1 // sayNumber still prints 1
true // but now sayNumber returns as true
```

Let\'s go back to our previous `average` function and talk about the
`return` weused there:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function average(number1, number2) {
  return (number1 + number2) / 2;
}

// the function call for average(10, 16) will return 13
// so the result variable will be set to 13
let result = average(10, 16);

// if we want to check what a function returns we can do this:
console.log(result); // prints `13`

// we could alternatively do this:
console.log(average(10, 16));
```

When we *call* a function, we jump to the function definition and run
the codeinside. When we hit a `return` statement, we immediately **exit** the
function,jump back to where we *called* the function, and evaluate the function
call tothe value it *returned*.

**Every function call evaluates to it\'s return value!** In other words,
theexpression `average(10, 16)` evaluates to `13` just like how the
expression`1 + 1` evaluates to `2`.

Another important rule of the return statement is that it stops
functionexecution immediately. This means that any code after a `return` will
not beexecuted!

``` {.language-javascript data-role="codeBlock" data-info="js"}
function average(number1, number2) {
  let sum = number1 + number2;
  return sum;
  // anything under the first return will not be executed
  console.log("this will not run")
  return false;
}

 // when the first return is encountered the entire function will return a value
> average(2, 7);
9
```

So the three things to remember about return statements is:

1.  Every function call evaluates to it\'s return value.
2.  Every function in JavaScript returns `undefined` unless a `return`
    is    specified
3.  Once a `return` statement is encountered the function will
    immediately stop    and return the value, ignoring any code below the `return`
    statement.

The importance of naming {#the-importance-of-naming .mume-header}
------------------------

A quick but very important side note about good naming. Take this to
heart rightnow: **Good names are important**. Do yourself, and every other
programmerreading your code, a favor by always using significant function and
variablenames.

For example, `x` is a very non-descriptive name for a variable or
function. Aswe tackle more complicated problems and our code grows to be more
complex, weare likely to forget what badly named variables originally stood for and
whattheir purpose was. Non-descriptive names make our code error-prone.
**Great codereads like English and almost explains itself.** As programmers, our
goal is towrite code that is not only \"correct\", but also elegant, readable,
andmaintainable! Hold yourself to this high standard.

As far as syntax goes in JavaScript we always name our functions and
variables`camelCase` for multiple words. (Ex: `tipCalculator`, `currentNumber`,`puppyPartyFinder`). Other languages use other conventions so it\'s best
to pickup the standard for your chosen language and stick with it.

Review {#review .mume-header}
------

By writing a function we can reuse code over and over again to solve
similarproblems with different input data (arguments). This will make your life
easierand allow you to start working on more complex problems.

This reading covered:

-   How to define and invoke a function in JavaScript.
-   How to use the `return` keyword to return a value from a function.
-   Writing readable JavaScript code by using significant names and
    following    `camelCase` conventions for multiple word variables and functions

------------------------------------------------------------------------

Parameters and Arguments {#parameters-and-arguments .mume-header}
========================

When talking about functions one of the first things we mentioned was
the word*parameters*. In this reading we will be covering what exactly a
parameter is -as well as the differentiation between *parameters* and *arguments*.

When you finish this reading, you should be able to:

1.  Identify the difference between parameters and arguments.
2.  Write a function that utilizes declared parameters.
3.  Invoking a function with passed in arguments.

The difference between Parameters and Arguments {#the-difference-between-parameters-and-arguments .mume-header}
-----------------------------------------------

Let\'s start off by talking about the difference between *arguments*
and*parameters* and how to identify which is which.

1.  **Parameters** are comma separated variables specified as part of a    function\'s declaration.
2.  **Arguments** are values passed to the function when it is invoked.

So by defining *parameters* when we declare our function we are
effectivelysetting accessible variables within the function:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// the add function declares two parameters
> add(1, 2); //=> 3
```

In the above example we declared our parameters when we declared our
function.Now *arguments* work slightly differently - when the function is invoked
we arepassing in *arguments*. So in the above example when we invoked
`add(1, 2)` the`(1,2)` were the *arguments* being passed in. So when a function is
invoked thevalue of the declared parameters is assigned to the passed in
*arguments*.

You can think of it *parameters* and *arguments* like a recipe. A recipe
is alist of ingredients (*parameters*) and list of steps (the code to be
run). Whensomeone cooks the recipe (*invokes* the function) they add the
ingredients theyactually have(*arguments*). The result of cooking the recipe is the
delicious`return` value!

### Extra arguments {#extra-arguments .mume-header}

In JavaScript a function will not throw an error if the number of
*arguments*passed during a function invocation is different than the number of
parameterslisted during function declaration. This is very important to know!

Let\'s use the above function to demonstrate:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

// this will ignore the 17 & 14
// the first two arguments passed in will be assigned to the first two parameters
> add(1, 2, 17, 14); //=> 3
```

Notice in the above example we passed in 4 arguments (1, 2, 17, 14) to
`add`.Since the function was only looking for two parameters that is all it
uses.

### Not enough arguments {#not-enough-arguments .mume-header}

Now what happens if we pass in less arguments then needed?

``` {.language-javascript data-role="codeBlock" data-info="js"}
function add(firstParameter, secondParameter) {
  console.log(firstParameter + secondParameter);
}

> add(5); //=> NaN
```

Whoa what happened there? Let\'s do a play-by-play:

1.  `firstParameter` was set to equal the first passed in argument which
    in the    above case is 5.
2.  Since there is no second argument then `secondParameter` is declared
    as a    variable but is set to the default value of `undefined`.
3.  The function then tries to add 5 to `undefined` which is definitely
    not a    number! So we get `NaN` (which means `Not A Number`) printed to the
    console.

As you write more functions you\'ll grow very comfortable using both
argumentsand parameters to accomplish your function\'s goal.

Review {#review-1 .mume-header}
------

-   Parameters are variables defined as a part of a function\'s
    declaration.
-   Arguments are values passed to the function when it is invoked.
-   JavaScript functions can intake a different number of arguments than
    the    number of parameters listed during function declaration.

------------------------------------------------------------------------

------------------------------------------------------------------------

Control Flow and Array Learning Objectives {#control-flow-and-array-learning-objectives .mume-header}
==========================================

Below is a complete list of the terminal learning objectives for this
lesson.When you complete this lesson, you should be able to perform each of
thefollowing objectives. These objectives capture how you may be evaluated
on theassessment for this lesson.

1.  Define a function that accepts a sentence string and two words as
    args. The    function should return a boolean indicating if the sentence includes
    either    word.

2.  Identify a pair of mutually exclusive conditions

3.  Given a for loop, translate it into a while loop, and vice-versa

4.  Write a function that iterates through a provided string argument

5.  Given a description of pig latin, write a function that takes in a
    string    argument and utilizes String\#slice to translate the string into pig
    latin.

6.  Write a function that takes in an array of words and a string as
    arguments    and returns a boolean indicating whether the string is located
    inside of the    array. The function must use Array\#indexOf.

7.  Define that an array literal is an ordered list of values defined by
    using    bracket and individual values are read by indexing.

8.  Prevent code that can throw an exception from causing the program to
    crash. the terminal learning objectives for this lesson.    When you complete this lesson, you should be able to perform each of
    the    following objectives. These objectives capture how you may be
    evaluated on the    assessment for this lesson.

9.  Define a function that accepts a sentence string and two words as
    args. The    function should return a boolean indicating if the sentence includes
    either    word.

10. Identify a pair of mutually exclusive conditions

11. Given a for loop, translate it into a while loop, and vice-versa

12. Write a function that iterates through a provided string argument

13. Given a description of pig latin, write a function that takes in a
    string    argument and utilizes String\#slice to translate the string into pig
    latin.

14. Write a function that takes in an array of words and a string as
    arguments    and returns a boolean indicating whether the string is located
    inside of the    array. The function must use Array\#indexOf.

15. Define that an array literal is an ordered list of values defined by
    using    bracket and individual values are read by indexing.

16. Prevent code that can throw an exception from causing the program to
    crash.

------------------------------------------------------------------------

Control Flow - Conditional Statements {#control-flow-conditional-statements .mume-header}
=====================================

So far the code you\'ve written has been pretty direct in it\'s intent.
You candefine functions and variables but, so far the functions you\'ve created
haven\'tbeen able to do that much for you *yet*. It\'s time to start writing
functionsthat can do things *conditionally* by utilizing *control flow*.

In simple terms - **control flow** is the order in which instructions
areexecuted within a program. One modifies control flow using *control
structures*,expressions that alter the control flow based on given parameters. The
controlstructures within JavaScript allow the program flow to change within a
unit ofcode or a function.

This reading will be covering one of the two main *control structures*
youwill use time and time again - *Conditional statements*. *Conditionalstatements* are used to perform different actions based on different
conditions.

When you finish this reading, you should be able to:

-   Write `if`, `else if`, `if...else` conditional statements.
-   Know that conditional statements can have only one `if` and one
    `else`    statement.
-   Identify that conditional statements can be nested.

A Quick Word on Syntax {#a-quick-word-on-syntax .mume-header}
----------------------

Before we get started we\'ll quickly go over the terms we\'ll be using
torepresent syntax.

1.  `[ ]` are square **brackets**
2.  `{ }` are curly **braces**
3.  `( )` are **parentheses**

Writing Conditional Statements {#writing-conditional-statements .mume-header}
------------------------------

Conditional Statements are the second fundamental *control structure*
forwriting JavaScript and are pretty straight forward. The simplest
conditionalstatement is the `if` statement. An `if` statement has two parts, the
*testexpression* (the code that immediately follows the `if` which goes inparentheses), and the *then expression* (this code belongs in braces
after the`if` expression). The *then* expression will only run when the `if`
expressionis truthy.

Here is an example of a simple `if` statement:

``` {.language-javascript data-role="codeBlock" data-info="js"}
// this is the test expression
if (3 === 3) {
  // this is the then expression
  // this code will run if the above statement is true
  console.log("this is a three!");
}
```

The `if` statement above allows you to specify what should happen if
yourparticular expression evaluates to true. You can chain additional *testexpressions* onto this `if` statement by using a `else if` statement.

The syntax for `else if` is very similar as an `if` statement:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function mathFun() {
  let x = 2 + 3;

  if (x === 3) {
    console.log("we have a 3");
  } else if (x === 4) {
    // this code will run if the above statement is true
    console.log("we have a 4");
  } else if (x === 5) {
    // this code will run if the above statement is true
    console.log("we have a 5");
  }
};

mathFun(); // => "we have a 5"
```

The `else if` and `if` statements do not, however, provide the option to
specifysomething else that should happen in the event that all of the above
expressionsevaluate to be `falsey`. The `if...else` statement reads just like
English. TheJS interpreter will execute the `else` statement if all the above
conditionsgiven are `falsey`. See below for an example:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function mathFun() {
  let x = 19;
  if (x === 3) {
    console.log("we have a 3");
  } else if (x === 4) {
    console.log("we have a 4");
  } else {
    console.log("I will return if everything above me is falsey!");
  }
};

mathFun(); // => "I will return if everything above me is falsey!"
```

You can chain an arbitrary number of `else if` statements but there can
only beone `if` statement and one optional `else` statement. The `if`
introduces the controlstructure and the `else` acts as a fail safe to catch everything that
didn\'tmeet the above conditions.

Only one *then expression* is ever executed in an `if`, `if...else`, or`if...else` statement. If one of the *test expressions* is truthy, then
theresult of its *then expression* is the result of the **entire**
conditionalstatement:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let x = 3;
if (x === 3) {
  console.log("this will run");
} else {
  console.log("this will not run");
}
```

Additionally, you can nest conditional statements within each other but
it willget hard to read pretty quickly and is discouraged:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function mathFun(x) {
  if (x === "math") {
    if (x === "math" && x[0] === "m") {
      if (x[1] === "a") {
        console.log("this got confusing fast");
      } else {
        console.log("that is not math!");
      }
    } else {
      console.log("that is for sure not math!");
    }
  } else {
    console.log("I will return if everything above me is false!");
  }
};

mathFun("math"); // => "this got confusing fast"
```

Review {#review-2 .mume-header}
------

-   Conditional statements allow us to control what actions should be
    taken based    on a boolean (truthy or falsey) expression
-   In a chain of *then expressions* (`if...else if...else`), only one
    of the    *then expressions* will be executed.
-   Conditional statements can have only one `if` and one `else`
    statement.
-   Conditional statements can be nested.

------------------------------------------------------------------------

Mutually Exclusive Conditions {#mutually-exclusive-conditions .mume-header}
=============================

You have now learned how to write conditional statements. Now we\'ll
talk alittle bit more about how to write them using best practices.

When you finish this reading, you should be able to:

-   Identify a pair of mutually exclusive conditions.

When to use if statements {#when-to-use-if-statements .mume-header}
-------------------------

Say you are given the challenge to write a function that that will call
anotherfunction named `bigNumber` if the given argument is **greater** than 100
or calla function named `smallNumber` if it the given argument is smaller. You
couldwrite a function to do that which would look like this:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function numberSeparator(number) {
  if (number < 100) {
    // number is smaller than 100 so we invoke smallNumber
    smallNumber();
  }
  if (number === 100) {
    // number is equal to 100 so we invoke smallNumber
    smallNumber();
  }
  if (number > 100) {
    // number is larger than 100 so we invoke bigNumber
    bigNumber();
  }
}
```

As you can probably tell the above function uses a lot of code to do a
simpletask. To be clear the function above would work for our aim - but it
repeatsitself. There is an age old principal for writing good code named
**DRY** or**Don\'t repeat yourself**. As good programmers we always want our code
to beclear, concise, and efficient.

A general rule of thumb is that if you are working with a condition that
is**mutually exclusive**, meaning if one condition is true the other
conditionmust be false, then you should use an `if/else` statement. You can also
think of**mutually exclusivity** like a coin flip - it can be either heads or
tails butnot both.

Going back to the original problem at hand we can see it makes intuitive
sensewith the way the challenge is phrased: If the number is larger than 100
thenwe\'ll call `bigNumber`, otherwise we invoke is `smallNumber`.

So let\'s rewrite the above function to read a little more clearly:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function numberSeparator(number) {
  if (number > 100) {
    bigNumber();
  } else {
    smallNumber();
  }
}

// this also works
function numberSeparator(number) {
  if (number <= 100) {
    smallNumber();
  } else {
    bigNumber();
  }
}
```

Look at how much clearer that is! Writing good code is an art - devote
yourselfto becoming an artist!

Review {#review-3 .mume-header}
------

-   How to identify a pair of mutually exclusive conditions.
-   DRY - don\'t repeat yourself!

------------------------------------------------------------------------

Control Flow - Looping {#control-flow-looping .mume-header}
======================

A quick reminder before we start - **control flow** is the order in
whichinstructions are executed within a program. One modifies control flow
using*control structures*, expressions that alter the control flow based on
givenparameters. This reading will be covering the second of the main
*controlstructures* you will use time and time again - *loops*.

When you finish this reading, you should be able to:

1.  Know how to write a `while` loop and a `for` loop.
    -   Know how to convert a `for` loop into a `while` loop
2.  Know that index variables conventionally start at zero.
3.  Explain what an *iteration* is.

Looping {#looping .mume-header}
-------

Imagine you are at a friend\'s house and your friend has six dogs.
Someone leftthe back gate open and all the dogs go out in the yard and get super
muddy. Nowyour friend wants to clean their dogs but they only have one bathtub!
You can\'twash all the dogs at once. So the only option is to give the dogs a bath
one ata time until they are all clean. When you start 0 dogs are clean and 6
dogs aredirty.

*While* there are still dirty dogs you still have a job to do. That is
your**condition** - you will stop giving baths once all 6 dogs are clean. So
afterone bath you you have 1 clean dog and 5 dirty dogs. You\'ve*incremented*(increased by one) your number of clean dogs. After each
bath youcheck your **condition** again until you have 6 clean dogs so you know
you canstop!

What we\'ve described above is the idea of looping - setting a
condition,executing an action, doing something to make sure our condition will be
meteventually, and rechecking our condition before executing our next
action.

Loops are a fundamental *control structure* for writing JavaScript.Loops will repeatedly execute a section of code while a condition is
true. Loopsare simple to write and incredibly powerful! There are many variations
of loopbut we will be covering the two most fundamental loops now - **while**
loops and**for** loops.

### While Loops {#while-loops .mume-header}

One of the simplest loops in `JavaScript` is the `while` loop. As with
allloops, the `while` loop will execute a block of code as long as a
specifiedcondition is true. The while loop starts with the keyword `while` then
states acondition in parentheses. The code in the following braces will be run
until theabove condition is met.

``` {.language-javascript data-role="codeBlock" data-info="js"}
while (condition) {
  // code block to be executed
}
```

In the following example, the code in the loop will run, over and over
again, aslong as a variable (`index`) is less than 10:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let index = 0;

// this is the condition that will be checked every time this loop is run
while (index < 10) {
  console.log("The number is " + index);
  // this is common shorthand for index = index + 1
  index++;
}
```

The most important thing to remember when writing any loop is to always
beworking towards your condition. In the example above if we did not
increment the`index` variable by 1 each time the loop ran then we would be stuck with
what wecall an **infinite loop**:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let index = 0;

// this is an infinite loop because our condition will never be met
while (index < 10) {
  console.log("The number is " + index);
  // if we do not increase the index then our condition is never met
  // Meaning this will run forever!
}
```

The above code will run until whatever interpreter you are using
crashes.

### Important Loop Knowledge {#important-loop-knowledge .mume-header}

A quick word before we learn about the next loop.

The *index* is the traditional word for the variable that keeps track of
howmany times the loop has been run. Don\'t write loops with indices
starting atone; you\'ll confuse other programmers and yourself. Indices have
started at zerofor a long time, and for good reason. It\'s much easier to use loops
that startwith an index of zero because Array and String indices also start at
zero.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let array = [0, 1, 2];
let index = 0;

while (index < array.length) {
  console.log(
    "Both the index and the current array position are " + array[index]
  );
  index++;
}
```

In the above code we will do one loop for each digit in the Array above.
We calleach of those loops an \"iteration\". An iteration is the act of
repeating aprocedure, hence looping is an **iterative** technique. Each repetition
itselfis also called an \"iteration.\" So you can use loops to *iterate*
through Arraysand Strings.

### For Loops {#for-loops .mume-header}

A `for` loop can be broken down into three sections:

1.  The *initial expression* which will be run once at the beginning of
    the loop.
2.  The *condition* which is checked every time the loop is run. If
    this    condition is true the loop will run again. If this condition is
    false the    loop will end.
3.  The *loopEnd expression* which will be run at the end of the loop
    before    checking the *condition* again.

``` {.language-javascript data-role="codeBlock" data-info="js"}
for (<initial expression>;<condition>;<loopEnd expression>)
```

The `for` loop is usually used with an integer counter:

``` {.language-javascript data-role="codeBlock" data-info="js"}
for (let index = 0; index < 10; index += 1) {
  // the code inside this block will run 10 times
}
```

While the *loopEnd expression* is normally used to increase a variable
by oneper loop iteration, it can contain any statement, such as one that
decreasingthe counter, or increasing it by 2.

You can use the `for` loop to iterate through all kinds of things. Check
out theexample below for how to iterate through a String:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let testString = "testing";

// we can use the testString's length as our condition!
// Since we know the testString's index starts at 0
// and our index starts at 0 we can access each letter:
for (let index = 0; index < testString.length; index += 1) {
  let letter = testString[index];
  console.log(letter);
}
```

These are the most basic types of loops. If all else fails, you can
always fallback on these two loops. All the other loop forms are just more
convenient formsof these basic loop styles.

Translating From One Loop to Another {#translating-from-one-loop-to-another .mume-header}
------------------------------------

So far we have covered both `while` and `for` loops. Once you understand
theconcept of looping it\'s easy to translate one loop to another:

``` {.language-javascript data-role="codeBlock" data-info="js"}
// these two do the exact same thing!
function forLoopDoubler (array) {
  // it is convention to shorten index to just i in most cases
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
};

function forLoopDoubler (array) {
  let i = 0;
  while (i < array.length) {
    array[i] = array[i] * 2;
    i++;
  }
  return array;
};

forLoopDoubler([1, 2, 3]); // => [2,4,6]
whileLoopDoubler([1, 2, 3]); //=> [2,4,6]
```

Review {#review-4 .mume-header}
------

-   We can use a `for` or `while` loop to repeat a block of code
    repeatedly.
-   While the loop condition is true, we will execute another iteration
    of the    loop.
-   When the loop condition is false, we will exit the loop.

------------------------------------------------------------------------

The Array Type {#the-array-type .mume-header}
==============

This reading will be about one of JavaScript\'s global objects, the
**Array**type. JavaScript arrays are used to store multiple values all within a
singlestructure, much like a creating a list. Arrays can hold strings,
integers andeven other arrays! Arrays are incredibly useful for holding a bunch of
differentinformation all in one place.

When you finish this reading, you should be able to:

-   Write arrays using correct syntax
-   Identify that an array is an ordered list of values defined by using
    brackets
-   Use `.length` to obtain a count of the numbers of elements that
    comprise an    array
-   Index an array to refer to a single value
-   Concatenate multiple arrays together

Using arrays {#using-arrays .mume-header}
------------

While coding you will find that you often find yourself needing to refer
to abunch of data at once. For instance, what if you wanted to refer to the
entireEnglish alphabet. Sure, you could create a bunch variables for each
letter inthe alphabet:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let a = "a";
let b = "b";
let c = "c";
let d = "d";
// and so on for way too long...
```

However this becomes cumbersome and unmanageable quickly. An Array is a
datastructure that solves this problem. Arrays are always wrapped in squarebrackets, `[]`, and store their comma separated values in sequential
order.Arrays in JavaScript are also very flexible: we can put elements into an
array,replace elements in an array, and remove elements from the array.

So going back to our first example of containing the alphabet:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let alphabet = [
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x",
  "y", "z"
];
```

Indexing arrays {#indexing-arrays .mume-header}
---------------

### Calculating the length of an array {#calculating-the-length-of-an-array .mume-header}

Since an array can container any number of values you will find it
useful tocount the number of values available to you using `.length`:

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log([4, 7, 9].length); // => 3
console.log([1, 2].length); // => 2
console.log([].length); // => 0
```

### Properly indexing an array {#properly-indexing-an-array .mume-header}

Arrays consist of multiple values all stored in sequential order. These
valueare numbered by **indices** starting at 0 (just like indexing a
string!). Sogiven the below example:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let numbersAndLetters = ["b", "z", 17, "cat"];
```

In the above `numbersAndLetters` array if we access `numbersAndLetters`
at theindex of 0 we get back the value of \"b\". If we access
`numbersAndLetters` at theindex of 1 we get \"z\", at the index of 3 we get 17, etc. We can
specify whichvalue we\'d like to access in an array by using square brackets,`[]`,
andspecifying an index:

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log(numbersAndLetters[0]); // => "b"
console.log(numbersAndLetters[1]); // => "z"
console.log(numbersAndLetters[2]); // => 17
console.log(numbersAndLetters[3]); // => "cat"
```

Notice that even though the index at `numbersAndLetters[3]` has the
value of astring with multiple characters (\"cat\") we return the *entire value*
listed atthat index.

**Reminder:** Arrays **always** start at the index of 0, not 1. This is
theconvention in programming. Additionally, indices should always be a
number.

We can access a value in an array directly by providing an index for the
valuewe\'d like to access in that array (`array[index]`). See below for an
example:

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log(["a", "b", "c"][0]); // => "a"
console.log(["a", "b", "c"][1]); // => "b"
console.log(["a", "b", "c"][2]); // => "c"
console.log(["a", "b", "c"][3]); // => `undefined`
```

As we see in the code above, if we try to access an element at an index
that isnot inside the array, we get back `undefined`. This makes sense because
there isno value at that given position!

### The classic \"off by one\" error {#the-classic-off-by-one-error-1 .mume-header}

Arrays are similar to strings in that both of their indices start at 0
insteadof 1. Forgetting this fact can lead to some pretty confusing situations.
Let\'sfocus on an important distinction: the index of the last value of an
array isalways one less than its length.

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log([4, 7, 9].length); // => 3
console.log([4, 7, 9][3]); // => undefined
console.log([4, 7, 9][2]); // => 9
```

In other words, although the `length` of `[4, 7, 9]` is 3, the index of
the lastvalue (`9`) is 2. A good rule of thumb of accessing the last index of an
arrayis to find the length and then subtract one:

``` {.language-javascript data-role="codeBlock" data-info="js"}
let testArray = [4, 7, 9];
let finalIndex = testArray.length - 1; // => (3 - 1) = 2
console.log(testArray[finalIndex]); // => 9
```

Working with arrays {#working-with-arrays .mume-header}
-------------------

### Containing data in arrays {#containing-data-in-arrays .mume-header}

By packaging groups of related data into a single array, we gain the
addedbenefit of being able to refer to that data as a single collection.
Arrays don\'thave to just hold single characters- they are capable of holding entire
strings,numbers, and even other arrays!

``` {.language-javascript data-role="codeBlock" data-info="js"}
let wackyArray = [2, 17, "apple", "cat", ["apple"]];

console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]
```

Just think of all the possibilities of what you can store in a single
array!However, just because you can *doesn\'t* mean you should. In practice we
willalmost always be storing similar kinds of data, that are coming from a
commonsource (i.e. items in a shopping list, ID numbers, tasks on a todo
list).

### Using indexOf with arrays {#using-indexof-with-arrays .mume-header}

We can also calculate the index of a given value within an array by
using`indexOf`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1
console.log([1, 3, 5, "apple", "jet"].indexOf(5)); // => 2
console.log([1, 3, 5, "apple", "jet"].indexOf("jet")); // => 4

// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1
```

If we attempt to search for a value that is **not** present in an
array,`indexOf` will return -1. This makes sense because we know that -1 is
not avalid array index. The smallest index possible is 0!

Concatenation with arrays {#concatenation-with-arrays .mume-header}
-------------------------

As a reminder, concatenation is just a fancy word for joining things
togetherinto a single collection. Now, this is where arrays will differ from
strings.The `+` operator only exists for numbers and strings. If you try to use
the `+`on an array it will try to help you out by *converting your arrays intostrings*.

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log([1, 2, 3] + [4, 5, 6]); // => 1,2,34,5,6
```

JavaScript was just trying to help! However that is probably not what
you meantto do. Good thing JavaScript has a seperate method for putting two
arraytogether. To concatenate arrays, we can use the aptly named `.concat`
method:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
console.log([1, 2, 3].concat([4, 5, 6])); // => [1, 2, 3, 4, 5, 6]
```

Remember {#what-youve-learned-6 .mume-header}
--------

-   An **Array** is a data type that contains a list of in order values
    surrounded    in square brackets `[]`.
-   `array.length` returns the number of values in the `array`.
-   Each value of an array is associated with a number index; the first
    value of    an array is at the index of 0.
-   We can use `array.indexOf(value)` to obtain the index of `value`
    within    `array`; if `value` is not found, then -1 is returned.
-   We can use `.concat` to concatenate multiple arrays, combining them
    into a    single array.

------------------------------------------------------------------------

DAY-3*Intermediate Functions*

------------------------------------------------------------------------

Intermediate Functions Learning Objectives {#intermediate-functions-learning-objectives .mume-header}
==========================================

Below is a complete list of the terminal learning objectives across all"Intermediate Function\" lessons. When you complete these lessons, you
should beable to perform each of the following objectives. These objectives
capture howyou may be evaluated on the assessment for these lessons.

1.  Identify that strings are immutable and arrays are mutable

2.  Define a function using both function declaration and function
    expression    syntax

3.  Utilize Array\#push, \#pop, \#shift, \#unshift to mutate an array

4.  List the arguments that can be used with Array\#splice

5.  Write a function that sums up elements of an array, given an array
    of numbers    as an argument

6.  Utilize Array\#forEach, \#map, \#filter, \#reduce in a function

7.  Define a function that takes in an array of numbers and returns a
    new array    containing only the primes

8.  Define a function that takes in a 2D array of numbers and returns
    the total    sum of all elements in the array

9.  Define a function that takes in an array of elements and returns a
    2d array    where the subarrays represent unique pairs of elements

10. Define a function that takes in an array of numbers as an argument
    and    returns the smallest value in the array; if the array is empty
    return null the terminal learning objectives across all    \"Intermediate Function\" lessons. When you complete these lessons,
    you should be    able to perform each of the following objectives. These objectives
    capture how    you may be evaluated on the assessment for these lessons.

11. Identify that strings are immutable and arrays are mutable

12. Define a function using both function declaration and function
    expression    syntax

13. Utilize Array\#push, \#pop, \#shift, \#unshift to mutate an array

14. List the arguments that can be used with Array\#splice

15. Write a function that sums up elements of an array, given an array
    of numbers    as an argument

16. Utilize Array\#forEach, \#map, \#filter, \#reduce in a function

17. Define a function that takes in an array of numbers and returns a
    new array    containing only the primes

18. Define a function that takes in a 2D array of numbers and returns
    the total    sum of all elements in the array

19. Define a function that takes in an array of elements and returns a
    2d array    where the subarrays represent unique pairs of elements

20. Define a function that takes in an array of numbers as an argument
    and    returns the smallest value in the array; if the array is empty
    return null

------------------------------------------------------------------------

Function Expressions {#function-expressions .mume-header}
====================

You may have noticed that we\'ve been writing many functions so far in
thecourse! We will continue to do so since functions are the building
blocks of theeventual applications that we will build. That being said, let\'s begin
tobroaden the way we think about functions. In particular, we\'ll want
think offunctions as expressions that we can store in variables - just like our
classicdata types of number, string, boolean, array, and object!

When you finish this article, you should be able to:

-   identify functions as first-class objects in JavaScript
-   define a function using function expression syntax

Functions as first-class objects {#functions-as-first-class-objects .mume-header}
--------------------------------

JavaScript is well known for being a programming language that treats
functionsas \"first-class objects\". This fancy talk means that you can treat a
function asa \"normal\" value by storing it in a variable. We\'ll leverage this key
concept invery clever ways later in the course. For now, let\'s begin with a
simple examplethat shows the \"first-class object\" nature of functions:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let calculateAverage = function(a, b) {
  return (a + b) / 2;
};

console.log(calculateAverage(10, 20)); // 15
```

In the code snippet above, we define the `calculateAverage` by assigning
avariable to contain the function\'s definition. By doing this, the
variable\'sname is effectively the function\'s name. So to call the function, we
simplyrefer to the variable name. Note that we do not write the function\'s
name afterthe `function` keyword, where we normally would. We will refer to this
new wayof defining functions as *function expression syntax* and the classic
way ofdefining functions as *function declaration syntax*. In general, we can
definefunctions using either syntax:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
// function declaration syntax
function myFunctionName(arg1, arg2) {}

// function expression syntax
let myFunctionName = function(arg1, arg2) {};
```

In the coming sections, we\'ll highlight moments when we\'ll prefer one
syntaxover the other. For now, get acquainted with the new syntax as it is
somethingyou\'ll be seeing a lot of as a programmer!

### A peek under the hood {#a-peek-under-the-hood .mume-header}

Perhaps you\'re finding it tough to understand what it means for a
variable tocontain a function - it is indeed a very abstract idea for new
programmers.Let\'s draw a comparison. We know that when we assign an expression to
variable,the expression first evaluates to a single value, which we then store in
thevariable name:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let myNum = 4 + 4;
console.log(myNum); // prints 8
console.log(myNum * 3); // prints 24
```

In the same way we can treat a function definition as an expression
thatevaluates!

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let myFunc = function() {
  console.log("I'm a function");
};

console.log(myFunc); // prints [Function: myFunc]
myFunc(); // prints "I'm a function"
```

Looking at the snippet immediately above, you\'ll notice that when we
print the`myFunc` variable directly, without calling the function with
parentheses,JavaScript simply says the variable contains a function named myFunc(`[Function: myFunc]`). You can truly imagine a function as a value that
we canstore and use as we please.

> The term *anonymous function* may also be used to describe a function> expression before it is assigned to any variable. Following the
> example above,> we\'ll use the word *anonymous function* to describe the function
> expression> *before* the assignment to the `myFunc` variable is complete. Once
> the> assignment is complete, it would be silly to refer to `myFunc` as an> `anonymous function` because an *anonymous function* has no name.

Remember {#what-youve-learned-7 .mume-header}
--------

-   functions can be stored in variables; just like any other values in    JavaScript!

------------------------------------------------------------------------

Two-Dimensional Arrays (2D Arrays) {#two-dimensional-arrays-2d-arrays .mume-header}
==================================

Time to broaden our understanding of arrays! We\'ve already explore thefundamentals of arrays. Mainly, we can store any type of data we please
aselements of an array and even mix types together. However, what happens
if westore an array as an element of an array?

When you finish this article, you should be able to:

-   index into the inner elements of a 2D array
-   use nested loops to iterate through a 2D array

Multidimensional Arrays {#multidimensional-arrays .mume-header}
-----------------------

When we store arrays as elements of other arrays, we refer to those
structuresas multidimensional arrays. If the \"depth\" of the nested arrays is at
exactly 2 (anouter array containing inner arrays), then we\'ll refer to it as atwo-dimensional array:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let twoDimensional = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

console.log(twoDimensional[1]); // [ 'd', 'e' ]
console.log(twoDimensional[1][0]); // 'd'

let subArr = twoDimensional[1];
console.log(subArr[0]); // 'd'
```

Note that indexing the outer `twoDimensional` array will return an
element likeusual, it\'s just that element happens to be another array. To gain
access to theinnermost elements, we simply need to apply another set of indexing
brackets!

If we style our 2D arrays nicely so that each subarray is on a new line,
we caninterpret the double indices as `[row][column]`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let twoDimensional = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g", "h"]];

// get the element in the 0th row, 2nd col:
console.log(twoDimensional[0][2]); // 'c'
```

Iterating through 2D Arrays {#iterating-through-2d-arrays .mume-header}
---------------------------

Since a 2D array is just an array of arrays. We\'ll need to use a loop
within aloop to iterate through a 2D array:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let array = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
}
```

In the nested loops above, the `i` index refers to the current \"row\"
and the `j`index refers to the current \"column\". It\'s worth noting that since
the innersubArrays have different length, we\'ll want to specifically reference
the lengthof that subarray in our inner loop condition `j < subArray.length`. The
codeabove will print:

``` {.language-plaintext data-role="codeBlock" data-info="plaintext"}
[ 'a', 'b', 'c' ]
a
b
c
[ 'd', 'e' ]
d
e
[ 'f', 'g', 'h' ]
f
g
h
```

When is a 2D array practical? {#when-is-a-2d-array-practical .mume-header}
-----------------------------

As a preview of things to come let\'s briefly mention when you\'ll find
a 2D arrayuseful in your future projects. Imagine how\'d you represent a \"grid\":

-   tic-tac-toe (3x3 grid)
-   chess (8x8 grid)
-   sudoku (9x9 grid)
-   excel (a sheet is an arbitrarily sized 2D array)

Remember {#what-youve-learned-8 .mume-header}
--------

-   an array can contain arrays as elements, we call this a 2D arrays
-   to iterate through a 2D array, used nested loops

------------------------------------------------------------------------

Mutability in JavaScript {#mutability-in-javascript .mume-header}
========================

So far in the course we\'ve explored a handful of methods that
manipulate data.We\'ll be growing our arsenal of methods further overtime, so we\'ll
want to gainawareness for **exactly** how we should expect these methods to
manipulate thedata we give them. To this end, let\'s analyze which methods will modify
existingdata and which methods do not. We refer to this concept as
**mutability**.

When you finish this article, you should be able to:

-   Explain what \"mutability\" is
-   Correctly label JavaScript data types as immutable or mutable

What is mutability? {#what-is-mutability .mume-header}
-------------------

At its face value, *mutability* is a simple concept. You may be familiar
withthe word *mutation*, which refers to a alteration (usually in DNA).
Somethingthat is *mutable* can be changed, while something that is *immutable*
isunchanging and permanent. To illustrate this concept, we\'ll begin with
stringsand arrays. We\'ve spent some time with these two data types and by now
werecognize that the two types share many similarities. Both have
indices,`length`, and even share common methods like `slice`. However, they
differgreatly in their mutability:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let myArr = ["b", "e", "a", "m"];
myArr[0] = "s";
console.log(myArr); // 'seam'

let myStr = "beam";
myStr[0] = "s";
console.log(myStr); // 'beam'
```

Above we have shown that we can assign a new element to an index of an
array,but we cannot assign a new character to an index of a string. In other
words,arrays are *mutable*, but strings are *immutable*.

An implication of this discovery is that there are *some* array methods
thatwill modify an existing array but *zero* methods that will modify an
existingstring. Methods that manipulate string data typically return a *new*
string andnever modify an existing one. A prime example is `toUpperCase`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let word = "piñata";
let newWord = word.toUpperCase();
console.log(word); // 'piñata'
console.log(newWord); // 'PIÑATA'
```

Above, notice that the `toUpperCase` method returns a capitalized
version of thestring, but does not change the original string. It\'s also worth noting
that notevery array method will mutate. For example, the `slice` method does not
mutatefor both strings and arrays. As we learn about methods in the future,
we\'ll becertain to note what mutates and what does not.

Mutable or immutable, that is the question {#mutable-or-immutable-that-is-the-question .mume-header}
------------------------------------------

Now that we have a grasp of *mutability*, let\'s take inventory and
identifyJavaScript\'s data types as mutable or immutable.

**Mutable**

-   array
-   object (we\'ll learn these soon)

**Immutable**

-   number
-   string
-   boolean

A quick way to remember the above list is to identify that the composite
types(the types that can contain multiple values) of array and object are
mutable.The remaining \"simpler\" types of number, string, and boolean are
immutable.

The mutability misconception {#the-mutability-misconception .mume-header}
----------------------------

Maybe you are having a tough time believing what we have just claimed.
We don\'tblame you, you\'ve probably heard the saying that change is the only
constant inthe universe. Let\'s debunk a common argument to turn you into a
believer. Theskeptical programmer may use this as an argument to show that numbers
aremutable:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let myNum = 42;
myNum += 8;
console.log(myNum); // 50
```

Because the `myNum` variable now contains `50` where it once contained
`42`, itmay seem we have mutated the number, but this is not truly the case.
Recall that`myNum += 8` is shorthand for `myNum = myNum + 8`. Since the right hand
side ofthe assignment evaluates first, we are simply taking the new number of
`50` andreassigning it to the `myNum` variable. This reassignment of a variable
name isnot a mutation of the original number.

Remember {#what-youve-learned-9 .mume-header}
--------

-   data types that can be changed are mutable, those that cannot be
    changed are    immutable
-   arrays and objects are mutable
-   numbers, strings, and booleans are immutable

------------------------------------------------------------------------

Array Splice {#array-splice .mume-header}
============

Time to a learn yet another array method! The
[Array\#splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
methoddeserves its own reading because of how versatile it is. Feel free to
use thisarticle as a quick reference; let\'s jump right in.

When you finish reading this article, you should be able to:

-   list all possible arguments that can be used with the `Array#splice`
    method

Notation {#notation .mume-header}
--------

For clarity in this article and moving forward in the course, we\'ll be
notatingmethods with `#` to clarify how they should be called. For example,`Array#splice` refers to the method that should be called on an array,`arr.splice()` where `arr` is some array variable. Likewise
`String#toUpperCase`refers to the method that should be called on a string,
`str.toUpperCase()`where `str` is some string variable. We\'ll opt to refer to methods
using thisnotation because some methods can be called on multiple data types, such
as`Array#slice` and `String#slice`.

What can Array\#splice do? {#what-can-arraysplice-do .mume-header}
--------------------------

Before we explore the nitty-gritty details of the `Array#splice` method,
thefirst thing to be aware of is that the method will **mutate** the array
that itis called on. That is, `Array#splice` will modify the existing array and
*not*return a new array.

### Using splice to remove {#using-splice-to-remove .mume-header}

The usage of the `Array#splice` method is easy to mix up because it can
be usedto remove or insert elements into an array. That\'s right - it can
perform"opposite\" operations, even at the same time! For now, we\'ll begin by
*only*removing elements from an array:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let colors = ["red", "yellow", "blue", "green", "orange", "brown", "gray"];
let returnVal = colors.splice(2, 3);
console.log(colors); // [ 'red', 'yellow', 'brown', 'gray' ]
console.log(returnVal); // [ 'blue', 'green', 'orange' ]
```

The first two arguments for splice correspond to 1) the target index and
2) howmany elements to remove. The call `colors.splice(2, 3)`, will remove the
nextthree elements beginning at index 2. This means that the elements at
indices 2,3, and 4 are removed.

Note that splice returns an array containing the elements that were
removed andalso has the effect of removing the elements from the *original* array,
mutatingit in-place.

### Using splice to insert {#using-splice-to-insert .mume-header}

To use the splice method to insert new elements into an array, we can
pass inany number of additional arguments representing the values to insert:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let colors = ["red", "yellow", "blue"];
let returnVal = colors.splice(1, 0, "RebeccaPurple", "CornflowerBlue");
console.log(colors); // [ 'red', 'RebeccaPurple', 'CornflowerBlue', 'yellow', 'blue' ]
console.log(returnVal); // []
```

The method call
`colors.splice(1, 0, 'RebeccaPurple', 'CornflowerBlue')`translates to \"target index 1, remove the next 0 elements, then insert`'RebeccaPurple'` and `'CornflowerBlue'`.\"

### Using splice like a pro {#using-splice-like-a-pro .mume-header}

Naturally, we can combine these two functionalities! Say we wanted to
targetindex 2, remove the next 3 elements, then insert `'Gainsboro'`,
`'Ivory'`, and`'Khaki'`:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let colors = ["red", "yellow", "blue", "green", "black", "beige"];
let removed = colors.splice(2, 3, "Gainsboro", "Ivory", "Khaki");
console.log(colors); // [ 'red', 'yellow', 'Gainsboro', 'Ivory', 'Khaki', 'beige' ]
console.log(removed); // [ 'blue', 'green', 'black' ]
```

Bam. What a versatile method! Always feel free to reference the[documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
for the method when you are struggling to rememberits usage:

Remember {#what-youve-learned-10 .mume-header}
--------

-   Array\#splice has two required arguments
    -   the target index
    -   the number of elements to remove beginning at that target index
-   Array\#splice can also take in any number of values to be inserted
    at the    target index

------------------------------------------------------------------------

String\#split and Array\#join {#stringsplit-and-arrayjoin .mume-header}
=============================

We\'ve seen previously that strings and arrays share many similar
properties. Forexample, strings and arrays both have a `length` and can have multiple
indices.Because of this, you may find it useful to \"convert\" between the two
types.

When you finish this article, you should be able to:

-   use the `String#split` method to turn a string into an array
-   use the `Array#join` method to turn an array into a string

String\#split {#stringsplit .mume-header}
-------------

The
[String\#split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
method is called on a string and accepts a"separator\" string as an argument. The method will return an array
where theelements are the resulting substrings when we cut at the \"separators\":

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let sentence = "follow the yellow brick road";
let words = sentence.split(" ");
console.log(words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence); // 'follow the yellow brick road'
```

Note that the original string is *not mutated*, rather a new array is
returned.A common pattern is to split a sentence string on a space (\' \'), but
you cansplit on any separator as you see fit:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let sentence = "follow the yellow brick road";
console.log(sentence.split(" ")); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]
console.log(sentence.split("o")); // [ 'f', 'll', 'w the yell', 'w brick r', 'ad' ]
```

A pattern you may find useful is that when you split on a separator
string, itis guaranteed that that separator will not be in the resulting array,effectively removing it. See the example of `sentence.split('the')`
above. Thismay come in handy, so keep it in mind!

Array\#join {#arrayjoin .mume-header}
-----------

The
[Array\#join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
method is called on an array and accepts a"separator\" string as an argument. The method will return a string
whereelements of the array are concatenated together with the \"separator\"
betweeneach element:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let words = ["run", "around", "the", "block"];
let sentence = words.join(" ");
console.log(sentence); // 'run around the block'
console.log(words); // [ 'run', 'around', 'the', 'block' ]

console.log(words.join("_")); // 'run_around_the_block'
console.log(words.join("HI")); // 'runHIaroundHItheHIblock'
```

`Array#join` does not mutate the original array, instead it will return
a newstring.

A clever combination {#a-clever-combination .mume-header}
--------------------

It\'s pretty evident that `String#split` and `Array#join` are
\"opposite\" methods.That is:

-   we use split to turn a string into a array
-   we use join to turn an array into a string

By combining these two methods we can accomplish some cool behavior:

``` {.language-javascript data-role="codeBlock" data-info="javascript"}
let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'
```

Whoa! We were able to replace every substring \"I\" with the substring
\"we\". Weknow that the line `str.split('I').join('we')` evaluates from left to
right.This means that the `split` will cut the string wherever there is an
\'I\',leaving a gap where the \'I\'s were. Then, the `join` will fill those
gaps with\'we\'s.

Remember {#what-youve-learned-11 .mume-header}
--------

-   we can use `String#split` and `Array#join` to convert between
    strings and    arrays
-   both methods do not mutate their input

------------------------------------------------------------------------

------------------------------------------------------------------------

Determining Types {#determining-types .mume-header}
=================

Sometimes you want to know the type of value store in a variable so that
you cansafely do things with it. If your function expects an array in its
parameter butgets a number, you can\'t call the `map` method on that!

In this article you will learn how to figure out if a value in a
variable is

-   A string
-   A number
-   A function
-   An array

The typeof operator {#the-typeof-operator .mume-header}
-------------------

Not all operators in JavaScript require two arguments like the `+`
operator foraddition, the `=` for assignment, and the `%` operator for modulo
division.Those are all called *binary* operators because they take two (bi-)
operands,or things that are operated on.

JavaScript kindly gives you the operator `typeof` which acts on a single
value.Operators that take only one operand are called *unary* operators
because \"uonly give them one value!\" (That\'s a joke. \"uni-\" or \"una-\" is
one.)

Here are some examples of what you\'d expect to see with the `typeof`
operator.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let s = 'This is a string';
console.log(typeof s);    // 'string'

let n = 6.28;
console.log(typeof n);    // 'number'

let sum = function (a, b) {
  return a + b;
}
console.log(typeof sum);  // 'function'
```

Note that the value returned from the `typeof` operator is a String data
type.So, if you want to check if a value is a number, you could do this.

``` {.language-javascript data-role="codeBlock" data-info="js"}
if (typeof n === 'number') {
  // It is a number. Do some maths!
} else {
  console.log('I really wanted a number. :-(');
}
```

How to tell if a value is an array {#how-to-tell-if-a-value-is-an-array .mume-header}
----------------------------------

Unfortunately, due to a *really old bug* in the way that JavaScript
works, a bugthat no one can fix because people wrote code that relies on the bug
fordecades, you cannot use the `typeof` operator to figure out if something
is anarray.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let a = [1, 2, 3];
console.log(typeof a);  // 'object'
```

Gee, JavaScript. That\'s not helpful. Thanks.

Luckily, it only took 12 years for JavaScript to include a way to test
if avalue is an array. To do so, you use the `Array.isArray` method like
this.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let a = [1, 2, 3];
Array.isArray(a);  // true

let n = 6.28;
Array.isArray(n);  // false

let f = function () {}
Array.isArray(f);  // false
```

Practical use in \"real\" code {#practical-use-in-real-code .mume-header}
------------------------------

Oddly enough, you won\'t see a lot of code in real-world applications
testing ifa value is one type or another. A lot of JavaScript functions just
*assume* thatthey will get arguments of the right kind because the parameter names
imply whatkind of value to pass in. For example, the following function has a
parameternamed `sentence`.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function reverseTheSentence(sentence) {
  // ... code here ...
}
```

Most developers will know that the function probably wants `sentence` to
be astring value. They just won\'t pass in an array or number or \... well,
anythingother than a string. Because that\'s just not polite. They\'d expect any
otherkind of value to cause the `reverseTheSentence` to malfunction. Only
when youknow that people that don\'t respect your code will use it should you
add in somekind of check like this.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function reverseTheSentence(sentence) {
  if (typeof sentence !== 'string') {
    // Tell the developer they are using
    // the function wrong.
  }
  // ... code here ...
}
```

Remember {#what-youve-seen .mume-header}
--------

This article has shown you two ways to determine if a value is a kind of
type:

-   the `typeof` operator to use to test if a value is a number, a
    string, or    a function; and,
-   the `Array.isArray` method to check if a value is an array.

Use them as much (or as little) as you need!

------------------------------------------------------------------------

The Null Type (And Undefined) {#the-null-type-and-undefined .mume-header}
=============================

You\'ve met numbers and string, Booleans and arrays. There\'s another
type oftenused in JavaScript: the Null type. And, it\'s a special type.

In this article, you will learn about the Null type, its value, and how
to workwith it in JavaScript.

A type with only one value {#a-type-with-only-one-value .mume-header}
--------------------------

You have seen that the String type can have an \"infinite\" number of
values(within the limits of your computer memory). For example, the String
typerepresents *any* of the following values.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// Examples of values with the String type
'hello, world'
"this is a string"
`Where is my pudding?`
''
'A really long string.........................................................'
```

The Number type also has this aspect. Any number that you can reasonable
expressin JavaScript has the Number type.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// Examples of values with the Number type
-100
99
6.28
Infinity
```

You also know about the Boolean type. It can have only two values.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// The only two values of Boolean type
true
false
```

There are not *more* Boolean values. You can\'t dream up more. There are
onlytwo, those two.

The Null type has one and exactly one value.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// The only value that has the Null type
null
```

It\'s just that word: `null`. No quotation marks. No other fancy things.
Just`null`.

The meaning of null {#the-meaning-of-null .mume-header}
-------------------

This is a harder subject to tackle because it\'s a *philosophical*
subject. Manypeople ask, \"What does the value of `null` mean in a program?\" There
are acouple of answers that programmers give to this. None of them are wrong.
None ofthem are right. They just are. In the presence of `null`, the code you
writedetermines which of the following meanings `null` has.

-   The value `null` means *the absence of a value* or *no value*
-   The value `null` means *an unknown value*
-   The value `null` is a nuisance and I hate it and wish it were never
    invented

During your software programming career, you will likely have all three
of thoseopinions, sometimes at the same time. Let\'s take a look at some
examples to tryto figure this out.

The absence of a value {#the-absence-of-a-value .mume-header}
----------------------

Let\'s say you wrote a function that splits a string into words,
reverses them,and puts them back together in reverse order. You can do that with the
methods

-   `String#split`
    [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/split);
-   `Array#reverse`
    [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse);
    and,
-   `Array#join`
    [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

That function could look like this.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function reverseTheSentence(sentence) {
  let parts = sentence.split(' ');
  parts.reverse();
  return parts.join(' ');
}
```

That\'s great! It works! But, what happens if someone doesn\'t care
about whatyour function and just decides to pass in something that\'s not a
string? Itwould make sense that reversing something that is not a string should
lead to novalue, the absence of a value, because the input to the function
doesn\'t makesense. In that case, you can just return a `null` because there is *no
value*that the function can return that would make sense.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function reverseTheSentence(sentence) {
  if (typeof sentence !== 'string') {
    return null;
  }
  let parts = sentence.split(' ');
  parts.reverse();
  return parts.join(' ');
}
```

An unknown value {#an-unknown-value .mume-header}
----------------

There are a lot of programmers that will argue that `null` cannot be an
unknownvalue. \"The value is known!\" they\'ll exclaim. \"The value is
\'null\'! It\'s known!It\'s \'null\'! Stop saying it\'s not known!\"

There are programmers that vehemently disagree with that.

![shrug](file:///C:\NEW_BOOTCAMP\Lambda\CIRRICULUMN\prep\images\woman-shrugging_1f937-200d-2640-fe0f.png)

Checking if a value is null {#checking-if-a-value-is-null .mume-header}
---------------------------

If you had hoped that you could use the `typeof` operator to check if a
value is`null`, then you\'re out of luck.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// Useless code.
console.log(typeof null);  // 'object'
```

Silly JavaScript. Instead of using the `typeof` operator, you can just
*compare*the value to `null` because there is only one value of the Null data
type andit\'s always `null`. Take a look at the following code and figure out
what youthink it will produce.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let a = [];
let x = null;

if (a === null) {
  console.log('a is null');
} else if (x === null) {
  console.log('x is null');
}
```

Oh, and there\'s that undefined value, too {#oh-and-theres-that-undefined-value-too .mume-header}
------------------------------------------

Just like the `null` value that is the only value of the Null data type,
thereis `undefined` which is the only value of the Undefined data type.

If you\'re asking yourself, \"Wait, if \'null\' is no value or the
absence of avalue, then what the heck does \'undefined\' mean?\", well you\'re not
the only one.

Have a look at this code.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let value;

value = 6.28;
console.log(value);
```

You probably will not be surprised to see that it will print out
\"6.28\" becausethat\'s the value of `value`. But, what if you did this? What does that
new`console.log` print?

``` {.language-javascript data-role="codeBlock" data-info="js"}
let value;
console.log(value); // <- what does this print?

value = 6.28;
console.log(value);
```

If you guessed that it prints \"undefined\", you\'re right! When you
declare avariable, it\'s very first value is `undefined`. Most of the time,
though, you\'lljust immediately set it to a value.

``` {.language-javascript data-role="codeBlock" data-info="js"}
let value = 6.28;
```

So, an uninitialized variable has the value `undefined` which is the
only valueof the Undefined data type. To test for it, you can use the `typeof`
operator*or* the strict equality operator. Using the strict equality operator is
themore common way to do that, now.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// Test if a value is undefined
if (value === undefined) {
  // do a thing
}

// You can also do it this way, but
// it is considered passé.
if (typeof value === 'undefined') {
  // do a thing
}
```

What happens when\... {#what-happens-when .mume-header}
---------------------

Interestingly enough, all functions actually *do* return values. Have a
look atthis function. What value does it return? (Not a trick question.)

``` {.language-javascript data-role="codeBlock" data-info="js"}
function returnsTrue() {
  return true;
}
```

Yes, it returns the value `true`. But, what about this function?

``` {.language-javascript data-role="codeBlock" data-info="js"}
function returnsWhat() {
  return;
}
```

There\'s a `return` statement there but it does not specify a value. If
there isnot value specified, what do you think this function returns? Try
putting thefunction definition above and the code below into a code runner and
seeing whathappens.

``` {.language-javascript data-role="codeBlock" data-info="js"}
console.log(returnsWhat());
```

One you figure that out, try the same experiment but with this function.
Whatdo you think it returns. It doesn\'t even have a `return` statement in
it!

``` {.language-javascript data-role="codeBlock" data-info="js"}
function whatIsThis() {
}
```

Remember {#what-youve-learned-12 .mume-header}
--------

There is a special value in JavaScript represented as `null` which means
\"novalue\" or \"unknown value\". It is the only value of the Null data
type. You cancheck that a value is `null` by using the strict equality operator
`x === null`.

The value `undefined` is used by JavaScript for variables that have not
beenassigned a value. Also, functions that do not return an explicit value
returnthe value `undefined`. You can test if a value is `undefined` by using
thestrict equality operator `x === undefined`.

------------------------------------------------------------------------

Catch Me If You Can {#catch-me-if-you-can .mume-header}
===================

Sometimes bad things happen to good programs. Some person may enter some
badlyformatted information. Another computer may try to attack your program
bysending it wonky data. A network could go down. A file can become
corrupt. Whenthis happens, your running software will have some errors. This article
is abouthow you can recover from those errors with \"structured exception
handling\".

In this article you\'ll learn the answers to:

-   What *is* structured exception handling?
-   How can I do that in JavaScript?
-   How can I make my own errors?
-   What else can I do with it?
-   Shouldn\'t I just always do this?

Structured exception handling {#structured-exception-handling .mume-header}
-----------------------------

Oddly enough, there are very few error-handling mechanisms in use,
today, in allprogramming languages. There are really only three ways that
programminglanguage provide structured exception handling.

-   **Error or error code reporting** as found in languages like C and
    Go
-   **Continuable exceptions** as found in Common Lisp
-   **Stack unwinding** which is found in almost every modern
    programming    language including JavaScript and Python

In the stack-unwinding paradigm, which is the one you\'ll use in
JavaScript, whenan error occurs, the JavaScript interpreter (the thing running your
JavaScriptcode) looks for some kind of handler for that error. It has a very
specific wayof searching for those handlers. The way JavaScript searches for the
handlers isvery similar to the way it happens in Python, C++, Java, C\#, and a lot
of otherlanguages. Once you learn it, here, you will be able to handle errors
whenwriting code in all of those languages.

Try and catch {#try-and-catch .mume-header}
-------------

Say you have some code that may have an error. For example:

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
```

If someone calls the above function with the code `sumArray(null)`, then
theywill get the error because the `for` loop is trying to get the `length`
propertyof the `array` parameter which is `null`.

``` {.language- data-role="codeBlock" data-info=""}
TypeError: Cannot read property 'length' of null
```

To prevent this from ruining your program, you wrap code that may have
an errorin a **try block**. Now, you\'ve seen other blocks already: `if` blocks,
`for`blocks, `function` blocks. Basically, if there are curly braces around
somelines of code, that\'s a **code block** of some kind. A *try block* is
just somecurly braces with the `try` keyword.

``` {.language-javascript data-role="codeBlock" data-info="js"}
// THIS IS AN INCOMPLETE BLOCK OF CODE
function sumArray(array) {
  let sum = 0;

  // The try block wraps the for loop. If some
  // error occurs, the try block will give you
  // a chance to react to it so that the program
  // doesn't terminate.
  try {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
  } // needs something more here

  return sum;
}
```

The `try` block tells JavaScript that it needs to watch the code inside
thecurly braces for an error. Now, you have to tell JavaScript what to do
whenthere *is* an error. You do that in the `catch` block that should
immediatelyfollow the `try` block. The `catch` block accepts a single parameter
that(usually) contains an object that describes the error that occurred. In
thecase of the `sumArray` method, if an error occurs, you could return the
value`undefined` rather than letting an error terminate your program. You
could alsolog the error to the \"error\" output.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sumArray(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
  } catch (e) {
    console.log(e);
    return null;
  }

  return sum;
}

sumArray(null);
```

Just to state it, again: the *catch block* runs when an error occurs in
the *tryblock*. If no error occurs in the *try block*, the *catch block* **does
notrun**.

That `(e)` after the word `catch` is a variable that contains any error
that wasthrown and caught by this `try-catch` block. It doesn\'t have to be
named `e`.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sumArray(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
  } catch (pancakes) {
    console.log(pancakes);
    return null;
  }

  return sum;
}

sumArray(null);
```

Here is the same code but, instead of a variable named \"e\", there is a
variablenamed \"pancakes\". Now, if an error is thrown, the variable
\"pancakes\" willcontain it. By long-standing tradition, the variables used with the
catch blockare normally \"e\", \"err\", or \"error\".

``` {.language-javascript data-role="codeBlock" data-info="js"}
// CODE SNIPPET, WILL NOT RUN
} catch (e) {
```

``` {.language-javascript data-role="codeBlock" data-info="js"}
// CODE SNIPPET, WILL NOT RUN
} catch (err) {
```

``` {.language-javascript data-role="codeBlock" data-info="js"}
// CODE SNIPPET, WILL NOT RUN
} catch (error) {
```

Now, when you run the code `sumArray(null)`, you should see something
like thefollowing, if you run it in the online code editor.

``` {.language- data-role="codeBlock" data-info=""}
TypeError: Cannot read property 'length' of null
  at sumArray (/tmp/file.js:5:31)
  at Object.<anonymous> (/tmp/file.js:16:1)
  at Module._compile (internal/modules/cjs/loader.js:1158:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
  at Module.load (internal/modules/cjs/loader.js:1002:32)
  at Function.Module._load (internal/modules/cjs/loader.js:901:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
  at internal/main/run_main_module.js:18:47
```

In that code sample, after the `sumArray(null)` call, the lines that
begins`TypeError` is the error that occurred. The next 10 lines are what is
known as a**stack trace**. You\'ll end up seeing these a lot, most likely, as you
continueyour career in software programming. This is the first line in
understandingerrors in your code. The *stack trace* shows on the first line where the
erroroccurred: `sumArray (/tmp/file.js:5:31)` means that it occurred in the`sumArray` method on line 5 of the content, at character 31. If you open
up oneof the coding problems, paste that code block in, and run it, you\'ll
see similaroutput in the output block.

The last line `undefined` is the return value of the `sumArray(null)`
invocationthat now happens when an error occurs.

That is how the so-called **try-catch block** works.

How can I make my own errors? {#how-can-i-make-my-own-errors .mume-header}
-----------------------------

To create your own errors with structured exception handling, you first
need tocreate an error object with the message that describes the error. Then,
you needto \"throw\" the error. That code would look like either of these two
lines, theonly difference being the `new` keyword. They both work exactly the
same.

``` {.language-javascript data-role="codeBlock" data-info="js"}
throw Error('this happened because I wanted it to');
throw new Error('this happened because I wanted it to');
```

What else is there? {#what-else-is-there .mume-header}
-------------------

Turns out that you can have one more block on the *try-catch block*. It
is the**finally block**. The *finally block* runs whether or not an error
occurs. It*always* runs.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sumArray(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    console.log('you will always see this.');
  }

  return sum;
}
```

How do I best use this? {#how-do-i-best-use-this .mume-header}
-----------------------

At this point, you may be asking yourself, \"Self, since errors can
occureverywhere, shouldn\'t I just wrap *all* of my code in these *try-catch
blocks*?\"

No. No, you shouldn\'t.

Every **try-catch block** introduces another slow-down in your code. If
you\'rewriting code that you want to run as fast as possible, then you write as
few*try-catch blocks* as possible. Also, it makes the code pretty cluttered
withall of the indentation and curly braces. When at all possible, you
should write**defensive code** which checks for bad values before errors get thrown
in yourcode. Rather than using a *try-catch block* in the `sumArray` function,
youcould defend against bad values of the `array` parameter like so.

``` {.language-javascript data-role="codeBlock" data-info="js"}
function sumArray(array) {
  if (array === null) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
```

Review {#review-5 .mume-header}
------

The *try-catch-finally block* is a mechanism to handle errors in your
code. Youshould *not* wrap all of your code in these blocks because it can
seriouslydegrade the performance of your application. Instead, only wrap those
portionsof the code that you want to guard against throwing exceptions.

A better choice, in JavaScript and all programming languages, is to bedefensive about your programming and choose to check that the value that
youhave has the functionality that you desire by adding code like

``` {.language-javascript data-role="codeBlock" data-info="js"}
if (value !== undefined) {}
if (value !== null) {}
```

-   [Prep-Work](#prep-work)
    -   [deployment](#deploymenthttps60637489113cfe1345c7fcf9-jolly-shannon-bbcd09netlifyapp)
-   [Expression Learning Objectives](#expression-learning-objectives)
-   [Intro to Functions Learning
    Objectives](#intro-to-functions-learning-objectives)
-   [Hello World](#hello-world)
    -   [Getting visual feedback in your
        programs](#getting-visual-feedback-in-your-programs)
        -   [Syntax](#syntax)
    -   [Code comments](#code-comments)
    -   [Remember](#what-youve-learned)
-   [The Number Type](#the-number-type)
    -   [All the numbers](#all-the-numbers)
    -   [The basic arithmetic
        operators](#the-basic-arithmetic-operators)
        -   [The modulo operation](#the-modulo-operation)
    -   [Remember](#what-youve-learned-1)
-   [The String Type](#the-string-type)
    -   [Writing a valid string](#writing-a-valid-string)
    -   [Calculating length](#calculating-length)
    -   [Indexing a string](#indexing-a-string)
        -   [The classic \"off by one\"
            error](#the-classic-off-by-one-error)
        -   [Using indexOf](#using-indexof)
    -   [Concatenation](#concatenation)
    -   [Remember](#what-youve-learned-2)
-   [The Boolean Type](#the-boolean-type)
    -   [Logical Operators](#logical-operators)
        -   [Logical NOT](#logical-not)
        -   [Logical AND](#logical-and)
        -   [Logical OR](#logical-or)
        -   [Logical order of operations](#logical-order-of-operations)
    -   [De Morgan\'s Law](#de-morgans-law)
    -   [Remember](#what-youve-learned-3)
-   [Comparison Operators](#comparison-operators)
    -   [The relative comparators](#the-relative-comparators)
    -   [=== vs ==](#vs)
    -   [Remember](#what-youve-learned-4)
-   [Basic Variables](#basic-variables)
    -   [Initializing a variable](#initializing-a-variable)
        -   [Declaring a variable](#declaring-a-variable)
        -   [Assigning a variable](#assigning-a-variable)
    -   [Manipulating variables](#manipulating-variables)
        -   [Assignment Shorthand](#assignment-shorthand)
    -   [NaN](#nan)
    -   [Remember](#what-youve-learned-5)
-   [Introduction to Functions](#introduction-to-functions)
    -   [Writing Functions](#writing-functions)
        -   [Function Declaration](#function-declaration)
    -   [Invoking or \"calling\" a
        function](#invoking-or-calling-a-function)
        -   [Order of code](#order-of-code)
        -   [An average example](#an-average-example)
    -   [Returning a value](#returning-a-value)
    -   [The importance of naming](#the-importance-of-naming)
    -   [Review](#review)
-   [Parameters and Arguments](#parameters-and-arguments)
    -   [The difference between Parameters and
        Arguments](#the-difference-between-parameters-and-arguments)
        -   [Extra arguments](#extra-arguments)
        -   [Not enough arguments](#not-enough-arguments)
    -   [Review](#review-1)
-   [Control Flow and Array Learning
    Objectives](#control-flow-and-array-learning-objectives)
-   [Control Flow - Conditional
    Statements](#control-flow-conditional-statements)
    -   [A Quick Word on Syntax](#a-quick-word-on-syntax)
    -   [Writing Conditional
        Statements](#writing-conditional-statements)
    -   [Review](#review-2)
-   [Mutually Exclusive Conditions](#mutually-exclusive-conditions)
    -   [When to use if statements](#when-to-use-if-statements)
    -   [Review](#review-3)
-   [Control Flow - Looping](#control-flow-looping)
    -   [Looping](#looping)
        -   [While Loops](#while-loops)
        -   [Important Loop Knowledge](#important-loop-knowledge)
        -   [For Loops](#for-loops)
    -   [Translating From One Loop to
        Another](#translating-from-one-loop-to-another)
    -   [Review](#review-4)
-   [The Array Type](#the-array-type)
    -   [Using arrays](#using-arrays)
    -   [Indexing arrays](#indexing-arrays)
        -   [Calculating the length of an
            array](#calculating-the-length-of-an-array)
        -   [Properly indexing an array](#properly-indexing-an-array)
        -   [The classic \"off by one\"
            error](#the-classic-off-by-one-error-1)
    -   [Working with arrays](#working-with-arrays)
        -   [Containing data in arrays](#containing-data-in-arrays)
        -   [Using indexOf with arrays](#using-indexof-with-arrays)
    -   [Concatenation with arrays](#concatenation-with-arrays)
    -   [Remember](#what-youve-learned-6)
-   [Intermediate Functions Learning
    Objectives](#intermediate-functions-learning-objectives)
-   [Function Expressions](#function-expressions)
    -   [Functions as first-class
        objects](#functions-as-first-class-objects)
        -   [A peek under the hood](#a-peek-under-the-hood)
    -   [Remember](#what-youve-learned-7)
-   [Two-Dimensional Arrays (2D
    Arrays)](#two-dimensional-arrays-2d-arrays)
    -   [Multidimensional Arrays](#multidimensional-arrays)
    -   [Iterating through 2D Arrays](#iterating-through-2d-arrays)
    -   [When is a 2D array practical?](#when-is-a-2d-array-practical)
    -   [Remember](#what-youve-learned-8)
-   [Mutability in JavaScript](#mutability-in-javascript)
    -   [What is mutability?](#what-is-mutability)
    -   [Mutable or immutable, that is the
        question](#mutable-or-immutable-that-is-the-question)
    -   [The mutability misconception](#the-mutability-misconception)
    -   [Remember](#what-youve-learned-9)
-   [Array Splice](#array-splice)
    -   [Notation](#notation)
    -   [What can Array\#splice do?](#what-can-arraysplice-do)
        -   [Using splice to remove](#using-splice-to-remove)
        -   [Using splice to insert](#using-splice-to-insert)
        -   [Using splice like a pro](#using-splice-like-a-pro)
    -   [Remember](#what-youve-learned-10)
-   [String\#split and Array\#join](#stringsplit-and-arrayjoin)
    -   [String\#split](#stringsplit)
    -   [Array\#join](#arrayjoin)
    -   [A clever combination](#a-clever-combination)
    -   [Remember](#what-youve-learned-11)
-   [Determining Types](#determining-types)
    -   [The typeof operator](#the-typeof-operator)
    -   [How to tell if a value is an
        array](#how-to-tell-if-a-value-is-an-array)
    -   [Practical use in \"real\" code](#practical-use-in-real-code)
    -   [Remember](#what-youve-seen)
-   [The Null Type (And Undefined)](#the-null-type-and-undefined)
    -   [A type with only one value](#a-type-with-only-one-value)
    -   [The meaning of null](#the-meaning-of-null)
    -   [The absence of a value](#the-absence-of-a-value)
    -   [An unknown value](#an-unknown-value)
    -   [Checking if a value is null](#checking-if-a-value-is-null)
    -   [Oh, and there\'s that undefined value,
        too](#oh-and-theres-that-undefined-value-too)
    -   [What happens when\...](#what-happens-when)
    -   [Remember](#what-youve-learned-12)
-   [Catch Me If You Can](#catch-me-if-you-can)
    -   [Structured exception handling](#structured-exception-handling)
    -   [Try and catch](#try-and-catch)
    -   [How can I make my own errors?](#how-can-i-make-my-own-errors)
    -   [What else is there?](#what-else-is-there)
    -   [How do I best use this?](#how-do-i-best-use-this)
    -   [Review](#review-5)

[≡]{#sidebar-toc-btn}

