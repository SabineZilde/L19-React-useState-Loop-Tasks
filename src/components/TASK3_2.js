/* 3. Have a table with 2 columns and 2 rows + 
a button. Clicking on that button should add a row 
to the table. */

import { useState } from 'react';

function TASK3_2() {
    const [tableRows, setTableRows] = useState([
        ['Row 1 Col 1', 'Row 1 Col2'],
        ['Row 2 Col 1', 'Row 2 Col2'],
    ]);

    const addRow = () => {
        const nextRowsNumber = tableRows.length + 1;
        const newRow = [`Row ${nextRowsNumber} Col 1`, `Row ${nextRowsNumber} Col 2`];
        setTableRows([...tableRows, newRow]); //taking tableRows array and destructuring it into a new array and add another element to it
    }

    const tableRowElements = tableRows.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Task 3_2</h1>
            <p>Second approach</p>
            <table border="1">
                <tbody>
                    {tableRowElements}
                </tbody>
            </table>
            <div>
                <button onClick={addRow} style={{ marginTop: '5px' }}>Add a row</button>
            </div>

        </div>
    )
}

export default TASK3_2;