import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(response => {
        alert("Error adding person")
        console.log(response)
      })
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