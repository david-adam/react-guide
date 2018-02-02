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

    return (
      <div className="App">
        <h1>React App</h1>
        <p>Here's a line!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Togglel Persons</button>
        {
          this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Brian!')}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler}
              />
              <Person
                name={this.state.persons[2].name}
                age ={this.state.persons[2].age} >My Hobbies: Soccer</Person>
            </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
