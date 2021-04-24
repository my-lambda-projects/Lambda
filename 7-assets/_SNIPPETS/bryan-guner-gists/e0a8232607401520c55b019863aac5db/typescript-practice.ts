// @ts-check

let example0: any = 45;
let example1: boolean | number = 35;
let example2: boolean = true;
let example3: number = 35;
let example4: string = 'Hello World';
let example5: undefined = undefined;
let example6: null = null;
let example7: number;


class Bear {
  constructor(age) {
    this.age: number = age;
  }
}
const bear = new Bear(3)
if (bear instanceof Bear) {
  console.log(bear.age)
}

let notastring: any = 'stringy';
console.log(<string> notastring)
console.log(notastring as string)

const example8: string[] = ['Hello World'];
const example9: (number | boolean)[] = [1, 2, true];
const example10: boolean[][] = [[true, false], [false, true]]

const exampleTuple: [string, number] = ['sweet', 14, 30, 'wow'];

enum Age {
  ali = 30,
  aly = 20,
}

function totalAge(age1: Age, age2: Age) {
  return age1 + age2;
}

enum Names {
  mine = 'Alicia',
  sis = 'Ellie',
}
console.log(Names.mine )
console.log(Names.sis)

const exampleA: object = undefined;
const exampleB: Object = NaN;
const exampleC: {} = {};

function add(val1: number, val2: number): number {
  return val1 + val2;
}

add(1, 2);

class Person {
  constructor(name: string) {
    this.name = name;
  }
}

function sayAnnyeong(person: Person): string {
  return 'Annyeong ${person.name}!'
}

sayAnnyeong(new Person({name: "Bryan"}))

function voidExample(): void {
  add(1,2);
}

function neverExample(): never {
  throw Error;
}

type rabbit = {type: string};

const fluffy: rabbit = {type: 'big'}

interface IPerson {
  firstName: string;
  middleName: string;
  lastName: string;
}

import { Person } from './person.interface.ts'

const exampleD: Person = {firstName: 'Ali', middleName: 'Bryan', lastName: 'Guner'}

class Fairy {
  firstName: string;
  lastName: string;
  age: number;
  
  constructor(data?: any) {
    this.firstName = data.firstName || 'Sugarplum';
    this.lastName = data.lastName;
    this.age = data.age;
  }
  
}

let man: Man | Pig;
let bear: Bear;
let pig: Pig;

let manBearPig: Bear & Man & Pig;
manBearPig.firstName = 'Sung';

type ManBearPig = Bear & Man * Pig;

function sample<T>(arg: T[]): T {
  return arg[0];
}

sample([5]);

class Animal {
  protected type: string;
  
  protected constructed(data?: any) {
    this.type = data.type;
  }
}

class Beary extends Animal {
  public claws: number;
  readonly name: string;
  private tail: boolean;
  
  constructor(data?: any) {
    super(data);
    this.claws = data.claws;
    this.name = data.string;
    this.tail = data.tail; 
  }
  
  public addTwo(num1, num2): number {
    return num1 + num2;
  }
}

const beary = new Beary({claws: 3, name: 'beary', tail: true});


beary.addTwo(1, 2);

npm install -g typescript
tsc index.ts
TSLint
