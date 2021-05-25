// This is the last part of video. Working with breakpoints
// inside complex functions
function complexity(values) {
  let total = 0;

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    // debugger;
    if (Array.isArray(value)) {
      value = complexity(value);
    }

    total += value;
  }

  return total;
}

function runComplexFn() {
  const nums = [
    [100, 200, 300],
    [10, 20, [30, 50, [50, -50]]],
    [10, 20, -60],
    [40, 20, -30],
  ];

  const total = complexity(nums);
  console.log(total);
  return total;
}

// This is the last part of video. Working with breakpoints
// in the DOM.
function test() {
  $("#test ul").append(`
      <li>
        Use Chrome to add a breakpoint on subtree modifications
        to the parent &lt;ul&gt; 
        <span>
          Then when this element is appended the browser
          will pause execution
        </span>
      </li>`);
}
