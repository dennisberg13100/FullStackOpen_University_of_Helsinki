import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const List = ({countries, setFilteredCountries}) => {
    if (countries.length > 10){
      return <Longlist />
    } 
    if (countries.length <= 10 && countries.length > 1) {
      return <ShortList countries={countries}  setFilteredCountries={setFilteredCountries}/>
    }
    if (countries.length === 1) {
      return <OneCountrie countrie={countries[0]}/>
    }
    return ''
  }

const Longlist = () => <p>Too many matches, specify another filter</p>

const ShortList = ({ countries, setFilteredCountries }) => {
  
  const handleShowButton = (event) => {
    //setSearch(event.target.value)
    setFilteredCountries(countries.filter((countrie) => {
      return countrie.name.common === event.target.value
    }))
  }

  return(
    <div> 
      {countries.map((countrie) => {
        
        return (
          <div key={countrie.name.common}>
            {countrie.name.common + ' '}
            <button onClick={handleShowButton} value={countrie.name.common}>Show</button>
          </div>
       )
     })}
    </div>
  ) 
}

const OneCountrie = ({countrie}) => {
  console.log(countrie)
  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)

  

  const lang = Object.values(countrie.languages)
  return(
    <div>
      <h2>{countrie.name.common}</h2>
      <div>capital: {countrie.capital[0]}</div> 
      <div>Area: {countrie.area}</div>
      <h4>languages:</h4>
      <ul>
        {lang.map((lang) => <li key={lang}>{lang}</li> )}
      </ul>
      <img  src={countrie.flags.svg} 
            alt={countrie.name.common} 
            width='200'
      />
      <h3>Weather in {countrie.name.common}</h3>
    </div>
  )
}

  export default List