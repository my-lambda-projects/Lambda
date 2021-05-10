import React from "react";
import { render } from "react-dom";
import Playground from "./components/Playground";
/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/
//Regular javascript function.... capatalized function name and takes an important argument called props.
//This function returns something called JSX that looks like html.

//<Playground />// in react we can create our own components
// React components get data through a single argument called props

//Use className instead of class that we would use as a selector in css

//
// function App ( props ) {
//
//   const { } = props;
//
//   return (
//     <div className='container'>
//       <h1>Welcome to React, Web { props.cohort }</h1>
//       <div>{ props.instructor } welcomes you!</div>
//     </div>
//   )
// }
//
// render( <App cohort='43' instructor="Rhiannon" />, document.querySelector( '#root' ) );
//
// // Render takes the app component or any that we embed in the app component and appends it to the dom at the div with an id of root.
// //now we can do propr.instructor

//
//
// function App ( props ) {
//   // one object called "props"
//   const { cohort, instructor, happy, yggb } = props;
//   // return "hello world";
//   // return 'hello web ${Props.cohort}';
// //   return (
// //     <div className="container">
// //       <h1>Welcome to React, Web { cohort }</h1>
// //       <div>{ instructor } welcomes you!</div>
// //       {happy ? <div>Very happy</div> : <div>It is Monday</div> }
// //     </div>
// //   );
// // }
// // // usually exists once per application
// // // similar to append or appendChild
// // render(
// //   <App cohort="43" instructor="Rhiannon" happy={ false } />,
// //   document.querySelector( "#root" )
// // );
//   return (
//     <div className='container'>
//       <h1>Welcome to React, Web { cohort }</h1>
//       <p>Your instructor is { instructor }</p>
//       <p>This is week { week } of unit 2</p>
//       {happy ? <div>Very Happy</div> : <div>It is Monday</div> }
//     </div>
//   )
// }
// render(
//   <App cohort='43' instructor='Rhiannon' happy={ true } week='2' />,
//   document.querySelector( '#root' )
// )

//
// function App(props) {
//   // one object called props
//   const { chort, intructor, happy, week, birthday } = props;
//   // examples of things you can return in react
//   // return "hello world";
//   // return `hello web ${props.cohort}`;
//   return (
//     <div className='container'>
//       <h1>Welcome to React, Web {cohort}</h1>
//       <div>{instructor} welcomes you!</div>
//       <div>{instructor} birthday is {birthday}</div>
//       {happy ? <div>Very happy</div> : <div>It is Monday</div>}
//     </div>
//   );
// }
// //usually exists once per application
// // very similar to append or appendChild
// render(
//   <App cohort='43' instructor="Rhiannon" happy={true} birthday="January 23" />,
//   document.querySelector('#root')
// );

//----------------------------------------------------------------

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

// function App ( props ) {
//   // one object called props
//   const { cohort, instructor, happy, week, birthday } = props;
//   // examples of things you can return in react
//   // return "hello world";
//   // return `hello web ${props.cohort}`;
//   return (
//     <div className="container">
//       <h1>Welcome to React, Web { cohort }</h1>
//       <div>{ instructor } welcomes you!</div>
//       <div>
//         { instructor } birthday is { birthday }
//       </div>
//       {happy ? <div>Very happy</div> : <div>It is Monday</div> }
//     </div>
//   );
// }
// //usually exists once per application
// // very similar to append or appendChild
// render(
//   <App cohort="43" instructor="Rhiannon" happy={ true } birthday="October 31" />,
//   document.querySelector( "#root" )
// );
//
// // we have many of these
// function App(props) {
//   // one object called "props"
//   const { cohort, instructor, happy, week } = props;
//
//   // return "hello world";
//   // return `hello web ${props.cohort}`;
//
//   return (
//     <div className="container">
//       <h1>Welcome to React, Web {cohort}</h1>
//       <div>{instructor} welcomes you!</div>
//
//       {happy ? <div>Very happy</div> : <div>It is Monday</div>}
//     </div>
//   );
// }
//
// // usually exists once per application
// // similar to append or appendChild
// render(
//   <App cohort="43" instructor="Rhiannon" happy={false} />,
//   document.querySelector("#root")
// );

//--------------------------------------------------------------------------------------------------------

function App ( props ) {
  // one object called props
  const { cohort, instructor, happy, week, birthday } = props;
  // examples of things you can return in react
  // return "hello world";
  // return `hello web ${props.cohort}`;
  return (
    <div className="container">
      <h1>Welcome to React, Web { cohort }</h1>
      <div>{ instructor } welcomes you!</div>
      <div>
        { instructor } birthday is { birthday }
      </div>
      <div>It is week { week }</div>
      {happy ? <div>Very happy</div> : <div>It is Monday</div> }
      <Playground cohort={ cohort } />
    </div>
  );
}
//usually exists once per application
// very similar to append or appendChild
render(
  <App
    cohort="43"
    instructor="Rhiannon"
    happy={ true }
    birthday="October 31"
    week={ 2 }
  />,
  document.querySelector( "#root" )
);
