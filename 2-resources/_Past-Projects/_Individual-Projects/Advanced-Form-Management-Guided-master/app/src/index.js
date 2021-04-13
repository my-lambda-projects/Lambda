import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import NotesContainer from './components/Notes/NotesContainer';
import TestingForms from "./components/TestingForms";
import StudentForm from "./components/StudentForm";

function App() {
  return (
    <>
      <TestingForms />
      <StudentForm />
      <NotesContainer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
