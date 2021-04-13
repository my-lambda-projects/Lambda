import React from "react";

export default function NotesList(props) {
  return (
    <div className="note-list">
      {[].map(note => (
        <div className="note" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </div>
  );
};
