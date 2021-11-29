const nextElement = (n, set) => {
  if (n === 1) {
    console.log(set);
    // TODO: Call an outside function to compute distance on this set
  } else {
    for (let i = 0; i < n - 1; i++) {
      nextElement(n - 1, set);
      if (n % 2 === 0) {
        let x = set[i];
        set[i] = set[n - 1];
        set[n - 1] = x;
      } else {
        let x = set[0];
        set[0] = set[n - 1];
        set[n - 1] = x;
      }
    }
    nextElement(n - 1, set);
  }
};

const countSet = (set) => {
  let n = set.length;

  let array = [];
  set.forEach((each) => {
    array.push(each);
  });
  nextElement(array.length, array);
};

countSet([1, 2, 3]);
countSet(['a', 'b', 'c', 'd']);
countSet(['corn', 'turkey', 'winter', 'algebra', 'window', 'kevin']);
