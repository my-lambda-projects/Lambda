var i = 0;

// Inside of a while loop
while (i < 20) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(`${i} is odd`);
}

// Using for loops
for (i = 0; i < 20; i++) {
  if (i === 13) {
    console.log("UNLUCKY NUMBER!");
    break;
  }
  console.log(`${i} is an ok number`);
}

console.log("\n -- the end");
