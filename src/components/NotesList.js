import React from 'react'
import Note from './Note'
import AddNote from './AddNote';
const NotesList = ({ notess, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='notes-list '>
      {notess.map((note) => (
        <Note

          id={note.id}
          key={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote} />

      ))}
      <AddNote
        handleAddNotess={handleAddNote}
      />
    </div>
  )
}

export default NotesList
