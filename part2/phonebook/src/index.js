import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();
    const nameObj = {
      name: newName,
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{persons.name}</p>
      <div>debug: {newName} </div>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));