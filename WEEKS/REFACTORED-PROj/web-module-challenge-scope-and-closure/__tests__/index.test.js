import functions from "../index";

const inning = function () {
  return Math.floor(Math.random() * Math.floor(3));
};

describe("fooFunction", () => {
  it("foo returns foo", () => {
    expect(functions.foo()).toBe("bar");
  });
});

describe("inning", () => {
  it("inning returns a random number", () => {
    expect(functions.inning()).toBeLessThanOrEqual(2);
  });
});

describe("finalScore", () => {
  it("finalScore returns an object", () => {
    expect(functions.finalScore(inning, 9)).toEqual(
      expect.objectContaining({
        Home: expect.any(Number),
        Away: expect.any(Number),
      })
    );
  });
});

describe("getInningScore", () => {
  it("getInningScore returns an object", () => {
    expect(functions.getInningScore(inning)).toEqual(
      expect.objectContaining({
        Home: expect.any(Number),
        Away: expect.any(Number),
      })
    );
  });
});
