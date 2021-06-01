import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-123456',
      id:1,  
    },
    { name: 'manoj',
      number: '040-123465986',
      id:2,  
    },
    { name: 'manoj rajulapati',
      number: '057-45756',
      id:3,  
    },
    {
     name: 'binkauy',
    number: '540-1548956',
    id:4,  
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNum,setNewNum] =useState('')
  const [filter,setFilter]=useState('')
  //to check whether person exists or not
  function checkperson (){
     const x=persons.map(person => 
      person.name === newName)
      console.log(x.includes(true))
      if( x.includes(true))
         return (false)
      else
         return (true)
  }
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNum,
      id: persons.length+1
    }
    if(checkperson())
      {
        setPersons(persons.concat(personObject))
        setNewName('') 
        setNewNum('')
      }
    else
    {
      alert(`${newName} already added to phonebook`);
    }
  }
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange =(event) =>{
    setNewNum(event.target.value)
  }
  const handleFilter=(event) =>{
    setFilter(event.target.value)
  }
  const showperson = filter === "" ? persons:persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <Filter value={filter} handle={handleFilter}/>
      </div>
       
       <h3>Add Person</h3>

      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName}
           onChange={handlePersonChange}/>
        </div><br></br>
        <div>
          Number:<input value={newNum}
            onChange={handleNumberChange}/>
        </div><br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {showperson.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}
const Person =({person}) =>{
  return(
    <p>{person.name} &nbsp; {person.number}</p>
  )
}
const Filter = ({value,handle}) =>{
  return(
    <div>
        {"Enter Name To Filter:" }
        {<input onChange={handle}   value={value} />}
    </div>
     
  )
}
export default App