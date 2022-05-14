import React from "react"

const Persons = ({person}) => {
  return(
    <ul>
      {person.map((p) => {
        if(p.show){
          return (<li key={p.id} >{p.name}: {p.number}</li>)
        } else {
          return null
        }
      })}
    </ul>
  )
}

export default Persons