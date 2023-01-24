
const Filter = (props) => {
    return(
    <div>
      <input
              value={props.filterName}
              onChange={props.handleFilter}/>
    </div>)
  }
  
  const personForm = (props) => {
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
                <div key={personsList.id}>
                    {personsList.name} {personsList.number}
                    <button onClick={() => props.removePerson(personsList.id)}>delete</button>
                </div>
            
            )}
        </ul>
        )
  }


  export default { Persons, personForm, Filter }