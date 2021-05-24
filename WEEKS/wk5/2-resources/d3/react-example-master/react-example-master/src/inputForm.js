import { useState } from "react";

const InputForm = ({ setList, list }) => {
  const [newItem, setNewItem] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          id="todo"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <label htmlFor="todo">Write your todo</label>
        <button type="submit">Add to list</button>
      </form>
    </div>
  );
};

export default InputForm;
