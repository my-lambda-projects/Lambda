import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import User from "./Components/User";
import Form from "./Components/Form";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Form setUsers={setUsers} users={users}></Form>
        {users.map((user, ind) => {
          return <User key={ind} user={user}></User>;
        })}
      </header>
    </div>
  );
}

export default App;
