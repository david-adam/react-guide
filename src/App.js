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

  switchNameHandler = () => {
    // console.log('clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'BRIAN';
    this.setState( {
      persons: [
        { name: 'Bri', age: 28 },
        { name: 'Kevin', age: 26 },
        { name: 'Manu', age: 36 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Here's a line!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age} >My Hobbies: Soccer</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
