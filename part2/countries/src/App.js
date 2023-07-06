import {useState, useEffect} from 'react'
import axios from 'axios'
import Display from './components/Display'


const App = () => {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  const [weather, setWeather] = useState()
  const [toDisplay, setToDisplay] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data.map(country => {return({...country, minimal: false})}))
      })
      .catch(response => {
        console.log(response)
      })
  }, [])

  useEffect(() => {
    setToDisplay(filter === '' || !countries ? countries : (countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))))
  }, [filter, countries])

  useEffect(() => {
    if (toDisplay && toDisplay.length === 1){
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${toDisplay[0].capitalInfo.latlng[0]}&lon=${toDisplay[0].capitalInfo.latlng[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setWeather({temp: response.data.main.temp, icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, wind: response.data.wind.speed})
      })
      .catch(response => {
        console.log(response)
      })
    }
  }, [toDisplay])


  const handleFilter = event => {
    setFilter(event.target.value)
  }

  const toggleMinimal = (name) => {
    setCountries(countries.map(country => country.name.common !== name ? country : {...country, minimal: !country.minimal}))
  }

  return (
    <>
      <p>Find Countries</p>
      <input value={filter} onChange={handleFilter}></input>
      <Display countries={countries} toggleMinimal={toggleMinimal} toDisplay={toDisplay} weather={weather}></Display>
    </>
  );
}

export default App;
