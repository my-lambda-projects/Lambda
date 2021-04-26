# Theory Of Computation

Why do I have to build data structures and what are they for? Data structures are specific examples of mechanical, automated problem solving.

# Abstract computing and the Turing Machine

Computers in 1880 were men and more often women who would work out formulas with pen and paper for an hourly rate. Calculations were needed for phsyics and chemistry research, calculus, other mathematics, and finances. This lead to an academic discipline that involved philosophy about the nature of mathematics and what kinds of knowledge could be formally proven.

Alonzo Church, Alan Turning, Stephen Kleene, Kurt Godel, David Hilbert, and others worked to formalize these ideas into mathematical proofs leading, eventually, to the Turing Machine and the proofs that accompanied it.

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It was stated above that 'a function is effectively calculable if its values can be found by some purely mechanical process'. We may take this statement literally, understanding by a purely mechanical process one which could be carried out by a machine. It is possible to give a mathematical description, in a certain normal form, of the structures of these machines. The development of these ideas leads to the author's definition of a computable function, and to an identification of computability with effective calculability. It is not difficult, though somewhat laborious, to prove that these three definitions [the 3rd is the λ-calculus] are equivalent.
>
>    — Turing (1939) in The Undecidable, p. 160

Something is numerically computable by a human iff it is computable by a Turing machine, and that all forms of iterative deterministic computation are equivalent.

# Lambda School Theory of Computation Links

### Mathematical and Theoretical background

[propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus)

[calculus](https://en.wikipedia.org/wiki/Calculus)

[boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra)

[babbage](https://en.wikipedia.org/wiki/Charles_Babbage)

[principia mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica)

[automata theory](https://en.wikipedia.org/wiki/Automata_theory)

### Grammars, State Machines, and Languages

[Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine)

Suggest regular grammars and context free grammars. Become familiar with the notation of state machines and be able to describe the simple function of any machine with a state machine.

[formal languages](https://en.wikipedia.org/wiki/Formal_language)

[Alex Thue](https://en.wikipedia.org/wiki/Axel_Thue)

[Chomsky Hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy)

[Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) These are of special importance in Computer Science!

[Pushdown automaton](https://en.wikipedia.org/wiki/Pushdown_automaton)

Occupies a space of computational complexity between context free grammars and Turing Machines.

[Context-free grammars](https://en.wikipedia.org/wiki/Context-free_grammar)

Chomsky invented CFGs in the context of natural language. They haven't proven to be extremely useful in that context, but have become the standard for all programming languages.

#### Examples of significant importance

[Regular grammars](https://en.wikipedia.org/w/index.php?title=Context-free_grammar&action=edit&section=12)

[Algebraic expressions](https://en.wikipedia.org/w/index.php?title=Context-free_grammar&action=edit&section=14)

[Backus Naur Form](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form) This is of special importance in Computer Science!

[programming languages](https://en.wikipedia.org/wiki/Programming_language) These are _obviously_ of special importance. :)

[computability](https://en.wikipedia.org/wiki/Computability_theory)

[lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus)

[theory of computation models](https://en.wikipedia.org/wiki/Theory_of_computation)

[Emil Post](https://en.wikipedia.org/wiki/Emil_Leon_Post)

[Halting Problem](https://en.wikipedia.org/wiki/Halting_problem) This is of special importance in Computer Science!

One of the first decision problems and the foundation of Computer Science. Turing Machine was invented in order to provide a solution for this problem - that it is undecidable.

The question is: Can a program be written `f` that will for every other program `g` say whether or not `g` will finish? Turing proves using complicated mathematics, and by inventing a Turing Machine in order to support his proof, that this machine `f` cannot be invented.

The takeaway from this proof and observation is that it is not possible to build a computer program that can solve any problem - some problems are undeciable, that is, unsolveable.

[Church-Turing thesis](https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis)

### Turing Machines

[Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) These are of special importance in Computer Science!

[Visual example of a Turing Machine as formula](https://cs.stackexchange.com/questions/11542/how-to-construct-and-write-down-a-Turing-machine-for-a-given-language)

[Linear Bounded Automata](https://en.wikipedia.org/wiki/Linear_bounded_automaton)

[computational complexity](https://en.wikipedia.org/wiki/Computational_complexity_theory)

[asymptotic complexity](https://en.wikipedia.org/wiki/Asymptotic_computational_complexity)

[algorithms](https://en.wikipedia.org/wiki/Algorithm)

[undecideability](https://en.wikipedia.org/wiki/Undecidable_problem)

[intractability](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability)

[Gödel's Incompleteness Theorem](https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems)

[Artificial Intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence)

# Assignments:

1. Draw a state machine for a stop light
2. Mathematically describe a state machine for a stop light using the rules of Regular Languages
3. Create a new subset of the Javascript language using Backus-Naur Form
4. Write via state machine notation a Turing machine that can identify the string: 'aaabbb'
5. Write a Turing Machine in Javascript  

# Theory-Of-Computation
