
# Object-Oriented Analysis and Design

## Phases of Object-Oriented Software Development, OOSD

- analysis
- design
  - system design
  - object design
- implementation and testing

## Object-Oriented Principles

**major elements**:  abstraction, encapsulation, modularity, hierarchy<br>
**minor elements**:  typing, concurrency, persistence


- **abstraction**:  focus on essential features of an element/object in OOP, ignoring extraneous/accidental properties
- **encapsulation**:  process of binding both attributes and methods together within a class; internal details within a class; class has methods that provide UIs by which the class-provided services may be used
- **modularity**:  process of decomposing a problem into a set of modules so as to reduce overall problem complexity; intrinsically linked with encapsulation; visualized as a way of mapping encapsulated abstractions into real physical modules having high cohesion within modules and their inter-module interaction or coupling is low
- **hierarchy**:  ranking or ordering of abstraction; system can be made up of interrelated subsystems; uses divide-and-conquer principle; allows code reusability
  - two OOA hierarchies
    - "is-a", a rose is a flower
    - "part-of", a petal is part of a flower
- **type**:  characterization of a set of elements; in OOP, class visualized as a type having properties distinct from any other types
- **typing**:  enforcement of notion that an object is instance of single class or type; enforces that objects of different types may not be interchanged generally, only in restrictive/ed manner
  - two types of typing:
    - **strong**:  operation on object checked at compile time
    - **weak**:  messages may be sent to any class; operation checked only at execution time
- **concurrency**:  allows performing multiple tasks or processes simultaneously; single process exists in system = single thread of control; most systems have multiple threads; multiple CPU systems inherently permit concurrent threads of control; systems running on single CPU use algorithms to give equitable CPU time to threads to enable concurrency
- **active object**:  independent threads of control executing concurrently with threads of other objects; sync with one another as well as purely sequential objects
- **persistence**:  property by which object continues to exist even after its creator ceases to exist (files, databases)

## object-oriented analysis, OOA

procedure of identifying software engineering requirements & developing software specs in terms of a software system's object model, comprised of interacting objects

difference between OOA and other analysis forms is OOA is centered, organized around objects; modeled after real-world objects the system interacts with

in traditional analysis methodologies, functions & data are considered separately

### primary tasks in OOA

- identifying objects
- organizing objects by creating an object model diagram
- defining object internals or object attributes
- defining object behaviors or object actions
- describing how objects interact

**common models**:  use cases & object models

### techniques for OOA

- **object modeling**:  developes static structure of software system in terms of objects; IDs objects, classes into which objects can be grouped, relationships between objects

  - Process:
    - ID objects & group into classes
    - ID relationships among classes
    - create user object model diagram
    - define user object attributes
    - define operations that should be performed on classes
    - review glossary

- **dynamic modeling**:  way of describing how an individual object responds to events, either internal or external events

  - Process:
    - ID states of each object
    - ID events and analyze applicability of actions
    - construct dynamic model diagram, comprising of state transition diagrams
    - express each state in terms of object attributes
    - validate the state-transition diagrams drawn

- **functional modeling**:  shows processes performed within an object and how data changes as it moves between methods; specifies meaning of operations of object modeling and actions of dynamic modeling; corresponds to data flow diagram of traditional structured analysis

  - Process:
    - ID all inputs and outputs
    - construct data flow diagrams showing functional dependencies
    - state purpose of each function
    - ID constraints
    - specify optimization criteria

### structured analysis/structured design (SASD)

traditional approach of software development based upon waterfall model

- Phases:
  - feasibility study
  - requirement analysis and specification
  - system design
  - implementation
  - post-implementation review

### OOA v. SASD Advantages & Disadvantages

| Type | Advantages | Disadvantages |
|:----:|:----------:|:-------------:|
|  OOD | focuses on data, not procedures | functionality restricted within objects |
| | encapsulation & data hiding help develop systems that can't be tampered with | can't ID which objects would generate optimal system design |
| | allows effective management of software complexity by virtue of modularity | OOMs don't easily show comms between objects in system |
| | can be upgraded from small to large easier than SASD | |
| SASD | top-down approach easier to comprehend than OOA | one phase completed before next phase |
| | based upon functionality; gives better understanding of system and generates more complete systems | high initial cost |
| | specs written in simple English; can be more easily analyzed by non-techies | doesn't support code reusability | 

## object-oriented design, OOD

involves implementation of the conceptual model produced during OOA

- concepts mapped onto implementing classes
- constraints identified
- interfaces designed
- results in model for solution domain

### implementation details include

- restructuring class data
- implementation of methods, internal data structures, and algorithms
- implementation of control
- implementation of associations

## object-oriented programming, OOP

programming paradigm based upon objects aiming to incorporate modularity and reusability advantages

**objects**:  instances of classes; used to interact with one another to design apps

### important features of OOP

- bottom-up approach in program design
- programs organized around objects; grouped in classes
- focus on data with methods to operate upon object's data
- interaction between objects through functions
- reusability of design through new class creation by adding features to existing classes

## objects

**object model**:  visualizes elements in app in terms of objects
**object**:  real-world element in object-oriented environment that may have a physical or conceptual existence

- has ID that distinguishes it from other objects
- has state that determines characteristics & values
- behavior that represents externally visible activities performed by an object in terms of changes in state
- can be modeled according to app needs

## classes

**class**:  collection of objects having same characteristic properties that exhibit common behavior; gives blueprint or description of objects created from it

**instantiation**:  object creation as member of a class

**class constituents**:  set of object attributes instantiated from class (class data); set of operations portraying behavior of class objects (functions/methods)

## encapsulation

**encapsulation**:  process of binding both attributes and methods together within class; internal class details can be hidden from outside; permits class elements to be accessed from outside only through class interface

**data hiding**:  process of insulting an object's data

**message passing**:  how objects in a system communicate with each other

features of message passing:

- between two objects = unidirectional
- enables all interactions between objects
- involves invoking class methods
- objects in different processes can be involved

## inheritance

**inheritance**:  mechanism permitting new classes to be created out of existing classes by extending and refining capabilities

- existing classes = base/parent/super
- new classes = derived/child/sub
  - can inherit attributes and methods off parent(s) provided parent allows it
  - may add its own attributes and methods
  - may modify parent's methods
  - defines an "is-a" relationship

### types

- **single**:  sub derives from single parent
- **multiple**:  sub derives from 2+ parents
- **multi-level**:  sub derives from parent which has parent, etc.
- **hierarchical**:  class has number of subclasses, each of which may have subsequence subclasses, for a number of levels to form a tree structure
- **hybrid**:  combo of multiple and multilevel to form a lattice

## polymorphism

- ability to take multiple forms
- using operations in different ways
- allows objects with different internal structures to have a common external interface
- particularly effective while implementing interface

## generalization & specialization

generalization and specialization represent hierarchy of relationships between classes where subclasses inherit from parents

**generalization**:  common characteristics of classes combined to form a class in a higher level of hierarchy; example subclasses combined to form a generalized parent; represents an "is-a-kind-of" relationship

**specialization**:  reverse of generalization; distinguishing features of groups of objects are used to form specialized classes from existing classes; subclasses are specialized versions of parent

## association

**link**:  connection through which object collaborates with other objects; one object may invoke methods or navigate through another object; depicts relationship between two objects; instance of association

**association**:  group of links having common structure and behavior; depicts relationship between objects of 1+ classes

### degree of an association

- denotes number of classes involved in connection
- **unary**:  connects objects of same class
- **binary**:  connects objects of 2 classes
- **ternary**:  connects objects of 3+ classes

### cardinality ratios of associations

number of instances participating in association

- one to one
- one to many
- many to many

## aggregation

- composition
- relationship among classes by which a class can be made up of any combo of objects of other classes
- allows objects to be placed directly within body of other classes
- "part-of" or "has-a" relationship with ability to navigate from whole to parts
- object composed of 1+ other objects
- may denote physical or conceptual containment

## object-oriented modeling, OOM

visualizes things in an app by using models organized around objects

### benefits of object model

- helps in faster software development
- easy to maintain
- supports relatively hassle-free upgrades
- enables reuse of objects, designs, and functions
- reduces development risks, particularly in integration of complex systems

## dynamic modeling

represents time-dependent aspects of system; concerned with temporal changes in states of objects in a system

- Main Concepts:
  - state (situation @ particular condition during object lifetime)
  - transition (change in state)
  - event (occurrence triggering transitions)
  - action (computation occurring due to some event)
  - concurrency of transitions

**state machine**:  models object behavior as it passes through number of states in its lifetime and actions due to events; graphically represented through state transition diagram

**state**:  abstraction given by values of attributes that object has at a particular time period; situation occurring for finite period off time in lifetime of an object in which it fulfills certain conditions, performs certain activities, or waits for certain events to occur; represented by rounded rectangles in state transition diagrams

- Parts:
  - name (optional)
  - entry/exit actions
  - internal transitions (changes within state that don't cause state change)
  - substates

**initial state**:  default starting state of object, filled black circle

**final state**:  indicates completion of execution of state machine, outlined filled black circle

Both initial and final states are pseudo states and may not have the parts of regular state except name.

**transition**:  denotes a change in object state; gives relationship between first & new state; graphically represented by solid directed arc from source state to destination state

- 5 Parts:
  - source state (state affected by transition)
  - event trigger (occurrence due to which an object in source state undergoes transition if guard condition is satisfied)
  - guard condition (if true causes transition on receiving event ttrigger)
  - action (uninterruptable and atomic computation ocurring on source object due to some event)
  - target state (destination state after transition completion)

**events**:  some occurrences that can trigger state transition of an object or group of objects; have a location in time and space, but do not have time period associated with it; generally associated with some actions; ones that trigger transitions are written alongside arc of transition in state diagrams

**external events**:  events that pass from user of system to objects within system

**internal events**:  events that pass from one object to another within system

**deferred events**:  those not immediately handled by object in current state, but lined up in a queue to be handled by the object in another state later

**event class**:  group of events with common structure & behavior; may also be organized in hierarchical structure; may have attributes, time implicit

**activity**:  operation upon states of an object that requires some time period; ongoing executions within system that can be interrupted; shown in activity diagrams portraying flow from one activity to another

**action**:  atomic operation executing as a result of certain events; may operate upon object on which an event has been triggered or on other objects visible to this object; set of actions

**atomic**:  uninterruptable

**entry action**:  action executed upon entering a state

**exit action**:  action executed while leaving a state

**scenario**:  description of specified sequence of actions; depicts behavior of objects undergoing specific action series

**primary scenarios**:  essential sequences

**secondary scenarios**:  alternative sequences

- two primary diagrams used for dynamic modeling:
  1. **interaction diagrams**:  describe dynamic behavior among different objects; comprises set of objects, their relationships, and message that objects send and receive; models behavior of group of interrelated objects
    - two types:
      - **sequence**:  temporal ordering of messages in tabular manner
      - **collaboration**:  structural organization of objects that send and receive messages through vertices and arcs
  2. **state transition diagrams**:  describe dynamic behavior of single object; illustrates sequences off states an object goes through in its lifetime, transition of states, events, and conditions causing transition and responses to events

- two types of concurrency:
  - **system**:  concurrency modeled in system level; overall system modeled as aggregation of state machines where each state machine executes concurrently with others
  - **concurrency within object**:  object can issue concurrent events; object may have states composed of substates & concurrent events may occur in each of substates

**simple state**:  no substructure

**composite state**:  state with simpler states nested inside it; can have sequential or concurrent substates

- substate used generally to reduce complexity of state machine

**sequential substates**:  execution control passes from one substate to another in a sequential manner; at most one initial state and one final state

**concurrent substates**:  execute in parallel; each state has concurrently executing state machines within it; each state machine has its own initial and final states; if one finishes first, it waits at final state; when all reach final, all join back to single flow

**functional modeling**:  gives process perspective of OOA model and overview of what system is supposed to do; defines function of internal processes in system with aid of data flow diagrams (DFDs); depicts functional derivation of data values without indicating how they are derived when computed or why they need to be computed; represented through hierarchy of data flow diagrams

**data flow diagram**:  graphical representation of a system that shows inputs to system, processing upon inputs, system outputs, and internal data stores; illustrate series of transformations or computations performed on objects or system and external controls and objects that affect transformation; four main parts:  processes, data flows, actors, data stores; other parts:  constraints, control flows

### Data Flow Diagram Features

**processes**:  computational activities that transform data values; whole system can be visualized as high-level process; may be further divided into smaller components; lowest-level process may be simple function; representation in DFD is ellipse with name inside & contains fixed number of input & output data values

**data flows**:  represents flow of data between two processes; denotes value of data item at some point of the computations & value not changed by data flow; representation in DFD is directed arc or arrow & labeled with name of data item it carries; may be forked (aggregate to forked components)

**actors**:  active objects interacting with system by either producing data and inputting them to system or consuming data produced by system; sources and sinks (?) of data; representation in DFD is rectangle & connected to I/Os and lie on DFD boundary

**data stores**:  passive objects that act as a data repository; cannot perform operations; used to store data and retrieve stored data; represent a data structure, disk file, or table in database; representation in DFD is two parallel lines containing data store name; each data store connected to at least one process; input arrows contain info to modify data store contents; output arrows contain info retrieved from data store & labeled when part of info is to be retrieved; two-way arrow implies both retrieval and update

**constraint**:  specify conditions or restrictions that need to be satisfied over time; allow adding new rules or modifying existing ones; can appear in all three models of OOA; in object modeling, constraints define relationship between objects; in dynamic modeling, constraints define relationship between states and events of different objects; in functional modeling, constraints define restrictions on transformations and computations; representation in DFD is string within braces

**control flows**:  process may be associated within a certain Boolean value and is evaluated only if value is true, though is not a direct input to process; these Boolean values = control flows; representation in DFD is dotted arc from process producing Boolean value to process controlled by them

- to develop DFD model of system, DFD's hierarchy constructed:
  - **top level**:  single process and actors interacting with it; at each successive lower level, further details gradually induced (?)
  - process decomposed into subprocesses
  - data flows among subprocesses ID'd
  - control flows determined
  - data stores defined
  - while decomposing a process, data flow into or out of process should match data flow at next level of DFD

### Advantages & Disadvantages

| Advantages | Disadvantages |
|:----------:|:-------------:|
| DFDs depict system boundaries & are helpful in portraying relationship between external objects & processes within system | take a long time to create |
| help users have knowledge about system | don't provide info about time-dependent behavior like when transformations are done |
| serves as blueprint to develop the system | don't shed any light on computation frequency or reasons for computations |
| provides detailed info about system processes | complex prep that needs considerable expertise |
| used as part of system docs | difficult for non-tech person to understand |
|  | prep method subjective & leaves ample scope to be imprecise |

- relationship between object, dynamic, and functional models:
  - are complimentary to each other for a complete OOA
  - object modeling develops static structure of software system in terms of objects
    - slows "doers" of system
  - dynamic modeling develops temporal behavior of objects in response to certain events
    - shows sequences of operations performed on objects
  - functional model gives overview of what system should do

- 4 main parts of functional model in terms of object model:  process, actors, data stores, data flows

- dynamic model states when operations are performed while functional model states how they are performed and which arguments are needed
  - as actors are active objects, dynamic model has to specify when it acts
  - data stores are passive objects and only respond to updates and queries; therefore dynamic model need not specify when they act

  - dynamic model shows status of objects and operations performed on ocurrences of events and subsequent changes in states
    - state of object as result of changes is shown in the object model

## UML

**UML**:  Unified Modeling Language

**system**:  set off elements organized to achieve certain objectives from a system; systems often divided into subsystems and described by set of models

**model**:  simplified complete and consistent abstraction of system, created for better understanding of system

**view**:  projection of a system's model from a specific perspective

- conceptual model of UML encompasses three major elements:  basic building blocks, rules, common mechanisms
- three building blocks of UML:  things, relationships, diagrams
- four kinds of things in UML:
  - **structural**:  nouns of UML models representing static elements that may be either physical or conceptual class, interface, collaboration, use case, active class, components, and nodes
  - **behavioral**:  verbs of UML models representing dynamic behavior over time and space
    - two types:  interaction, state machine
  - **grouping**:  comprise organizational parts of UML model; only one kind of it, package
  - **annotational**:  explanations in UML models representing comments applied to describe elements

**relationship**:  connection between things

- four types:
  - **dependency**:  semantic relationship between two things such that a change in one thing brings change in the other
    - **former**:  independent thing; **latter**:  dependent thing
  - **association**:  structural relationship representing group of links having common structure and behavior
  - **generalization**:  generalization/specialization relationship in which subclasses inherit structure and behavior from super classes (parents)
  - **realization**:  semantic relationship between two+ classifiers such that one classifier lays down a contract that other classifiers ensure to abide by

**diagram**:  graphical representation of system

- 9 types of UML diagrams:
  - class
  - object
  - use case
  - sequence
  - collaboration
  - state chart
  - activity
  - component
  - deployment

**rules**:  UML has number so models are semantically self-consistent and related to other models in system harmoniously

- UML has semantic rules for:  names, scope, visibility, integrity, execution
- UML has four common mechanisms:  specifications, adornments, common divisions, extensibility mechanisms

**specifications**:  behind each graphical notation, there is a textual statement denoting syntax and semantics; provide semantic backplane that contains all parts of system and relationship among different paths

**adornments**:  each UML element has a unique graphical notation; notations to represent important aspects of element like name, scope, visibility, etc.

- OO systems divided in two common ways:
  - division of classes and objects
  - division of interface and implementation

### extensibility mechanisms

- possible to extend UML capabilities in controlled manner to suit system requirements
- **stereotypes**:  extends UML vocabulary through which new building blocks can be created out of existing ones
- **tagged values**:  extends properties of UML building blocks
- **constraints**:  extends semantics of UML building blocks

- class represented by rectangle with three sections
  - top section contains class name
  - middle section containing class attributes
  - bottom section representing class operations

- visibility of attributes and operations can be represented in following ways:
  - **public**:  visible from anywhere in system (+)
  - **private**:  visible only within class (-)
  - **protected**:  visible from within class and children, but not outside (#)

- abstract classes are in italics

- object represented as rectangle with two sections:
  - **top section**:  object name with class/package name
    - object-name -- class-name
    - object-name -- class-name :: package-name
    - class-name = anonymous objects
  - **bottom section**:  represents values of attributes; attribute-name = value

**component**:  physical and replaceable part of system that confirms to and provides realization of a set of interfaces; represents physical packaging of elements like classes and interfaces; represented by rectangle with tabs

**interface**:  collection of methods of class or component; specifies set off services that may be provided by class or component; drawn as circle together with its name; almost always attached to class or component that realizes it

**package**:  organized group of elements; may contain structural things like classes, components, other packages; represented by tabbed ffolder; generally only drawn with name, but may have additional package details

|  notations for different types of relationships  |
|:------------------------------------------------:|
| dependency  ------------------------dashedarrow  |
| association       (continuous line)              |
| direct association  --------> (continuous line)  |
| inheritance  (continuous line w/ outline arrow)  |
| realization  --------------------------------->  |
| aggregation (continuous line w/ outline diamond) |

- usually elements in a relationship play specific roles in relationship
  - role name signifies behavior of an element participating in certain context

- UML structural diagrams categorized as follows:
  - class diagram
  - object diagram
  - component diagram
  - deployment diagram

**class diagram**:  models static view of system; comprised of classes, interfaces, and collaborations of system and relationships between them

**object diagram**:  models a group of objects and their links at a point in time; shows instances off things in a class diagram; static part of an interaction diagram

**component diagram**:  show organization and dependencies among group of components; comprised of components, interfaces, relationships, packages, and subsystems (optional)

- used for:
  - constructing systems through forward and reverse engineering
  - modeling config management of source code files while developing system using an OOP language
  - representing schemas in modeling databases
  - modeling behaviors of dynamic systems

**deployment diagram**:  puts emphasis on config of runtime processing nodes and their components that live on them; commonly comprised off nodes and dependencies on associations between nodes;

- used to:
  - model fully distributed systems
  - represent topologies of client/server systems
  - model devices in embedded systems that typically comprise of software-intensive collection of hardware

- UML behavioral diagrams categorized as follows:
  - use case diagrams
  - interaction diagrams
  - state-chart diagrams
  - activity diagrams

**use case**:  describes sequence of actions a system performs yielding visible results; shows interaction of things outside system with system itself; may be applied to whole system as well as part of system

**actor**:  represents roles the use-case users play; may be person, device, or another system

- use case diagrams present outside view of manner the elements in a system behave and how they can be used in the context
  - comprised of use cases, actors, relationships like dependency, generalization, and association
  - used to model system requirements from outside point of view and to model system context by enclosing all system activities within a rectangle and focusing on actors outside system by interacting with it

**interaction diagram**:  depict interactions of objects and their relationships; include messages passed between them; two types:  sequence and collaboration; used for modeling, control flow by time ordering using sequence diagrams, control flow of organization using collaboration diagrams

**sequence diagram**:  interaction diagrams illustrating ordering of messages according to time; in form of 2D charts:  objects initiating interaction placed on X axis, messages sent & received by objects placed along Y axis, order of increasing time top to bottom

**collaboration diagram**:  interaction diagrams illustrating structure of objects that send and receive messages; objects participating in interaction shown using vertices; links connecting objects used to send and receive messages; message shown as labeled arrow

**state-chart diagram**:  shows state machine depicting control flow off object from one state to another; state machine portrays sequences of states which an object undergoes due to events and their responses to events; comprised of states (simple of composite), transitions between states, events causing transitions, actions due to events; used for modeling objects which are reactive in nature

**activity diagram**:  depicts flow of activities which are ongoing non-atomic operations in a state machine; activities result in actions which are atomic operations; comprised of objects, transitions, and activity and action states; used for modeling workflows as viewed by actors interacting with system and modeling details of operations or computations using flow charts

3 levels of testing:

**unit testing**:  individual classes tested; responsibility of app engineer who implements structure
**subsystem testing**:  testing a particular module on subsystem; responsibility of subsystem lead; involves testing associations within subsystem as well as interaction of subsystem with outside; can be used as regression tests for each newly released version
**system testing**:  testing whole system; responsibility of QA team; often used as regression tests when assembling new releases

OO testing techniques

**gray box**:  different types off test cases that can be designed for testing OO programs

- types:
  - **state model-based testing**:  encompasses state coverage, state transition coverage, and state transition path coverage
  - **use case-based testing**:  each scenario in use case
  - **class diagram-based testing**:  each class, derived class, associations, and aggregations tested
  - **sequence diagram-based testing**:  methods in messages in sequence diagrams tested

- techniques for subsystem testing:
  - **thread-based testing**:  all classes needed to realize a single use case in subsystem integrated and tested
  - **use-based testing**:  interfaces and services of modules at each level of hierarchy are tested
    - starts from individual classes to small modules comprising of classes, gradually to larger modules, and finally all major subsystems

- categories of system testing:
  - **alpha testing**:       carried out by testing team
  - **beta testing**:        carried out by select group of customers
  - **acceptance testing**:  carried out by customer before accepting deliverables

- **software QA**:  methodology that determines extent to which a software product is fit for use
  - activities included for determining software quality:
    - auditing
    - development of standards and guidelines
    - production of reports
    - review of quality system

- Quality Factors:
  - **correctness**:  whether software requirements met
  - **useability**:  whether software can be used by different user categories
  - **portability**:  whether software can operate in different platforms with different hardware devices
  - **maintainability**:  ease at which errors can be connected and modules updated
  - **reusability**:  whether modules and classes can be reused for developing other software products

- Three categories of OO metrics:
  - project
  - product
  - process

- **project metrics**:  enable PM to assess status and performance of an ongoing project
  - number of scenario scripts
  - number of key classes
  - number of support classes
  - number of subsystems

- **product metrics**:  measure characteristics of software developed
  - methods per class
  - inheritance structure
  - coupling and cohesion
  - response for class

- **process metrics**:  measure how a process is performing; collected over all projects over long periods off time; used as indicators for long-term software process improvements
  - examples:
    - number of kilo lines of code (KLOC)
    - defect removal efficiency
    - average number of failures detected during testing
    - number of latent defects per KLOC

- after analysis phase, conceptual model developed further into OO model using OOD
- in OOD, tech-independent concepts in analysis model are mapped onto implementing classes, constraints are ID'd, interfaces designed, resulting in model for solution design
- detailed description constructed specifying how system to be built on concrete techs

- stages of OOD:
  - definition of system context
  - designing system architecture
  - ID of objects in system
  - construction of design models
  - specification of object interface

**system context**:  has static and dynamic parts; static context designed usingg simple block diagram off whole system which is expanded into a subsystem hierarchy; subsystem model represented by UML packages; dynamic context describes how system interacts with its environment, which is modeled using use-case diagrams

**system architecture**:  designed on basis of context of the system in accordance with principles of architecture design as well as domain knowledge; typically system partitioned into layers; each layer decomposed to form subsystems

**decomposition**:  dividing large complex system into hierarchy of smaller components with lesser complexitties on principles of divide-and-conquer

**subsystem**:  each major component of a system

- OO decomposition identifies individual autonomous objects in a system and communication among these objects
  - advantages:
    - individual components of lesser complexity, more understandable and manageable
    - enables workforce division having specialized skills
    - allows subsystems to be replaced or modiffied without affecting other subsystems

- concurrency allows two+ objects to receive events at same time and two+ activities executed simultaneously
  - ID'd and represented in dynamic model
  - to enable each concurrent element assigned thread of control
    - if concurrency at object level, two concurrent objects are assigned two different threads of control
    - if two operations of single object are concurrent in nature, that object split among different threads
  - associated with problems of data integrity, deadlock, and starvation
  - clear strategy made whenever concurrency required
  - requires to be ID'd at design stage itself, can't be left for implementation stage

- **design patterns**:  commonly accepted solutions adopted for some categories of problems
  - documented set of building blocks used in certain types of app development patterns

- **event**:  specification of significant occurrence that has a location in time and space
  - 4 types:
    - **signal**:  named object thrown by one object and caught by another object
    - **call**:  sync event representing dispatch of an operation
    - **time**:  event representing passage of time
    - **change**:  event representing change in state

- handling boundary conditions:
  - system design phase needs to address intialization and termination of a system as a whole as well as each subsystem
    - different documented aspects:
      - start-up of system
      - termination of system
      - initial config of system and reconffig of system when necessary
      - foreseeing failures or undesired termination of system

- boundary conditions modeled using **boundary use cases**

object design

- after subsystem hierarchy developed, system objects ID'd and details designed
- emphasis shifts from app domain concepts toward computer concepts
- objects ID'd during analysis are etched out for implementation with an aim to minimize execution time, memory consumption, and overall cost

- includes following phases:
  - objectID
  - object representation
    - construction of design models
  - classification of operations
  - algo design
  - relationships design
  - control implementation for external interactions
  - package classes and associations into modules

- object ID = 1st step of object design
  - grouped into classes and refined so they are suitable for actual implementation
  - functions of this stage:
    - identifying and refining classes in each subsystem or package
    - defining links and associations between classes
    - designing hierarchical associations between classes, i.e. generalization/specialization and inheritances
    - designing aggregations

object representation

- once classes are ID'd, need to be represented usingg object modeling techniques
- this stage essentially involves constructing UML diagrams
- two types of design models that need to be produced:
  - **static**:  static structure of system using class and object diagram
  - **dynamic**:  dynamic system structure and show interaction between classes using interaction and state-chart diagrams

operation classification

- operation to be performed on objects defined by combining three models developed in OOA phase, namely object, dynamic, and functional models
- operation specifies what is to be done, not how
- following tasks performed regarding operations
  - state transition diagram of each object in system developed
  - operations defined for events received by objects
  - cases in which one event triggers other events in same or different objects are ID'd
  - suboperations within actions are ID'd
  - main actions expanded to data flow diagrams

algorithm design

- operations in objects are defined using algorithms
- **algorithm**:  stepwise procedure that solves problem laid down in operation; focus on how it's to be done
- metrics for choosing optimal algorithm:  computational complexity, flexibility, understandability

relationships design

- strategory to implement relationships chalked out during OD phase
- main relationships addressed comprised of aggregations, associations, and inheritances
- designer should do the following regarding associations:
  - ID whether association is uni- or bidirectional
  - analyze associations path and update if necessary
  - implement them as distinct objects in many-to-many or as link to other object in one-to-one or one-to-many

- regarding inheritances:
  - adjust classes and their associations
  - ID abstract classes
  - make provisions so behaviors shared when needed

implementation of control

- object designer may incorporate refinements in strategy of state-chart model
- in system design, basic strategy for realizing dynamic model is made
- during OD, this strategy aptly embellished for appropriate implementation
- approaches:
  - represent state as location within program
  - state machine engine
  - control as concurrent tasks

- packaging classes aspects:
  - hiding internal info from outside view
  - elements coherence
  - construction of physical modules
    - classes in module should represent similar things or components in same composite object
    - closely connected classes, same module
    - unconnected/weakly connected, different modules
    - **modules**:  good cohesion, high component cooperation
    - module low coupling with other modules

- design optimization:
  - add redundant associations
  - omit nonusable associations
  - algorithm optimization
    - obtained by:
      - rearrangement of order of computational tasks
      - reversal of execution order of loops from that laid down in function model
      - removal of dead paths from algorithm
  - save derived attributes to avoid recomputation of complex expressions

- design documentation
  - usage areas:
    - software developed by a number of developers
    - iterative software development strategies
    - developing subsequent versions of software project
    - evaluating software
    - finding conditions and areas of testing
    - software maintenance

  - contents:
    - high-level system architecture
    - key abstractions and mechanisms
    - scenarios that illustrate behavior of main aspects
  - features:
    - concise
    - well-structured
    - unambiguous
    - consistent
    - complete
    - traceable to system's requirement specs
    - diagrammatic instead of descriptive

- most programming languages don't provide constructs to implement associations directly
- constraints in classes restrict range and type of values attributes may take
  - valid default value assigned to attribute at object instantiation
  - when value changed at runtime, checked whether valid value
