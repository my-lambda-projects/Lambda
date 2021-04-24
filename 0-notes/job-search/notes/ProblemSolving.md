# Problem Solving

## Polya's Problem Solving Technique

- Understand
- Plan
- Execute
- Reflect

### Understand

- What are inputs code receives?
- What is the range of input?
- How big can input be (how much data)?
- What are outputs your code produces?
- What is range of output?
- How big can output be?  How much data?
- How performant must code be?
- What's missing from task description?
- Are there third-party stakeholders we should consult?
- What assumptions are you making?
- Does anyone else on team need to validate these assumptions?

#### Most important thing is to ask questions

- Be as specific as possible.
- Be clear and concise.
- Use unambiguous language.
- Include only necessary details.

#### Tips For Solving A Larger Problem

- identify smaller components that make up larger problem
- digest and comprehend problem by rewriting in your own words how you would describe it to someone else
- diagram how data flows through problem
- think about each stage of journey of data and what will happen as it travels through program
- what inputs would break your program
- where is description of problem incomplete

#### Step 1 is complete when

- Explanation is thorough enough that they can skip to planning stages.

### Plan

What steps will I take to solve the problem
Transform description into complete actionable plan to solve it
If you find shortcomings, drop back to step one to reinforce
When interviewing, it's very important to do this step aloud
Write pseudocode during this step

#### Some Questions To Ask & Answer In This Step

- Do you know the answer to a similar problem with similar inputs & outputs?
- What does this problem remind you of?
- Can you bring that knowledge to bear here?
- Does the plan meet the performance requirements?
- What's the time & space complexity?
- How big can my input data be?
- Can sorting input data ahead of time lead to any improvements in time complexity?
- Does recursion help?
- Is problem made up of identical subproblems?
- Can you state problem with itself in its own definition?
- Does your plan cover edge cases?

#### What Are Some Tips On Successfully Planning

- Solve problem like human
- break steps into small enough pieces for computer to understand
- approach problem from many angles
- get brute-force solution ASAP even if it's not performant enough
- come up with as many attack plans as you can
- try to solve a simpler version of the problem
- if input is a 2D array, can you solve it for a 1D array?
- solution to simpler may lead to insights on more complex problem
- list nouns and verbs in problem description
  - map each one to algorithm, process, data structure, object, method, etc.
- perfect can be the enemy of the good
- premature optimization is the root of all evil

#### Step 2 is complete when

- you have enough pseudocode detailed enough to convert to real code
- you should be convinced it represents a legit working solution

### Execute

Take your plan and convert it to actual working code.
The better you do with steps 1 and 2, the easier this is.
Drop back steps as necessary.

#### Questions To Ask In Step 3

- Does your implementation handle all inputs?
- What language is best to solve this problem technically?  
- What language is best to solve this problem for the company?
- What is best way to split code into functional modules?
- Are any modules reusable for later projects?
- Does this functionality exist?
- Built-in libraries, third-party libraries, compatible licenses with our needs?

#### Actions

- start source code control repo
- convert pseudocode & outlines into real code
- DRY = remove redundant code as you write it
- document code as you write it
  - header blocks & comments where necessary
- follow style guide for company
  - if none available, follow codebase
  - if no existing base or style, choose best you can find
- write unit & end-to-end tests as required

#### Step 3 is complete when program

- Works on good data
- doesn't fail on bad data or edge cases
- passes all tests

### Reflect

#### Questions To Ask In Step 4

- Is this implementation as good as i can make it?
- Does your solution work in all cases, main & edge?
- Is your solution performant enough?
- Is code documented?
- In retrospect, what would you do differently?
  - What will you do differently?
  - What went right and wrong?

#### Actions

- document or implement any changes to be made
- document or remove redundant code
- remove unused code
- document future shortcomings in medium/long term
- ID & document algorithms with better time complexity
- ID & document or remove redundant computation
- document embarrassing code to fix
  - why not right way
  - what to do to make it right

#### Step 4 is complete when

- there is nothing else to reflect on
