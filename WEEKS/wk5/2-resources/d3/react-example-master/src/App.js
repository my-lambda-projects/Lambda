import { useState } from "react";
import InputForm from "./inputForm";
import List from "./list";

const App = () => {
  const [list, setList] = useState(["first task!"]);

  return (
    <div>
      <h1>Todo App</h1>
      <InputForm setList={setList} list={list} />
      <List list={list} />
      <button id="reset" onClick={() => setList([])}>
        Reset
      </button>
    </div>
  );
};

export default App;
