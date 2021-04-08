import React from "react";

export default function NoteForm (props) {
  return (
    <form className="notes-form">
      <label htmlFor="title" className="notes-label">
        Title
      </label>
      <input
        className="notes-input"
      />
      <label htmlFor="note" className="notes-label">
        Note
      </label>
      <textarea
        className="notes-textarea"
      />
      <button className="notes-button">
        Add Note
      </button>
    </form>
  );
};
