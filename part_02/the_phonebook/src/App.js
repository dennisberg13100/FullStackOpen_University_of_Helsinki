import { useState, useEffect } from 'react'
// Components
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Message from './components/Message'
// Services 
import personsService from './services/persons'

const App = () => {
  const [ person, setPerson ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ message, setMessage ] = useState(null)
  
  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const handleNewSearch = (event) => {
    const regex = new RegExp(`${event.target.value}`, 'i')
    setPerson(person.map( (p) => {
      if(regex.test(p.name)){
        return {...p, show: true}
      } else {
        return {...p, show: false} 
      }
    }));
  }

  useEffect(() => {
    personsService
      .getAll()
      .then( initialPersons => {
        setPerson(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const repeatedName = person.find( p => p.name === newName)
    if(repeatedName === undefined) {
      const newObject = {
        name: newName,
        number: newPhone,
        show: true
      }
      personsService
        .create(newObject)
        .then(returnedPerson => {
          setPerson(person.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          setMessage({
            type:'success', 
            content:`Added ${returnedPerson.name}`,
          })
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
         
    } else {
      setMessage({
        type:'warning', 
        content: `${newName} is already added to phonebook!`,
      })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } 
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter eventHandler={handleNewSearch}/>
      <Message  message={message} />
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
        <Persons 
          person={person} 
          setPerson={setPerson}
        />
    </div>
  );
}

export default App;
