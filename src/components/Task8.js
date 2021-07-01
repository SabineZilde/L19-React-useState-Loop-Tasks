/* 8. Have an array of cars in the react component (at least 5), 
an input field and a field for displaying a text. When you type in a valid 
car name (found in the list) it shoud display a green message saying 
"The car was found". If it is not in the list, it shoud should have red 
message saying "The car was not found". */

import { useState } from 'react';

function Task8() {
    const [inputText, setInputText] = useState('');

    const cars = ['audi', 'toyota', 'opel', 'tesla', 'mazda'];

    let carFoundResult = <h4 style={{color: 'red'}}>Car was not found</h4>
    if (cars.indexOf(inputText) !== -1) {
        carFoundResult = <h4 style={{color: 'green'}}>Car was found</h4>
    }

    return (
        <div>
            <h1>Task 8</h1>
            <p>Enter the car name to see if it is in our database:</p>
            <input placeHolder={'search'} value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            {carFoundResult}
        </div>
    )
}

export default Task8;