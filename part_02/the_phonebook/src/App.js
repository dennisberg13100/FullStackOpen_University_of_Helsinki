import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ person, setPerson ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
    
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
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log(response.data)
        setPerson(response.data)
        
      })
  }, [])
  console.log(person)

  const addName = (event) => {
    event.preventDefault()
    const repeatedName = person.find( p => p.name === newName)
    if(repeatedName === undefined) {
      const newObject = {
        name: newName,
        number: newPhone,
        id: person.length + 1,
        show: true
      }
      setPerson(person.concat(newObject))
      setNewName('')
      setNewPhone('')
    } else {
      alert(`${newName} is already added to phonebook!`)
    } 
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter eventHandler={handleNewSearch}/>
      <h2>Add a new</h2>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
        <Persons person={person} />
    </div>
  );
}

export default App;
