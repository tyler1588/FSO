const Country = ({country, toggleMinimal}) => {

    if(!country.minimal){
        return (
            <div>{country.name.common} <button onClick={() => toggleMinimal(country.name.common)}>show</button></div>
        )
    }

    return (
        <div>
            <div>
                <h1 style={{display: "inline-block"}}>{country.name.common}</h1>
                <button onClick={() => toggleMinimal(country.name.common)}>hide</button>
            </div>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} style={{width: 200}}></img>
        </div>
    )
}

export default Country