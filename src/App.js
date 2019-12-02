import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Akin', age: 28 },
      { name: 'Anil', age: 31 },
      { name: 'Semih', age: 28 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Anil', age: 31 },
        { name: 'Semih', age: 28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Anil', age: 31 },
        { name: 'Semih', age: 28 }
      ]
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#aaa',
      borderRadius: '10%',
      border: '3px solid #aaa',
      padding: '10px',
      fontSize: '120%',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React project number 1</h1>
        <button style={buttonStyle} onClick={this.switchNameHandler.bind(this, 'Mehmet Akin UNAL')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Akin UNAL')}
          changed={this.nameChangedHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Drinking Alcohol</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;