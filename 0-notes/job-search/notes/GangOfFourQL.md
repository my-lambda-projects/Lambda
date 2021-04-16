# Gang of Four Pattern Quick List

* [Main GO4 Section](https://github.com/evoingram/endorsement/tree/master/notes/GangOfFour.md)
* [Glossary of Terms](https://github.com/evoingram/endorsement/tree/master/notes/GangOfFourGlossary.md)
* [SOLID Principles](#solid-principles-by-bob-martin)
* [Architectural](#architectural-patterns)
* [Creational](#creational-patterns)
* [Structural](#structural-patterns)
* [Behavioral](#behavioral-patterns)

## SOLID Principles by Bob Martin

* **Single-Responsibility Principle**:  Do one thing & do it well
  * Sometimes, the cost of cleaning up technical debt isn't worth it.
  * A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
* **Open-Closed Principle**:  Derived classes stand in for base classes.
  * Software entities...should be open for extension, but closed for modification.
* **Liskov Substitution Principle**:  Make fine-grained interfaces client specific.
  * Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
* **Interface Segregation Principle**:  Many client-specific interfaces are better than one general-purpose interface.
* **Dependency Inversion Principle**:  Depend on abstractions, not concrete implementations.
  * One should "depend upon abstractions, not concretions.
* **Boy Scout Principle**:  Leave code a little cleaner than you found it; chip away at it.
* **Separation of Concerns**:  Make sure your code does what it's supposed to do and nothing else.

## Architectural Patterns

* general reusable solution to commonly occuring problem in software architecture within a given context
* similar to software design patterns, but with a broader scope

### **layered**:  used to structure programs that can be decomposed into groups of subtasks, each of which is at a particular level of abstraction

* each layer provides services to the next higher layer
* general desktop apps & ecommerce web apps
* most commonly found four layers of general info system
  * presentation layer (UI layer)
  * app layer (service layer)
  * business logic layer (domain layer)
  * data access layer (persistence layer)

### **client-server**:  two parties:  server & multiple clients

* server provides services to multiple clients & listens for requests
* client requests services from server
* used for online apps like email, doc sharing, banking

### **master-slave**:  master distributes work among identical slaves

* computes final result from slaves' return results
* in DB replication, master DB = authoritative and slaves are synced to it
* peripherals connected to bus in computer system

### **pipe-filter**:  can be used to structure systems which produce and process stream of data

* each processing step enclosed within filter component
* data to be processed passed through pipes
* used in compilers; perform lexical analysis, parsing, semantic analysis, code generation
* used in bioinformatics workflows

### **broker**:  used to structure distributed systems with decoupled components

* components interact by remote service invocations
* broker component responsible for comms coordination among components
* servers publish capabilities to broker
* clients request service from broker
* broker redirects clients to service
* used in message broker software; example Apache ActiveMQ/Kafka, RabbitMQ, JBoss Messaging

### **peer-to-peer**:  peers are individual components

* may function as both client and server or both
* can change role dynamically over tiome
* used in file-sharing networks and multimedia protocols (P2P TV & PDTP)

### **event-bus**:  primarily deals with events

* has four major components:  event source, listener, bus, and channel
* sources publish messages to channels on event bus
* listeners subscribe to particular channels
* listeners notified of messages published to previously subscribed channels
* used in Android development & notification services

### **model-view-controller (MVC)**:  model contains core functionality & data

* view displays info to user, can have 2+
* controller handles input from user
* used in www app arch in major programming languages, web frameworks aka Django, rails
* done to separate internal representations of info from ways the info is presented to & accepted by the user
* decouples components & allows efficient code reuse

### **blackboard**:  useful for problems for which no deterministic solution strategies are known

* consists of three main components:
  * blackboard:  structured global memory containing objects ffrom solution space
  * knowledge source:  specialized modules with their own representation
  * control component:  selects, configures, & executes modules
* all comps have access to blackboard
* comps look for data on blackboard and find by pattern matching with knowledge source
* used in speech recognition, vehicle, ID, & tracking, protein structure ID, sonar signals interpretation 

### **interpreter**:  used for designing a component that interprets programs written in dedicated language

* mainly specifies how to evaluate program lines (sentences OR expressions)
* basic idea to have class for each symbol of language
* used in DB query languages like SQL & languages used to describe communication protocols

## Creational Patterns

**creational**:  different ways to create objects

* **Abstract Factory**:  provide interface for creating families of related or dependent objects without specifying their concrete classes
  * creates an instance of several class families
* **Builder**:  separate construction of a complex object from its representation so the same construction process can create different rperesentations
  * separates object construction from its representation
* **Factory Method**:  define an interface for creationg an object, but let subclasses decide which class to instantiate
  * lets a class defer instantiation to subclasses
  * creates an instance of several derived classes
* **Prototype**:  specify the kinds of objects to create using a prototypical instance & create new objects by copying this prototype
  * fully initialized instance to be copied or cloned
* **Singleton**:  ensure a class only has one instance & provide a global point of access to it
  * class in which only single instance can exist

## Structural Patterns

**structural**:  relationships between those objects

* **Adapter**:  convert interface of class to one clients expect
  * lets classes work together that couldn't otherwise due to incompatible interfaces
  * matches interfaces of diffferent classes
* **Bridge**:  decouple an abstraction from its implementation so the two can vary independently
  * separates an object's abstraction from its implementation
* **Composite**:  compose objects into tree structures to represent part-whole hierarchies
  * lets clients treat individual objects & compositions of objects uniformly
  * tree structure of simple & composite objects
* **Decorator**:  attach additional responsibilities to an object dynamically
  * provide a flexible alternative to subclassing for extending functionality
  * add responsibilities to objects dynamically
* **Facade**:  provide a unified interface to a set of interfaces in a subsystem
  * defines a higher-level interface that makes subsystem easier to use
  * single class representing an entire subsystem
* **Flyweight**:  use sharing to support large numbers of fine-grained objects efficiently
  * fine-grained instance used for efficient sharing
* **Proxy**:  provide a surrogate or placeholder for another object to control access to it
  * object representing anotther object

## Behavioral Patterns

**behavioral**:  interaction or communication between those objects

* **Chain of Responsibility**:  avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request
  * chain receiving objects & pass request along chain until object handles it
  * way of passing a request between chain of objects
* **Command**:  encapsulates a request as an object, letting you parameterize clients with different requests, queue or log requests, & support undoable operations
  * encapsulate a command request as an object
* **Interpreter**:  given a language, define a reprsentation for its grammar along with an interpreter that uses the representation to interpret sentences in the language
  * way to include language elements in program
* **Iterator**:  provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation
  * sequentially access elements of a collection
* **Mediator**:  define an object that encapsulates how a set of objects interact
  * promotes loose coupling by keeping objects from referring to each other explicitly
  * lets you vary their interaction independently
  * defines simplified communication between classes
* **Memento**:  without violating encapsulation, capture & externalize an object's internal state so object can be restored to this state later
  * capture & restore object's internal state
* **Observer**:  define a one-to-many dependency between objects so that, when one object changes state, all its dependencies are notified
  * way of notifying change to number of classes
* **State**:  allow an object to alter its behavior
  * when its internal state changes, the object will appear to change its class
  * alter object's behavior when its state changes
* **Strategy**:  define a family of algorithms, encapsulate each, & make interchangeable
  * lets algorithm vary independently from clients using it
  * encapsulates an algorithm inside a class
* **Template Method**:  define the skeleton of an algorithm in an operation, deferring some steps to subclasses
  * lets subclasses redefine certain steps of an algorithm without changing algorithm's structure
  * defer exact steps of an algorithm to a subclass
* **Visitor**:  represent an operation to be performed on elements of an object structure
  * lets you define a new operation without changing classes of elements on which it operates
  * defines a new operation to a class without change

| scope  |    creational    | structural |       behavioral        |
|:------:|:----------------:|:----------:|:-----------------------:|
| class  |  Factory Method  |  Adapter   |       Interpreter       |
|        |                  |            |        Template         |
| object | Abstract Factory |  Adapter   | Chain of Responsibility |
|        |     Builder      |   Bridge   |        Command          |
|        |    Prototype     | Composite  |        Iterator         |
|        |    Singleton     | Decorator  |        Mediator         |
|        |                  |   Facade   |        Memento          |
|        |                  |   Proxy    |        Flyweight        |
|        |                  |            |        Observer         |
|        |                  |            |          State          |
|        |                  |            |        Strategy         |
|        |                  |            |         Visitor         |
