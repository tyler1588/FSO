import Country from './Country'

const Display = ({filter, countries, toggleMinimal}) => {

  if (countries === null){
      return <p>fetching...</p>
  }

  const toDisplay = filter === '' ? countries : (countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())))

  if (toDisplay.length > 10){
    return <p>Too many matches, specify another filter</p>
  } 
  else if (toDisplay.length > 0){
    return toDisplay.map(country => <Country country={country} key={country.name.common} toggleMinimal={toggleMinimal}></Country>)
  }
  else {
      return <p>No results. Try another search.</p>
  }
}

export default Display