const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

function map(f) {
  return async function*(values) {
    for await (const x of values) {
      yield f(x);
    }
  };
}

function filter(f) {
  return async function*(values) {
    for await (const x of values) {
      if (f(x)) yield x;
    }
  };
}

const double = x => x * 2;
const isEven = x => x % 2 === 0;

const doubleEvens = compose(
  filter(isEven),
  map(double)
);

async function* source() {
  let n = 1;
  while (true) {
    //eslint-disable-next-line
    yield await new Promise(resolve => setTimeout(() => resolve(n++), 100));
  }
}

async function go() {
  const iter = doubleEvens(source());
  const limit = 5;
  let counter = 0;
  while (counter < limit) {
    const { value } = await iter.next();
    console.log(value);
    counter++;
  }
}

go();