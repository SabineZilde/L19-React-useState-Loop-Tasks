/* 6. Print out a list of cars (at least 5) and have 
an input field underneeth it. Typing a car name in the 
input field should change the cars background to it. */
import { useState } from 'react';

function Task6() {
    const [inputText, setInputText] = useState('');

    const cars = ['audi', 'toyota', 'opel', 'tesla', 'mazda'];

    const carsList = cars.map((car, index) => {
        return inputText === car ? <li key={index} style={{ backgroundColor: 'green' }}>{car}</li> : <li>{car}</li>;
    })

    return (
        <div>
            <h1>Task 6</h1>
            <p>Highlighting the car name, if found on list</p>
            <ul>{carsList}</ul>
            <input value={inputText} placeHolder={'search'} onChange={(e) => setInputText(e.target.value)} />
        </div>
    )
}

export default Task6;