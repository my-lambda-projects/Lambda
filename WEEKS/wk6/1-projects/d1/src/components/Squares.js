/*
SQUARES Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/0aebd463-7c5e-4d0b-ad22-4da8f4b54e92_squares.gif

This component keeps track of a list of "square ids" on the one hand,
and the currently active id on the other. That's two slices of state!
One is used as the source of truth to render the squares, and the other
so that the component knows which square is currently active.

Only one square (or none) can be active at any given point.

Find comments below to help you along.
*/

import React from 'react';

// Use this variable ONLY to initialize a slice of state!
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
  // Use the state hook twice, as we need two slices of state: 'squares' and
  // 'activeSquare'. One holds the _array_ of square ids, and the other keeps track
  // of the currently active square. On page load there's no active square,
  // so the value of 'activeSquare' should be null.

  const getClassName = id => {
    // This is NOT a click handler but a helper, used inside the JSX (see below).
    // It should return a string containing the class name of 'active', if the id passed
    // as the argument matches the active square in state, empty string otherwise.
    // Right-click and "inspect element" on the square to see its effect.
    return ''
  };

  const markActive = id => {
    // This is a helper used inside an _inlined_ click handler (see below).
    // Set the id argument to become the active id in state
    // (unless it already is, in which case we should reset
    // the currently active square id back to initial state).
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          // Nasty bug! We should map over a slice of state, instead of 'listOfSquareIds'.
          // We might say: "it works, though!" But if the list of squares is not state,
          // we could never add squares, change squares or remove squares in the future. Fix!
          listOfSquareIds.map(id =>
            <div
              id={id}
              key={id}
              className={`square${getClassName(id)}`}
              onClick={() => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
