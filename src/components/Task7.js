/* 7. Print out a list of cars (at least 5) and have an input field 
underneeth it. Typing a car names seperated by space should gihlight 
each matched car in the list with other background color. */

import { useState } from 'react';

function Task7() {

    const [inputText, setInputText] = useState('');

    const cars = ['audi', 'toyota', 'opel', 'tesla', 'mazda'];

    const carsList = cars.map((car, index) => {
        return inputText === car ?
            <li key={index} style={{ backgroundColor: 'green' }}>{car}</li> : <li key={index}>{car}</li>;
    })

    return (
        <div>
            <h1>Task 7</h1>
            <p>Highlighting two the car names separatetd by space, if found on list</p>
            <ul>{carsList}
            </ul>
            <input value={inputText} placeHolder={'search'} onChange={(e) => setInputText(e.target.value)} />
        </div>
    )
}

export default Task7;