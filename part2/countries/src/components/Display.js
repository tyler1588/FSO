import Country from './Country'

const Display = ({toggleMinimal, toDisplay, weather}) => {


  if (toDisplay === null){
      return <p>fetching...</p>
  }

  if (toDisplay.length > 10){
    return <p>Too many matches, specify another filter</p>
  } 
  else if (toDisplay.length > 1){
    return toDisplay.map(country => <Country country={country} key={country.name.common} toggleMinimal={toggleMinimal}></Country>)
  }
  else if (toDisplay.length > 0){
    return toDisplay.map(country => 
      <Country country={country} key={country.name.common} toggleMinimal={toggleMinimal} weather={weather} onlyCountry={true}></Country>
      )
  }
  else {
      return <p>No results. Try another search.</p>
  }
}

export default Display