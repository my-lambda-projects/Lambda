class DinoKeeper {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  sayHi() {
    return `${this.name} says "hi"`;
  }
}

export default DinoKeeper;
