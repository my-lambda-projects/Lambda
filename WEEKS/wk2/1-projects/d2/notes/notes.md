# terminal:

```

|11:14:11|bryan@LAPTOP-9LGJ3JGS:[Introduction-to-JavaScript] Introduction-to-JavaScript_exitstatus:0__________________________________________________________o>

git init
Reinitialized existing Git repository in /mnt/c/NEW_BOOTCAMP/Lambda/CIRRICULUMN/_Current-Projects-Folder/__week2/_d2/Introduction-to-JavaScript/.git/
|11:14:13|bryan@LAPTOP-9LGJ3JGS:[Introduction-to-JavaScript] Introduction-to-JavaScript_exitstatus:0__________________________________________________________o>

git checkout -b bryan-guner
Switched to a new branch 'bryan-guner'
|11:14:21|bryan@LAPTOP-9LGJ3JGS:[Introduction-to-JavaScript] Introduction-to-JavaScript_exitstatus:0__________________________________________________________o>

npm install

added 685 packages, and audited 686 packages in 1m

1 high severity vulnerability
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
 FAIL  __tests__/index.test.js (19.639 s)
  fooFunction
    ✓ foo returns foo (2 ms)
  multiplyFunction
    ✕ a * b (10 ms)
  dogYearsFunction
    ✕ returns humanYears * 7 (1 ms)
  hungryDogFunction
    ✕ returns weight * x based on age and weight
  gameFunction
    ✕ return win, lose or tie
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie
    ✕ return win, lose or tie (1 ms)
  milesFunction
    ✕ return km * 0.621371
  feetFunction
    ✕ return cm / 30.48 (1 ms)
  annoyingSongFunction
    ✕ a string that counts down based on the number imputted
  gradeFunction
    ✕ expect A
    ✕ expect B (1 ms)
    ✕ expect C
    ✕ expect D (1 ms)
    ✕ expect F

  ● multiplyFunction › a * b

    expect(received).toBe(expected) // Object.is equality

    Expected: 35
    Received: undefined

       9 | describe('multiplyFunction', ()=>{
      10 |     it('a * b', ()=>{
    > 11 |         expect(functions.multiply(5, 7)).toBe(35);
         |                                          ^
      12 |     })
      13 | });
      14 | 

      at Object.<anonymous> (__tests__/index.test.js:11:42)

  ● dogYearsFunction › returns humanYears * 7

    expect(received).toBe(expected) // Object.is equality

    Expected: 35
    Received: undefined

      15 | describe('dogYearsFunction', ()=>{
      16 |     it('returns humanYears * 7', ()=>{
    > 17 |         expect(functions.dogYears(5)).toBe(35);
         |                                       ^
      18 |     })
      19 | });
      20 | 

      at Object.<anonymous> (__tests__/index.test.js:17:39)

  ● hungryDogFunction › returns weight * x based on age and weight

    expect(received).toBe(expected) // Object.is equality

    Expected: 0.44999999999999996
    Received: undefined

      21 | describe('hungryDogFunction', ()=>{
      22 |     it('returns weight * x based on age and weight', ()=>{
    > 23 |         expect(functions.hungryDog(15, 1)).toBe(0.44999999999999996);
         |                                            ^
      24 |     })
      25 | });
      26 | describe('gameFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:23:44)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      26 | describe('gameFunction', ()=>{
      27 |     it('return win, lose or tie', ()=>{
    > 28 |         expect(functions.game('rock', 'scissors')).toBe('you win!');
         |                                                    ^
      29 |     })
      30 |     it('return win, lose or tie', ()=>{
      31 |         expect(functions.game('rock', 'paper')).toBe('you lose!');

      at Object.<anonymous> (__tests__/index.test.js:28:52)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      29 |     })
      30 |     it('return win, lose or tie', ()=>{
    > 31 |         expect(functions.game('rock', 'paper')).toBe('you lose!');
         |                                                 ^
      32 |     })
      33 |     it('return win, lose or tie', ()=>{
      34 |         expect(functions.game('rock', 'rock')).toBe(`it's a tie`);

      at Object.<anonymous> (__tests__/index.test.js:31:49)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "it's a tie"
    Received: undefined

      32 |     })
      33 |     it('return win, lose or tie', ()=>{
    > 34 |         expect(functions.game('rock', 'rock')).toBe(`it's a tie`);
         |                                                ^
      35 |     })
      36 |     it('return win, lose or tie', ()=>{
      37 |         expect(functions.game('paper', 'rock')).toBe(`you win!`);

      at Object.<anonymous> (__tests__/index.test.js:34:48)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      35 |     })
      36 |     it('return win, lose or tie', ()=>{
    > 37 |         expect(functions.game('paper', 'rock')).toBe(`you win!`);
         |                                                 ^
      38 |     })
      39 |     it('return win, lose or tie', ()=>{
      40 |         expect(functions.game('paper', 'scissors')).toBe(`you lose!`);

      at Object.<anonymous> (__tests__/index.test.js:37:49)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      38 |     })
      39 |     it('return win, lose or tie', ()=>{
    > 40 |         expect(functions.game('paper', 'scissors')).toBe(`you lose!`);
         |                                                     ^
      41 |     })
      42 |     it('return win, lose or tie', ()=>{
      43 |         expect(functions.game('paper', 'paper')).toBe(`it's a tie`);

      at Object.<anonymous> (__tests__/index.test.js:40:53)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "it's a tie"
    Received: undefined

      41 |     })
      42 |     it('return win, lose or tie', ()=>{
    > 43 |         expect(functions.game('paper', 'paper')).toBe(`it's a tie`);
         |                                                  ^
      44 |     })
      45 |     it('return win, lose or tie', ()=>{
      46 |         expect(functions.game('scissors', 'paper')).toBe(`you win!`);

      at Object.<anonymous> (__tests__/index.test.js:43:50)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      44 |     })
      45 |     it('return win, lose or tie', ()=>{
    > 46 |         expect(functions.game('scissors', 'paper')).toBe(`you win!`);
         |                                                     ^
      47 |     })
      48 |     it('return win, lose or tie', ()=>{
      49 |         expect(functions.game('scissors', 'rock')).toBe(`you lose!`);

      at Object.<anonymous> (__tests__/index.test.js:46:53)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      47 |     })
      48 |     it('return win, lose or tie', ()=>{
    > 49 |         expect(functions.game('scissors', 'rock')).toBe(`you lose!`);
         |                                                    ^
      50 |     })
      51 | });
      52 | describe('milesFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:49:52)

  ● milesFunction › return km * 0.621371

    expect(received).toBe(expected) // Object.is equality

    Expected: 6.21371
    Received: undefined

      52 | describe('milesFunction', ()=>{
      53 |     it('return km * 0.621371', ()=>{
    > 54 |         expect(functions.miles(10)).toBe(6.21371);
         |                                     ^
      55 |     })
      56 | });
      57 | 

      at Object.<anonymous> (__tests__/index.test.js:54:37)

  ● feetFunction › return cm / 30.48

    expect(received).toBe(expected) // Object.is equality

    Expected: 5.2493438320209975
    Received: undefined

      58 | describe('feetFunction', ()=>{
      59 |     it('return cm / 30.48', ()=>{
    > 60 |         expect(functions.feet(160)).toBe(5.2493438320209975);
         |                                     ^
      61 |     })
      62 | });
      63 | describe('annoyingSongFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:60:37)

  ● annoyingSongFunction › a string that counts down based on the number imputted

    expect(received).toBe(expected) // Object.is equality

    Expected: "5 bottles of soda on the wall, 5 bottles of soda, take one down pass it around 4 bottles of soda on the wall"
    Received: undefined

      63 | describe('annoyingSongFunction', ()=>{
      64 |     it('a string that counts down based on the number imputted', ()=>{
    > 65 |         expect(functions.annoyingSong(5)).toBe(`${5} bottles of soda on the wall, ${5} bottles of soda, take one down pass it around ${5 - 1} bottles of soda on the wall`);
         |                                           ^
      66 |     })
      67 | });
      68 | describe('gradeFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:65:43)

  ● gradeFunction › expect A

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got an A"
    Received: undefined

      68 | describe('gradeFunction', ()=>{
      69 |     it('expect A', ()=>{
    > 70 |         expect(functions.grade(90)).toBe('you got an A');
         |                                     ^
      71 |     })
      72 |     it('expect B', ()=>{
      73 |         expect(functions.grade(80)).toBe('you got a B');

      at Object.<anonymous> (__tests__/index.test.js:70:37)

  ● gradeFunction › expect B

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a B"
    Received: undefined

      71 |     })
      72 |     it('expect B', ()=>{
    > 73 |         expect(functions.grade(80)).toBe('you got a B');
         |                                     ^
      74 |     })
      75 |     it('expect C', ()=>{
      76 |         expect(functions.grade(70)).toBe('you got a C');

      at Object.<anonymous> (__tests__/index.test.js:73:37)

  ● gradeFunction › expect C

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a C"
    Received: undefined

      74 |     })
      75 |     it('expect C', ()=>{
    > 76 |         expect(functions.grade(70)).toBe('you got a C');
         |                                     ^
      77 |     })
      78 |     it('expect D', ()=>{
      79 |         expect(functions.grade(60)).toBe('you got a D');

      at Object.<anonymous> (__tests__/index.test.js:76:37)

  ● gradeFunction › expect D

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a D"
    Received: undefined

      77 |     })
      78 |     it('expect D', ()=>{
    > 79 |         expect(functions.grade(60)).toBe('you got a D');
         |                                     ^
      80 |     })
      81 |     it('expect F', ()=>{
      82 |         expect(functions.grade(59)).toBe('you got an F');

      at Object.<anonymous> (__tests__/index.test.js:79:37)

  ● gradeFunction › expect F

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got an F"
    Received: undefined

      80 |     })
      81 |     it('expect F', ()=>{
    > 82 |         expect(functions.grade(59)).toBe('you got an F');
         |                                     ^
      83 |     })
      84 | });
      85 | 

      at Object.<anonymous> (__tests__/index.test.js:82:37)

Test Suites: 1 failed, 1 total
 FAIL  __tests__/index.test.js (20.642 s)
  fooFunction
    ✓ foo returns foo (2 ms)
  multiplyFunction
    ✕ a * b (9 ms)
  dogYearsFunction
    ✕ returns humanYears * 7 (1 ms)
  hungryDogFunction
    ✕ returns weight * x based on age and weight (1 ms)
  gameFunction
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (2 ms)
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (1 ms)
    ✕ return win, lose or tie (1 ms)
  milesFunction
    ✕ return km * 0.621371 (1 ms)
  feetFunction
    ✕ return cm / 30.48 (1 ms)
  annoyingSongFunction
    ✕ a string that counts down based on the number imputted (1 ms)
  gradeFunction
    ✕ expect A (1 ms)
    ✕ expect B (1 ms)
    ✕ expect C (1 ms)
    ✕ expect D (1 ms)
    ✕ expect F (1 ms)

  ● multiplyFunction › a * b

    expect(received).toBe(expected) // Object.is equality

    Expected: 35
    Received: undefined

       9 | describe('multiplyFunction', ()=>{
      10 |     it('a * b', ()=>{
    > 11 |         expect(functions.multiply(5, 7)).toBe(35);
         |                                          ^
      12 |     })
      13 | });
      14 | 

      at Object.<anonymous> (__tests__/index.test.js:11:42)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● dogYearsFunction › returns humanYears * 7

    expect(received).toBe(expected) // Object.is equality

    Expected: 35
    Received: undefined

      15 | describe('dogYearsFunction', ()=>{
      16 |     it('returns humanYears * 7', ()=>{
    > 17 |         expect(functions.dogYears(5)).toBe(35);
         |                                       ^
      18 |     })
      19 | });
      20 | 

      at Object.<anonymous> (__tests__/index.test.js:17:39)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● hungryDogFunction › returns weight * x based on age and weight

    expect(received).toBe(expected) // Object.is equality

    Expected: 0.44999999999999996
    Received: undefined

      21 | describe('hungryDogFunction', ()=>{
      22 |     it('returns weight * x based on age and weight', ()=>{
    > 23 |         expect(functions.hungryDog(15, 1)).toBe(0.44999999999999996);
         |                                            ^
      24 |     })
      25 | });
      26 | describe('gameFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:23:44)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      26 | describe('gameFunction', ()=>{
      27 |     it('return win, lose or tie', ()=>{
    > 28 |         expect(functions.game('rock', 'scissors')).toBe('you win!');
         |                                                    ^
      29 |     })
      30 |     it('return win, lose or tie', ()=>{
      31 |         expect(functions.game('rock', 'paper')).toBe('you lose!');

      at Object.<anonymous> (__tests__/index.test.js:28:52)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      29 |     })
      30 |     it('return win, lose or tie', ()=>{
    > 31 |         expect(functions.game('rock', 'paper')).toBe('you lose!');
         |                                                 ^
      32 |     })
      33 |     it('return win, lose or tie', ()=>{
      34 |         expect(functions.game('rock', 'rock')).toBe(`it's a tie`);

      at Object.<anonymous> (__tests__/index.test.js:31:49)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "it's a tie"
    Received: undefined

      32 |     })
      33 |     it('return win, lose or tie', ()=>{
    > 34 |         expect(functions.game('rock', 'rock')).toBe(`it's a tie`);
         |                                                ^
      35 |     })
      36 |     it('return win, lose or tie', ()=>{
      37 |         expect(functions.game('paper', 'rock')).toBe(`you win!`);

      at Object.<anonymous> (__tests__/index.test.js:34:48)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      35 |     })
      36 |     it('return win, lose or tie', ()=>{
    > 37 |         expect(functions.game('paper', 'rock')).toBe(`you win!`);
         |                                                 ^
      38 |     })
      39 |     it('return win, lose or tie', ()=>{
      40 |         expect(functions.game('paper', 'scissors')).toBe(`you lose!`);

      at Object.<anonymous> (__tests__/index.test.js:37:49)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      38 |     })
      39 |     it('return win, lose or tie', ()=>{
    > 40 |         expect(functions.game('paper', 'scissors')).toBe(`you lose!`);
         |                                                     ^
      41 |     })
      42 |     it('return win, lose or tie', ()=>{
      43 |         expect(functions.game('paper', 'paper')).toBe(`it's a tie`);

      at Object.<anonymous> (__tests__/index.test.js:40:53)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "it's a tie"
    Received: undefined

      41 |     })
      42 |     it('return win, lose or tie', ()=>{
    > 43 |         expect(functions.game('paper', 'paper')).toBe(`it's a tie`);
         |                                                  ^
      44 |     })
      45 |     it('return win, lose or tie', ()=>{
      46 |         expect(functions.game('scissors', 'paper')).toBe(`you win!`);

      at Object.<anonymous> (__tests__/index.test.js:43:50)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you win!"
    Received: undefined

      44 |     })
      45 |     it('return win, lose or tie', ()=>{
    > 46 |         expect(functions.game('scissors', 'paper')).toBe(`you win!`);
         |                                                     ^
      47 |     })
      48 |     it('return win, lose or tie', ()=>{
      49 |         expect(functions.game('scissors', 'rock')).toBe(`you lose!`);

      at Object.<anonymous> (__tests__/index.test.js:46:53)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gameFunction › return win, lose or tie

    expect(received).toBe(expected) // Object.is equality

    Expected: "you lose!"
    Received: undefined

      47 |     })
      48 |     it('return win, lose or tie', ()=>{
    > 49 |         expect(functions.game('scissors', 'rock')).toBe(`you lose!`);
         |                                                    ^
      50 |     })
      51 | });
      52 | describe('milesFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:49:52)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● milesFunction › return km * 0.621371

    expect(received).toBe(expected) // Object.is equality

    Expected: 6.21371
    Received: undefined

      52 | describe('milesFunction', ()=>{
      53 |     it('return km * 0.621371', ()=>{
    > 54 |         expect(functions.miles(10)).toBe(6.21371);
         |                                     ^
      55 |     })
      56 | });
      57 | 

      at Object.<anonymous> (__tests__/index.test.js:54:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● feetFunction › return cm / 30.48

    expect(received).toBe(expected) // Object.is equality

    Expected: 5.2493438320209975
    Received: undefined

      58 | describe('feetFunction', ()=>{
      59 |     it('return cm / 30.48', ()=>{
    > 60 |         expect(functions.feet(160)).toBe(5.2493438320209975);
         |                                     ^
      61 |     })
      62 | });
      63 | describe('annoyingSongFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:60:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● annoyingSongFunction › a string that counts down based on the number imputted

    expect(received).toBe(expected) // Object.is equality

    Expected: "5 bottles of soda on the wall, 5 bottles of soda, take one down pass it around 4 bottles of soda on the wall"
    Received: undefined

      63 | describe('annoyingSongFunction', ()=>{
      64 |     it('a string that counts down based on the number imputted', ()=>{
    > 65 |         expect(functions.annoyingSong(5)).toBe(`${5} bottles of soda on the wall, ${5} bottles of soda, take one down pass it around ${5 - 1} bottles of soda on the wall`);
         |                                           ^
      66 |     })
      67 | });
      68 | describe('gradeFunction', ()=>{

      at Object.<anonymous> (__tests__/index.test.js:65:43)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gradeFunction › expect A

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got an A"
    Received: undefined

      68 | describe('gradeFunction', ()=>{
      69 |     it('expect A', ()=>{
    > 70 |         expect(functions.grade(90)).toBe('you got an A');
         |                                     ^
      71 |     })
      72 |     it('expect B', ()=>{
      73 |         expect(functions.grade(80)).toBe('you got a B');

      at Object.<anonymous> (__tests__/index.test.js:70:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gradeFunction › expect B

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a B"
    Received: undefined

      71 |     })
      72 |     it('expect B', ()=>{
    > 73 |         expect(functions.grade(80)).toBe('you got a B');
         |                                     ^
      74 |     })
      75 |     it('expect C', ()=>{
      76 |         expect(functions.grade(70)).toBe('you got a C');

      at Object.<anonymous> (__tests__/index.test.js:73:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gradeFunction › expect C

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a C"
    Received: undefined

      74 |     })
      75 |     it('expect C', ()=>{
    > 76 |         expect(functions.grade(70)).toBe('you got a C');
         |                                     ^
      77 |     })
      78 |     it('expect D', ()=>{
      79 |         expect(functions.grade(60)).toBe('you got a D');

      at Object.<anonymous> (__tests__/index.test.js:76:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gradeFunction › expect D

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got a D"
    Received: undefined

      77 |     })
      78 |     it('expect D', ()=>{
    > 79 |         expect(functions.grade(60)).toBe('you got a D');
         |                                     ^
      80 |     })
      81 |     it('expect F', ()=>{
      82 |         expect(functions.grade(59)).toBe('you got an F');

      at Object.<anonymous> (__tests__/index.test.js:79:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

  ● gradeFunction › expect F

    expect(received).toBe(expected) // Object.is equality

    Expected: "you got an F"
    Received: undefined

      80 |     })
      81 |     it('expect F', ()=>{
    > 82 |         expect(functions.grade(59)).toBe('you got an F');
         |                                     ^
      83 |     })
      84 | });
      85 | 

      at Object.<anonymous> (__tests__/index.test.js:82:37)
      at processTicksAndRejections (node:internal/process/task_queues:94:5)

Test Suites: 1 failed, 1 total
Tests:       19 failed, 1 passed, 20 total
Snapshots:   0 total
Time:        26.862 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.

```
