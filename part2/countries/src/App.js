import {useState, useEffect} from 'react'
import axios from 'axios'
import Display from './components/Display'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = event => {
    setFilter(event.target.value)
  }

  return (
    <>
      <p>Find Countries</p>
      <input value={filter} onChange={handleFilter}></input>
      <Display filter={filter} countries={countries}></Display>
    </>
  );
}

export default App;
