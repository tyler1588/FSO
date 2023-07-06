const Country = ({country}) => {
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} style={{width: 200}}></img>
        </>
    )
}

export default Country