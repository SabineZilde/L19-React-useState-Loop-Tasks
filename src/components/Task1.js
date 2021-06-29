/* 1. Print out every other number (every odd number) 
from 1 - 100 as an ordered list using react. */

import { useState } from 'react';

function Task1() {
    const [numbers, setNumbers] = useState([])

    const oddNumbers = [];
    for (let i = 1; i <= 100; i += 2) {
        oddNumbers.push(<li key={i}>{i}</li>);
    }

    const showNumbers = () => {
        return setNumbers(oddNumbers);
    }

    const hideNumbers = () => {
        return setNumbers([]);
    }

    return (
        <div>
            <h1>Task 1</h1>
            <p>Printing only odd numbers from 1 to 100:</p>
            <p>{numbers}</p>
            <button onClick={showNumbers}>Show</button>
            <button onClick={hideNumbers}>Hide</button>
        </div>
    )
}

export default Task1;