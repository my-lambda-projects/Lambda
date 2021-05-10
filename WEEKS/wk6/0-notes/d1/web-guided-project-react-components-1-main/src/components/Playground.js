/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React from 'react';
import { render } from 'react-dom';
import React, { useState } from 'react';

import Playground from './../components/Playground.js'

export default function Playground ( props ) {
  // return "playground";

  const [ count, setCount ] = useState( 0 );
  const [ spinnerOn, setSpinnerOn ] = useState( true )
  //set count is a function that is a property on the useState object that we can use to control our state. 


  if ( spinnerOn ) {
    return (
      <div className="container">
        <h6>Loading...</h6>
        <button onClick={ () => { setSpinnerOn( false ) } }>Turn spinner off</button>
      </div>
    )
  }

  return (
    