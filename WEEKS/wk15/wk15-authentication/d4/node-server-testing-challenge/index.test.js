const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    utils.trimProperties(input);
    expect(input).toEqual({ foo: "  foo ", bar: "bar ", baz: " baz" });
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const result = utils.trimPropertiesMutation(input);
    expect(input).toEqual(result);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 900, 10, 12, 13, 15, 20, 155];
    const result = utils.findLargestInteger(input);
    expect(result).toEqual(Math.max(...input));
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    const result = counter.countDown();
    expect(result).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    const result = counter.countDown();
    expect(result).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    let count = counter.countDown();
    expect(count).toBe(0);
    counter.countDown();
    counter.countDown();
    counter.countDown();
    count = counter.countDown();
    expect(count).toBe(0);
  }, 200);
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    let odometer = focus.drive(30);
    expect(odometer).toBe(30);
    odometer = focus.drive(5);
    expect(odometer).toBe(35);
  });
  test("[16] driving the car uses gas", () => {
    let originalGas = focus.tank;
    focus.drive(5);
    expect(originalGas).not.toBe(focus.tank);
  });
  test("[17] refueling allows to keep driving", () => {
    let odometer = focus.drive(800);
    expect(odometer).toBe(600);
    focus.refuel(20);
    odometer = focus.drive(600);
    expect(odometer).toBe(1200);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    const oriTank = focus.tank;
    focus.refuel(3000);
    expect(oriTank).toBe(focus.tank);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    expect(await utils.isEvenNumberAsync(2)).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    expect(await utils.isEvenNumberAsync(1)).toBe(false);
  });
});
