import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Here's a line!</p>
        <Person name="Brian" age="28"/>
        <Person name="Kev" age="26"/>
        <Person name="Julie" age ="27" >My Hobbies: Ballet</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
