import { useState, useEffect } from 'react'
import Note from './components/Note'
import AddNote from './components/AddNote'
import Notification from './components/Notification'
import noteService from './services/notes'

const App = () => {
  const [ notes, setNotes ] = useState([])
  const [ showAll, setShowAll ] = useState(true)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => {
          return (
            note.id !== id 
            ? note 
            : returnedNote
          )
        }))
      })
      .catch(eror => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server.`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => {setShowAll(!showAll)}}>
          show { showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} 
            note={note} 
            toggleImportanceOf={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <AddNote 
        setNotes={setNotes}
        notes={notes}
      />
    </div>
  )
}

export default App;
