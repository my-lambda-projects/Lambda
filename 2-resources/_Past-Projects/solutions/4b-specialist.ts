import DinoKeeper from "./4a-classes-hello-dino";

class Specialist extends DinoKeeper {
  constructor(name: string, public experience: number) {
    super(name);
  }

  safetyQuote() {
    return `Never turn your back to the cage.
    Trust me, I have ${this.experience} years of experience`;
  }
}
export default Specialist;
