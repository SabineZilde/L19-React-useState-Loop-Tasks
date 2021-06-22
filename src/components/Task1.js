/* 1. Print out every other number (every odd number) 
from 1 - 100 as an ordered list using react. */

function Task1() {
    const oddNumbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2) {
            oddNumbers.push(<li>{i}</li>);
        }
    }

    return (
        <div>
            <h1>Task 1</h1>
            <p>Printing only odd numbers from 1 to 100:</p>
            <p>{oddNumbers}</p>
        </div>
    )
}

export default Task1;