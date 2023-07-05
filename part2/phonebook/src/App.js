import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(response => {
        console.log(response)
        alert("failed to get people")
      })
  }, [])

  const updateName = event => {
    setNewName(event.target.value)
  }

  const updateNumber = event => {
    setNewNumber(event.target.value)
  }

  const updateFilter = event => {
    setFilterValue(event.target.value)
  }

  const deletePerson = event => {
    const id = parseInt(event.target.id)
    const name = event.target.name

    if (window.confirm(`Delete ${name}?`)) {
    personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(response => {
        console.log(response)
        alert("failed to delete")
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        const personToUpdate = persons.find(person => person.name === newName)
        const personObject = {...personToUpdate, number: newNumber}
        personService
          .updatePerson(personToUpdate.id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : response.data))
            setNewName('')
            setNewNumber('')
          })
          .catch(response => {
            alert("Error updating person")
            console.log(response)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService.create(personObject)
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
      <Display filterValue={filterValue} persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App