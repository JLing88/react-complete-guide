import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Jesse', age: 35 },
        { name: 'Heather', age: 35 },
        { name: 'Joe', age: 45 }
      ],
      otherState: 'some other value'
    });

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // BAD this.state.persons[0].name = "Willie";
    setPersonsState( { 
      persons: [
        { name: 'Willie', age: 35 },
        { name: 'Heather', age: 35 },
        { name: 'Joe', age: 47 }
      ] 
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>Hobbies: baseball</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'Hi, Im a React App!!!'))
};

export default app;
