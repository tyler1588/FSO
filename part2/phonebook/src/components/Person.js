const Person = ({person, deletePerson}) => {
    return (
        <>
            <p>{person.name} {person.number}</p> 
            <button id={person.id} name={person.name} onClick={(event) => deletePerson(event)}>delete</button>
        </>
    )

}

export default Person

