import { useState, useEffect } from 'react'
import Note from './components/Note'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const removePerson = (id) => {
    const person = persons.find(n => n.id === id)
    if(window.confirm(`Are you sure you want to delete ${person.name}`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== id))
        })
    }}
  const handleNameChange = (event) => {
      setNewName(event.target.value)
    }
  const handleNumberchange = (event) => {
    setNewNumber(event.target.value)
  }
  
  
  const addNewPerson = (event) => {
    event.preventDefault()



    if( persons.filter(person => person.name === newName).length > 0 ){
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
              //replace the old number with new number
              const person = persons.find(n => n.name === newName)
              const changedPerson = { ...person, number: newNumber}

              personService.update(person.id, changedPerson).then(response => {
                setPersons(persons.map(n => n.name !== newName ? n : response.data))
              })
              }


    } else {   
        const personObject = {
            name: newName,
            number: newNumber}
            
          personService
            .create(personObject)
            .then((response) => {
              setPersons(persons.concat(response.data))
              })}
    setNewNumber('')
    setNewName('')
  }

  const handleFilter = (event) => {
    setFilterName(event.target.value)
  }

  const namesToShow = (filterName.length>0)
    ? persons.filter(person => person.name.includes(filterName) === true)
    : persons
  

  return (
    <div>
      <Note.Filter filterName={filterName} handleFilter ={handleFilter}/>
      <h2>Phonebook</h2>
      <Note.personForm addNewPerson = {addNewPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber} 
                  handleNumberchange={handleNumberchange}/>
      <h2>Numbers</h2>
      <Note.Persons namesToShow = {namesToShow} persons={persons} removePerson={removePerson}/>
      
    </div>
  )
}




export default App