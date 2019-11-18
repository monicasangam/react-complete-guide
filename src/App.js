import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  render() {
    return(
      <div className='App'>
       <h1>React is fun!!!</h1>
       <p>This is really working!</p>
       <Person name="Joseph" age="23"/>
       <Person name="Sophie" age="27"/>
       <Person name="Robert" age="25"/>
     </div>
    );
  }
  //return React.createElement('div', {className: 'App'}, h1);
}
export default App;