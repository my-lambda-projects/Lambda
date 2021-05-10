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
import React, { useState } from 'react'

export default function Playground ( props ) {
  const { cohort } = props;

  const [ count, setCount ] = useState( 0 );
  const [ spinnerOn, setSpinnerOn ] = useState( true )
  const [ choice, setChoice ] = useState( 'scissors' )

  if ( spinnerOn ) {
    return (
      <div className="container">
        <h6>Loading...</h6>
        <button onClick={ () => { setSpinnerOn( false ) } }>Turn spinner off</button>
      </div>
    )
  }

  return (
    <div className="container">
      <button onClick={ () => { setSpinnerOn( !spinnerOn ) } }>Turn spinner on</button>
      <h1>This is cohort { cohort }</h1>
      <div>The count is { count }</div>
      <button onClick={ () => { setCount( count + 1 ) } }>Increase</button>
      <h3>the current choice is { choice }</h3>
      <button onClick={ () => { setChoice( 'scissors' ) } }>pick scissors</button>
      <button onClick={ () => { setChoice( 'rock' ) } }>pick rock</button>
      <button onClick={ () => { setChoice( 'paper' ) } }>pick paper</button>
    </div>
  );
}

import React, { useState } from 'react'

export default function Playground ( props ) {
  const { cohort } = props;

  const [ count, setCount ] = useState( 0 );
  const [ spinnerOn, setSpinnerOn ] = useState( true )
  const [ choice, setChoice ] = useState( 'scissors' )

  if ( spinnerOn ) {
    return (
      <div className="container">
        <h6>Loading...</h6>
        <button onClick={ () => { setSpinnerOn( false ) } }>Turn spinner off</button>
      </div>
    )
  }

  return (
    <div className="container">
      <button onClick={ () => { setSpinnerOn( !spinnerOn ) } }>Turn spinner on</button>
      <h1>This is cohort { cohort }</h1>
      <div>The count is { count }</div>
      <button onClick={ () => { setCount( count + 1 ) } }>Increase</button>
      <h3>the current choice is { choice }</h3>
      <button onClick={ () => { setChoice( 'scissors' ) } }>pick scissors</button>
      <button onClick={ () => { setChoice( 'rock' ) } }>pick rock</button>
      <button onClick={ () => { setChoice( 'paper' ) } }>pick paper</button>
    </div>
  );
}
