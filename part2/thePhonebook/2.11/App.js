import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = (props) => {
  return(
  <div>
    <input
            value={props.filterName}
            onChange={props.handleFilter}/>
  </div>)
}

const PersonForm = (props) => {
  return(
  <form onSubmit={props.addNewPerson}>
        <div>
          name: <input
                  value={props.newName}
                  onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input 
                    value = {props.newNumber}
                    onChange={props.handleNumberchange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      )
}

const Persons = (props) => {
  const personsList = props.persons
  console.log(personsList)
  return(
      <ul>
        {props.namesToShow.map((personsList) =>
            <div key={personsList.id}>{personsList.name} {personsList.number}</div>
          )}
      </ul>
      )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  const handleNumberchange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
    
  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
      window.alert(`${newName} is already added to the phone book`)
    }else{
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber}
        
      setPersons(persons.concat(personObject))
      setNewNumber('')
      setNewName('')
    }
 
}

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)
  }

  const namesToShow = (filterName.length>0)
    ? persons.filter(person => person.name.includes(filterName) === true)
    : persons
  

  return (
    <div>
      <Filter filterName={filterName} handleFilter ={handleFilter}/>
      <h2>Phonebook</h2>
      <PersonForm addNewPerson = {addNewPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber} 
                  handleNumberchange={handleNumberchange}/>
      <h2>Numbers</h2>
      <Persons namesToShow = {namesToShow} persons={persons}/>
      
    </div>
  )
}

export default App
