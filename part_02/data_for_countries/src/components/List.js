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
  const api_key = process.env.REACT_APP_API_KEY
  const [ temp, setTemp ] = useState('')
  const [ icon, setIcon ] = useState('')
  const [ weatherDescription, setWeatherDescription] = useState('')
  const [ wind, setWind ] = useState('')

  useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${countrie.latlng[0]}&lon=${countrie.latlng[1]}&appid=${api_key}&units=metric`)
    .then((response) => {
      setTemp(response.data.main.temp)
      setIcon(response.data.weather[0].icon)
      setWeatherDescription(response.data.weather[0].description)
      setWind(response.data.wind.speed)
    })
  }, [countrie, api_key])



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
      <div>Temperatura: {temp} °C</div>
      {
        // eslint-disable-next-line
        icon == []
        ? ''
        : <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={weatherDescription}/>
      }
      <div>Wind: {wind} m/s</div>      
    </div>
  )
}
  export default List

  