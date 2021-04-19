# System Design

## Points to Consider for System Design

|                            |                     |
|:--------------------------:|:-------------------:|
| requirements               | indexes             |
| API creation               | messaging queue     |
| DB design & table creation | consistent hashing  |
| logic to solve problem     | LRU                 |
| system workflow            | Hadoop              |
| load balancer              | Cassandra           |
| caching                    | microservices       |
| sharding                   |                     |

* What are the dependencies?
* How do you break your project into independent components?
* What are your primary data objects, nouns, classes?
* What does the data flow between them look like?

## [Conference Talk given by Venkat Subramaniam](https://www.youtube.com/watch?v=llGgO74uXMI)

The previous link is a really informative and interesting video about software design principles, and he's a pretty funny guy. It is an old video but it's not coding, so the principles are not really outdated in that sense.

Here's some notes from that talk.

## What's a good design?

- When cost of changing is minimal
- easy to change
- subject to change along the way and see how it stands up to changing.

Sofftware is never written, always rewritten; it has to constantly evolve

## How to create good design

- keep it simple
- first step is let go of ego
  - be unemotional
- important to have people who can challenge each other
- take time to review design and code

- people who are dangerous to work with:
  - those who can't follow instructions
  - those who can only follow instructions

## **KISS**:  Keep It Simple Stupid

## less complexity because it makes code difficult to change

1. Simple keeps you focused.
    - **imperative code** confuses, going all over and trying to figure out where things are
    - **declarative code** tells you what to do, is a lot simpler
2. Simple solves only real problem we know about
3. Simple fails less
4. Simple is easier to understand
    - inherent complexity:  from problem domain; nothing you can do about it; nature of app, domain
    - accidental complexity:  comes from solution used to problem-solve; solution brings in complexities; example concurrency
5. Simple is not necessarily familiar

Good design hides inherent complexity and eliminates accidental complexity.

## **YAGNI**: You Aren't Going To Need It (Yet)

### When should i implement something?

- How much do you know about it?
- Cost of implementing now versus later?

Good design is automatically verifiable (automated testing).  Without automated testing, it is very difficult to postpone stuff.

**cohesion**:  narrow, focused, does one thing well; not taking on more than one responsibility; lowers cost of developing software
**coupling**:  degree of connectivity among things; inheritance is worst form of it; remove if you can

### Knock out before you mock out

Do not keep mocking when you can knock out your dependencies

Can't remove all dependencies, but:

1. Get rid of it
2. Make it loose instead of tight coupling.
3. Use caution

**tight coupling**:  depending on a class
**loose coupling**:  depending on an interface

Good design has high cohesion and low coupling.
Avoid doing work until you can no longer avoid it.

**DRY**:  **Don't Repeat Yourself**.  Don't duplicate code or effort.  Every piece of knowledge in system should have single unambiguous authoritative representation.  DRY reduces cost of development.

### Long methods are bad
- often obsolete comments
- many reasons to change
  - hard to test, read, remember, reuse, debug
- obscured business rules
- leads to duplication
- can't be optimized by anything
- lot of variables
- low cohesion
- mixed levels
- not dev friendly
- high coupling

A function is small enough if you can see the entire function in a window.

**SLAP, Single Level of Abstraction Principle**

Comment why, not what

Compose method pattern:  Code should be composed of steps you want to take in developing that code's logic

**Don't violate the Open-Closed Principle**
  - software, module, component, class, whatever should be open for extension but closed for modification
  - abstraction & polymorphism key to make this happen

2 options to make enhancement:
  1. Change existing code.
  2. Add small new module to code.

Trying to make code extensible:
  - who can make code extensible
    - we need to know software & domain

3 kinds of people we work with:

1. Knows domain well, not software
2. Knows no domain, but software well
3. Knows domain & software well

Keep in mind **Liskov's Substitution Principle**:  Inheritance should be used only for substitutability.

What kind of change should i plan for?
  - don't try to go overboard and make it extensible
  - find a domain expert and ask if should plan for extensibility in this area

Overuse of inheritance

Inheritance demands more from developer than composition or delegation

Services of derived class should require no more and promise no less than corresponding services of base class.

User of base class should be able to use an instance of derived class without knowing difference.

Good: 

- public v. protected in base v. derived
- derived function can't throw away any new checked exception not thrown base unless new exception extends old one being thrown by base class

Use composition or delegation unless you want substitutability

A class should not depend on another class.  Both have to depend on an abstraction.

**Design Patterns**:  elegant solutions to repeating problems; shows you how to structure calssses and how those talk to each other
