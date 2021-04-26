'use-strict';
/* eslint no-console: 0 */
let state;
let x = 1;
while (x < 100) {
  state = 'green';
  while (state === 'green') {
    console.log(state);
    state = 'yellow';
    x++;
  }
  while (state === 'yellow') {
    console.log(state);
    state = 'red';
    x++;
  }
  while (state === 'red') {
    console.log(state);
    state = 'green';
    x++;
  }
}
