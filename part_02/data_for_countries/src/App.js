import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  console.log(countries[0])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setFilteredCountries(countries.filter((countrie) => {
      const regex = new RegExp(event.target.value, 'i')
      return regex.test(countrie.name.common)
    }))
  }

  return (
    <div>
      <h1>Data4Countries</h1>
      <div>
        find countries <input 
          value={search}
          onChange={handleSearch}
        />
      </div>
      <ul>
        {filteredCountries.map((countrie) => {
          return(<li key={countrie.name.common} >{countrie.name.common}</li>)
        })}
      </ul>
      
    </div>
  );
}

export default App;
