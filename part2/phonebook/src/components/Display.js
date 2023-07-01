import Person from "./Person"

const Display = ({filterValue, persons}) => {
    const toShow = filterValue === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))
    return toShow.map(person => <Person key={person.id} person={person}/>)
}

export default Display