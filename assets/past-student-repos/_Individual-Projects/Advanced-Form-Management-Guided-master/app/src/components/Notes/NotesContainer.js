import React from 'react';

import NoteForm from './NoteForm';
import NotesList from './NotesList';

export default function Notes() {
  return (
    <div className="Notes">
      <h1>My Notes</h1>
      {/* we are going to pass a function down as a prop */}
      <NoteForm />
      <NotesList />
    </div>
  );
}
