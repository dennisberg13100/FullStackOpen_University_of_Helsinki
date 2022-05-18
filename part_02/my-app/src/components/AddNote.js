import React from 'react'
import { useState } from 'react'
import noteService from '../services/notes'


const AddNote = ({setNotes, notes}) => {
	const [ newNote, setNewNote ] = useState('')

  const handelNewNote = event => setNewNote(event.target.value)
  

	const handelButton = (event) => {
		event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
	}

	return (
		<div>
			<h2>Add Note</h2>
			<form>
				<input 
					value={newNote}
					onChange={handelNewNote}
				/>
				<button onClick={handelButton}>Save</button>
			</form>
		</div>
	)
}

export default AddNote