import React from 'react';

import './Person.css';

const person = (props) => {
    return <p>I'm a Person and I am {Math.floor(Math.random()* 30)} years old!</p>
};

export default person;