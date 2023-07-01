import { useState } from 'react'
import personArray from './data/personArray'
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState(personArray) 
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter updateFilter={updateFilter} filterValue={filterValue}/>
      <h2>Add</h2>
      <Form updateName={updateName} 
            newName={newName} 
            updateNumber={updateNumber} 
            newNumber={newNumber}
            addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Display filterValue={filterValue} persons={persons}/>
    </div>
  )
}

export default App