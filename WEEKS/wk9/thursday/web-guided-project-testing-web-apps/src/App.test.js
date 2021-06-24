// // import React from 'react';
// // import { render, screen } from "@testing-library/react";
// // import App from "./App";
// // 
// // test("On load, renders App without error", ()=> {
// //     render(<App/>);
// // });
// // 
// // test("On load, renders the app header", ()=> {
// //     //Arrange: Render out App component
// //     render(<App/>);
// // 
// //     //Act: get our header element
// //     const header = screen.queryByText(/add new animal/i);
// // 
// //     //Assert: Does our element exist
// //     expect(header).toBeInTheDocument();
// //     expect(header).toBeTruthy();
// //     expect(header).toHaveTextContent(/add new animal/i);
// //     expect(header).not.toBeFalsy();
// // });
// 
// 
// 
// import React from 'react';
// import {render,screen} from "@testing—library/react";
// import App from "./App";
// test( "renders the component", () => {
//   render( < App / > );
// } );
// test( "on mount, renders the app header", () => E
//     //Arrange: Render our component
//     render(<App/>);
//     //Act: Find the header
//     const header = screen.queryByText( "Add New Animal" ); console.log( header );


  import React from 'react';
  import {
    render,
    screen
  } from "@testing-library/react";
  import App from "./App";

  test( "renders the component", () => {
    render( < App / > );
  } );

  test( "on mount, renders the app header", () => {
    //Arrange: Render our component
    render( < App / > );

    //Act: Find the header
    const header = screen.queryByText( /add new animal/i );

    //Assert: verify that the header exists
    expect( header ).toBeInTheDocument();
  } )

  // it("does the a test 1", ()=> {
  //     console.log("doing a test with it!!!");
  // })

  // describe("positive tests", ()=>{
  //     test("does the a test 1", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 2", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 3", ()=>{
  //         console.log("doing a test");
  //     });
  // });

  // describe("negative tests", ()=>{
  //     test("does the a test 1", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 2", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 3", ()=>{
  //         console.log("doing a test");
  //     });
  // });

  // describe("edge cases", ()=>{
  //     test("does the a test 1", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 2", ()=>{
  //         console.log("doing a test");
  //     });

  //     test("does the a test 3", ()=>{
  //         console.log("doing a test");
  //     });
  // });
