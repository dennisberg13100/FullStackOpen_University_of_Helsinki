import React from "react"
import personsServices from "../services/persons"

const Persons = ({person, setPerson}) => {

  const handelButton = ({id, name }) => {
    if(window.confirm(`Are you sure you whant to delte ${name}`)){
      personsServices
      .deleteById(id)
      .then(() => {
        personsServices
        .getAll()
        .then( initialPersons => {
          setPerson(initialPersons)
        })
      })
    } 
  }

  return(
    <ul>
      {person.map((p) => {
        if(p.show){
          return (
          <li key={p.id} >
            {p.name}: {p.number} 
            <button onClick={() => handelButton(p)}>delete</button>
          </li>)
        } else {
          return null
        }
      })}
    </ul>
  )
}

export default Persons