import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Brian', age: 28 },
      { name: 'Kev', age: 26 },
      { name: 'Manu', age: 29 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'BRIAN';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Kevin', age: 26 },
        { name: 'Manu', age: 36 }
      ],
      showPersons: false
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Brian', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'Manu', age: 36 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {
      showPersons: !doesShow
    } )
  }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p>Here's a line!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
