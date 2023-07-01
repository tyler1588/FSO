import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  const updateNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const updateFilter = (event) => {
    setFilterValue(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const display = () => {
    const toShow = filterValue === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))
    return (toShow.map(person => <p key={person.id}>{person.name} {person.number}</p>))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter: <input onChange={updateFilter} value={filterValue}/>
      <h2>Add</h2>
      <form>
        <div>
          name: <input onChange={updateName} value={newName}/>
          <br></br>
          number: <input onChange={updateNumber} value={newNumber}/>
        </div>
        <div>
          <button onClick={(event) => addPerson(event)} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {display()}
    </div>
  )
}

export default App